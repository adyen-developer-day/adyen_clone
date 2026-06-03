import { useCallback, useEffect, useRef, useState } from "react";

const PIXEL = 38; // size of each "pixel" square in the transition grid
const COVER_MS = 520; // time for the mosaic to fully cover the screen
const REVEAL_MS = 520; // time for it to clear again

const PAGE_BG = { light: "#ffffff", dark: "#06121e" };

function media(query) {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return { matches: false };
  }
  return window.matchMedia(query);
}

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const saved = window.localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return media("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function prefersReducedMotion() {
  return media("(prefers-reduced-motion: reduce)").matches;
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [overlay, setOverlay] = useState(null); // { cols, rows, delays, color }
  const [phase, setPhase] = useState("idle"); // idle | cover | reveal
  const busy = useRef(false);
  const timers = useRef([]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(
    () => () => timers.current.forEach((t) => window.clearTimeout(t)),
    []
  );

  const toggle = useCallback(() => {
    if (busy.current) return;
    const next = theme === "dark" ? "light" : "dark";

    if (prefersReducedMotion()) {
      setTheme(next);
      return;
    }

    busy.current = true;
    const cols = Math.ceil(window.innerWidth / PIXEL);
    const rows = Math.ceil(window.innerHeight / PIXEL);
    const delays = Array.from(
      { length: cols * rows },
      () => Math.round(Math.random() * 280)
    );
    setOverlay({ cols, rows, delays, color: PAGE_BG[next] });
    setPhase("init");

    // next frame: start covering the screen with pixels
    requestAnimationFrame(() => requestAnimationFrame(() => setPhase("cover")));

    // once covered, swap the theme underneath and start revealing
    timers.current.push(
      window.setTimeout(() => {
        setTheme(next);
        setPhase("reveal");
      }, COVER_MS)
    );

    // tear down the overlay after the reveal completes
    timers.current.push(
      window.setTimeout(() => {
        setOverlay(null);
        setPhase("idle");
        busy.current = false;
      }, COVER_MS + REVEAL_MS)
    );
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <>
      <button
        type="button"
        className="theme-toggle"
        onClick={toggle}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={isDark}
        title={isDark ? "Light mode" : "Dark mode"}
      >
        {isDark ? (
          // Sun
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="4.2" fill="currentColor" />
            <g
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M12 2.4v2.6M12 19v2.6M2.4 12H5M19 12h2.6M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
            </g>
          </svg>
        ) : (
          // Moon
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M20 13.4A8 8 0 1 1 10.6 4a6.4 6.4 0 0 0 9.4 9.4z"
              fill="currentColor"
            />
          </svg>
        )}
      </button>

      {overlay && (
        <div
          className={`pixel-transition${
            phase === "cover" ? " is-cover" : ""
          }${phase === "reveal" ? " is-reveal" : ""}`}
          aria-hidden="true"
          style={{
            gridTemplateColumns: `repeat(${overlay.cols}, 1fr)`,
            gridTemplateRows: `repeat(${overlay.rows}, 1fr)`,
            "--pixel-color": overlay.color,
          }}
        >
          {overlay.delays.map((d, i) => (
            <span
              key={i}
              className="pixel-transition__cell"
              style={{ "--d": `${d}ms` }}
            />
          ))}
        </div>
      )}
    </>
  );
}
