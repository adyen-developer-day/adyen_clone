import { hero } from "../data/content.js";

function renderTitle(title, highlight) {
  if (!highlight || !title.includes(highlight)) {
    return title;
  }
  const idx = title.indexOf(highlight);
  const before = title.slice(0, idx);
  const after = title.slice(idx + highlight.length);
  return (
    <>
      {before}
      <span className="hero__title-accent">{highlight}</span>
      {after}
    </>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__orb hero__orb--1" />
        <span className="hero__orb hero__orb--2" />
        <span className="hero__grid" />
      </div>
      <div className="hero__inner">
        {hero.eyebrow && (
          <span className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />
            {hero.eyebrow}
          </span>
        )}
        <h1 className="hero__title">{renderTitle(hero.title, hero.highlight)}</h1>
        <p className="hero__subtitle">{hero.subtitle}</p>
        <div className="hero__cta">
          <a className="btn btn--dark btn--lg" href="#contact">
            {hero.cta}
          </a>
          {hero.ctaSecondary && (
            <a
              className="btn btn--lg hero__cta-secondary"
              href={hero.ctaSecondaryHref || "#products"}
            >
              {hero.ctaSecondary}
              <span className="hero__cta-arrow" aria-hidden="true">
                →
              </span>
            </a>
          )}
        </div>
        {hero.stats?.length > 0 && (
          <dl className="hero__stats">
            {hero.stats.map((stat) => (
              <div className="hero__stat" key={stat.label}>
                <dt className="hero__stat-value">{stat.value}</dt>
                <dd className="hero__stat-label">{stat.label}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
