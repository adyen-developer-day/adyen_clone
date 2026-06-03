import { stats } from "../data/content.js";
import useScrollReveal from "../hooks/useScrollReveal.js";

export default function Stats() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} className="section stats scroll-reveal" id="about">
      <div className="container">
        <h2 className="stats__statement">
          <span className="stats__lead">{stats.lead}</span>{" "}
          <span className="stats__trail">{stats.trail}</span>
        </h2>
        <dl className="stats__grid">
          {stats.items.map((stat) => (
            <div key={stat.label} className="stat">
              <dt className="stat__value">{stat.value}</dt>
              <dd className="stat__label">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
