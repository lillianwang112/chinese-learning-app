/**
 * sm2.test.js — Unit tests for the SM-2 spaced repetition algorithm
 *
 * Tests cover:
 *   - Interval scheduling (first review, second review, subsequent reviews)
 *   - Ease factor updates (increases on good answers, decreases on poor ones, floors at 1.3)
 *   - Failed reviews (reset repetitions and interval)
 *   - SR offset multipliers (-2 to +2)
 *   - Mastery score progression and clamping
 *   - Mastery status thresholds (not_started / learning / mastered)
 *   - Edge cases (quality 0, quality 5, srOffset on interval=1)
 */

import { describe, it, expect } from 'vitest';
import { applyReview, newCard } from './sm2.js';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Run multiple consecutive reviews with the same quality. */
function reviewN(card, quality, n, srOffset = 0) {
  let c = { ...card };
  for (let i = 0; i < n; i++) {
    c = { ...c, ...applyReview(c, quality, srOffset) };
  }
  return c;
}

// ---------------------------------------------------------------------------
// Interval scheduling
// ---------------------------------------------------------------------------

describe('Interval scheduling', () => {
  it('sets interval to 1 after the first successful review (quality >= 3)', () => {
    const result = applyReview(newCard(), 4);
    expect(result.interval).toBe(1);
    expect(result.repetitions).toBe(1);
  });

  it('sets interval to 6 after the second consecutive successful review', () => {
    const after1 = { ...newCard(), ...applyReview(newCard(), 4) };
    const after2 = applyReview(after1, 4);
    expect(after2.interval).toBe(6);
    expect(after2.repetitions).toBe(2);
  });

  it('multiplies by easeFactor on the third and later reviews', () => {
    const after2 = reviewN(newCard(), 5, 2);           // interval=6, ef≈2.6
    const after3 = applyReview({ ...newCard(), ...after2 }, 5);
    // interval should be Math.round(6 * easeFactor) > 6
    expect(after3.interval).toBeGreaterThan(6);
    expect(after3.repetitions).toBe(3);
  });

  it('interval grows over successive perfect reviews', () => {
    let card = newCard();
    const intervals = [];
    for (let i = 0; i < 5; i++) {
      const result = applyReview(card, 5);
      intervals.push(result.interval);
      card = { ...card, ...result };
    }
    // Each interval should be >= the previous one
    for (let i = 1; i < intervals.length; i++) {
      expect(intervals[i]).toBeGreaterThanOrEqual(intervals[i - 1]);
    }
  });
});

// ---------------------------------------------------------------------------
// Failed reviews
// ---------------------------------------------------------------------------

describe('Failed reviews (quality < 3)', () => {
  it('resets repetitions to 0 on a failed review', () => {
    const progressed = reviewN(newCard(), 5, 3);
    const result = applyReview({ ...newCard(), ...progressed }, 2);
    expect(result.repetitions).toBe(0);
  });

  it('resets interval to 1 on a failed review', () => {
    const progressed = reviewN(newCard(), 5, 3);
    const result = applyReview({ ...newCard(), ...progressed }, 2);
    expect(result.interval).toBe(1);
  });

  it('treats quality 0 (total blackout) the same as other failures', () => {
    const result = applyReview(newCard(), 0);
    expect(result.repetitions).toBe(0);
    expect(result.interval).toBe(1);
  });
});

// ---------------------------------------------------------------------------
// Ease factor
// ---------------------------------------------------------------------------

describe('Ease factor', () => {
  it('starts at 2.5 and increases on a perfect review (quality 5)', () => {
    const result = applyReview(newCard(), 5);
    expect(result.easeFactor).toBeGreaterThan(2.5);
  });

  it('decreases on a poor-but-passing review (quality 3)', () => {
    const result = applyReview(newCard(), 3);
    expect(result.easeFactor).toBeLessThan(2.5);
  });

  it('never goes below 1.3', () => {
    // Repeatedly fail to hammer the ease factor down
    let card = newCard();
    for (let i = 0; i < 20; i++) {
      card = { ...card, ...applyReview(card, 0) };
    }
    expect(card.easeFactor).toBeGreaterThanOrEqual(1.3);
  });

  it('decreases more on quality 1 than quality 3', () => {
    const resultQ1 = applyReview(newCard(), 1);
    const resultQ3 = applyReview(newCard(), 3);
    expect(resultQ1.easeFactor).toBeLessThan(resultQ3.easeFactor);
  });
});

// ---------------------------------------------------------------------------
// SR offset
// ---------------------------------------------------------------------------

describe('SR offset', () => {
  it('does not modify interval=1 regardless of offset (no point scaling 1 day)', () => {
    const base = applyReview(newCard(), 5);          // interval = 1 after rep 1
    const withOffset = applyReview(newCard(), 5, 2); // srOffset +2
    // interval=1 should be unchanged by offset
    expect(withOffset.interval).toBe(base.interval);
  });

  it('offset +2 produces a larger interval than offset 0', () => {
    // Need interval > 1 — get to rep 2 first
    const after1 = { ...newCard(), ...applyReview(newCard(), 5) };
    const base    = applyReview(after1, 5, 0);   // interval = 6
    const shifted = applyReview(after1, 5, 2);   // interval = 6 × 2.0 = 12
    expect(shifted.interval).toBeGreaterThan(base.interval);
  });

  it('offset -2 produces a smaller interval than offset 0', () => {
    const after1  = { ...newCard(), ...applyReview(newCard(), 5) };
    const base    = applyReview(after1, 5, 0);   // interval = 6
    const shifted = applyReview(after1, 5, -2);  // interval = 6 × 0.5 = 3
    expect(shifted.interval).toBeLessThan(base.interval);
  });

  it('offset -2 applies ×0.5 multiplier', () => {
    const after1 = { ...newCard(), ...applyReview(newCard(), 5) };
    const base   = applyReview(after1, 5, 0);
    const early  = applyReview(after1, 5, -2);
    expect(early.interval).toBe(Math.max(1, Math.round(base.interval * 0.5)));
  });

  it('offset +2 applies ×2.0 multiplier', () => {
    const after1 = { ...newCard(), ...applyReview(newCard(), 5) };
    const base   = applyReview(after1, 5, 0);
    const late   = applyReview(after1, 5, 2);
    expect(late.interval).toBe(Math.round(base.interval * 2.0));
  });

  it('interval never goes below 1 even with aggressive negative offset', () => {
    const after1 = { ...newCard(), ...applyReview(newCard(), 5) };
    const result = applyReview(after1, 3, -2); // quality 3 → interval=6, ×0.5=3 — fine
    expect(result.interval).toBeGreaterThanOrEqual(1);
  });
});

// ---------------------------------------------------------------------------
// Mastery score
// ---------------------------------------------------------------------------

describe('Mastery score', () => {
  it('increases by 2 for quality >= 4', () => {
    const result = applyReview(newCard(), 4);
    expect(result.masteryScore).toBe(2);
  });

  it('increases by 1 for quality 3', () => {
    const result = applyReview(newCard(), 3);
    expect(result.masteryScore).toBe(1);
  });

  it('decreases by 1 for quality < 3', () => {
    const card = { ...newCard(), masteryScore: 3 };
    const result = applyReview(card, 2);
    expect(result.masteryScore).toBe(2);
  });

  it('mastery score is capped at 5', () => {
    const card = { ...newCard(), masteryScore: 4 };
    const result = applyReview(card, 5);
    expect(result.masteryScore).toBe(5);
  });

  it('mastery score never goes below 0', () => {
    const card = { ...newCard(), masteryScore: 0 };
    const result = applyReview(card, 0);
    expect(result.masteryScore).toBe(0);
  });
});

// ---------------------------------------------------------------------------
// Mastery status thresholds
// ---------------------------------------------------------------------------

describe('Mastery status', () => {
  it('is not_started when masteryScore is 0', () => {
    const result = applyReview(newCard(), 0);  // -1 clamped to 0
    expect(result.masteryStatus).toBe('not_started');
  });

  it('is learning when masteryScore is 1 or 2', () => {
    const result = applyReview(newCard(), 3);  // masteryScore = 1
    expect(result.masteryStatus).toBe('learning');
  });

  it('is mastered when masteryScore reaches 3', () => {
    const card = { ...newCard(), masteryScore: 2 };
    const result = applyReview(card, 4);  // +2 → masteryScore = 4
    expect(result.masteryStatus).toBe('mastered');
  });

  it('a single wrong answer does not un-master a well-known card', () => {
    const card = { ...newCard(), masteryScore: 5 };
    const result = applyReview(card, 2);  // -1 → masteryScore = 4
    expect(result.masteryStatus).toBe('mastered');
  });
});
