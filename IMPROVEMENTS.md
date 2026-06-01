# Workshop Improvements — 6 Tasks Across Devin CLI, Devin Cloud & Windsurf

Everyone starts from the same version of this Adyen clone. Below are **6 curated
improvements**, intentionally seeded into the codebase, split by which Cognition tool
is the best fit. Each item lists *what*, *where*, *why this tool*, and a *starter
prompt* you can paste into the tool.

| # | Tool         | Task                                   | Type                          |
| - | ------------ | -------------------------------------- | ----------------------------- |
| 1 | Devin CLI    | Add missing image `alt` text           | Quick fix (accessibility)     |
| 2 | Devin CLI    | Fix typo + dead `#` links              | Quick fix (content/links)     |
| 3 | Devin Cloud  | Upgrade React 18 → 19 (+ Vite)         | Framework version upgrade     |
| 4 | Devin Cloud  | Add component test coverage            | Repetitive test authoring     |
| 5 | Windsurf     | Dark mode toggle                       | Creative frontend             |
| 6 | Windsurf     | Animate / redesign the hero            | Creative frontend             |

---

## Devin CLI — quick, well-scoped fixes

These are small, unambiguous, single-pass edits. Ideal for the terminal: describe it,
let it patch, verify with `npm test` / a glance in the browser.

### 1. Add missing `alt` text to the solution images (accessibility)

- **Where:** `src/components/Solutions.jsx`
- **Problem:** The solution cards render `<img ... />` with **no `alt` attribute**, so
  screen readers announce nothing. The logo in `Navbar.jsx` has `alt="Adyen"` — these
  should match that standard.
- **Why CLI:** Tiny, deterministic, easy to verify. Perfect "give it one instruction"
  task.
- **Starter prompt:**
  > In `src/components/Solutions.jsx`, add a descriptive `alt` attribute to each
  > solution card image using the item's title (e.g. "Retail solution illustration").

### 2. Fix the typo and the dead-end links

- **Where:** `src/components/Solutions.jsx` (typo), `src/components/CTA.jsx` &
  `src/components/Footer.jsx` (links), `src/data/content.js` (nav anchors).
- **Problems:**
  - Typo: `"...how you do buisness..."` should be `"business"`.
  - Several links point to `href="#"` (CTA "See pricing", footer links) — they jump to
    the top instead of a real section.
  - Nav links `#banking` and `#capital` have **no matching section id** on the page.
- **Why CLI:** Mechanical search-and-fix across a few files; quick to review in a diff.
- **Starter prompt:**
  > Fix the typo "buisness" → "business" in `Solutions.jsx`. Replace placeholder
  > `href="#"` links with sensible in-page anchors, and make sure every navbar link in
  > `src/data/content.js` points to a section id that actually exists.

---

## Devin Cloud — longer, repetitive, CI-style work

These are larger efforts that benefit from running asynchronously in the cloud, with
the full test suite/build as the success signal.

### 3. Upgrade React 18 → 19 (and bump Vite)

- **Where:** `package.json`, plus any code changes the majors require.
- **Current (pinned on purpose):** `react@^18.2.0`, `react-dom@^18.2.0`, `vite@^4.5.0`,
  `@vitejs/plugin-react@^4.2.1`, `vitest@^0.34.6`.
- **Task:** Move React + React DOM to v19, Vite to v5/6, and align the React plugin,
  `jsdom`, and Vitest. Fix any breaking changes (e.g. `react-dom/client`, StrictMode,
  test setup) until `npm run build` and `npm test` are green.
- **Why Cloud:** A dependency upgrade is iterative — install, build, read errors, patch,
  re-run. Great fit for an autonomous run that loops until CI passes, then opens a PR.
- **Starter prompt:**
  > Upgrade this project to React 19 and the latest Vite. Update all related dev
  > dependencies, resolve breaking changes, and ensure `npm run build` and `npm test`
  > both pass. Open a PR with a summary of every version bump.

### 4. Add real test coverage across the components

- **Where:** `src/components/*` (only `Navbar.test.jsx` exists today).
- **Task:** Add focused tests for `Hero`, `Features`, `Stats`, `Solutions`, `CTA`, and
  `Footer` — render checks, content from `src/data/content.js`, and an accessibility
  assertion (e.g. every image has `alt`, which also validates task #1).
- **Why Cloud:** Repetitive, pattern-following work across many files — exactly the kind
  of broad, mechanical task to delegate and let run to completion with a coverage gate.
- **Starter prompt:**
  > Add Vitest + React Testing Library tests for every component in `src/components`.
  > Follow the style in `Navbar.test.jsx`, cover the content rendered from
  > `src/data/content.js`, and add a test asserting all images have alt text. Aim for
  > high coverage and keep `npm test` green.

---

## Windsurf — creative, visual, in-IDE work

These need design judgment and live visual feedback — best done in the IDE where you can
see the page update as you tweak.

### 5. Add a dark mode toggle

- **Where:** `src/index.css` (all colors are CSS variables under `:root`), a new toggle
  in `src/components/Navbar.jsx`, plus a tiny bit of state.
- **Task:** Add a light/dark theme switch. Introduce a `[data-theme="dark"]` variable
  set, persist the choice (e.g. `localStorage`), and respect
  `prefers-color-scheme`.
- **Why Windsurf:** Iterative visual design — pick colors, check contrast, tune the
  toggle — with the page live in front of you.

### 6. Animate / redesign the hero into an interactive demo

- **Where:** `src/components/Hero.jsx`, `src/index.css` (`.hero*` rules).
- **Task:** Make the hero feel alive — scroll/entrance animations, a more dynamic
  "payment card" visual, maybe an interactive mini checkout or animated counter. Keep it
  on-brand (green `#0abf53`).
- **Why Windsurf:** Open-ended, creative, and highly visual — the IDE's live preview and
  fast feedback loop are ideal for design iteration.

---

## Verifying any change

```bash
npm test          # unit tests
npm run build     # production build
npm run dev       # eyeball it at http://localhost:5173
```
