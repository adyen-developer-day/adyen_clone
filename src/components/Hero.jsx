import { useEffect, useRef } from "react";
import { hero } from "../data/content.js";

export default function Hero() {
  const visualRef = useRef(null);

  // Subtle scroll parallax on the payment-card cluster. Skipped entirely when
  // the user prefers reduced motion.
  useEffect(() => {
    const visual = visualRef.current;
    if (!visual) return;

    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      // Gentle drift: ~6% of scroll distance, capped so it stays professional.
      const offset = Math.min(window.scrollY * 0.06, 40);
      visual.style.setProperty("--hero-parallax", `${offset}px`);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <div className="hero__copy">
          <h1 className="hero__title">{hero.title}</h1>
          <p className="hero__subtitle">{hero.subtitle}</p>
          <div className="hero__cta">
            <a className="btn btn--dark btn--lg" href="#contact">
              {hero.cta}
            </a>
          </div>
        </div>

        <div className="hero__visual" ref={visualRef} aria-hidden="true">
          <div className="pay-card pay-card--receipt">
            <span className="pay-card__check" aria-hidden="true">
              ✓
            </span>
            <div>
              <p className="pay-card__label">Payment successful</p>
              <p className="pay-card__amount">€1,240.00</p>
            </div>
          </div>

          <div className="pay-card pay-card--credit">
            <div className="pay-card__row">
              <span className="pay-card__brand">adyen</span>
              <span className="pay-card__chip" aria-hidden="true" />
            </div>
            <p className="pay-card__number">5412&nbsp;••••&nbsp;••••&nbsp;4242</p>
            <div className="pay-card__row pay-card__row--meta">
              <span>Card holder</span>
              <span>09 / 28</span>
            </div>
          </div>

          <div className="pay-card pay-card--stat">
            <p className="pay-card__stat-value">99.999%</p>
            <p className="pay-card__label">Platform uptime</p>
          </div>
        </div>
      </div>
    </section>
  );
}
