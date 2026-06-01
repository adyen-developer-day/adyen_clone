import { footerColumns } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">adyen</span>
          <p className="footer__tagline">
            The financial technology platform of choice.
          </p>
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
      <div className="container footer__bottom">
        <span>© 2024 Adyen — workshop replica for localhost demo only.</span>
        <div className="footer__legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
