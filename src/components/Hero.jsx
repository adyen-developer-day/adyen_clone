import { useEffect, useRef, useState } from "react";
import { hero } from "../data/content.js";
import { Cacodemon, Imp, Pinky, Shell } from "./DoomSprites.jsx";

function useCountUp(target, duration = 2000) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          if (prefersReduced) {
            setValue(target);
            return;
          }
          const start = performance.now();
          const tick = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { value, ref };
}

function PaymentCard() {
  return (
    <div className="hero-card" aria-hidden="true">
      <div className="hero-card__chip" />
      <div className="hero-card__number">•••• •••• •••• 4242</div>
      <div className="hero-card__footer">
        <div className="hero-card__holder">A. MERCHANT</div>
        <div className="hero-card__expiry">12 / 29</div>
      </div>
      <div className="hero-card__contactless">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 19.5c3.8-3.8 3.8-10.2 0-14"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M11 17c2.2-2.2 2.2-5.8 0-8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M15 14.5a2.8 2.8 0 0 0 0-3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="hero-card__pulse" />
    </div>
  );
}

export default function Hero() {
  const counter = useCountUp(892417, 2400);

  return (
    <section className="hero" id="top">
      <div className="doom-decor" aria-hidden="true">
        <Cacodemon className="doom-decor__caco doom-float" pixel={7} />
        <Imp className="doom-decor__imp doom-float doom-float--slow" pixel={6} />
        <Pinky className="doom-decor__pinky doom-float doom-float--fast" pixel={5} />
        <Shell className="doom-decor__shell doom-spin" pixel={6} />
        <Shell className="doom-decor__shell2 doom-spin" pixel={5} />
      </div>
      <div className="hero__inner hero__inner--split">
        <div className="hero__text">
          <h1 className="hero__title hero__anim hero__anim--1">
            {hero.title}
          </h1>
          <p className="hero__subtitle hero__anim hero__anim--2">
            {hero.subtitle}
          </p>
          <div className="hero__cta hero__anim hero__anim--3">
            <a className="btn btn--dark btn--lg" href="#contact">
              {hero.cta}
            </a>
          </div>
        </div>

        <div className="hero__visual hero__anim hero__anim--4">
          <PaymentCard />
          <div className="hero-counter" ref={counter.ref}>
            <span className="hero-counter__value">
              {counter.value.toLocaleString()}
            </span>
            <span className="hero-counter__label">
              payments processed today
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
