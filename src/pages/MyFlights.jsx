import { useState } from "react";
import { flights } from "../data/flights";
import FlightCard from "../components/FlightCard";

const UPCOMING_STATUSES = ["on-time", "delayed", "in-air", "boarding"];
const PAST_STATUSES = ["landed", "cancelled"];

export default function MyFlights() {
  const [tab, setTab] = useState("upcoming");

  const upcoming = flights.filter((f) => UPCOMING_STATUSES.includes(f.status));
  const past = flights.filter((f) => PAST_STATUSES.includes(f.status));
  const list = tab === "upcoming" ? upcoming : past;

  return (
    <div className="page-content">
      {/* Header */}
      <div className="page-header">
        <h1 className="page-title">My Flights</h1>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 24, marginBottom: 24, borderBottom: "1px solid var(--border)" }}>
        {["upcoming", "past"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              background: "none",
              border: "none",
              color: tab === t ? "var(--text-primary)" : "var(--text-tertiary)",
              fontSize: 15,
              fontWeight: 600,
              paddingBottom: 12,
              cursor: "pointer",
              borderBottom: tab === t ? "2px solid var(--accent)" : "2px solid transparent",
              transition: "color 0.2s, border-color 0.2s",
              fontFamily: "inherit",
            }}
          >
            {t === "upcoming" ? "Upcoming" : "Past"}
          </button>
        ))}
      </div>

      {/* Flight list */}
      {list.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "48px 0",
            color: "var(--text-tertiary)",
            fontSize: 15,
          }}
        >
          {tab === "upcoming" ? "No upcoming flights" : "No past flights"}
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {list.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </div>
      )}

      {/* Floating action button */}
      <button
        style={{
          position: "fixed",
          bottom: 100,
          right: "calc(50% - 215px + 16px)",
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "var(--accent)",
          border: "none",
          color: "#fff",
          fontSize: 28,
          fontWeight: 300,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(59, 130, 246, 0.4)",
          transition: "transform 0.2s, box-shadow 0.2s",
          zIndex: 50,
          fontFamily: "inherit",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.08)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(59, 130, 246, 0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 16px rgba(59, 130, 246, 0.4)";
        }}
        aria-label="Add flight"
      >
        +
      </button>
    </div>
  );
}
