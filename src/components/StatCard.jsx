export default function StatCard({ label, value, icon }) {
  return (
    <div style={{
      background: 'var(--bg-card)',
      borderRadius: 'var(--radius-lg)',
      padding: '20px 16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
    }}>
      {icon && <span style={{ fontSize: '24px', marginBottom: '4px' }}>{icon}</span>}
      <span style={{
        fontSize: '28px',
        fontWeight: '700',
        color: 'var(--text-primary)',
        letterSpacing: '-0.5px',
      }}>{value}</span>
      <span style={{
        fontSize: '12px',
        color: 'var(--text-secondary)',
        fontWeight: '500',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
      }}>{label}</span>
    </div>
  );
}
