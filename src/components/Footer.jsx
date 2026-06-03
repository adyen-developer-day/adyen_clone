import { useContent } from "../data/content.js";
import AdyenLogo from "./AdyenLogo.jsx";

export default function Footer() {
  const { footer, footerColumns, footerLegal } = useContent();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <AdyenLogo className="footer__logo" height={30} />
            <p className="footer__tagline">{footer.tagline}</p>
            <a className="btn btn--ghost-light" href="#contact">
              {footer.newsletter}
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
          <span className="footer__copy">{footer.copy}</span>
          <div className="footer__legal">
            {footerLegal.map((item) => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </div>
          <span className="footer__region">{footer.region}</span>
        </div>
        <p className="footer__disclaimer">{footer.disclaimer}</p>
      </div>
    </footer>
  );
}
