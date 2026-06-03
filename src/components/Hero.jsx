import { useEffect, useRef, useState } from "react";
import { hero } from "../data/content.js";

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

function useAnimatedCounter(target, duration = 2200) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setValue(target);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(+(eased * target).toFixed(1));
            if (t < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, reduced]);

  return { value, ref };
}

export default function Hero() {
  const counter = useAnimatedCounter(1.4, 2400);
  const reduced = useReducedMotion();

  return (
    <section className="hero" id="top">
      <div className="hero__inner hero__layout">
        <div className="hero__copy">
          <h1 className={`hero__title ${reduced ? "" : "hero__fade-up"}`}>
            {hero.title}
          </h1>
          <p
            className={`hero__subtitle ${reduced ? "" : "hero__fade-up hero__fade-up--d1"}`}
          >
            {hero.subtitle}
          </p>
          <div
            className={`hero__cta ${reduced ? "" : "hero__fade-up hero__fade-up--d2"}`}
          >
            <a className="btn btn--dark btn--lg" href="#contact">
              {hero.cta}
            </a>
          </div>
        </div>

        <div
          className={`hero__visual ${reduced ? "" : "hero__fade-up hero__fade-up--d3"}`}
          aria-hidden="true"
        >
          <div className="hero__card">
            <div className="hero__card-chip" />
            <div className="hero__card-logo">adyen</div>
            <div className="hero__card-number">
              •••• •••• •••• 4242
            </div>
            <div className="hero__card-footer">
              <span>VALID THRU 12/30</span>
              <span>ENTERPRISE</span>
            </div>
          </div>

          <div className="hero__stats" ref={counter.ref}>
            <div className="hero__stat">
              <span className="hero__stat-value">€{counter.value}T</span>
              <span className="hero__stat-label">Processed annually</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">99.999%</span>
              <span className="hero__stat-label">Platform uptime</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">150+</span>
              <span className="hero__stat-label">Currencies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
