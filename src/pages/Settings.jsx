import './Settings.css';

function Toggle({ on }) {
  return (
    <div className={`settings-toggle ${on ? 'on' : 'off'}`}>
      <div className="settings-toggle-knob" />
    </div>
  );
}

function Selector({ options, active }) {
  return (
    <div className="settings-selector">
      {options.map((o) => (
        <span
          key={o}
          className={`settings-selector-option${o === active ? ' active' : ''}`}
        >
          {o}
        </span>
      ))}
    </div>
  );
}

export default function Settings() {
  return (
    <div className="page-content">
      <div className="page-header">
        <h1 className="page-title">Settings</h1>
      </div>

      {/* Profile */}
      <div className="settings-profile">
        <div className="settings-avatar">JD</div>
        <div className="settings-profile-info">
          <span className="settings-profile-name">John Doe</span>
          <span className="settings-profile-email">john@example.com</span>
        </div>
      </div>

      {/* Preferences */}
      <div className="settings-section">
        <div className="settings-section-title">Preferences</div>
        <div className="settings-row">
          <span className="settings-row-label">Push Notifications</span>
          <Toggle on={true} />
        </div>
        <div className="settings-row">
          <span className="settings-row-label">Distance Unit</span>
          <Selector options={['Miles', 'Kilometers']} active="Miles" />
        </div>
        <div className="settings-row">
          <span className="settings-row-label">Temperature</span>
          <Selector options={['°F', '°C']} active="°F" />
        </div>
        <div className="settings-row">
          <span className="settings-row-label">Dark Mode</span>
          <Toggle on={true} />
        </div>
      </div>

      {/* About */}
      <div className="settings-section">
        <div className="settings-section-title">About</div>
        <div className="settings-row">
          <span className="settings-row-label">Version</span>
          <span className="settings-row-value">4.2.1</span>
        </div>
        <div className="settings-row">
          <span className="settings-row-label">Rate on App Store</span>
          <span className="settings-row-arrow">›</span>
        </div>
        <div className="settings-row">
          <span className="settings-row-label">Privacy Policy</span>
          <span className="settings-row-arrow">›</span>
        </div>
        <div className="settings-row">
          <span className="settings-row-label">Terms of Service</span>
          <span className="settings-row-arrow">›</span>
        </div>
      </div>
    </div>
  );
}
