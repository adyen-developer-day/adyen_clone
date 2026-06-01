import { hero } from "../data/content.js";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <h1 className="hero__title">{hero.title}</h1>
        <p className="hero__subtitle">{hero.subtitle}</p>
        <div className="hero__cta">
          <a className="btn btn--dark btn--lg" href="#contact">
            {hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
