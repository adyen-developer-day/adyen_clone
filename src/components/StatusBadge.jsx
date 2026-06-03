import { getStatusColor, getStatusLabel } from "../data/flights";

export default function StatusBadge({ status }) {
  const color = getStatusColor(status);
  const label = getStatusLabel(status);

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 13,
        fontWeight: 600,
        color,
      }}
    >
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: color,
          flexShrink: 0,
        }}
      />
      {label}
    </span>
  );
}
