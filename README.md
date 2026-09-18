# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🚀 Futurama Memory Match Game

Good news, everyone! This is a modern, responsive, high-density React memory card game built using **Vite**, **Tailwind CSS**, and data fetched from a free public Futurama API. 

The application is engineered explicitly for high-resolution displays (like 27-inch monitors) to map cleanly inside a dense viewport layout framework without any vertical page scrolling.

---

## 🎮 Game Rules
1. The board renders an array of **12 unique Futurama character cards** inside a compact matrix layout.
2. Clicking an unclicked card increments your current **Score** by `1` point.
3. Every single click completely **shuffles** the positions of the cards across the grid.
4. **Loss Condition:** Clicking the same character card twice resets your current score to `0` and flushes your history.
5. **Win Condition:** Successfully clicking all 12 unique cards in a single run triggers a victory notification and resets the board to play again.

---

## ✨ Features Implemented

* **4x3 Micro-Card Layout Matrix:** Constrained down onto an ultra-tight grid structure (`grid-cols-4`) to make sure all 12 playing cards remain visible at once.
* **Widescreen Monitor Optimization:** Capped with container utility constraints (`max-w-md`) and hard image canvas limits (`h-14 sm:h-16`) to stop card components from stretching into giant pill shapes on large display targets.
* **Single-Row Streamlined Header:** High-efficiency navigation bar that merges the game logo, subtitles, and score boxes horizontally to reclaim screen real estate.
* **Touch Optimization:** Employs `touch-manipulation` to strip out mobile double-tap delays for snappy physical inputs.
* **Zero Window Scrolling:** Structured perfectly within a compact space so the whole application fits on your screen without scrolling.

---

## 🏗️ Architecture & Component Logic

### State Tracking Details
* `cards`: Stores the current mutated deck structure array.
* `clickedCards`: Maintains an array tracking the numeric `id` value of every card selected in the active run.
* `score` / `bestScore`: Tracks live point progression counters.
* `loading`: Handles initialization UI states safely.

### The Algorithm Mechanics
The core grid re-shuffling relies on the highly optimized **Fisher-Yates Shuffle Algorithm** to randomly swap indices out in place safely within functional hooks without causing React stale-state render bugs:

```javascript
const shuffleCards = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};
```

---

## 🛠️ Installation & Setup

1. **Clone the project repository:**
   ```bash
   git clone <your-repository-url>
   cd memory-card
   ```

2. **Install project node module dependencies:**
   ```bash
   npm install
   ```

3. **Configure the `@tailwindcss/vite` configuration layer:**
   Make sure your `vite.config.js` file registers the Tailwind compilation engine correctly:
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import tailwindcss from '@tailwindcss/vite'

   export default defineConfig({
     plugins: [react(), tailwindcss()],
   })
   ```

4. **Inject your core layout style tags:**
   Verify your main global stylesheet file (`src/index.css`) imports the layout classes right at the top line:
   ```css
   @import "tailwindcss";
   ```

5. **Fire up the hot-reloading development server environment:**
   ```bash
   npm run dev
   ```

---

## 🌐 API Integrations
This deployment maps data fetched on component mount (`useEffect`) from the community-driven sandbox:
* **Endpoint Canvas:** `https://futuramaapi.com`
* Data structures slice down to 12 indexes and map character payloads containing string parameters for `id`, `name`, and `image` safely.