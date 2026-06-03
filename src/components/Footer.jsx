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
              One ice cream bar to rule them all. Not financial advice.
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
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer__bottom">
          <span className="footer__copy">© 2026 MGNUM Holdings Inc.</span>
          <div className="footer__legal">
            {footerLegal.map((item) => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </div>
          <span className="footer__region">Global (Delicious)</span>
        </div>
        <p className="footer__disclaimer">
          Comedy contest entry. MGNUM is ice cream, not a stock. Please invest responsibly (in actual ice cream).
        </p>
      </div>
    </footer>
  );
}
