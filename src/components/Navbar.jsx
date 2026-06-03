import { useState } from "react";
import { navLinks } from "../data/content.js";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(navLinks[0]?.href ?? "");

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a className="navbar__brand" href="#top" aria-label="Adyen CS2 home">
          <span className="navbar__logo-text">ADYEN CS2</span>
        </a>
        <nav className="navbar__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__tab${activeTab === link.href ? " navbar__tab--active" : ""}`}
              onClick={() => setActiveTab(link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
