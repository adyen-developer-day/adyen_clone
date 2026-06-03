import { useState, useEffect } from "react";
import { navLinks } from "../data/content.js";
import AdyenLogo from "./AdyenLogo.jsx";

function getInitialContrast() {
  return localStorage.getItem("high-contrast") === "true";
}

const ContrastIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a10 10 0 0 1 0 20z" fill="currentColor" />
  </svg>
);

export default function Navbar() {
  const [highContrast, setHighContrast] = useState(getInitialContrast);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.setAttribute("data-contrast", "high");
    } else {
      document.documentElement.removeAttribute("data-contrast");
    }
    localStorage.setItem("high-contrast", String(highContrast));
  }, [highContrast]);

  const toggle = () => setHighContrast((prev) => !prev);

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
            className="contrast-toggle"
            onClick={toggle}
            aria-label="Toggle high-contrast mode"
            aria-pressed={highContrast}
          >
            <ContrastIcon />
          </button>
          <a className="btn btn--primary" href="#contact">
            Contact sales
          </a>
        </div>
      </div>
    </header>
  );
}
