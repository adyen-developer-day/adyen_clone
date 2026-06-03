import { stats } from "../data/content.js";
import BeaverMascot from "./BeaverMascot.jsx";

export default function Stats() {
  return (
    <section className="section stats" id="about">
      <div className="container">
        <div className="stats__header">
          <h2 className="stats__statement">
            <span className="stats__lead">{stats.lead}</span>{" "}
            <span className="stats__trail">{stats.trail}</span>
          </h2>
          <div className="stats__mascot">
            <BeaverMascot scene="flag" size={160} />
          </div>
        </div>
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
