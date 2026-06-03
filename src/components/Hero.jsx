import { useState, useEffect, useRef } from "react";
import { hero } from "../data/content.js";

/* ── Animated counter ────────────────────────────────────────────── */
function AnimatedCounter({ end, prefix = "", suffix = "", decimals = 0, label }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setValue(end);
      return;
    }

    let raf;
    const duration = 1600;
    const startTime = performance.now();

    function tick(now) {
      const t = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setValue(parseFloat((ease * end).toFixed(decimals)));
      if (t < 1) raf = requestAnimationFrame(tick);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          raf = requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [end, decimals]);

  return (
    <div className="hero-stat" ref={ref}>
      <span className="hero-stat__value">
        {prefix}{decimals > 0 ? value.toFixed(decimals) : value}{suffix}
      </span>
      <span className="hero-stat__label">{label}</span>
    </div>
  );
}

/* ── Floating payment card SVG ───────────────────────────────────── */
function PaymentCard() {
  return (
    <div className="hero-card" aria-hidden="true">
      <svg
        viewBox="0 0 320 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hero-card__svg"
      >
        {/* Card body */}
        <rect width="320" height="200" rx="16" fill="var(--ink)" />

        {/* Chip */}
        <rect x="32" y="48" width="44" height="32" rx="6" fill="#c5a44e" opacity="0.85" />
        <line x1="54" y1="48" x2="54" y2="80" stroke="#9e832e" strokeWidth="1" />
        <line x1="32" y1="64" x2="76" y2="64" stroke="#9e832e" strokeWidth="1" />

        {/* Contactless icon */}
        <g transform="translate(92, 50)" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.5">
          <path d="M0 12 C4 8, 4 4, 0 0" />
          <path d="M5 14 C11 8, 11 4, 5 -2" />
          <path d="M10 16 C18 8, 18 4, 10 -4" />
        </g>

        {/* Card number dots */}
        <g fill="#fff" opacity="0.6">
          {[0, 1, 2, 3].map((g) =>
            [0, 1, 2, 3].map((d) => (
              <circle
                key={`${g}-${d}`}
                cx={32 + g * 72 + d * 14}
                cy={120}
                r={3}
              />
            ))
          )}
        </g>

        {/* Cardholder */}
        <text x="32" y="166" fill="#fff" fontSize="13" fontFamily="var(--mono)" opacity="0.7">
          ADYEN CARDHOLDER
        </text>

        {/* Expiry */}
        <text x="200" y="166" fill="#fff" fontSize="13" fontFamily="var(--mono)" opacity="0.7">
          12/28
        </text>

        {/* Brand circle (green dot) */}
        <circle cx="278" cy="160" r="20" fill="var(--green)" opacity="0.9" />
        <circle cx="296" cy="160" r="20" fill="var(--green)" opacity="0.4" />
      </svg>

      {/* Floating accents */}
      <div className="hero-card__glow" />
    </div>
  );
}

/* ── Hero component ──────────────────────────────────────────────── */
export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after mount
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Pick a few key stats for the counter bar
  const counterData = [
    { end: 1.4, suffix: "T", prefix: "€", decimals: 1, label: "Processed annually" },
    { end: 150, suffix: "+", prefix: "", decimals: 0, label: "Currencies" },
    { end: 29, suffix: "", prefix: "", decimals: 0, label: "Global offices" },
  ];

  return (
    <section className={`hero ${visible ? "hero--visible" : ""}`} id="top">
      <div className="hero__inner">
        <div className="hero__content">
          <h1 className="hero__title anim-reveal anim-reveal--1">
            {hero.title}
          </h1>
          <p className="hero__subtitle anim-reveal anim-reveal--2">
            {hero.subtitle}
          </p>
          <div className="hero__cta anim-reveal anim-reveal--3">
            <a className="btn btn--dark btn--lg" href="#contact">
              {hero.cta}
            </a>
          </div>

          {/* Animated stat counters */}
          <div className="hero-stats anim-reveal anim-reveal--4">
            {counterData.map((s, i) => (
              <AnimatedCounter
                key={i}
                end={s.end}
                prefix={s.prefix}
                suffix={s.suffix}
                decimals={s.decimals || 0}
                label={s.label}
              />
            ))}
          </div>
        </div>

        {/* Right visual — animated payment card */}
        <div className="hero__visual anim-reveal anim-reveal--2">
          <PaymentCard />

          {/* Floating brand elements */}
          <div className="hero-float hero-float--1" aria-hidden="true">
            <span className="hero-float__pill">PCI DSS L1</span>
          </div>
          <div className="hero-float hero-float--2" aria-hidden="true">
            <span className="hero-float__pill hero-float__pill--green">
              Payment authorised ✓
            </span>
          </div>
          <div className="hero-float hero-float--3" aria-hidden="true">
            <span className="hero-float__pill">99.999% uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
