import { hero } from "../data/content.js";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">
            <b>New</b> Real-time payments, live in 30+ markets
          </span>
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
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="paycard">
            <div className="paycard__head">
              <span className="paycard__brand">Adyen Checkout</span>
              <span className="paycard__status">
                <span className="paycard__dot" />
                Approved
              </span>
            </div>
            <div className="paycard__amount">
              €1,284<span>.00</span>
            </div>
            <p className="paycard__label">Settled instantly · 3 currencies</p>
            <div className="paycard__rows">
              <div className="payrow">
                <span>Authorization</span>
                <b>142 ms</b>
              </div>
              <div className="payrow">
                <span>Conversion uplift</span>
                <b>+6.4%</b>
              </div>
            </div>
            <div className="paybar">
              <div className="paybar__fill" />
            </div>
          </div>

          <span className="chip chip--1">
            <i />
            Cards
          </span>
          <span className="chip chip--2">
            <i />
            Apple Pay
          </span>
          <span className="chip chip--3">
            <i />
            iDEAL
          </span>
        </div>
      </div>
    </section>
  );
}
