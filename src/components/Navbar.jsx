import { useState, useEffect } from "react";
import { navLinks } from "../data/content.js";
import AdyenLogo from "./AdyenLogo.jsx";

const THEMES = { WIN95: "win95", WIN10: "win10" };

function getInitialTheme() {
  const stored = localStorage.getItem("theme");
  return stored === THEMES.WIN10 ? THEMES.WIN10 : THEMES.WIN95;
}

export default function Navbar() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () =>
    setTheme((prev) => (prev === THEMES.WIN95 ? THEMES.WIN10 : THEMES.WIN95));

  const isWin95 = theme === THEMES.WIN95;

  return (
    <header className="navbar win95-navbar">
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
            className="theme-toggle win95-btn"
            onClick={toggle}
            aria-label={`Switch to ${isWin95 ? "Windows 10" : "Windows 95"} theme`}
            aria-pressed={!isWin95}
            title={`Switch to ${isWin95 ? "Windows 10" : "Windows 95"} theme`}
          >
            {isWin95 ? "🖥️ Win 95" : "🪟 Win 10"}
          </button>
          <a className="btn win95-btn" href="#contact">
            Contact sales
          </a>
        </div>
      </div>
    </header>
  );
}
