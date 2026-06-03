import { footerColumns, footerLegal } from "../data/content.js";
import AdyenLogo from "./AdyenLogo.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <AdyenLogo className="footer__logo" height={30} />
            <p className="footer__tagline">
              One platform for payments, data, and financial products.
            </p>
            <a className="btn btn--ghost-light" href="#newsletter">
              Subscribe to our newsletter
            </a>
          </div>
          <div className="footer__cols">
            {footerColumns.map((col) => (
              <div key={col.heading} className="footer__col">
                <h4 className="footer__heading">{col.heading}</h4>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href}>{link.label}</a>
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
              <a key={item.href} href={item.href}>
                {item.label}
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
