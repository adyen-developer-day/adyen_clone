import { useEffect, useRef, useState } from "react";
import { hero } from "../data/content.js";

function AnimatedCounter({ end, duration = 2000, prefix = "€" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches) {
      setCount(end);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const step = (now) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setCount(Math.floor(eased * end));
            if (t < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className="hero-card__counter">
      {prefix}
      {count.toLocaleString()}
    </span>
  );
}

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

        <div className="hero__visual" aria-hidden="true">
          <div className="hero-card">
            <div className="hero-card__chip" />
            <div className="hero-card__label">Total processed</div>
            <AnimatedCounter end={142857} />
            <div className="hero-card__row">
              <span className="hero-card__status">● Approved</span>
              <span className="hero-card__time">Just now</span>
            </div>
            <div className="hero-card__bar">
              <div className="hero-card__bar-fill" />
            </div>
          </div>
          <div className="hero__dot hero__dot--1" />
          <div className="hero__dot hero__dot--2" />
          <div className="hero__dot hero__dot--3" />
        </div>
      </div>
    </section>
  );
}
