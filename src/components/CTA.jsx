export default function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="container cta__inner">
        <h2 className="cta__title">Ready to grow with a single platform?</h2>
        <p className="cta__subtitle">
          Talk to our team about how Adyen can power payments for your business.
        </p>
        <div className="cta__actions">
          <a className="btn btn--primary btn--lg" href="#contact-form">
            Contact sales
          </a>
          <a className="btn btn--ghost btn--lg" href="#">
            See pricing
          </a>
        </div>
      </div>
    </section>
  );
}
