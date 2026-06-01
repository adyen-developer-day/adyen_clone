import { stats } from "../data/content.js";

export default function Stats() {
  return (
    <section className="stats" id="insights">
      <div className="container stats__grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat">
            <div className="stat__value">{stat.value}</div>
            <div className="stat__label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
