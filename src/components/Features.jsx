import { features } from "../data/content.js";

const icons = {
  globe: "🌐",
  store: "🏬",
  shield: "🛡️",
  chart: "📊",
};

export default function Features() {
  return (
    <section className="features" id="payments">
      <div className="container">
        <header className="section-head">
          <h2 className="section-head__title">One platform, end to end</h2>
          <p className="section-head__subtitle">
            Everything you need to accept payments and grow, connected through a
            single integration.
          </p>
        </header>
        <div className="features__grid">
          {features.map((feature) => (
            <article key={feature.id} className="feature-card">
              <div className="feature-card__icon" aria-hidden="true">
                {icons[feature.icon]}
              </div>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__body">{feature.body}</p>
              <a className="feature-card__link" href={`#${feature.id}`}>
                Learn more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
