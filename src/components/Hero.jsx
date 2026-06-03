import { hero, announcement } from "../data/content.js";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__inner">
        <a className="hero__announce" href={announcement.href}>
          <span className="hero__announce-tag">{announcement.tag}</span>
          <span className="hero__announce-text">{announcement.text}</span>
          <span className="hero__announce-arrow" aria-hidden="true">→</span>
        </a>
        <h1 className="hero__title">{hero.title}</h1>
        <p className="hero__subtitle">{hero.subtitle}</p>
        <div className="hero__cta">
          <a className="btn btn--primary-green btn--lg" href="#contact">
            {hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
