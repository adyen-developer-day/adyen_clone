# Adyen Clone — Cognition Platform Workshop

A localhost-only **React** replica of the Adyen marketing homepage. Everyone in the
workshop starts from this exact version, then practices improving it with the three
Cognition tools: **Devin CLI**, **Devin Cloud**, and **Windsurf**.

> This is an original, Adyen-styled demo built for an internal workshop. Copy and
> assets are placeholders inspired by Adyen's layout — not the real site content.

## Stack

| Concern        | Choice                          | Notes                                   |
| -------------- | ------------------------------- | --------------------------------------- |
| Framework      | React 18 (`^18.2.0`)            | Intentionally pinned (upgrade target)   |
| Build / dev    | Vite 4 (`^4.5.0`)               | Intentionally pinned (upgrade target)   |
| Tests          | Vitest + React Testing Library  | Only 1 starter test on purpose          |
| Styling        | Plain CSS (`src/index.css`)     | Brand green `#0abf53`, no dark mode yet  |

## Prerequisites

- **Node.js 18+** (this repo was scaffolded with Node 20).
  - No system Node? Install via [nvm](https://github.com/nvm-sh/nvm):
    ```bash
    nvm install 20 && nvm use 20
    ```

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server -> http://localhost:5173
```

Other scripts:

```bash
npm test         # run the test suite once
npm run test:watch
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Project structure

```
adyen_clone/
├── index.html
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── data/content.js          # nav, features, stats, solutions, footer copy
│   ├── assets/                  # logo + solution SVGs
│   ├── test/setup.js
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── LogoCloud.jsx
│       ├── Features.jsx
│       ├── Stats.jsx
│       ├── Solutions.jsx
│       ├── CTA.jsx
│       ├── Footer.jsx
│       └── Navbar.test.jsx       # the only test (by design)
└── IMPROVEMENTS.md               # the 6 workshop tasks
```

## The workshop

Open **[IMPROVEMENTS.md](./IMPROVEMENTS.md)** for the 6 curated improvements, split
across Devin CLI (quick fixes), Devin Cloud (framework upgrade + test coverage), and
Windsurf (creative frontend work).
