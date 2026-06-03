# Adyen Clone — Cognition Platform Workshop

A localhost-only **React** replica of the Adyen marketing homepage. Everyone in the
workshop starts from this exact version, then practices improving it with the three
Cognition tools: **Devin CLI**, **Devin Cloud**, and **Devin Desktop**.

> This is a localhost-only demo built for an internal workshop. It mirrors the layout
> and copy of the live adyen.com homepage and uses Adyen's font/wordmark purely for
> visual fidelity — it is not affiliated with or endorsed by Adyen.

## Stack

| Concern        | Choice                          | Notes                                   |
| -------------- | ------------------------------- | --------------------------------------- |
| Framework      | React 19 (`^19.2.7`)            | Upgraded from React 18                   |
| Build / dev    | Vite 8 (`^8.0.16`)              | Upgraded from Vite 4                      |
| Tests          | Vitest + React Testing Library  | Only 1 starter test on purpose          |
| Styling        | Plain CSS (`src/index.css`)     | Brand green `#00d16a`, no dark mode yet  |

## Prerequisites

- **Node.js 20.19+** (Vite 8 requires Node `^20.19 || ^22.12 || >=24`).
  - No system Node? Install via [nvm](https://github.com/nvm-sh/nvm):
    ```bash
    nvm install 22 && nvm use 22
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
│   ├── data/content.js          # nav, value props, stats, industries, footer copy
│   ├── assets/                  # Adyen variable fonts + industry SVGs
│   ├── test/setup.js
│   └── components/
│       ├── AdyenLogo.jsx
│       ├── TopBanner.jsx
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── SectionStatement.jsx
│       ├── ValueProps.jsx
│       ├── MoneyMovement.jsx
│       ├── Industries.jsx
│       ├── Stats.jsx
│       ├── CaseStudies.jsx
│       ├── FinalCTA.jsx
│       ├── Footer.jsx
│       └── Navbar.test.jsx       # the only test (by design)
└── IMPROVEMENTS.md               # the 6 workshop tasks
```

## The workshop

Open **[IMPROVEMENTS.md](./IMPROVEMENTS.md)** for the 6 curated improvements, split
across Devin CLI (quick fixes), Devin Cloud (framework upgrade + test coverage), and
Devin Desktop (creative frontend work).
