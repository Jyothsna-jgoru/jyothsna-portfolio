import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

export type RevealDirection = "up" | "down" | "left" | "right" | "fade" | "scale";

const OFFSETS: Record<RevealDirection, string> = {
  up: "translate3d(0, 34px, 0)",
  down: "translate3d(0, -26px, 0)",
  left: "translate3d(-40px, 0, 0)",
  right: "translate3d(40px, 0, 0)",
  fade: "none",
  scale: "scale(0.96)",
};

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Fires once when the element scrolls into view.
 *
 * The root is deliberately extended far above the viewport
 * (`9999px` top margin). Anything the reader has already scrolled
 * past therefore counts as intersecting, so a fast flick — or an
 * anchor jump straight down the page — can never leave a block
 * stranded at `opacity: 0`. Content below the fold still waits
 * until it is genuinely approaching.
 */
export function useInView<T extends HTMLElement>(
  threshold = 0.15,
  rootMargin = "9999px 0px -70px 0px"
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Older browsers (and JSDOM) simply show the content.
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    // Already scrolled past on mount (deep link, restored position).
    if (el.getBoundingClientRect().bottom < 0) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, inView };
}

interface RevealProps {
  children: ReactNode;
  direction?: RevealDirection;
  /** seconds */
  delay?: number;
  /** seconds */
  duration?: number;
  className?: string;
  style?: CSSProperties;
}

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.72,
  className = "",
  style,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [reduced] = useState(prefersReducedMotion);

  const visible = inView || reduced;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : OFFSETS[direction],
        transition: reduced
          ? undefined
          : `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: visible ? undefined : "opacity, transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
