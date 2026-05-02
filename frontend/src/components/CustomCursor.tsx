import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -200, y: -200 });
  const lag = useRef({ x: -200, y: -200 });
  const scale = useRef(1);
  const raf = useRef(0);

  useEffect(() => {
    // hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = () => { scale.current = 2.4; };
    const onLeave = () => { scale.current = 1; };

    const bindTargets = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    bindTargets();
    const mo = new MutationObserver(bindTargets);
    mo.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("mousemove", onMove);

    function tick() {
      lag.current.x += (pos.current.x - lag.current.x) * 0.13;
      lag.current.y += (pos.current.y - lag.current.y) * 0.13;

      if (ring.current) {
        ring.current.style.transform = `translate(${lag.current.x - 20}px, ${lag.current.y - 20}px) scale(${scale.current})`;
      }
      if (dot.current) {
        dot.current.style.transform = `translate(${pos.current.x - 3}px, ${pos.current.y - 3}px)`;
      }

      raf.current = requestAnimationFrame(tick);
    }
    raf.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMove);
      mo.disconnect();
    };
  }, []);

  return (
    <>
      {/* Lagging glow ring */}
      <div
        ref={ring}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999] transition-[transform] duration-[50ms]"
        style={{
          border: "1.5px solid rgba(11,116,176,0.55)",
          boxShadow: "0 0 12px rgba(11,116,176,0.25), inset 0 0 6px rgba(11,116,176,0.08)",
          transitionProperty: "transform",
        }}
      />
      {/* Snapping inner dot */}
      <div
        ref={dot}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#0B74B0] pointer-events-none z-[9999]"
        style={{ boxShadow: "0 0 6px rgba(11,116,176,0.8)" }}
      />
    </>
  );
}
