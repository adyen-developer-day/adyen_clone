import { navLinks } from "../data/content.js";
import logo from "../assets/adyen-logo.svg";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a className="navbar__brand" href="#top" aria-label="Adyen home">
          <img src={logo} className="navbar__logo" alt="Adyen" />
        </a>
        <nav className="navbar__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="navbar__actions">
          <a className="navbar__signin" href="#signin">
            Sign in
          </a>
          <a className="btn btn--primary" href="#contact">
            Contact sales
          </a>
        </div>
      </div>
    </header>
  );
}
