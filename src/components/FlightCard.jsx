import { Link } from "react-router-dom";
import { airlines, airports, getStatusColor } from "../data/flights";
import StatusBadge from "./StatusBadge";

function formatTime(iso) {
  const d = new Date(iso);
  return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default function FlightCard({ flight }) {
  const airline = airlines[flight.airline] || {};
  const origin = airports[flight.origin] || {};
  const dest = airports[flight.destination] || {};
  const isInAir = flight.status === "in-air";

  return (
    <Link to={`/flight/${flight.id}`} style={{ display: "block" }}>
      <div
        style={{
          background: "var(--bg-card)",
          borderRadius: "var(--radius-lg)",
          padding: 16,
          borderLeft: `3px solid ${airline.color || "var(--border)"}`,
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-card-hover)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "var(--bg-card)")}
      >
        {/* Top row: airline + flight number / status */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-secondary)" }}>
            {flight.flightNumber}
          </span>
          <StatusBadge status={flight.status} />
        </div>

        {/* Airport codes with route line */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
          <span style={{ fontSize: 32, fontWeight: 700, letterSpacing: -1 }}>{flight.origin}</span>

          <div style={{ flex: 1, display: "flex", alignItems: "center", margin: "0 12px" }}>
            <div
              style={{
                flex: 1,
                height: 1,
                borderTop: "2px dashed var(--text-tertiary)",
              }}
            />
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="var(--text-secondary)"
              style={{ margin: "0 4px", flexShrink: 0 }}
            >
              <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
            <div
              style={{
                flex: 1,
                height: 1,
                borderTop: "2px dashed var(--text-tertiary)",
              }}
            />
          </div>

          <span style={{ fontSize: 32, fontWeight: 700, letterSpacing: -1 }}>{flight.destination}</span>
        </div>

        {/* City names */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: isInAir ? 12 : 16 }}>
          <span style={{ fontSize: 12, color: "var(--text-tertiary)" }}>{origin.city}</span>
          <span style={{ fontSize: 12, color: "var(--text-tertiary)" }}>{dest.city}</span>
        </div>

        {/* In-air progress bar */}
        {isInAir && (
          <div style={{ marginBottom: 16 }}>
            <div
              style={{
                width: "100%",
                height: 3,
                background: "var(--border)",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${flight.progress || 0}%`,
                  height: "100%",
                  background: getStatusColor(flight.status),
                  borderRadius: 2,
                  transition: "width 0.3s ease",
                }}
              />
            </div>
          </div>
        )}

        {/* Bottom row: departure / date / arrival */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600 }}>{formatTime(flight.departureTime)}</div>
            <div style={{ fontSize: 11, color: "var(--text-tertiary)" }}>Depart</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 12, color: "var(--text-tertiary)" }}>{formatDate(flight.departureTime)}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 14, fontWeight: 600 }}>{formatTime(flight.arrivalTime)}</div>
            <div style={{ fontSize: 11, color: "var(--text-tertiary)" }}>Arrive</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
