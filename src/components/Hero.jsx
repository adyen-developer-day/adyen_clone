import { useEffect, useState } from "react";
import { hero } from "../data/content.js";

const prefersReducedMotion = () =>
  typeof window !== "undefined" && typeof window.matchMedia === "function"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

// Looping demo transactions that drive the dynamic payment visual.
const TRANSACTIONS = [
  { merchant: "Lumen Studios", amount: "€128.00", method: "Visa", last4: "4242" },
  { merchant: "Northwind Co.", amount: "$4,250.00", method: "Mastercard", last4: "8829" },
  { merchant: "Atlas Travel", amount: "£86.40", method: "Amex", last4: "1007" },
  { merchant: "Verde Market", amount: "€19.99", method: "iDEAL", last4: "5521" },
];

const METHODS = ["Visa", "Mastercard", "Apple Pay", "iDEAL", "PayPal", "Amex"];

export default function Hero() {
  const [reduced] = useState(prefersReducedMotion);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("processing"); // "processing" | "approved"
  const [scrollY, setScrollY] = useState(0);

  // Cycle each transaction through processing -> approved, then advance.
  useEffect(() => {
    if (reduced) {
      setPhase("approved");
      return undefined;
    }
    setPhase("processing");
    const approveT = setTimeout(() => setPhase("approved"), 1100);
    const nextT = setTimeout(
      () => setIndex((prev) => (prev + 1) % TRANSACTIONS.length),
      2800
    );
    return () => {
      clearTimeout(approveT);
      clearTimeout(nextT);
    };
  }, [index, reduced]);

  // Scroll-driven parallax for the visual layers.
  useEffect(() => {
    if (reduced) return undefined;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrollY(window.scrollY || 0));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  const txn = TRANSACTIONS[index];
  const approved = phase === "approved";

  return (
    <section className="hero" id="top" style={{ "--sy": scrollY }}>
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__blob hero__blob--a" />
        <span className="hero__blob hero__blob--b" />
        <span className="hero__grid" />
      </div>

      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            <span className="hero__pulse" aria-hidden="true" />
            Live payments platform
          </p>
          <h1 className="hero__title">{hero.title}</h1>
          <p className="hero__subtitle">{hero.subtitle}</p>
          <div className="hero__cta">
            <a className="btn btn--dark btn--lg" href="#contact">
              {hero.cta}
            </a>
            <a className="btn btn--ghost-ink btn--lg" href="#products">
              See the platform
            </a>
          </div>
          <dl className="hero__trust">
            <div>
              <dt>99.999%</dt>
              <dd>Uptime</dd>
            </div>
            <div>
              <dt>200+</dt>
              <dd>Payment methods</dd>
            </div>
            <div>
              <dt>€1.4T</dt>
              <dd>Processed / yr</dd>
            </div>
          </dl>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className={`paycard ${approved ? "is-approved" : ""}`}>
            <div className="paycard__shine" />
            <div className="paycard__head">
              <span className="paycard__merchant">{txn.merchant}</span>
              <span className="paycard__secure">Secure checkout</span>
            </div>

            <div className="paycard__amount" key={txn.amount}>
              {txn.amount}
            </div>

            <div className="paycard__row">
              <span className="paycard__brand">{txn.method}</span>
              <span className="paycard__dots">•••• {txn.last4}</span>
            </div>

            <div className={`paycard__status ${approved ? "is-approved" : ""}`}>
              {approved ? (
                <>
                  <svg className="paycard__check" viewBox="0 0 24 24">
                    <path
                      d="M5 12.5l4.2 4.2L19 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Payment approved
                </>
              ) : (
                <>
                  <span className="paycard__spinner" />
                  Processing payment…
                </>
              )}
            </div>

            <div className="paycard__bars">
              {[0, 1, 2, 3, 4, 5, 6].map((b) => (
                <span key={b} style={{ "--b": b }} />
              ))}
            </div>
          </div>

          <ul className="hero__chips">
            {METHODS.map((m, i) => (
              <li key={m} style={{ "--i": i }}>
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a className="hero__scrollcue" href="#products" aria-label="Scroll to products">
        <span />
      </a>
    </section>
  );
}
