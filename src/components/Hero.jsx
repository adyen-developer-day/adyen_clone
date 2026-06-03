import { useEffect, useRef, useState } from "react";
import { hero } from "../data/content.js";

/* Animated payment amounts that float through the visual panel */
const PAYMENTS = [
  { amount: "€ 2,450.00", method: "Visa", delay: 0 },
  { amount: "$ 189.99", method: "iDEAL", delay: 1.1 },
  { amount: "£ 74.50", method: "Mastercard", delay: 2.3 },
  { amount: "€ 1,120.00", method: "Klarna", delay: 3.4 },
  { amount: "¥ 38,900", method: "Alipay", delay: 4.6 },
  { amount: "$ 520.00", method: "PayPal", delay: 5.7 },
];

function PaymentVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual__terminal">
        <div className="hero-visual__header">
          <span className="hero-visual__dot hero-visual__dot--red" />
          <span className="hero-visual__dot hero-visual__dot--yellow" />
          <span className="hero-visual__dot hero-visual__dot--green" />
          <span className="hero-visual__status">Live</span>
        </div>
        {PAYMENTS.map((p) => (
          <div
            key={p.method}
            className="hero-visual__row"
            style={{ animationDelay: `${p.delay}s` }}
          >
            <span className="hero-visual__method">{p.method}</span>
            <span className="hero-visual__amount">{p.amount}</span>
            <span className="hero-visual__badge">✓</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`hero ${visible ? "hero--visible" : ""}`}
      id="top"
      ref={sectionRef}
    >
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
        <PaymentVisual />
      </div>
    </section>
  );
}
