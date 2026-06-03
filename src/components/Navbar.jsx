import { useEffect, useState } from "react";
import { navLinks } from "../data/content.js";
import AdyenLogo from "./AdyenLogo.jsx";

const STORAGE_KEY = "theme";

function systemPrefersDark() {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // localStorage unavailable (e.g. privacy mode); fall back to system.
  }
  return systemPrefersDark() ? "dark" : "light";
}

export default function Navbar() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Follow the system preference until the user makes a manual choice.
  useEffect(() => {
    if (typeof window.matchMedia !== "function") return undefined;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event) => {
      let hasManualChoice = false;
      try {
        hasManualChoice = Boolean(window.localStorage.getItem(STORAGE_KEY));
      } catch {
        hasManualChoice = false;
      }
      if (!hasManualChoice) setTheme(event.matches ? "dark" : "light");
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Ignore persistence failures; the in-memory choice still applies.
      }
      return next;
    });
  };

  const isDark = theme === "dark";
  const toggleLabel = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a className="navbar__brand" href="#top" aria-label="Adyen home">
          <AdyenLogo className="navbar__logo" height={24} />
        </a>
        <nav className="navbar__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
              <svg
                className="navbar__caret"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 3.5L5 6.5L8 3.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </nav>
        <div className="navbar__actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={toggleLabel}
            aria-pressed={isDark}
            title={toggleLabel}
          >
            {isDark ? (
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="4.5" fill="currentColor" />
                <g
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                >
                  <path d="M12 2.5v2.5" />
                  <path d="M12 19v2.5" />
                  <path d="M4.2 4.2l1.8 1.8" />
                  <path d="M18 18l1.8 1.8" />
                  <path d="M2.5 12H5" />
                  <path d="M19 12h2.5" />
                  <path d="M4.2 19.8l1.8-1.8" />
                  <path d="M18 6l1.8-1.8" />
                </g>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M20 14.5A8 8 0 0 1 9.5 4a7 7 0 1 0 10.5 10.5z"
                  fill="currentColor"
                />
              </svg>
            )}
          </button>
          <a className="btn btn--primary" href="#contact">
            Contact sales
          </a>
        </div>
      </div>
    </header>
  );
}
