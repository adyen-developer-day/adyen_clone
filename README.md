# Flighty Web Mockup

A web-based mockup of the [Flighty](https://flighty.app) iOS flight tracking app, built with React + Vite.

> **Note:** This is a static mockup with fake data — no real flight tracking or API integration.

## Screenshots

Built to mimic the Flighty iOS app experience in a mobile-width web layout (430px max).

## Features

- **My Flights** — Flight card list with upcoming/past tabs and status badges
- **Flight Detail** — SVG flight arc map, progress bar, departure/arrival info panels
- **Stats** — Travel statistics dashboard with charts and records
- **Airport** — Airport info with weather, delays, and terminal list
- **Settings** — Profile, preferences, and toggles

## Tech Stack

- React 18 + Vite 4
- React Router DOM
- Pure CSS (no utility framework)
- SVG for flight visualizations

## Getting Started

```bash
npm install
npm run dev    # → http://localhost:5173
npm run build  # Production build
```

## Project Structure

```
src/
├── components/    # Shared UI components
│   ├── BottomNav.jsx
│   ├── FlightCard.jsx
│   ├── FlightMap.jsx
│   ├── FlightProgress.jsx
│   ├── InfoCard.jsx
│   ├── StatCard.jsx
│   └── StatusBadge.jsx
├── data/
│   └── flights.js # Mock flight data, airlines, airports, stats
├── pages/
│   ├── MyFlights.jsx
│   ├── FlightDetail.jsx
│   ├── Stats.jsx
│   ├── Airport.jsx
│   └── Settings.jsx
├── App.jsx        # Router + app shell
├── main.jsx       # Entry point
└── index.css      # Global dark theme styles
```
