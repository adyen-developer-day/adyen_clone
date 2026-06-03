import { airports } from '../data/flights';
import './Airport.css';

const featured = airports.SFO;
const terminals = ['Terminal 1', 'Terminal 2', 'Terminal 3', 'International Terminal'];
const nearby = [airports.OAK, airports.SJC].filter(Boolean);

export default function Airport() {
  return (
    <div className="page-content">
      <div className="page-header">
        <h1 className="page-title">Airport</h1>
      </div>

      {/* Search bar */}
      <div className="airport-search">
        <span className="airport-search-icon">🔍</span>
        <input
          className="airport-search-input"
          placeholder="Search airports..."
          readOnly
        />
      </div>

      {/* Featured Airport */}
      <div className="featured-airport">
        <div className="featured-airport-code">{featured.code}</div>
        <div className="featured-airport-name">{featured.name}</div>
        <div className="featured-airport-row">
          <div className="featured-airport-info">
            <span className="icon">⛅</span>
            <span className="weather-text">72°F Partly Cloudy</span>
          </div>
          <div className="featured-airport-info">
            <span className="icon">✅</span>
            <span className="delay-ok">No Major Delays</span>
          </div>
        </div>
      </div>

      {/* Terminals */}
      <h2 className="airport-section-title">Terminals</h2>
      <div className="terminal-list">
        {terminals.map((t) => (
          <div className="terminal-item" key={t}>
            <span>{t}</span>
            <span className="terminal-item-arrow">›</span>
          </div>
        ))}
      </div>

      {/* Nearby Airports */}
      <h2 className="airport-section-title">Nearby Airports</h2>
      <div className="nearby-grid">
        {nearby.length > 0 ? (
          nearby.map((a) => (
            <div className="nearby-card" key={a.code}>
              <div className="nearby-card-code">{a.code}</div>
              <div className="nearby-card-city">{a.city}</div>
            </div>
          ))
        ) : (
          <>
            <div className="nearby-card">
              <div className="nearby-card-code">OAK</div>
              <div className="nearby-card-city">Oakland</div>
            </div>
            <div className="nearby-card">
              <div className="nearby-card-code">SJC</div>
              <div className="nearby-card-city">San Jose</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
