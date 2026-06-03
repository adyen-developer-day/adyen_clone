import { useEffect, useState } from "react";
import { hero } from "../data/content.js";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className={`hero${visible ? " hero--visible" : ""}`} id="top">
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

        <div className="hero__visual" aria-hidden="true">
          <div className="hero-card">
            <div className="hero-card__row">
              <div className="hero-card__chip" />
              <div className="hero-card__contactless">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8.5 16.5a5 5 0 0 1 0-9" strokeLinecap="round" />
                  <path d="M5 19a9 9 0 0 1 0-14" strokeLinecap="round" />
                  <path d="M12 13.5a1.5 1.5 0 0 1 0-3" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <div className="hero-card__number">
              <span>••••</span>
              <span>••••</span>
              <span>••••</span>
              <span>4242</span>
            </div>
            <div className="hero-card__bottom">
              <div>
                <div className="hero-card__label">Card holder</div>
                <div className="hero-card__value">A. Enterprise</div>
              </div>
              <div>
                <div className="hero-card__label">Expires</div>
                <div className="hero-card__value">12 / 28</div>
              </div>
            </div>
          </div>

          <div className="hero-badge hero-badge--approved">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Payment approved
          </div>

          <div className="hero-badge hero-badge--amount">€2,450.00</div>
          <div className="hero-badge hero-badge--settled">Settled</div>
        </div>
      </div>
    </section>
  );
}
