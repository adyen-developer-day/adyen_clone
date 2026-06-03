import { useEffect, useRef, useState } from "react";

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789€$£¥₿";
const FONT_SIZE = 16;
const FADE_DURATION = 600; // ms
const DISPLAY_DURATION = 2500; // ms

export default function MatrixLoader() {
  const canvasRef = useRef(null);
  const [phase, setPhase] = useState("visible"); // visible | fading | done

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animId;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const columns = Math.floor(canvas.width / FONT_SIZE);
    const drops = Array.from({ length: columns }, () =>
      Math.random() * -canvas.height / FONT_SIZE
    );

    function draw() {
      ctx.fillStyle = "rgba(0, 18, 34, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00d16a";
      ctx.font = `${FONT_SIZE}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;

        ctx.globalAlpha = 0.4 + Math.random() * 0.6;
        ctx.fillText(char, x, y);
        ctx.globalAlpha = 1;

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.6 + Math.random() * 0.4;
      }

      animId = requestAnimationFrame(draw);
    }

    // Fill background once so first frame isn't transparent
    ctx.fillStyle = "#001222";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    draw();

    const fadeTimer = setTimeout(() => setPhase("fading"), DISPLAY_DURATION);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(fadeTimer);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    if (phase === "fading") {
      const doneTimer = setTimeout(() => setPhase("done"), FADE_DURATION);
      return () => clearTimeout(doneTimer);
    }
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      className={`matrix-loader${phase === "fading" ? " matrix-loader--fade" : ""}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
