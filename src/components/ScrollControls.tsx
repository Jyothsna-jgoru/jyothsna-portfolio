import { useEffect, useRef, useState } from "react";

/**
 * Thin reading-progress bar pinned above the navbar.
 * Writes straight to the DOM node inside a rAF, so scrolling
 * never triggers a React re-render.
 */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const el = barRef.current;
      if (!el) return;
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      el.style.transform = `scaleX(${ratio})`;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent"
    >
      <div
        ref={barRef}
        className="h-full origin-left"
        style={{
          transform: "scaleX(0)",
          background: "linear-gradient(90deg, #8b5cf6, #a78bfa 45%, #38bdf8)",
        }}
      />
    </div>
  );
}

/** Floating "return to top" control, revealed after the first screen. */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-7 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full
                  border border-line-strong text-white backdrop-blur-md
                  transition-all duration-300 ease-smooth hover:-translate-y-1
                  ${visible ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
      style={{
        background: "linear-gradient(135deg, rgba(139,92,246,0.92), rgba(109,40,217,0.92))",
        boxShadow: "0 14px 34px -14px rgba(139,92,246,0.95)",
      }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
