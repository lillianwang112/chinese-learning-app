/**
 * sm2.js — Pure SM-2 algorithm extracted from chinese-learning-app
 *
 * This module isolates the spaced repetition logic so it can be
 * unit tested independently of React state and Firebase.
 *
 * Matches the implementation in index.html: updateCardWithSpacedRepetition()
 */

/**
 * Applies one SM-2 review to a card and returns the updated scheduling fields.
 *
 * @param {object} card  - Must have: easeFactor, interval, repetitions, masteryScore
 * @param {number} quality   - 0–5 (0 = total blackout, 5 = perfect)
 * @param {number} srOffset  - -2 to +2 (negative = sooner, positive = later)
 * @returns {object} Updated card fields (easeFactor, interval, repetitions, masteryScore, masteryStatus)
 */
export function applyReview(card, quality, srOffset = 0) {
  let { easeFactor, interval, repetitions, masteryScore } = card;
  masteryScore = masteryScore ?? 0;

  // Update ease factor (SM-2 formula, floor at 1.3)
  easeFactor = Math.max(
    1.3,
    easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );

  // Update repetitions and interval
  if (quality < 3) {
    repetitions = 0;
    interval = 1;
  } else {
    repetitions += 1;
    if (repetitions === 1) {
      interval = 1;
    } else if (repetitions === 2) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
  }

  // Apply SR offset multiplier
  // offset: -2 → ×0.5, -1 → ×0.75, 0 → ×1, +1 → ×1.5, +2 → ×2
  if (srOffset !== 0 && interval > 1) {
    const multiplier =
      srOffset < 0
        ? 1 + srOffset * 0.25   // -2 → 0.5, -1 → 0.75
        : 1 + srOffset * 0.5;   // +1 → 1.5, +2 → 2.0
    interval = Math.max(1, Math.round(interval * multiplier));
  }

  // Update mastery score
  if (quality >= 4) {
    masteryScore = Math.min(5, masteryScore + 2);
  } else if (quality >= 3) {
    masteryScore = Math.min(5, masteryScore + 1);
  } else {
    masteryScore = Math.max(0, masteryScore - 1);
  }

  const masteryStatus =
    masteryScore === 0 ? 'not_started'
    : masteryScore < 3 ? 'learning'
    : 'mastered';

  return { easeFactor, interval, repetitions, masteryScore, masteryStatus };
}

/** Returns a fresh card with SM-2 defaults */
export function newCard(overrides = {}) {
  return {
    easeFactor: 2.5,
    interval: 0,
    repetitions: 0,
    masteryScore: 0,
    ...overrides,
  };
}
