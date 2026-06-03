import { hero } from "../data/content.js";
import heroBg from "../assets/images/hero-bg.jpg";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">{hero.title}</h1>
          <p className="hero__subtitle">{hero.subtitle}</p>
          <div className="hero__cta">
            <a className="btn btn--dark btn--lg" href="#contact">
              {hero.cta}
            </a>
          </div>
        </div>
        <div className="hero__media">
          <img
            className="hero__image"
            src={heroBg}
            alt="Abstract technology circuit board"
          />
        </div>
      </div>
    </section>
  );
}
