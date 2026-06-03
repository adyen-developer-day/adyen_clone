export default function FlightProgress({ progress, departureTime, arrivalTime, delay }) {
  const formatTime = (isoString, delayMinutes) => {
    const date = new Date(isoString);
    const options = { hour: "numeric", minute: "2-digit", hour12: true };
    const original = date.toLocaleTimeString("en-US", options);
    if (!delayMinutes) return { display: original, original: null };
    const delayed = new Date(date.getTime() + delayMinutes * 60000);
    const delayedStr = delayed.toLocaleTimeString("en-US", options);
    return { display: delayedStr, original };
  };

  const dep = formatTime(departureTime, 0);
  const arr = formatTime(arrivalTime, delay);

  return (
    <div style={{ padding: "16px 0" }}>
      {/* Progress bar */}
      <div style={{
        position: "relative",
        height: "6px",
        background: "var(--bg-card)",
        borderRadius: "3px",
        overflow: "visible",
      }}>
        <div style={{
          height: "100%",
          width: `${progress}%`,
          background: "var(--accent)",
          borderRadius: "3px",
          transition: "width 0.3s ease",
        }} />
        {/* Plane icon at progress point */}
        {progress > 0 && progress < 100 && (
          <div style={{
            position: "absolute",
            top: "-9px",
            left: `${progress}%`,
            transform: "translateX(-50%)",
            fontSize: "14px",
          }}>
            ✈
          </div>
        )}
      </div>

      {/* Times */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "10px",
        fontSize: "13px",
      }}>
        <span style={{ color: "var(--text-secondary)" }}>{dep.display}</span>
        <div style={{ textAlign: "right" }}>
          {arr.original && (
            <span style={{
              color: "var(--text-tertiary)",
              textDecoration: "line-through",
              marginRight: "6px",
              fontSize: "12px",
            }}>
              {arr.original}
            </span>
          )}
          <span style={{ color: arr.original ? "var(--accent-orange)" : "var(--text-secondary)" }}>
            {arr.display}
          </span>
        </div>
      </div>
    </div>
  );
}
