import { useEffect, useRef, useState } from "react";
import { hero } from "../data/content.js";

function useAnimatedProgress(target, duration = 2400) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { value, ref };
}

function Win95TitleBar({ title, onClose }) {
  return (
    <div className="win95-titlebar">
      <span className="win95-titlebar__text">{title}</span>
      <div className="win95-titlebar__controls">
        <button className="win95-titlebar__btn" aria-label="Minimize" tabIndex={-1}>_</button>
        <button className="win95-titlebar__btn" aria-label="Maximize" tabIndex={-1}>□</button>
        <button className="win95-titlebar__btn win95-titlebar__btn--close" onClick={onClose} aria-label="Close" tabIndex={-1}>×</button>
      </div>
    </div>
  );
}

function PaymentDialog({ progress, progressRef }) {
  return (
    <div className="win95-dialog hero__pop-in hero__pop-in--delay-2" aria-hidden="true">
      <Win95TitleBar title="💰 Payment Processing" />
      <div className="win95-dialog__body">
        <p className="win95-dialog__text">
          Processing €1.4T in transactions...
        </p>
        <div className="win95-progress" ref={progressRef}>
          <div
            className="win95-progress__fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="win95-dialog__status">
          {progress < 100 ? `${progress}% complete` : "✓ Transaction approved!"}
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  const progress = useAnimatedProgress(100, 2800);
  const [dialogDismissed, setDialogDismissed] = useState(false);

  return (
    <section className="hero hero--win95" id="top">
      <div className="hero__desktop-icons" aria-hidden="true">
        <div className="hero__icon">
          <div className="hero__icon-img">💳</div>
          <span className="hero__icon-label">Payments.exe</span>
        </div>
        <div className="hero__icon">
          <div className="hero__icon-img">📊</div>
          <span className="hero__icon-label">Analytics</span>
        </div>
        <div className="hero__icon">
          <div className="hero__icon-img">🌐</div>
          <span className="hero__icon-label">Internet</span>
        </div>
      </div>

      <div className="hero__inner">
        <div className="win95-window hero__pop-in">
          <Win95TitleBar title="Adyen.exe — The Financial Technology Platform" />
          <div className="win95-window__menu">
            <span className="win95-window__menu-item"><u>F</u>ile</span>
            <span className="win95-window__menu-item"><u>E</u>dit</span>
            <span className="win95-window__menu-item"><u>V</u>iew</span>
            <span className="win95-window__menu-item"><u>H</u>elp</span>
          </div>
          <div className="win95-window__body">
            <h1 className="hero__title">{hero.title}</h1>
            <p className="hero__subtitle">{hero.subtitle}</p>
            <div className="hero__cta">
              <a className="win95-btn win95-btn--primary" href="#contact">
                {hero.cta}
              </a>
              <span className="hero__cta-hint">
                Press Enter or click OK to continue
              </span>
            </div>
          </div>
        </div>

        {!dialogDismissed && (
          <PaymentDialog
            progress={progress.value}
            progressRef={progress.ref}
          />
        )}

        <div className="win95-alert hero__pop-in hero__pop-in--delay-3" aria-hidden="true">
          <Win95TitleBar title="Adyen" />
          <div className="win95-alert__body">
            <span className="win95-alert__icon">ℹ️</span>
            <p className="win95-alert__text">
              99.999% uptime since 1995*<br />
              <small>*OK, since 2006. But we&apos;re that reliable.</small>
            </p>
          </div>
          <div className="win95-alert__actions">
            <button className="win95-btn" tabIndex={-1}>OK</button>
          </div>
        </div>
      </div>

      <div className="hero__taskbar" aria-hidden="true">
        <button className="hero__start-btn" tabIndex={-1}>
          <span className="hero__start-logo">⊞</span> Start
        </button>
        <div className="hero__taskbar-items">
          <div className="hero__taskbar-item hero__taskbar-item--active">
            Adyen.exe
          </div>
          <div className="hero__taskbar-item">Payment Processing</div>
        </div>
        <div className="hero__taskbar-clock">
          {new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </section>
  );
}
