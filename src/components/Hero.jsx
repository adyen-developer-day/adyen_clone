import { hero } from "../data/content.js";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <div className="hero__crate-icon" aria-hidden="true" />
        <h1 className="hero__title">{hero.title}</h1>
        <p className="hero__subtitle">{hero.subtitle}</p>
        <div className="hero__cta">
          <a className="btn btn--crate btn--lg" href="#contact">
            {hero.cta}
          </a>
          <a className="btn btn--ghost-light btn--lg" href="#inventory">
            {hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
