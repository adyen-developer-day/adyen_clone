export default function Win95Window({ title, children, className = "" }) {
  return (
    <div className={`win95-window ${className}`}>
      <div className="win95-titlebar">
        <span className="win95-titlebar__text">{title}</span>
        <div className="win95-titlebar__controls">
          <button className="win95-titlebar__btn" aria-label="Minimize" tabIndex={-1}>_</button>
          <button className="win95-titlebar__btn" aria-label="Maximize" tabIndex={-1}>□</button>
          <button className="win95-titlebar__btn win95-titlebar__btn--close" aria-label="Close" tabIndex={-1}>×</button>
        </div>
      </div>
      <div className="win95-window__body">
        {children}
      </div>
    </div>
  );
}
