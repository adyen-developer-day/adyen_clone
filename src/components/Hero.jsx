import { hero } from "../data/content.js";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <video
        className="hero__video"
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-drone-poster.jpg"
        aria-hidden="true"
      >
        <source src="/hero-drone.mp4" type="video/mp4" />
      </video>
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__inner">
        <h1 className="hero__title">{hero.title}</h1>
        <p className="hero__subtitle">{hero.subtitle}</p>
        <div className="hero__cta">
          <a className="btn btn--green btn--lg" href="#contact">
            {hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
