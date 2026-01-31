# Chinese Learning App (Prototype)

A single-file React prototype for learning Chinese vocabulary using **flashcards + spaced repetition**, with several practice modes (Study, Learn, Match, Test, Writing). Designed as a lightweight starting point that runs entirely in the browser and saves progress locally.

> **File:** `chinese-learning-app.jsx`  
> **Tech:** React hooks, Tailwind CSS classes, `lucide-react` icons, browser `localStorage`, and Web Speech API (text-to-speech).

---

## Features

### 📚 Decks & Flashcards
- Comes with a built-in **HSK 1 sample deck** (15 cards).
- Create your own decks and add/delete cards.
- Export a deck to JSON and import it back later.

### 🔁 Spaced Repetition (SM-2)
- Cards track:
  - `easeFactor`, `interval`, `repetitions`, `difficulty`, `lastReviewed`, `nextReview`
- Reviewing updates scheduling using an SM-2 style algorithm.

### 🧠 Study Modes
- **Study Mode:** flip-card UI + swipe actions  
  - Swipe right = “I know this”  
  - Swipe left = “Still learning”
- **Learn Mode:** adaptive progression
  - multiple choice → fill-in-the-blank → written (based on difficulty)
  - accepts pinyin with **tone marks** *or* **numbers** (`nǐ hǎo` or `ni3 hao3`)
- **Match Game:** match Chinese ↔ English pairs (needs ≥ 4 cards)
- **Practice Test:** multiple choice test (needs ≥ 5 cards)
- **Writing Practice:** canvas drawing practice with simple feedback + re-queueing forgotten cards

### 🔊 Pronunciation
- Uses the browser’s **Text-to-Speech** (`speechSynthesis`) to pronounce Chinese (`zh-CN`).

### 📈 Stats & Streaks
- Tracks:
  - total cards mastered
  - per-deck progress
  - cards due for review
  - study streak (current + longest)

---

## Data & Persistence

All progress is saved locally in your browser using `localStorage`:
- `chineseDecks` — your decks + card stats
- `studyStreak` — streak metadata

To reset everything, clear your site data/localStorage in the browser.

---

## How to Run (Quick Options)

### Option A: Drop into a React app (recommended)
1. Create a React project (example with Vite):
   ```bash
   npm create vite@latest
   cd <your-project>
   npm install
   npm install lucide-react
2. If you want the styling to match, set up Tailwind CSS in your project.
3. Copy chinese-learning-app.jsx into:
   ```bash
   src/ChineseLearningApp.jsx
4. Import and render it in src/App.jsx:
   ```bash
   import ChineseLearningApp from "./ChineseLearningApp.jsx";

   export default function App() {
    return <ChineseLearningApp />;
    }
5. Run:
   ```bash
   npm run dev

