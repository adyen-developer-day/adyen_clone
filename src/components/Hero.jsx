import { useEffect, useState } from "react";
import { hero, announcement } from "../data/content.js";
import slide1 from "../assets/hero/hero-1-cafe-contactless.jpg";
import slide2 from "../assets/hero/hero-2-store-pos.jpg";
import slide3 from "../assets/hero/hero-3-terminal-card.jpg";
import slide4 from "../assets/hero/hero-4-retail-checkout.jpg";

const slides = [slide1, slide2, slide3, slide4];
const SLIDE_MS = 5000;

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      SLIDE_MS
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero__carousel" aria-hidden="true">
        {slides.map((src, i) => (
          <div
            key={src}
            className={`hero__slide${i === active ? " is-active" : ""}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
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
