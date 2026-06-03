import { useEffect, useRef, useState } from "react";
import { hero } from "../data/content.js";

/* ------------------------------------------------------------------ helpers */

/** Animate a number from 0 → target over `duration` ms (easeOutExpo). */
function useAnimatedCounter(target, duration = 2000) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    /* respect reduced-motion */
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setValue(target);
      return;
    }

    const el = ref.current;
    if (!el) return;

    let raf;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const step = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - t, 4); /* easeOutQuart */
          setValue(+(target * ease).toFixed(1));
          if (t < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration]);

  return { value, ref };
}

/* ---------------------------------------------------------------- component */

export default function Hero() {
  const counter = useAnimatedCounter(1.4, 2200);

  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        {/* ---- left: text content ---- */}
        <div className="hero__content">
          <h1 className="hero__title hero__fade hero__fade--1">{hero.title}</h1>
          <p className="hero__subtitle hero__fade hero__fade--2">
            {hero.subtitle}
          </p>
          <div className="hero__cta hero__fade hero__fade--3">
            <a className="btn btn--dark btn--lg" href="#contact">
              {hero.cta}
            </a>
          </div>
        </div>

        {/* ---- right: animated payment card + counter ---- */}
        <div className="hero__visual hero__fade hero__fade--4">
          <div className="hero-card">
            {/* chip */}
            <div className="hero-card__chip" aria-hidden="true">
              <svg viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="38" height="28" rx="5" stroke="#bfa14a" strokeWidth="1.5" fill="#c9a84c" fillOpacity="0.25" />
                <line x1="1" y1="15" x2="39" y2="15" stroke="#bfa14a" strokeWidth="1" />
                <line x1="20" y1="1" x2="20" y2="29" stroke="#bfa14a" strokeWidth="1" />
              </svg>
            </div>
            {/* contactless icon */}
            <div className="hero-card__contactless" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17.01a10 10 0 0 1 0-10.02" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M11 15a6 6 0 0 0 0-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M15 13.5a2.5 2.5 0 0 0 0-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            {/* card number dots */}
            <div className="hero-card__number" aria-hidden="true">
              <span className="hero-card__dots">••••</span>
              <span className="hero-card__dots">••••</span>
              <span className="hero-card__dots">••••</span>
              <span className="hero-card__last">4242</span>
            </div>
            {/* card footer */}
            <div className="hero-card__footer" aria-hidden="true">
              <span className="hero-card__name">Adyen Demo</span>
              <span className="hero-card__exp">12/28</span>
            </div>
            {/* decorative glow */}
            <div className="hero-card__glow" aria-hidden="true" />
          </div>

          {/* animated counter pill */}
          <div className="hero-counter" ref={counter.ref} aria-label={`€${counter.value} trillion processed annually`}>
            <span className="hero-counter__icon" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2v16M6 6l4-4 4 4M4 18h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="hero-counter__value">€{counter.value}T</span>
            <span className="hero-counter__label">processed annually</span>
          </div>
        </div>
      </div>
    </section>
  );
}
