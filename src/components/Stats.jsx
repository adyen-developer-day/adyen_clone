import { stats } from "../data/content.js";
import Win95Window from "./Win95Window.jsx";

export default function Stats() {
  return (
    <section className="section stats win95-section" id="about">
      <div className="container">
        <Win95Window title="📊 System Properties — Performance">
          <h2 className="stats__statement">
            <span className="stats__lead">{stats.lead}</span>{" "}
            <span className="stats__trail">{stats.trail}</span>
          </h2>
          <dl className="stats__grid">
            {stats.items.map((stat) => (
              <div key={stat.label} className="stat win95-stat">
                <dt className="stat__value">{stat.value}</dt>
                <dd className="stat__label">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Win95Window>
      </div>
    </section>
  );
}
