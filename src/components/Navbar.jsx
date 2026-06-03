import { useEffect, useState } from "react";
import { navLinks } from "../data/content.js";
import AdyenLogo from "./AdyenLogo.jsx";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  try {
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    if (typeof window.matchMedia === "function") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
  } catch (e) {
    /* ignore storage / matchMedia access errors */
  }
  return "light";
}

export default function Navbar() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      window.localStorage.setItem("theme", theme);
    } catch (e) {
      /* ignore storage write errors */
    }
  }, [theme]);

  const isDark = theme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

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
            className="navbar__theme"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={isDark}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4.2" fill="currentColor" />
                <g
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                >
                  <path d="M12 2.6v2.6" />
                  <path d="M12 18.8v2.6" />
                  <path d="M2.6 12h2.6" />
                  <path d="M18.8 12h2.6" />
                  <path d="M5.4 5.4l1.8 1.8" />
                  <path d="M16.8 16.8l1.8 1.8" />
                  <path d="M5.4 18.6l1.8-1.8" />
                  <path d="M16.8 7.2l1.8-1.8" />
                </g>
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M20.5 14.2A8.2 8.2 0 0 1 9.8 3.5a8.2 8.2 0 1 0 10.7 10.7Z"
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
