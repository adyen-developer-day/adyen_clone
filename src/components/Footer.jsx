import { footerColumns, footerLegal } from "../data/content.js";
import AdyenLogo from "./AdyenLogo.jsx";

// Map each footer link to the most relevant section id that exists on the page.
// Existing section ids: top, products, industries, about, resources, contact.
const linkAnchors = {
  "Press & media": "#about",
  Careers: "#about",
  "Investor Relations": "#about",
  "Partner with us": "#contact",
  Contact: "#contact",
  Payments: "#products",
  "Risk management": "#products",
  Authentication: "#products",
  Issuing: "#products",
  Pricing: "#contact",
  Documentation: "#resources",
  Academy: "#resources",
  "Knowledge Hub": "#resources",
  Newsletter: "#resources",
  Infrastructure: "#products",
  Licenses: "#about",
  Legal: "#about",
  "Terms & Conditions": "#about",
  "Service Status": "#about",
};

export default function Footer() {
  return (
    <footer className="footer win95-footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <AdyenLogo className="footer__logo" height={30} />
            <p className="footer__tagline">
              One platform for payments, data, and financial products.
            </p>
            <a className="btn win95-btn" href="#resources">
              Subscribe to our newsletter
            </a>
          </div>
          <div className="footer__cols">
            {footerColumns.map((col) => (
              <div key={col.heading} className="footer__col">
                <h4 className="footer__heading">{col.heading}</h4>
                <ul>
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href={linkAnchors[link] || "#"}>{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer__bottom">
          <span className="footer__copy">© 2026 Adyen</span>
          <div className="footer__legal">
            {footerLegal.map((item) => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </div>
          <span className="footer__region">Global (English)</span>
        </div>
        <p className="footer__disclaimer">
          Workshop replica for localhost demo only. Not affiliated with Adyen.
        </p>
      </div>
    </footer>
  );
}
