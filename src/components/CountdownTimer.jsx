import { useState, useEffect } from "react";

const INITIAL_SECONDS = 23 * 3600 + 59 * 60 + 59; // 23:59:59

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function CountdownTimer() {
  const [remaining, setRemaining] = useState(INITIAL_SECONDS);

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining((prev) => (prev <= 0 ? INITIAL_SECONDS : prev - 1));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const hours = Math.floor(remaining / 3600);
  const minutes = Math.floor((remaining % 3600) / 60);
  const seconds = remaining % 60;

  return (
    <section className="countdown">
      <p className="countdown__label">Time until MGNUM hits $1,000,000</p>
      <p className="countdown__time">
        {pad(hours)}:{pad(minutes)}:{pad(seconds)}
      </p>
      <p className="countdown__subtitle">
        Limited time opportunity! (Timer resets because MGNUM never stops growing)
      </p>
    </section>
  );
}
