import { useParams, Link } from "react-router-dom";
import { flights, airlines, airports } from "../data/flights";
import FlightMap from "../components/FlightMap";
import FlightProgress from "../components/FlightProgress";
import InfoCard from "../components/InfoCard";
import "./FlightDetail.css";

function formatTime(isoString) {
  const date = new Date(isoString);
  return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
}

function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function formatDuration(dep, arr) {
  const ms = new Date(arr).getTime() - new Date(dep).getTime();
  const hours = Math.floor(ms / 3600000);
  const minutes = Math.round((ms % 3600000) / 60000);
  return `${hours}h ${minutes}m`;
}

export default function FlightDetail() {
  const { id } = useParams();
  const flight = flights.find((f) => f.id === id);

  if (!flight) {
    return (
      <div className="page-content not-found">
        <h2>Flight not found</h2>
        <Link to="/">← Back to My Flights</Link>
      </div>
    );
  }

  const airline = airlines[flight.airline];
  const origin = airports[flight.origin];
  const destination = airports[flight.destination];

  return (
    <div className="page-content">
      {/* Back button */}
      <Link to="/" className="flight-detail-back">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        My Flights
      </Link>

      {/* Flight header */}
      <div className="flight-detail-header">
        <h2>{airline.name}</h2>
        <h1>{flight.flightNumber}</h1>
        <div className="aircraft">{flight.aircraft}</div>
      </div>

      <div className="flight-detail-sections">
        {/* Flight Map */}
        <FlightMap
          origin={flight.origin}
          destination={flight.destination}
          progress={flight.progress}
          status={flight.status}
        />

        {/* Flight Progress */}
        <FlightProgress
          progress={flight.progress}
          departureTime={flight.departureTime}
          arrivalTime={flight.arrivalTime}
          delay={flight.delay}
        />

        {/* Departure Card */}
        <InfoCard title="Departure">
          <div className="info-row">
            <span className="info-label">Airport</span>
            <span className="info-value large">{origin.code}</span>
          </div>
          <div className="info-row">
            <span className="info-label">City</span>
            <span className="info-value">{origin.city}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Time</span>
            <span className="info-value">{formatTime(flight.departureTime)}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Date</span>
            <span className="info-value">{formatDate(flight.departureTime)}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Terminal</span>
            <span className="info-value">{flight.terminal}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Gate</span>
            <span className="info-value">{flight.gate}</span>
          </div>
        </InfoCard>

        {/* Arrival Card */}
        <InfoCard title="Arrival">
          <div className="info-row">
            <span className="info-label">Airport</span>
            <span className="info-value large">{destination.code}</span>
          </div>
          <div className="info-row">
            <span className="info-label">City</span>
            <span className="info-value">{destination.city}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Time</span>
            <span className={`info-value${flight.delay ? " orange" : ""}`}>
              {formatTime(flight.arrivalTime)}
              {flight.delay && ` (+${flight.delay}m)`}
            </span>
          </div>
          <div className="info-row">
            <span className="info-label">Date</span>
            <span className="info-value">{formatDate(flight.arrivalTime)}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Terminal</span>
            <span className="info-value">{flight.arrivalTerminal}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Gate</span>
            <span className="info-value">{flight.arrivalGate}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Baggage</span>
            <span className="info-value">{flight.baggage}</span>
          </div>
        </InfoCard>

        {/* Flight Info Card */}
        <InfoCard title="Flight Info">
          <div className="info-row">
            <span className="info-label">Distance</span>
            <span className="info-value">{flight.distance.toLocaleString()} mi</span>
          </div>
          <div className="info-row">
            <span className="info-label">Duration</span>
            <span className="info-value">{formatDuration(flight.departureTime, flight.arrivalTime)}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Seat</span>
            <span className="info-value">{flight.seat}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Class</span>
            <span className="info-value">{flight.seatClass}</span>
          </div>
        </InfoCard>
      </div>
    </div>
  );
}
