export default function InfoCard({ title, children }) {
  return (
    <div style={{
      background: "var(--bg-card)",
      borderRadius: "var(--radius-lg)",
      padding: "16px",
    }}>
      {title && (
        <div style={{
          fontSize: "12px",
          fontWeight: 600,
          color: "var(--text-tertiary)",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
          marginBottom: "12px",
        }}>
          {title}
        </div>
      )}
      {children}
    </div>
  );
}
