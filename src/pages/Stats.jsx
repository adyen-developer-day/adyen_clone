import { stats, airlines } from '../data/flights';
import StatCard from '../components/StatCard';
import './Stats.css';

function formatNumber(n) {
  return n.toLocaleString();
}

export default function Stats() {
  const maxFlights = stats.topAirlines[0]?.flights || 1;
  const maxMonthly = Math.max(...stats.monthlyFlights.map(m => m.count));

  return (
    <div className="page-content">
      <div className="page-header">
        <h1 className="page-title">Stats</h1>
      </div>

      {/* Hero stats grid */}
      <div className="stats-hero-grid">
        <StatCard label="Total Flights" value={formatNumber(stats.totalFlights)} icon="✈" />
        <StatCard label="Total Miles" value={formatNumber(stats.totalMiles)} icon="📍" />
        <StatCard label="Total Hours" value={formatNumber(stats.totalHours)} icon="⏱" />
        <StatCard label="Countries" value={formatNumber(stats.countriesVisited)} icon="🌍" />
      </div>

      {/* Top Airlines */}
      <div className="stats-section">
        <h2 className="stats-section-title">Top Airlines</h2>
        <div className="card" style={{ padding: '16px' }}>
          {stats.topAirlines.map((a) => {
            const airline = airlines[a.code];
            const pct = (a.flights / maxFlights) * 100;
            return (
              <div className="airline-bar-row" key={a.code}>
                <span className="airline-bar-label">{a.code}</span>
                <div className="airline-bar-track">
                  <div
                    className="airline-bar-fill"
                    style={{ width: `${pct}%`, background: airline?.color || 'var(--accent)' }}
                  />
                </div>
                <span className="airline-bar-count">{a.flights}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Monthly Flights */}
      <div className="stats-section">
        <h2 className="stats-section-title">Monthly Flights</h2>
        <div className="card">
          <div className="monthly-chart">
            {stats.monthlyFlights.map((m) => {
              const barH = maxMonthly > 0 ? (m.count / maxMonthly) * 90 : 0;
              return (
                <div className="monthly-bar-col" key={m.month}>
                  <span className="monthly-bar-count">{m.count}</span>
                  <div className="monthly-bar" style={{ height: `${barH}px` }} />
                  <span className="monthly-bar-label">{m.month}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Records */}
      <div className="stats-section">
        <h2 className="stats-section-title">Records</h2>
        <div className="records-grid">
          <div className="record-card">
            <div className="record-card-label">Longest Flight</div>
            <div className="record-card-value">{stats.longestFlight.route}</div>
            <div className="record-card-detail">{formatNumber(stats.longestFlight.miles)} mi</div>
          </div>
          <div className="record-card">
            <div className="record-card-label">Most Frequent Route</div>
            <div className="record-card-value">{stats.mostFrequentRoute.route}</div>
            <div className="record-card-detail">{stats.mostFrequentRoute.count} trips</div>
          </div>
        </div>
      </div>
    </div>
  );
}
