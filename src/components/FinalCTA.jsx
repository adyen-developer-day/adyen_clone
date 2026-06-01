import { finalCta } from "../data/content.js";

export default function FinalCTA() {
  return (
    <section className="finalcta" id="contact">
      <div className="container finalcta__inner">
        <h2 className="finalcta__title">{finalCta.title}</h2>
        <a className="btn btn--dark btn--lg" href="#contact">
          {finalCta.cta}
        </a>
      </div>
    </section>
  );
}
