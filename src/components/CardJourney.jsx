import { useEffect, useRef, useState } from "react";
import { cardJourney } from "../data/content.js";

// Apple-style scroll-driven showcase: as the user scrolls through a tall
// section, a payment card animates downward, tilts flat, and "taps" into a
// payment terminal. A sticky stage keeps the scene pinned while the inner
// scroll position (0 -> 1) drives every transform.

// A wind/cooling fan — a wink at the "Only Fans" line item.
// Swept pinwheel blades inside a circular guard so it reads clearly as a fan.
function CeilingFan({ className }) {
  const blade = "M24 24 C22 16 24 8 31 6 C29 13 28 19 24 24 Z";
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      width="24"
      height="24"
      aria-hidden="true"
    >
      <circle
        cx="24"
        cy="24"
        r="21"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <g fill="currentColor">
        <path d={blade} />
        <path d={blade} transform="rotate(90 24 24)" />
        <path d={blade} transform="rotate(180 24 24)" />
        <path d={blade} transform="rotate(270 24 24)" />
      </g>
      <circle cx="24" cy="24" r="3.6" fill="currentColor" />
      <circle cx="24" cy="24" r="1.5" fill="#f6f5f4" />
    </svg>
  );
}

const clamp = (n, min = 0, max = 1) => Math.min(max, Math.max(min, n));
const lerp = (a, b, t) => a + (b - a) * t;
// Eased sub-range: maps progress within [from, to] to a smooth 0..1.
const phase = (p, from, to) => {
  const t = clamp((p - from) / (to - from));
  return t * t * (3 - 2 * t); // smoothstep
};

export default function CardJourney() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setProgress(1);
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      // 0 when the section top hits the viewport top,
      // 1 when its bottom reaches the viewport bottom.
      const p = clamp(-rect.top / (scrollable || 1));
      setProgress(p);
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Card travels from high + tilted, flattens onto the terminal, "taps",
  // then lifts away and fades to reveal the approval on the screen.
  const drop = phase(progress, 0, 0.5);
  const tap = phase(progress, 0.46, 0.64);
  const lift = phase(progress, 0.68, 0.98);
  const approved = phase(progress, 0.72, 0.94);

  const cardY = lerp(-150, 64, drop) - tap * 12 - lift * 210;
  const cardRotX = lerp(58, 8, drop) + lift * 26;
  const cardRotZ = lerp(-16, 0, drop);
  const cardScale = lerp(1.08, 0.92, drop) + lift * 0.06;
  // Keep the card at a positive depth so, inside the preserve-3d scene, it
  // always paints in front of the terminal (which sits further back).
  const cardZ = lerp(140, 60, drop) + lift * 40;
  const cardOpacity = 1 - lift;
  const cardGlow = 0.18 + tap * 0.5;

  const activeStep = approved > 0.2 ? 2 : tap > 0.05 ? 1 : 0;

  return (
    <section className="cardjourney" ref={sectionRef} aria-label="From card to terminal">
      <div className="cardjourney__sticky">
        <div className="container cardjourney__inner">
          <div className="cardjourney__copy">
            <span className="cardjourney__eyebrow">{cardJourney.eyebrow}</span>
            <h2 className="cardjourney__title">
              <span className="cardjourney__lead">{cardJourney.lead}</span>{" "}
              <span className="cardjourney__trail">{cardJourney.trail}</span>
            </h2>
            <ol className="cardjourney__steps">
              {cardJourney.steps.map((step, i) => (
                <li
                  key={step.title}
                  className={`cardjourney__step${
                    i <= activeStep ? " is-active" : ""
                  }`}
                >
                  <span className="cardjourney__step-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="cardjourney__step-text">
                    <span className="cardjourney__step-title">{step.title}</span>
                    <span className="cardjourney__step-body">{step.body}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="cardjourney__stage" aria-hidden="true">
            <div className="cardjourney__scene">
              {/* Payment card */}
              <div
                className="cardjourney__card"
                style={{
                  transform: `translateY(${cardY}px) translateZ(${cardZ}px) rotateX(${cardRotX}deg) rotateZ(${cardRotZ}deg) scale(${cardScale})`,
                  opacity: cardOpacity,
                  boxShadow: `0 ${lerp(8, 30, drop)}px ${lerp(
                    24,
                    60,
                    drop
                  )}px rgba(0,18,34,${cardGlow})`,
                }}
              >
                <div className="cardjourney__card-chip" />
                <div className="cardjourney__card-wave" />
                <div className="cardjourney__card-number">
                  •••• •••• •••• 0214
                </div>
                <div className="cardjourney__card-brand">adyen</div>
              </div>

              {/* Payment terminal */}
              <div className="cardjourney__terminal">
                <div
                  className="cardjourney__terminal-screen"
                  style={{ "--approved": approved }}
                >
                  <span className="cardjourney__terminal-item">
                    <CeilingFan className="cardjourney__terminal-fan" />
                    <span className="cardjourney__terminal-item-text">
                      <span className="cardjourney__terminal-item-name">
                        {cardJourney.purchase.item}
                      </span>
                      <span className="cardjourney__terminal-item-plan">
                        {cardJourney.purchase.plan}
                      </span>
                    </span>
                  </span>
                  <span className="cardjourney__terminal-amount">
                    {cardJourney.purchase.amount}
                  </span>
                  <span
                    className="cardjourney__terminal-status"
                    style={{ opacity: 1 - approved }}
                  >
                    Tap your card
                  </span>
                  <span
                    className="cardjourney__terminal-declined"
                    style={{
                      opacity: approved,
                      transform: `scale(${lerp(0.6, 1, approved)})`,
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                      <path
                        d="M6 6l12 12M18 6L6 18"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Declined
                  </span>
                </div>
                <div className="cardjourney__terminal-keys">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span key={i} className="cardjourney__terminal-key" />
                  ))}
                </div>
                <div
                  className="cardjourney__terminal-pulse"
                  style={{ opacity: tap * (1 - approved) }}
                />
              </div>

              <div
                className="cardjourney__shadow"
                style={{
                  opacity: lerp(0.05, 0.22, drop),
                  transform: `scale(${lerp(0.7, 1, drop)})`,
                }}
              />
            </div>
          </div>
        </div>
        <div className="cardjourney__scrollhint" style={{ opacity: 1 - drop }}>
          <span>Scroll</span>
        </div>
      </div>
    </section>
  );
}
