import { useEffect, useRef, useState } from "react";
import { hero } from "../data/content.js";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Hero() {
  const payments = hero.payments ?? [];
  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef(null);

  // Reveal the hero on entrance / when scrolled into view.
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;
    if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setRevealed(true);
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Cycle the dynamic payment visual.
  useEffect(() => {
    if (payments.length <= 1 || prefersReducedMotion()) return undefined;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % payments.length);
    }, 2400);
    return () => clearInterval(id);
  }, [payments.length]);

  const current = payments[active] ?? { method: "Card", amount: "" };

  return (
    <section
      ref={sectionRef}
      className={`hero${revealed ? " hero--in" : ""}`}
      id="top"
    >
      <div className="hero__inner">
        <div className="hero__content">
          {hero.eyebrow && (
            <span className="hero__eyebrow">
              <span className="hero__eyebrow-dot" aria-hidden="true" />
              {hero.eyebrow}
            </span>
          )}
          <h1 className="hero__title">{hero.title}</h1>
          <p className="hero__subtitle">{hero.subtitle}</p>
          <div className="hero__cta">
            <a className="btn btn--dark btn--lg" href="#contact">
              {hero.cta}
            </a>
            {hero.secondaryCta && (
              <a className="btn btn--ghost-dark btn--lg" href="#products">
                {hero.secondaryCta}
              </a>
            )}
          </div>
        </div>

        {payments.length > 0 && (
          <div className="hero__visual" aria-hidden="true">
            <div className="paycard">
              <div className="paycard__head">
                <span className="paycard__brand">Adyen Checkout</span>
                <span className="paycard__live">Live</span>
              </div>
              <div className="paycard__amount" key={current.amount}>
                {current.amount}
              </div>
              <ul className="paycard__methods">
                {payments.map((p, i) => (
                  <li
                    key={p.method}
                    className={`paychip${
                      i === active ? " paychip--active" : ""
                    }`}
                  >
                    {p.method}
                  </li>
                ))}
              </ul>
              <div className="paycard__status" key={current.method}>
                <span className="paycard__check" aria-hidden="true">
                  ✓
                </span>
                Approved · {current.method}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
