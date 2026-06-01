export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">The financial technology platform</p>
          <h1 className="hero__title">
            Make payments work for your business, everywhere
          </h1>
          <p className="hero__subtitle">
            One platform to accept payments, manage risk, and unlock financial
            products — across online, in-app, and in-store.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary btn--lg" href="#contact">
              Contact sales
            </a>
            <a className="btn btn--ghost btn--lg" href="#docs">
              Read the docs
            </a>
          </div>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__card">
            <span className="hero__card-dot" />
            <span className="hero__card-dot" />
            <div className="hero__card-amount">€ 1,284.00</div>
            <div className="hero__card-label">Settled today</div>
          </div>
        </div>
      </div>
    </section>
  );
}
