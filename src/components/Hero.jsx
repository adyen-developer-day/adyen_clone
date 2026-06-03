import { useEffect, useRef, useState } from "react";
import { hero } from "../data/content.js";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Eased count-up animation used for the live "processed" metric.
function useCountUp(target, duration = 1800) {
  const [value, setValue] = useState(prefersReducedMotion() ? target : 0);
  const raf = useRef(0);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setValue(target);
      return undefined;
    }
    if (typeof requestAnimationFrame !== "function") {
      setValue(target);
      return undefined;
    }
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration]);

  return value;
}

export default function Hero() {
  const processed = useCountUp(1.4);

  return (
    <section className="hero" id="top">
      <div className="hero__inner hero__inner--split">
        <div className="hero__content">
          <span className="hero__eyebrow">Adyen · The financial technology platform</span>
          <h1 className="hero__title">{hero.title}</h1>
          <p className="hero__subtitle">{hero.subtitle}</p>
          <div className="hero__cta">
            <a className="btn btn--dark btn--lg" href="#contact">
              {hero.cta}
            </a>
            <a className="btn btn--ghost-dark btn--lg" href="#products">
              Explore the platform
            </a>
          </div>
          <dl className="hero__metrics">
            <div className="hero__metric">
              <dt className="hero__metric-value">€{processed.toFixed(2)}T</dt>
              <dd className="hero__metric-label">Processed annually</dd>
            </div>
            <div className="hero__metric">
              <dt className="hero__metric-value">99.999%</dt>
              <dd className="hero__metric-label">Platform uptime</dd>
            </div>
            <div className="hero__metric">
              <dt className="hero__metric-value">200+</dt>
              <dd className="hero__metric-label">Payment methods</dd>
            </div>
          </dl>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="paycard">
            <div className="paycard__shine" />
            <div className="paycard__row paycard__row--top">
              <span className="paycard__brand">adyen</span>
              <span className="paycard__contactless" />
            </div>
            <div className="paycard__chip" />
            <div className="paycard__number">
              <span>4242</span>
              <span>4242</span>
              <span>4242</span>
              <span>4242</span>
            </div>
            <div className="paycard__row paycard__row--bottom">
              <div>
                <span className="paycard__caption">Card holder</span>
                <span className="paycard__value">A. DEVELOPER</span>
              </div>
              <div>
                <span className="paycard__caption">Expires</span>
                <span className="paycard__value">12 / 29</span>
              </div>
            </div>
          </div>

          <div className="hero__approved">
            <span className="hero__approved-check">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                <path
                  d="M5 12.5l4.2 4.2L19 7"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <span className="hero__approved-title">Payment approved</span>
              <span className="hero__approved-sub">Authorized in 0.3s</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
