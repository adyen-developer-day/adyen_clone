import { finalCta } from "../data/content.js";
import Win95Window from "./Win95Window.jsx";

export default function FinalCTA() {
  return (
    <section className="finalcta win95-finalcta" id="contact">
      <div className="container finalcta__inner">
        <Win95Window title="⚡ Adyen — Important Message">
          <h2 className="finalcta__title">{finalCta.title}</h2>
          <div style={{ textAlign: "center", marginTop: "16px" }}>
            <a className="win95-btn win95-btn--primary" href="#contact">
              {finalCta.cta}
            </a>
          </div>
        </Win95Window>
      </div>
    </section>
  );
}
