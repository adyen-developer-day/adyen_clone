import { useState, useEffect } from "react";
import { navLinks } from "../data/content.js";
import AdyenLogo from "./AdyenLogo.jsx";

function getInitialA11y() {
  return localStorage.getItem("a11y-colorblind") === "true";
}

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export default function Navbar() {
  const [colorblind, setColorblind] = useState(getInitialA11y);

  useEffect(() => {
    if (colorblind) {
      document.documentElement.setAttribute("data-a11y", "colorblind");
    } else {
      document.documentElement.removeAttribute("data-a11y");
    }
    localStorage.setItem("a11y-colorblind", String(colorblind));
  }, [colorblind]);

  const toggle = () => setColorblind((prev) => !prev);

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
            className="a11y-toggle"
            onClick={toggle}
            aria-label="Toggle color-blind friendly palette"
            aria-pressed={colorblind}
          >
            <EyeIcon />
          </button>
          <a className="btn btn--primary" href="#contact">
            Contact sales
          </a>
        </div>
      </div>
    </header>
  );
}
