import { useRef, useEffect, useCallback } from "react";

const PADDLE_WIDTH = 14;
const PADDLE_HEIGHT = 100;
const BALL_SIZE = 14;
const PADDLE_MARGIN = 30;
const AI_SPEED = 4.5;
const WINNING_SCORE = 7;

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

export default function PongGame() {
  const canvasRef = useRef(null);
  const stateRef = useRef(null);
  const animRef = useRef(null);

  const resetBall = useCallback((state, direction) => {
    state.ball.x = state.width / 2;
    state.ball.y = state.height / 2;
    const angle = (Math.random() * Math.PI) / 3 - Math.PI / 6;
    const speed = 5;
    state.ball.vx = speed * direction * Math.cos(angle);
    state.ball.vy = speed * Math.sin(angle);
  }, []);

  const initState = useCallback(
    (w, h) => {
      const state = {
        width: w,
        height: h,
        player: { y: h / 2 - PADDLE_HEIGHT / 2 },
        ai: { y: h / 2 - PADDLE_HEIGHT / 2 },
        ball: { x: w / 2, y: h / 2, vx: 0, vy: 0 },
        score: { player: 0, ai: 0 },
        mouseY: h / 2,
        winner: null,
        paused: true,
      };
      resetBall(state, 1);
      state.paused = true;
      state.ball.vx = 0;
      state.ball.vy = 0;
      return state;
    },
    [resetBall]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (stateRef.current) {
        stateRef.current.width = canvas.width;
        stateRef.current.height = canvas.height;
      }
    }

    resize();
    stateRef.current = initState(canvas.width, canvas.height);
    window.addEventListener("resize", resize);

    function onMouseMove(e) {
      if (!stateRef.current) return;
      stateRef.current.mouseY = e.clientY;
      if (stateRef.current.paused && !stateRef.current.winner) {
        stateRef.current.paused = false;
        resetBall(stateRef.current, 1);
      }
    }

    function onClick() {
      if (!stateRef.current) return;
      if (stateRef.current.winner) {
        stateRef.current = initState(canvas.width, canvas.height);
      }
    }

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("click", onClick);

    function update(s) {
      if (s.paused || s.winner) return;

      // Player paddle follows mouse
      s.player.y = clamp(
        s.mouseY - PADDLE_HEIGHT / 2,
        0,
        s.height - PADDLE_HEIGHT
      );

      // AI paddle
      const aiCenter = s.ai.y + PADDLE_HEIGHT / 2;
      if (s.ball.y < aiCenter - 10) s.ai.y -= AI_SPEED;
      else if (s.ball.y > aiCenter + 10) s.ai.y += AI_SPEED;
      s.ai.y = clamp(s.ai.y, 0, s.height - PADDLE_HEIGHT);

      // Ball movement
      s.ball.x += s.ball.vx;
      s.ball.y += s.ball.vy;

      // Top/bottom bounce
      if (s.ball.y - BALL_SIZE / 2 <= 0) {
        s.ball.y = BALL_SIZE / 2;
        s.ball.vy *= -1;
      }
      if (s.ball.y + BALL_SIZE / 2 >= s.height) {
        s.ball.y = s.height - BALL_SIZE / 2;
        s.ball.vy *= -1;
      }

      // Player paddle collision (left side)
      const px = PADDLE_MARGIN + PADDLE_WIDTH;
      if (
        s.ball.vx < 0 &&
        s.ball.x - BALL_SIZE / 2 <= px &&
        s.ball.x - BALL_SIZE / 2 >= PADDLE_MARGIN &&
        s.ball.y >= s.player.y &&
        s.ball.y <= s.player.y + PADDLE_HEIGHT
      ) {
        s.ball.x = px + BALL_SIZE / 2;
        const relHit = (s.ball.y - (s.player.y + PADDLE_HEIGHT / 2)) / (PADDLE_HEIGHT / 2);
        const speed = Math.sqrt(s.ball.vx ** 2 + s.ball.vy ** 2) * 1.05;
        const angle = relHit * (Math.PI / 4);
        s.ball.vx = speed * Math.cos(angle);
        s.ball.vy = speed * Math.sin(angle);
      }

      // AI paddle collision (right side)
      const ax = s.width - PADDLE_MARGIN - PADDLE_WIDTH;
      if (
        s.ball.vx > 0 &&
        s.ball.x + BALL_SIZE / 2 >= ax &&
        s.ball.x + BALL_SIZE / 2 <= s.width - PADDLE_MARGIN &&
        s.ball.y >= s.ai.y &&
        s.ball.y <= s.ai.y + PADDLE_HEIGHT
      ) {
        s.ball.x = ax - BALL_SIZE / 2;
        const relHit = (s.ball.y - (s.ai.y + PADDLE_HEIGHT / 2)) / (PADDLE_HEIGHT / 2);
        const speed = Math.sqrt(s.ball.vx ** 2 + s.ball.vy ** 2) * 1.05;
        const angle = relHit * (Math.PI / 4);
        s.ball.vx = -speed * Math.cos(angle);
        s.ball.vy = speed * Math.sin(angle);
      }

      // Scoring
      if (s.ball.x < 0) {
        s.score.ai++;
        if (s.score.ai >= WINNING_SCORE) {
          s.winner = "AI";
        } else {
          resetBall(s, 1);
        }
      }
      if (s.ball.x > s.width) {
        s.score.player++;
        if (s.score.player >= WINNING_SCORE) {
          s.winner = "You";
        } else {
          resetBall(s, -1);
        }
      }
    }

    function draw(s) {
      // Background
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, s.width, s.height);

      // Center line
      ctx.setLineDash([10, 14]);
      ctx.strokeStyle = "rgba(255,255,255,0.15)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(s.width / 2, 0);
      ctx.lineTo(s.width / 2, s.height);
      ctx.stroke();
      ctx.setLineDash([]);

      // Paddles
      ctx.fillStyle = "#00d16a";
      ctx.shadowColor = "#00d16a";
      ctx.shadowBlur = 16;
      ctx.fillRect(PADDLE_MARGIN, s.player.y, PADDLE_WIDTH, PADDLE_HEIGHT);

      ctx.fillStyle = "#ff4d4d";
      ctx.shadowColor = "#ff4d4d";
      ctx.shadowBlur = 16;
      ctx.fillRect(
        s.width - PADDLE_MARGIN - PADDLE_WIDTH,
        s.ai.y,
        PADDLE_WIDTH,
        PADDLE_HEIGHT
      );

      ctx.shadowBlur = 0;

      // Ball
      ctx.fillStyle = "#fff";
      ctx.shadowColor = "#fff";
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(s.ball.x, s.ball.y, BALL_SIZE / 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Score
      ctx.fillStyle = "rgba(255,255,255,0.8)";
      ctx.font = "bold 64px monospace";
      ctx.textAlign = "center";
      ctx.fillText(s.score.player, s.width / 2 - 80, 80);
      ctx.fillText(s.score.ai, s.width / 2 + 80, 80);

      // Labels
      ctx.font = "14px monospace";
      ctx.fillStyle = "rgba(255,255,255,0.4)";
      ctx.fillText("YOU", s.width / 2 - 80, 100);
      ctx.fillText("AI", s.width / 2 + 80, 100);

      // Start / Winner message
      if (s.paused && !s.winner) {
        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.font = "24px monospace";
        ctx.fillText("Move your mouse to start", s.width / 2, s.height / 2 + 60);
      }

      if (s.winner) {
        ctx.fillStyle = s.winner === "You" ? "#00d16a" : "#ff4d4d";
        ctx.font = "bold 48px monospace";
        ctx.fillText(`${s.winner} win!`, s.width / 2, s.height / 2);
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.font = "20px monospace";
        ctx.fillText("Click to play again", s.width / 2, s.height / 2 + 50);
      }
    }

    function loop() {
      const s = stateRef.current;
      if (!s) return;
      update(s);
      draw(s);
      animRef.current = requestAnimationFrame(loop);
    }

    animRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("click", onClick);
    };
  }, [initState, resetBall]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        width: "100vw",
        height: "100vh",
        cursor: "none",
      }}
    />
  );
}
