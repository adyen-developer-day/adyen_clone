import { finalCta } from "../data/content.js";
import bgImage from "../assets/images/finalcta-bg.jpg";

export default function FinalCTA() {
  return (
    <section
      className="finalcta"
      id="contact"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="finalcta__overlay" />
      <div className="container finalcta__inner">
        <h2 className="finalcta__title">{finalCta.title}</h2>
        <a className="btn btn--dark btn--lg" href="#contact">
          {finalCta.cta}
        </a>
      </div>
    </section>
  );
}
