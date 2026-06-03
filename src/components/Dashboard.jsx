import {
  dashboardMeta,
  kpis,
  deviceModels,
  statusBreakdown,
  regions,
  firmwareRollout,
  alerts,
} from "../data/devices.js";
import AdyenLogo from "./AdyenLogo.jsx";

function formatNumber(n) {
  return n.toLocaleString("en-US");
}

function StatusDonut({ items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  let cursor = 0;
  const stops = items
    .map((item) => {
      const start = (cursor / total) * 100;
      cursor += item.value;
      const end = (cursor / total) * 100;
      return `${item.color} ${start}% ${end}%`;
    })
    .join(", ");

  return (
    <div className="donut">
      <div
        className="donut__ring"
        style={{ background: `conic-gradient(${stops})` }}
        role="img"
        aria-label="Fleet status distribution"
      >
        <div className="donut__hole">
          <span className="donut__total">{formatNumber(total)}</span>
          <span className="donut__caption">devices</span>
        </div>
      </div>
      <ul className="donut__legend">
        {items.map((item) => (
          <li key={item.key} className="donut__legend-item">
            <span
              className="donut__swatch"
              style={{ background: item.color }}
              aria-hidden="true"
            />
            <span className="donut__legend-label">{item.label}</span>
            <span className="donut__legend-value">
              {formatNumber(item.value)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="dash">
      <header className="dash__bar">
        <div className="dash__bar-inner">
          <a className="dash__brand" href="#top" aria-label="Adyen home">
            <AdyenLogo height={22} />
          </a>
          <span className="dash__brand-divider" aria-hidden="true" />
          <span className="dash__brand-label">Terminal fleet console</span>
          <a className="btn btn--ghost-dark dash__back" href="#top">
            ← Back to site
          </a>
        </div>
      </header>

      <main className="dash__main container">
        <div className="dash__head">
          <div>
            <h1 className="dash__title">{dashboardMeta.title}</h1>
            <p className="dash__subtitle">{dashboardMeta.subtitle}</p>
          </div>
          <span className="dash__updated">
            <span className="dash__pulse" aria-hidden="true" />
            {dashboardMeta.lastUpdated}
          </span>
        </div>

        <section className="dash__kpis" aria-label="Key metrics">
          {kpis.map((kpi) => (
            <article key={kpi.id} className="kpi">
              <span className="kpi__label">{kpi.label}</span>
              <span className="kpi__value">{kpi.value}</span>
              <span className={`kpi__delta kpi__delta--${kpi.trend}`}>
                {kpi.delta}
                <span className="kpi__delta-label">{kpi.deltaLabel}</span>
              </span>
            </article>
          ))}
        </section>

        <div className="dash__grid">
          <section className="card card--wide" aria-labelledby="models-h">
            <div className="card__head">
              <h2 id="models-h" className="card__title">
                Portfolio by model
              </h2>
              <span className="card__hint">{deviceModels.length} models</span>
            </div>
            <table className="dtable">
              <thead>
                <tr>
                  <th scope="col">Model</th>
                  <th scope="col">Family</th>
                  <th scope="col" className="dtable__num">
                    Units
                  </th>
                  <th scope="col">Status</th>
                  <th scope="col">Firmware</th>
                  <th scope="col" className="dtable__num">
                    Volume / day
                  </th>
                </tr>
              </thead>
              <tbody>
                {deviceModels.map((d) => {
                  const onlinePct = Math.round(
                    (d.status.online / d.total) * 100
                  );
                  return (
                    <tr key={d.model}>
                      <th scope="row" className="dtable__model">
                        {d.model}
                      </th>
                      <td>{d.family}</td>
                      <td className="dtable__num">{formatNumber(d.total)}</td>
                      <td>
                        <div className="statusbar" title={`${onlinePct}% online`}>
                          <span
                            className="statusbar__fill"
                            style={{ width: `${onlinePct}%` }}
                          />
                          <span className="statusbar__pct">{onlinePct}%</span>
                        </div>
                      </td>
                      <td>
                        <span className="chip chip--mono">{d.firmware}</span>
                      </td>
                      <td className="dtable__num">{d.volume}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>

          <section className="card" aria-labelledby="status-h">
            <div className="card__head">
              <h2 id="status-h" className="card__title">
                Fleet status
              </h2>
            </div>
            <StatusDonut items={statusBreakdown} />
          </section>

          <section className="card" aria-labelledby="regions-h">
            <div className="card__head">
              <h2 id="regions-h" className="card__title">
                Regional distribution
              </h2>
            </div>
            <ul className="barlist">
              {regions.map((r) => (
                <li key={r.region} className="barlist__row">
                  <span className="barlist__label">{r.region}</span>
                  <span className="barlist__track">
                    <span
                      className="barlist__fill"
                      style={{ width: `${r.share}%` }}
                    />
                  </span>
                  <span className="barlist__value">
                    {formatNumber(r.devices)}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="card" aria-labelledby="fw-h">
            <div className="card__head">
              <h2 id="fw-h" className="card__title">
                Firmware rollout
              </h2>
            </div>
            <ul className="fwlist">
              {firmwareRollout.map((f) => (
                <li key={f.version} className="fwlist__row">
                  <div className="fwlist__top">
                    <span className="fwlist__label">{f.version}</span>
                    <span className="fwlist__pct">{f.share}%</span>
                  </div>
                  <span className="fwlist__track">
                    <span
                      className={`fwlist__fill fwlist__fill--${f.tone}`}
                      style={{ width: `${f.share}%` }}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="card" aria-labelledby="alerts-h">
            <div className="card__head">
              <h2 id="alerts-h" className="card__title">
                Recent alerts
              </h2>
              <span className="card__hint">{alerts.length}</span>
            </div>
            <ul className="feed">
              {alerts.map((a) => (
                <li key={a.id} className="feed__row">
                  <span className={`feed__dot feed__dot--${a.severity}`} />
                  <div className="feed__body">
                    <p className="feed__title">{a.title}</p>
                    <span className="feed__time">{a.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
