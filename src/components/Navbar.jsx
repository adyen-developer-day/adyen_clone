import { useContext } from "react";
import AdyenLogo from "./AdyenLogo.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { useContent } from "../hooks/useContent.js";

export default function Navbar() {
  const { navLinks } = useContent();
  const { starWarsMode, toggleStarWars } = useContext(ThemeContext);
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
            className="starwars-toggle"
            onClick={toggleStarWars}
            aria-pressed={starWarsMode}
            aria-label="Toggle Star Wars mode"
            title="Toggle Star Wars mode"
          >
            SW
          </button>
          <a className="btn btn--primary" href="#contact">
            Contact sales
          </a>
        </div>
      </div>
    </header>
  );
}
