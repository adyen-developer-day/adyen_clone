export default function FlightMap({ origin, destination, progress, status }) {
  const width = 380;
  const height = 200;
  const padding = 50;

  const startX = padding;
  const endX = width - padding;
  const midX = (startX + endX) / 2;
  const baseY = 140;
  const controlY = 50;

  // Calculate plane position along the quadratic bezier
  const t = progress / 100;
  const planeX = (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * midX + t * t * endX;
  const planeY = (1 - t) * (1 - t) * baseY + 2 * (1 - t) * t * controlY + t * t * baseY;

  const arcPath = `M ${startX} ${baseY} Q ${midX} ${controlY} ${endX} ${baseY}`;

  const getStrokeStyle = () => {
    if (status === "landed") return { stroke: "var(--accent)", strokeDasharray: "none", opacity: 1 };
    if (status === "in-air") return { stroke: "var(--accent)", strokeDasharray: "none", opacity: 1 };
    return { stroke: "var(--text-tertiary)", strokeDasharray: "8 6", opacity: 0.6 };
  };

  const strokeStyle = getStrokeStyle();

  return (
    <div style={{
      background: "var(--bg-card)",
      borderRadius: "var(--radius-lg)",
      padding: "16px",
      width: "100%",
    }}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        height="200"
        style={{ display: "block" }}
      >
        {/* Grid lines for effect */}
        {[60, 90, 120, 150].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2={width}
            y2={y}
            stroke="var(--border)"
            strokeWidth="0.5"
            opacity="0.4"
          />
        ))}
        {[80, 160, 240, 320].map((x) => (
          <line
            key={x}
            x1={x}
            y1="40"
            x2={x}
            y2={height}
            stroke="var(--border)"
            strokeWidth="0.5"
            opacity="0.4"
          />
        ))}

        {/* Flight arc */}
        <path
          d={arcPath}
          fill="none"
          stroke={strokeStyle.stroke}
          strokeWidth="2.5"
          strokeDasharray={strokeStyle.strokeDasharray}
          opacity={strokeStyle.opacity}
          strokeLinecap="round"
        />

        {/* Traveled portion for in-air */}
        {status === "in-air" && progress > 0 && (
          <path
            d={arcPath}
            fill="none"
            stroke="var(--accent-light)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={`${(progress / 100) * 320} 1000`}
          />
        )}

        {/* Origin dot */}
        <circle cx={startX} cy={baseY} r="5" fill="var(--accent)" />
        {/* Destination dot */}
        <circle cx={endX} cy={baseY} r="5" fill={status === "landed" ? "var(--accent-green)" : "var(--accent)"} />

        {/* Origin label */}
        <text x={startX} y={baseY + 22} textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text-primary)">
          {origin}
        </text>

        {/* Destination label */}
        <text x={endX} y={baseY + 22} textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--text-primary)">
          {destination}
        </text>

        {/* Plane icon for in-air */}
        {status === "in-air" && (
          <g transform={`translate(${planeX}, ${planeY})`}>
            <text
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="16"
              fill="var(--text-primary)"
            >
              ✈
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
