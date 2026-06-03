import { useEffect, useRef } from "react";

// Spawns fading "bullet" tracers that trail the gun cursor as it moves.
// Disabled automatically when the user prefers reduced motion.
export default function CursorTrail() {
  const layerRef = useRef(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return undefined;

    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return undefined;

    let last = 0;
    const spawn = (e) => {
      const now =
        typeof performance !== "undefined" ? performance.now() : Date.now();
      if (now - last < 35) return;
      last = now;

      const dot = document.createElement("span");
      dot.className = "bullet-trail__dot";
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      dot.style.setProperty("--dx", `${(Math.random() * 16 - 8).toFixed(1)}px`);
      dot.style.setProperty("--dy", `${(12 + Math.random() * 16).toFixed(1)}px`);
      layer.appendChild(dot);
      dot.addEventListener("animationend", () => dot.remove());
    };

    window.addEventListener("mousemove", spawn);
    return () => window.removeEventListener("mousemove", spawn);
  }, []);

  return <div ref={layerRef} className="bullet-trail" aria-hidden="true" />;
}
