import { useState, useEffect, useRef, useCallback } from "react";

/* ===== EXPERIENCE LOGOS ===== */
import zomatoLogo from "../assets/zomato.png";
import healthplixLogo from "../assets/healthplix.png";
import aicteLogo from "../assets/aicte.png";

/* ===== EDUCATION LOGOS ===== */
import ubLogo from "../assets/ub.png";
import vbitLogo from "../assets/vbit.png";

/* ===== CERTIFICATE IMAGES ===== */
import cloudCert from "../assets/cloud.png";
import networkCert from "../assets/networkCert.png";
import pythonCert from "../assets/pythonCert.png";
import awsCert from "../assets/awsCert.png";
import ciscoCert from "../assets/CiscoCert.png";
import oracleCert from "../assets/oracleCert.png";

/* ===== PROJECT IMAGES ===== */
import lyricChordImg from "../assets/lyricChord.png";
import droneRLImg from "../assets/droneRL.png";
import taskflowImg from "../assets/taskflow.png";
import mediaPipelineImg from "../assets/mediaPipeline.png";
import kvStoreImg from "../assets/kvStore.png";
import sqlPlatformImg from "../assets/sqlPlatform.png";
import profileImg from "../assets/profile.jpg";
interface ProjectsProps {
  onBack: () => void;
}

/* ================= SCROLL ANIMATION HOOK ================= */

function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );
    const current = ref.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [threshold]);

  return { ref, isVisible };
}

/* ================= ANIMATED SECTION WRAPPER ================= */

type AnimDirection = "left" | "right" | "bottom" | "fade";

function AnimatedBlock({
  children,
  direction = "bottom",
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  direction?: AnimDirection;
  delay?: number;
  className?: string;
}) {
  const { ref, isVisible } = useScrollReveal(0.1);

  const directionStyles: Record<AnimDirection, string> = {
    left: "translate(-80px, 0)",
    right: "translate(80px, 0)",
    bottom: "translate(0, 60px)",
    fade: "translate(0, 0)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0,0)" : directionStyles[direction],
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ================= STAGGER ITEM ================= */

function StaggerItem({
  children,
  index,
  direction = "bottom",
  baseDelay = 0,
  className = "",
}: {
  children: React.ReactNode;
  index: number;
  direction?: AnimDirection;
  baseDelay?: number;
  className?: string;
}) {
  return (
    <AnimatedBlock
      direction={direction}
      delay={baseDelay + index * 0.1}
      className={className}
    >
      {children}
    </AnimatedBlock>
  );
}

/* ================= SECTION HEADING ================= */

function SectionHeading({
  white,
  purple,
  direction = "left",
}: {
  white: string;
  purple: string;
  direction?: AnimDirection;
}) {
  return (
    <AnimatedBlock direction={direction}>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        {white} <span className="text-purple-500">{purple}</span>
      </h2>
    </AnimatedBlock>
  );
}

/* ================= GLOWING DIVIDER ================= */

function GlowDivider() {
  return (
    <AnimatedBlock direction="fade" className="my-24 flex justify-center">
      <div className="w-48 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60" />
    </AnimatedBlock>
  );
}

/* ================= 3D CARD ================= */

function ThreeDCard({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <div
      onClick={onClick}
      className={`
        rounded-2xl
        bg-gradient-to-br from-[#111827] via-[#182033] to-[#1F2937]
        border border-gray-700
        shadow-[0_10px_30px_rgba(0,0,0,0.45)]
        transition-all duration-300 transform-gpu
        hover:-translate-y-2 hover:scale-[1.02]
        hover:shadow-[0_18px_40px_rgba(168,85,247,0.25)]
        hover:border-purple-500
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div style={{ transform: "translateZ(14px)" }}>{children}</div>
    </div>
  );
}

/* ================= CUSTOM SVG ICONS ================= */

function SqlIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <ellipse cx="24" cy="12" rx="16" ry="6" fill="none" stroke="#4FC3F7" strokeWidth="2.5" />
      <path d="M8 12v24c0 3.3 7.2 6 16 6s16-2.7 16-6V12" fill="none" stroke="#4FC3F7" strokeWidth="2.5" />
      <ellipse cx="24" cy="24" rx="16" ry="6" fill="none" stroke="#4FC3F7" strokeWidth="1.5" opacity="0.5" />
      <text x="24" y="30" textAnchor="middle" fill="#4FC3F7" fontSize="8" fontWeight="bold" fontFamily="monospace">SQL</text>
    </svg>
  );
}

function ApiIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <rect x="6" y="8" width="14" height="14" rx="3" fill="none" stroke="#66BB6A" strokeWidth="2.5" />
      <rect x="28" y="26" width="14" height="14" rx="3" fill="none" stroke="#66BB6A" strokeWidth="2.5" />
      <path d="M20 15h8v3h-8z" fill="#66BB6A" opacity="0.6" />
      <path d="M24 15v18" stroke="#66BB6A" strokeWidth="2.5" strokeDasharray="3 2" />
      <circle cx="24" cy="24" r="3" fill="#66BB6A" />
    </svg>
  );
}

function WebSocketIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <path d="M8 32l8-8 8 8 8-8 8 8" fill="none" stroke="#FF7043" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 16l8 8 8-8 8 8 8-8" fill="none" stroke="#FF7043" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <circle cx="8" cy="32" r="2.5" fill="#FF7043" />
      <circle cx="40" cy="32" r="2.5" fill="#FF7043" />
    </svg>
  );
}

function SseIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <path d="M10 12h28" stroke="#AB47BC" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M10 20h22" stroke="#AB47BC" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
      <path d="M10 28h16" stroke="#AB47BC" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      <path d="M10 36h10" stroke="#AB47BC" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
      <polygon points="38,18 42,24 38,30" fill="#AB47BC" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <path d="M24 4L8 12v12c0 10.5 6.8 20.3 16 24 9.2-3.7 16-13.5 16-24V12L24 4z" fill="none" stroke="#FFA726" strokeWidth="2.5" />
      <path d="M17 24l5 5 9-9" fill="none" stroke="#FFA726" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GraphApiIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <circle cx="24" cy="14" r="5" fill="none" stroke="#00B0FF" strokeWidth="2.5" />
      <circle cx="12" cy="34" r="5" fill="none" stroke="#00B0FF" strokeWidth="2.5" />
      <circle cx="36" cy="34" r="5" fill="none" stroke="#00B0FF" strokeWidth="2.5" />
      <line x1="21" y1="18" x2="14" y2="30" stroke="#00B0FF" strokeWidth="2" />
      <line x1="27" y1="18" x2="34" y2="30" stroke="#00B0FF" strokeWidth="2" />
      <line x1="17" y1="34" x2="31" y2="34" stroke="#00B0FF" strokeWidth="2" />
    </svg>
  );
}

function CosmosIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <circle cx="24" cy="24" r="16" fill="none" stroke="#0078D4" strokeWidth="2" />
      <ellipse cx="24" cy="24" rx="16" ry="6" fill="none" stroke="#0078D4" strokeWidth="2" transform="rotate(45 24 24)" />
      <ellipse cx="24" cy="24" rx="16" ry="6" fill="none" stroke="#0078D4" strokeWidth="2" transform="rotate(-45 24 24)" />
      <circle cx="24" cy="24" r="3" fill="#0078D4" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <path d="M8 40V20l12 12V20l12 12V8" fill="none" stroke="#26A69A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points="32,4 36,12 28,12" fill="#26A69A" />
    </svg>
  );
}

function TestIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <rect x="8" y="6" width="32" height="36" rx="4" fill="none" stroke="#4CAF50" strokeWidth="2.5" />
      <path d="M16 18l4 4 8-8" fill="none" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 30l4 4 8-8" fill="none" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </svg>
  );
}

function IntegrationIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <rect x="4" y="16" width="12" height="12" rx="2" fill="none" stroke="#7E57C2" strokeWidth="2.5" />
      <rect x="32" y="16" width="12" height="12" rx="2" fill="none" stroke="#7E57C2" strokeWidth="2.5" />
      <rect x="18" y="4" width="12" height="12" rx="2" fill="none" stroke="#7E57C2" strokeWidth="2.5" />
      <rect x="18" y="32" width="12" height="12" rx="2" fill="none" stroke="#7E57C2" strokeWidth="2.5" />
      <line x1="24" y1="16" x2="24" y2="32" stroke="#7E57C2" strokeWidth="2" />
      <line x1="16" y1="22" x2="32" y2="22" stroke="#7E57C2" strokeWidth="2" />
    </svg>
  );
}

function JunitIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <circle cx="24" cy="24" r="16" fill="none" stroke="#DC4A3D" strokeWidth="2.5" />
      <path d="M16 24l6 6 10-12" fill="none" stroke="#25A162" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <text x="24" y="44" textAnchor="middle" fill="#DC4A3D" fontSize="6" fontWeight="bold" fontFamily="monospace">JU</text>
    </svg>
  );
}

function CicdIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <path d="M24 8a16 16 0 0 1 0 32" fill="none" stroke="#42A5F5" strokeWidth="2.5" />
      <path d="M24 40a16 16 0 0 1 0-32" fill="none" stroke="#EF5350" strokeWidth="2.5" />
      <polygon points="28,8 24,2 20,8" fill="#42A5F5" />
      <polygon points="20,40 24,46 28,40" fill="#EF5350" />
    </svg>
  );
}

function RollbackIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <path d="M16 8l-8 8 8 8" fill="none" stroke="#FF8A65" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 16h24c5.5 0 10 4.5 10 10s-4.5 10-10 10H16" fill="none" stroke="#FF8A65" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function RunbookIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <path d="M12 6h24a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4z" fill="none" stroke="#78909C" strokeWidth="2.5" />
      <path d="M16 16h16M16 24h12M16 32h8" stroke="#78909C" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 12h4M8 20h4M8 28h4" stroke="#78909C" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function LoggingIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <rect x="6" y="6" width="36" height="36" rx="4" fill="none" stroke="#80CBC4" strokeWidth="2.5" />
      <text x="12" y="18" fill="#80CBC4" fontSize="7" fontFamily="monospace" opacity="0.7">&gt;_</text>
      <path d="M12 24h24M12 30h18M12 36h12" stroke="#80CBC4" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <rect x="4" y="8" width="40" height="28" rx="3" fill="none" stroke="#FFB74D" strokeWidth="2.5" />
      <polyline points="10,28 18,20 24,26 34,16" fill="none" stroke="#FFB74D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="34" cy="16" r="2" fill="#FF5252" />
      <line x1="20" y1="40" x2="28" y2="40" stroke="#FFB74D" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function QueryIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <circle cx="20" cy="20" r="12" fill="none" stroke="#90CAF9" strokeWidth="2.5" />
      <line x1="29" y1="29" x2="40" y2="40" stroke="#90CAF9" strokeWidth="3" strokeLinecap="round" />
      <text x="20" y="23" textAnchor="middle" fill="#90CAF9" fontSize="9" fontFamily="monospace" fontWeight="bold">Q</text>
    </svg>
  );
}

function IndexIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <rect x="8" y="6" width="8" height="36" rx="2" fill="none" stroke="#CE93D8" strokeWidth="2" />
      <rect x="20" y="14" width="8" height="28" rx="2" fill="none" stroke="#CE93D8" strokeWidth="2" opacity="0.8" />
      <rect x="32" y="22" width="8" height="20" rx="2" fill="none" stroke="#CE93D8" strokeWidth="2" opacity="0.6" />
    </svg>
  );
}

function OptimizeIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <circle cx="24" cy="24" r="16" fill="none" stroke="#4DB6AC" strokeWidth="2.5" />
      <path d="M24 14v10l7 7" fill="none" stroke="#4DB6AC" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M34 10l4-2-2 4" fill="#4DB6AC" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <path d="M24 6c-4 0-7 2-8 5-3 0-6 3-6 6s2 5 4 6c-1 2-1 5 1 7s5 3 7 2c1 3 4 5 7 5" fill="none" stroke="#E040FB" strokeWidth="2" />
      <path d="M24 6c4 0 7 2 8 5 3 0 6 3 6 6s-2 5-4 6c1 2 1 5-1 7s-5 3-7 2c-1 3-4 5-7 5" fill="none" stroke="#E040FB" strokeWidth="2" />
      <line x1="24" y1="6" x2="24" y2="42" stroke="#E040FB" strokeWidth="1.5" opacity="0.4" />
    </svg>
  );
}

function QuantizeIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <rect x="6" y="6" width="16" height="16" rx="2" fill="none" stroke="#FF6E40" strokeWidth="2.5" />
      <rect x="26" y="6" width="8" height="8" rx="1" fill="none" stroke="#FF6E40" strokeWidth="2" />
      <rect x="36" y="6" width="6" height="6" rx="1" fill="none" stroke="#FF6E40" strokeWidth="1.5" opacity="0.7" />
      <rect x="26" y="16" width="6" height="6" rx="1" fill="none" stroke="#FF6E40" strokeWidth="1.5" opacity="0.7" />
      <text x="24" y="40" textAnchor="middle" fill="#FF6E40" fontSize="7" fontWeight="bold" fontFamily="monospace">4bit</text>
    </svg>
  );
}

function ModelIcon({ label, color }: { label: string; color: string }) {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <rect x="6" y="10" width="36" height="28" rx="4" fill="none" stroke={color} strokeWidth="2.5" />
      <circle cx="16" cy="24" r="4" fill="none" stroke={color} strokeWidth="2" />
      <circle cx="32" cy="24" r="4" fill="none" stroke={color} strokeWidth="2" />
      <line x1="20" y1="24" x2="28" y2="24" stroke={color} strokeWidth="2" />
      <text x="24" y="44" textAnchor="middle" fill={color} fontSize="5" fontFamily="monospace">{label}</text>
    </svg>
  );
}

function TreeIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <circle cx="24" cy="10" r="5" fill="none" stroke="#66BB6A" strokeWidth="2.5" />
      <circle cx="12" cy="28" r="4" fill="none" stroke="#66BB6A" strokeWidth="2" />
      <circle cx="36" cy="28" r="4" fill="none" stroke="#66BB6A" strokeWidth="2" />
      <circle cx="6" cy="42" r="3" fill="none" stroke="#66BB6A" strokeWidth="1.5" />
      <circle cx="18" cy="42" r="3" fill="none" stroke="#66BB6A" strokeWidth="1.5" />
      <circle cx="30" cy="42" r="3" fill="none" stroke="#66BB6A" strokeWidth="1.5" />
      <circle cx="42" cy="42" r="3" fill="none" stroke="#66BB6A" strokeWidth="1.5" />
      <line x1="24" y1="15" x2="12" y2="24" stroke="#66BB6A" strokeWidth="1.5" />
      <line x1="24" y1="15" x2="36" y2="24" stroke="#66BB6A" strokeWidth="1.5" />
      <line x1="12" y1="32" x2="6" y2="39" stroke="#66BB6A" strokeWidth="1.5" />
      <line x1="12" y1="32" x2="18" y2="39" stroke="#66BB6A" strokeWidth="1.5" />
      <line x1="36" y1="32" x2="30" y2="39" stroke="#66BB6A" strokeWidth="1.5" />
      <line x1="36" y1="32" x2="42" y2="39" stroke="#66BB6A" strokeWidth="1.5" />
    </svg>
  );
}

function SvmIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <line x1="6" y1="42" x2="42" y2="6" stroke="#F48FB1" strokeWidth="2.5" />
      <line x1="6" y1="38" x2="38" y2="6" stroke="#F48FB1" strokeWidth="1" opacity="0.3" strokeDasharray="3 2" />
      <line x1="10" y1="42" x2="42" y2="10" stroke="#F48FB1" strokeWidth="1" opacity="0.3" strokeDasharray="3 2" />
      <circle cx="14" cy="34" r="3" fill="#42A5F5" />
      <circle cx="10" cy="28" r="3" fill="#42A5F5" />
      <circle cx="18" cy="30" r="3" fill="#42A5F5" />
      <circle cx="34" cy="14" r="3" fill="#EF5350" />
      <circle cx="30" cy="10" r="3" fill="#EF5350" />
      <circle cx="38" cy="18" r="3" fill="#EF5350" />
    </svg>
  );
}

function BalanceIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <line x1="24" y1="6" x2="24" y2="42" stroke="#26C6DA" strokeWidth="2.5" />
      <line x1="8" y1="16" x2="40" y2="16" stroke="#26C6DA" strokeWidth="2.5" />
      <circle cx="8" cy="16" r="3" fill="#EF5350" opacity="0.8" />
      <circle cx="12" cy="16" r="3" fill="#EF5350" opacity="0.8" />
      <circle cx="40" cy="16" r="3" fill="#42A5F5" opacity="0.8" />
      <circle cx="36" cy="16" r="3" fill="#42A5F5" opacity="0.8" />
      <circle cx="32" cy="16" r="3" fill="#42A5F5" opacity="0.8" />
      <polygon points="24,6 20,2 28,2" fill="#26C6DA" />
    </svg>
  );
}

function CrossValIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <rect x="6" y="8" width="8" height="32" rx="1" fill="#7E57C2" opacity="0.3" />
      <rect x="16" y="8" width="8" height="32" rx="1" fill="#7E57C2" opacity="0.3" />
      <rect x="26" y="8" width="8" height="32" rx="1" fill="#7E57C2" opacity="0.3" />
      <rect x="36" y="8" width="8" height="32" rx="1" fill="#7E57C2" opacity="0.3" />
      <rect x="6" y="8" width="8" height="32" rx="1" fill="#7E57C2" opacity="0.8" />
      <rect x="16" y="16" width="8" height="8" rx="1" fill="#E040FB" opacity="0.6" />
      <rect x="26" y="24" width="8" height="8" rx="1" fill="#E040FB" opacity="0.6" />
      <rect x="36" y="32" width="8" height="8" rx="1" fill="#E040FB" opacity="0.6" />
    </svg>
  );
}

function MetricsIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <path d="M6 42 Q12 10, 24 24 Q36 38, 42 6" fill="none" stroke="#FDD835" strokeWidth="2.5" />
      <line x1="6" y1="42" x2="42" y2="42" stroke="#FDD835" strokeWidth="1.5" opacity="0.4" />
      <line x1="6" y1="42" x2="6" y2="6" stroke="#FDD835" strokeWidth="1.5" opacity="0.4" />
      <circle cx="24" cy="24" r="2.5" fill="#FDD835" />
    </svg>
  );
}

function MicroservicesIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <rect x="4" y="4" width="12" height="12" rx="3" fill="none" stroke="#42A5F5" strokeWidth="2" />
      <rect x="32" y="4" width="12" height="12" rx="3" fill="none" stroke="#66BB6A" strokeWidth="2" />
      <rect x="4" y="32" width="12" height="12" rx="3" fill="none" stroke="#FF7043" strokeWidth="2" />
      <rect x="32" y="32" width="12" height="12" rx="3" fill="none" stroke="#AB47BC" strokeWidth="2" />
      <line x1="16" y1="10" x2="32" y2="10" stroke="#78909C" strokeWidth="1.5" strokeDasharray="3 2" />
      <line x1="10" y1="16" x2="10" y2="32" stroke="#78909C" strokeWidth="1.5" strokeDasharray="3 2" />
      <line x1="38" y1="16" x2="38" y2="32" stroke="#78909C" strokeWidth="1.5" strokeDasharray="3 2" />
      <line x1="16" y1="38" x2="32" y2="38" stroke="#78909C" strokeWidth="1.5" strokeDasharray="3 2" />
    </svg>
  );
}

function DistributedIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <circle cx="24" cy="24" r="5" fill="none" stroke="#26C6DA" strokeWidth="2.5" />
      <circle cx="10" cy="10" r="4" fill="none" stroke="#26C6DA" strokeWidth="2" />
      <circle cx="38" cy="10" r="4" fill="none" stroke="#26C6DA" strokeWidth="2" />
      <circle cx="10" cy="38" r="4" fill="none" stroke="#26C6DA" strokeWidth="2" />
      <circle cx="38" cy="38" r="4" fill="none" stroke="#26C6DA" strokeWidth="2" />
      <line x1="20" y1="20" x2="13" y2="13" stroke="#26C6DA" strokeWidth="1.5" />
      <line x1="28" y1="20" x2="35" y2="13" stroke="#26C6DA" strokeWidth="1.5" />
      <line x1="20" y1="28" x2="13" y2="35" stroke="#26C6DA" strokeWidth="1.5" />
      <line x1="28" y1="28" x2="35" y2="35" stroke="#26C6DA" strokeWidth="1.5" />
    </svg>
  );
}

function EventDrivenIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <polygon points="24,4 28,18 20,18" fill="#FFA726" />
      <polygon points="24,18 30,36 18,36" fill="#FFA726" opacity="0.6" />
      <line x1="24" y1="36" x2="24" y2="44" stroke="#FFA726" strokeWidth="2" />
      <circle cx="12" cy="30" r="3" fill="none" stroke="#FFA726" strokeWidth="1.5" opacity="0.5" />
      <circle cx="36" cy="30" r="3" fill="none" stroke="#FFA726" strokeWidth="1.5" opacity="0.5" />
      <line x1="20" y1="28" x2="15" y2="30" stroke="#FFA726" strokeWidth="1" opacity="0.5" />
      <line x1="28" y1="28" x2="33" y2="30" stroke="#FFA726" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

function AsyncIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <path d="M8 16h12" stroke="#7E57C2" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M28 16h12" stroke="#7E57C2" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
      <path d="M8 24h12" stroke="#7E57C2" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
      <path d="M28 24h12" stroke="#7E57C2" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M8 32h12" stroke="#7E57C2" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M28 32h12" stroke="#7E57C2" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
      <polygon points="22,12 26,16 22,20" fill="#7E57C2" />
      <polygon points="26,28 22,32 26,36" fill="#7E57C2" opacity="0.7" />
    </svg>
  );
}

function CacheIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <rect x="8" y="8" width="32" height="32" rx="4" fill="none" stroke="#EF5350" strokeWidth="2.5" />
      <line x1="8" y1="20" x2="40" y2="20" stroke="#EF5350" strokeWidth="1.5" />
      <line x1="8" y1="32" x2="40" y2="32" stroke="#EF5350" strokeWidth="1.5" />
      <line x1="24" y1="8" x2="24" y2="40" stroke="#EF5350" strokeWidth="1.5" />
      <circle cx="16" cy="14" r="2" fill="#FDD835" />
      <circle cx="32" cy="26" r="2" fill="#FDD835" />
    </svg>
  );
}

function PolyglotIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <ellipse cx="14" cy="14" rx="10" ry="5" fill="none" stroke="#42A5F5" strokeWidth="2" />
      <path d="M4 14v8c0 2.8 4.5 5 10 5s10-2.2 10-5v-8" fill="none" stroke="#42A5F5" strokeWidth="2" />
      <rect x="26" y="22" width="18" height="14" rx="2" fill="none" stroke="#66BB6A" strokeWidth="2" />
      <text x="35" y="32" textAnchor="middle" fill="#66BB6A" fontSize="7" fontFamily="monospace">{`{}`}</text>
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <path d="M4 24s8-14 20-14 20 14 20 14-8 14-20 14S4 24 4 24z" fill="none" stroke="#80DEEA" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="6" fill="none" stroke="#80DEEA" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="2.5" fill="#80DEEA" />
    </svg>
  );
}

function IncidentIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <path d="M24 4L4 40h40L24 4z" fill="none" stroke="#FF5252" strokeWidth="2.5" strokeLinejoin="round" />
      <line x1="24" y1="18" x2="24" y2="28" stroke="#FF5252" strokeWidth="3" strokeLinecap="round" />
      <circle cx="24" cy="34" r="2" fill="#FF5252" />
    </svg>
  );
}

function RcaIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <circle cx="20" cy="20" r="14" fill="none" stroke="#FFB74D" strokeWidth="2.5" />
      <line x1="30" y1="30" x2="42" y2="42" stroke="#FFB74D" strokeWidth="3" strokeLinecap="round" />
      <circle cx="20" cy="20" r="5" fill="none" stroke="#FFB74D" strokeWidth="1.5" opacity="0.5" />
      <circle cx="20" cy="20" r="1.5" fill="#FFB74D" />
    </svg>
  );
}

function SdlcIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <circle cx="24" cy="24" r="16" fill="none" stroke="#9CCC65" strokeWidth="2.5" />
      <polygon points="24,12 20,20 28,20" fill="#9CCC65" opacity="0.8" />
      <polygon points="32,20 34,28 28,26" fill="#9CCC65" opacity="0.6" />
      <polygon points="30,32 24,36 22,30" fill="#9CCC65" opacity="0.8" />
      <polygon points="16,30 14,22 20,24" fill="#9CCC65" opacity="0.6" />
    </svg>
  );
}

function AgileIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <path d="M24 8a16 16 0 0 1 14 8" fill="none" stroke="#29B6F6" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M38 16a16 16 0 0 1 0 16" fill="none" stroke="#66BB6A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M38 32a16 16 0 0 1-14 8" fill="none" stroke="#FFA726" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 40a16 16 0 0 1-14-8" fill="none" stroke="#EF5350" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M10 32a16 16 0 0 1 0-16" fill="none" stroke="#AB47BC" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M10 16a16 16 0 0 1 14-8" fill="none" stroke="#26C6DA" strokeWidth="2.5" strokeLinecap="round" />
      <polygon points="24,4 28,10 20,10" fill="#29B6F6" />
    </svg>
  );
}

function XGBoostIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
      <circle cx="24" cy="10" r="5" fill="none" stroke="#EF5350" strokeWidth="2" />
      <circle cx="14" cy="26" r="4" fill="none" stroke="#42A5F5" strokeWidth="2" />
      <circle cx="34" cy="26" r="4" fill="none" stroke="#42A5F5" strokeWidth="2" />
      <circle cx="8" cy="40" r="3" fill="none" stroke="#66BB6A" strokeWidth="1.5" />
      <circle cx="20" cy="40" r="3" fill="none" stroke="#66BB6A" strokeWidth="1.5" />
      <circle cx="28" cy="40" r="3" fill="none" stroke="#66BB6A" strokeWidth="1.5" />
      <circle cx="40" cy="40" r="3" fill="none" stroke="#66BB6A" strokeWidth="1.5" />
      <line x1="24" y1="15" x2="14" y2="22" stroke="#78909C" strokeWidth="1.5" />
      <line x1="24" y1="15" x2="34" y2="22" stroke="#78909C" strokeWidth="1.5" />
      <line x1="14" y1="30" x2="8" y2="37" stroke="#78909C" strokeWidth="1" />
      <line x1="14" y1="30" x2="20" y2="37" stroke="#78909C" strokeWidth="1" />
      <line x1="34" y1="30" x2="28" y2="37" stroke="#78909C" strokeWidth="1" />
      <line x1="34" y1="30" x2="40" y2="37" stroke="#78909C" strokeWidth="1" />
      <text x="24" y="10" textAnchor="middle" dominantBaseline="middle" fill="#EF5350" fontSize="5" fontWeight="bold">+</text>
    </svg>
  );
}

/* ================= ICON MAPPING ================= */

const customIconMap: Record<string, React.ReactNode> = {
  "SQL": <SqlIcon />,
  "REST APIs": <ApiIcon />,
  "WebSockets": <WebSocketIcon />,
  "Server-Sent Events (SSE)": <SseIcon />,
  "RBAC": <ShieldIcon />,
  "Microsoft Graph API": <GraphApiIcon />,
  "Azure Cosmos DB": <CosmosIcon />,
  "HPA Autoscaling": <ScaleIcon />,
  "Unit Testing": <TestIcon />,
  "Integration Testing": <IntegrationIcon />,
  "JUnit": <JunitIcon />,
  "CI/CD Gates": <CicdIcon />,
  "Automated Rollback": <RollbackIcon />,
  "Release Runbooks": <RunbookIcon />,
  "Structured Logging": <LoggingIcon />,
  "Monitoring & Alerting": <MonitorIcon />,
  "SQL Query-Plan Review": <QueryIcon />,
  "Indexing": <IndexIcon />,
  "SQL Optimization": <OptimizeIcon />,
  "LLM Fine-Tuning (LoRA)": <BrainIcon />,
  "NF4 4-bit Quantization": <QuantizeIcon />,
  "Mistral-7B": <ModelIcon label="Mistral" color="#FF6E40" />,
  "DistilBERT": <ModelIcon label="BERT" color="#FFA726" />,
  "XGBoost": <XGBoostIcon />,
  "Random Forest": <TreeIcon />,
  "SVM": <SvmIcon />,
  "SMOTE": <BalanceIcon />,
  "Stratified k-Fold Cross-Validation": <CrossValIcon />,
  "Metrics (Accuracy, ROC-AUC, F1)": <MetricsIcon />,
  "Microservices": <MicroservicesIcon />,
  "Distributed Systems": <DistributedIcon />,
  "Event-Driven Architecture": <EventDrivenIcon />,
  "Asynchronous Processing": <AsyncIcon />,
  "Caching Strategies": <CacheIcon />,
  "Polyglot Persistence": <PolyglotIcon />,
  "Observability": <EyeIcon />,
  "Incident Response & On-Call": <IncidentIcon />,
  "Root Cause Analysis (RCA)": <RcaIcon />,
  "SDLC": <SdlcIcon />,
  "Agile Collaboration": <AgileIcon />,
};

/* ================= TECH ICON CARD ================= */

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

function TechIconCard({
  name,
  icon,
  index,
}: {
  name: string;
  icon?: string;
  index: number;
}) {
  const [imgError, setImgError] = useState(false);
  const customSvg = customIconMap[name];

  return (
    <AnimatedBlock
      direction={index % 3 === 0 ? "left" : index % 3 === 1 ? "bottom" : "right"}
      delay={index * 0.03}
    >
      <div
        className="
          w-24 h-24 md:w-28 md:h-28 rounded-2xl
          bg-gradient-to-br from-[#111827] via-[#182033] to-[#1F2937]
          border border-gray-700
          shadow-[0_8px_24px_rgba(0,0,0,0.4)]
          transition-all duration-300 transform-gpu
          hover:-translate-y-2 hover:scale-[1.08]
          hover:shadow-[0_14px_30px_rgba(168,85,247,0.25)]
          hover:border-purple-500
          flex flex-col items-center justify-center gap-2 p-3
          cursor-default group
        "
        style={{ transformStyle: "preserve-3d" }}
        title={name}
      >
        <div
          style={{ transform: "translateZ(12px)" }}
          className="flex flex-col items-center justify-center gap-2"
        >
          {customSvg ? (
            <div className="transition-transform duration-300 group-hover:scale-110">
              {customSvg}
            </div>
          ) : icon && !imgError ? (
            <img
              src={`${DEVICON_BASE}/${icon}.svg`}
              alt={name}
              className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-purple-400 text-lg font-bold">
              {name.charAt(0)}
            </div>
          )}
          <span className="text-[10px] md:text-xs text-gray-400 text-center leading-tight group-hover:text-gray-200 transition-colors">
            {name}
          </span>
        </div>
      </div>
    </AnimatedBlock>
  );
}

/* ================= ALL SKILLS DATA ================= */

const allSkills: { name: string; icon?: string }[] = [
  { name: "C", icon: "c/c-original" },
  { name: "C++", icon: "cplusplus/cplusplus-original" },
  { name: "Python", icon: "python/python-original" },
  { name: "Java", icon: "java/java-original" },
  { name: "JavaScript", icon: "javascript/javascript-original" },
  { name: "TypeScript", icon: "typescript/typescript-original" },
  { name: "SQL" },
  { name: "React.js", icon: "react/react-original" },
  { name: "Node.js", icon: "nodejs/nodejs-original" },
  { name: "FastAPI", icon: "fastapi/fastapi-original" },
  { name: "Spring Boot", icon: "spring/spring-original" },
  { name: "REST APIs" },
  { name: "HTML5", icon: "html5/html5-original" },
  { name: "CSS3", icon: "css3/css3-original" },
  { name: "WebSockets" },
  { name: "Server-Sent Events (SSE)" },
  { name: "RBAC" },
  { name: "Microsoft Graph API" },
  { name: "PostgreSQL", icon: "postgresql/postgresql-original" },
  { name: "MongoDB", icon: "mongodb/mongodb-original" },
  { name: "Azure Cosmos DB" },
  { name: "Redis", icon: "redis/redis-original" },
  { name: "DynamoDB", icon: "dynamodb/dynamodb-original" },
  { name: "Snowflake", icon: "snowflake/snowflake-original" },
  { name: "Apache Kafka", icon: "apachekafka/apachekafka-original" },
  { name: "Microsoft Azure", icon: "azure/azure-original" },
  { name: "AWS", icon: "amazonwebservices/amazonwebservices-plain-wordmark" },
  { name: "Kubernetes", icon: "kubernetes/kubernetes-original" },
  { name: "Docker", icon: "docker/docker-original" },
  { name: "Terraform", icon: "terraform/terraform-original" },
  { name: "Jenkins", icon: "jenkins/jenkins-original" },
  { name: "GitHub Actions", icon: "githubactions/githubactions-original" },
  { name: "Git", icon: "git/git-original" },
  { name: "JIRA", icon: "jira/jira-original" },
  { name: "Unit Testing" },
  { name: "Integration Testing" },
  { name: "JUnit" },
  { name: "CI/CD Gates" },
  { name: "Automated Rollback" },
  { name: "Release Runbooks" },
  { name: "Structured Logging" },
  { name: "Monitoring & Alerting" },
  { name: "SQL Query-Plan Review" },
  { name: "Indexing" },
  { name: "SQL Optimization" },
  { name: "PyTorch", icon: "pytorch/pytorch-original" },
  { name: "LLM Fine-Tuning (LoRA)" },
  { name: "NF4 4-bit Quantization" },
  { name: "Mistral-7B" },
  { name: "DistilBERT" },
  { name: "pandas", icon: "pandas/pandas-original" },
  { name: "scikit-learn", icon: "scikitlearn/scikitlearn-original" },
  { name: "XGBoost" },
  { name: "Random Forest" },
  { name: "SVM" },
  { name: "SMOTE" },
  { name: "Stratified k-Fold Cross-Validation" },
  { name: "Metrics (Accuracy, ROC-AUC, F1)" },
  { name: "Microservices" },
  { name: "Distributed Systems" },
  { name: "Event-Driven Architecture" },
  { name: "Asynchronous Processing" },
  { name: "Caching Strategies" },
  { name: "Polyglot Persistence" },
  { name: "Observability" },
  { name: "Incident Response & On-Call" },
  { name: "Root Cause Analysis (RCA)" },
  { name: "SDLC" },
  { name: "Agile Collaboration" },
  { name: "HPA Autoscaling" },
];

/* ================= CERTIFICATE CAROUSEL ================= */

function CertificateCarousel({
  certs,
}: {
  certs: { title: string; img: string }[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % certs.length);
  }, [certs.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + certs.length) % certs.length);
  }, [certs.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (isExpanded) {
        if (e.key === "ArrowRight") goNext();
        if (e.key === "ArrowLeft") goPrev();
        if (e.key === "Escape") setIsExpanded(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isExpanded, goNext, goPrev]);

  return (
    <>
      <div className="grid md:grid-cols-3 gap-8">
        {certs.map((cert, index) => (
          <StaggerItem key={index} index={index} direction="bottom">
            <ThreeDCard
              onClick={() => {
                setCurrentIndex(index);
                setIsExpanded(true);
              }}
              className="p-6"
            >
              <img
                src={cert.img}
                alt={cert.title}
                className="h-40 mx-auto object-contain mb-6"
              />
              <p className="text-center font-semibold text-gray-300">
                {cert.title}
              </p>
            </ThreeDCard>
          </StaggerItem>
        ))}
      </div>

      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          onClick={() => setIsExpanded(false)}
        >
          <div
            className="relative max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute -top-12 right-0 text-gray-400 hover:text-white transition text-2xl font-light"
              aria-label="Close"
            >
              ✕
            </button>

            <p className="text-white text-xl font-semibold mb-6 text-center">
              {certs[currentIndex].title}
            </p>

            <div className="flex items-center gap-6 w-full justify-center">
              <button
                onClick={goPrev}
                className="
                  w-14 h-14 rounded-full flex-shrink-0
                  bg-white/10 hover:bg-purple-500/30
                  border border-white/20 hover:border-purple-400
                  flex items-center justify-center
                  text-white text-2xl font-light
                  transition-all duration-300
                  hover:scale-110 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]
                "
                aria-label="Previous certificate"
              >
                ‹
              </button>

              <div className="flex-1 flex justify-center overflow-hidden">
                <img
                  key={currentIndex}
                  src={certs[currentIndex].img}
                  alt={certs[currentIndex].title}
                  className="max-h-[70vh] max-w-full rounded-xl shadow-2xl"
                  style={{
                    animation: "slideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              </div>

              <button
                onClick={goNext}
                className="
                  w-14 h-14 rounded-full flex-shrink-0
                  bg-white/10 hover:bg-purple-500/30
                  border border-white/20 hover:border-purple-400
                  flex items-center justify-center
                  text-white text-2xl font-light
                  transition-all duration-300
                  hover:scale-110 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]
                "
                aria-label="Next certificate"
              >
                ›
              </button>
            </div>

            <div className="flex gap-3 mt-8">
              {certs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`
                    w-3 h-3 rounded-full transition-all duration-300
                    ${
                      i === currentIndex
                        ? "bg-purple-500 scale-125 shadow-[0_0_10px_rgba(168,85,247,0.6)]"
                        : "bg-white/30 hover:bg-white/50"
                    }
                  `}
                  aria-label={`Go to certificate ${i + 1}`}
                />
              ))}
            </div>

            <p className="text-gray-400 text-sm mt-4">
              {currentIndex + 1} / {certs.length}
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: scale(0.92) translateY(12px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }
      `}</style>
    </>
  );
}

/* ================= PROJECT CARD ================= */

function ProjectCard({
  project,
  index,
}: {
  project: {
    title: string;
    image: string;
    description: string;
    skills: string[];
  };
  index: number;
}) {
  return (
    <StaggerItem
      index={index}
      direction={index % 2 === 0 ? "right" : "left"}
      baseDelay={0.05}
    >
      <ThreeDCard className="p-8">
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-center">
            {project.title}
          </h3>

          <p className="text-gray-300 leading-relaxed text-justify">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 justify-center">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="
                  px-3 py-1 rounded-full text-xs
                  bg-purple-500/10 border border-purple-500/30
                  text-purple-300
                  transition-all duration-200
                  hover:bg-purple-500/20 hover:border-purple-400
                "
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <div className="rounded-xl overflow-hidden max-w-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-contain rounded-xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </ThreeDCard>
    </StaggerItem>
  );
}
/* ================= MAIN COMPONENT ================= */

export default function Projects({ onBack }: ProjectsProps) {
  const experiences = [
    {
      company: "Zomato",
      logo: zomatoLogo,
      title: "Software Engineer",
      duration: "Aug 2022 – Jul 2024 (2 Years)",
      location: "Hyderabad, India",
      description:
        "Engineered high-throughput backend microservices sustaining large-scale production traffic using distributed architecture and event-driven communication. Designed polyglot persistence with intelligent caching layers, optimized read performance, and implemented real-time streaming workflows to ensure low latency and operational resilience.",
    },
    {
      company: "HealthPlix",
      logo: healthplixLogo,
      title: "Software Engineer",
      duration: "Jan 2022 – Jun 2022 (6 Months)",
      location: "Remote, India",
      description:
        "Built backend systems for a health-focused operational platform requiring strict data consistency and real-time responsiveness. Designed asynchronous processing pipelines and resilient APIs to support high-availability workflows under peak system load.",
    },
    {
      company: "AICTE",
      logo: aicteLogo,
      title: "AI / ML Engineer",
      duration: "Mar 2022 – May 2022 (3 Months)",
      location: "India",
      description:
        "Developed predictive machine learning pipelines using stratified validation and imbalance handling techniques. Optimized model performance through evaluation-driven tuning and applied advanced learning techniques to improve generalization and minority-class detection.",
    },
  ];

  const projectItems = [
    {
      title: "GenAI Lyric-to-Chord Generation System",
      image: lyricChordImg,
      description:
        "Built an end-to-end generative AI pipeline that converts song lyrics into musically coherent chord progressions. The system used a fine-tuned DistilBERT model for genre classification, predicting the musical style of input lyrics to condition downstream generation. A Mistral 7B Instruct model was fine-tuned using LoRA/PEFT to generate chord sequences aligned with the predicted genre and lyrical content. The pipeline also included a Streamlit-based interface supporting real-time prediction, chord visualization, MIDI export, and automated evaluation metrics. This project combined natural language understanding with symbolic music generation, bridging the gap between text-based AI and creative music composition workflows.",
      skills: [
        "DistilBERT",
        "Mistral 7B",
        "LoRA/PEFT",
        "Streamlit",
        "NLP",
        "MIDI",
        "Fine-Tuning",
        "Genre Classification",
      ],
    },
    {
      title: "Multi-Agent RL for Drone Delivery",
      image: droneRLImg,
      description:
        "Developed a custom multi-agent drone delivery environment from scratch to study coordination, safe navigation, and shared reward optimization across multiple autonomous agents. The project evaluated a range of tabular reinforcement learning methods including Q-Learning, SARSA, and Double Q-Learning alongside deep reinforcement learning approaches such as DQN and QMIX for cooperative multi-agent coordination. Agents were also benchmarked on PettingZoo's simple_spread_v3 environment, where Dueling Double DQN demonstrated the strongest training stability and convergence behavior. The project provided a practical comparative study of single-agent versus multi-agent decision-making under shared objectives and collision constraints. Insights from the experiments informed strategies for scalable cooperative policy learning in logistics and delivery applications.",
      skills: [
        "Q-Learning",
        "SARSA",
        "DQN",
        "QMIX",
        "Dueling Double DQN",
        "PettingZoo",
        "Python",
        "Multi-Agent RL",
      ],
    },
    {
      title: "TaskFlow Pro – Distributed Productivity Engine",
      image: taskflowImg,
      description:
        "Built a distributed productivity platform designed to handle high-concurrency workloads using React, TypeScript, Node.js, MongoDB, and Redis. The system implemented role-based access control (RBAC) for fine-grained authorization and a cache-aside strategy using Redis to offload hot read paths from the primary database layer. Extensive load testing with Locust at over 5,000 concurrent users validated the system's scalability, showing approximately 30% improvement in P99 API latency under sustained traffic. The architecture followed microservice patterns with clear service boundaries, structured error handling, and retry-safe endpoints. This project demonstrated practical experience in building production-grade backend systems optimized for throughput, consistency, and operational reliability.",
      skills: [
        "React",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Redis",
        "RBAC",
        "Locust",
        "Load Testing",
        "Cache-Aside",
      ],
    },
    {
      title: "Cloud Native Automated Media Pipeline",
      image: mediaPipelineImg,
      description:
        "Designed and implemented an event-driven media processing pipeline on AWS using S3, Lambda, API Gateway, Docker, and CloudWatch to handle file uploads and transformations at scale. The system decoupled upload ingestion from processing, allowing user-facing requests to remain lightweight while backend media transformations scaled automatically with demand through serverless compute. Structured logging was integrated across all Lambda functions with correlation IDs to enable end-to-end tracing across retries, failures, and asynchronous workflows. CloudWatch dashboards and custom alarms were configured to provide real-time visibility into pipeline health, error rates, and processing latency. This project strengthened practical skills in serverless architecture, event-driven design, and production-grade observability for cloud-native systems.",
      skills: [
        "AWS S3",
        "Lambda",
        "API Gateway",
        "Docker",
        "CloudWatch",
        "Event-Driven",
        "Serverless",
        "Observability",
      ],
    },
    {
      title: "Log-Structured Distributed Key-Value Store",
      image: kvStoreImg,
      description:
        "Built a distributed key-value store in Python to explore core concepts of durability, crash recovery, and data replication in distributed storage systems. The storage engine used an append-only write-ahead log for persistent writes and maintained an in-memory hash index for fast point reads, with crash recovery handled by replaying the log from disk on startup. Basic leader-follower replication was implemented to study consistency behavior during normal operation and validated through controlled failover scenarios. Stress testing confirmed the system could sustain over 10,000 operations per second on a single node while maintaining data integrity across restarts. This project served as a deep exploration of storage internals, replication protocols, and the trade-offs between durability, availability, and write throughput in distributed data systems.",
      skills: [
        "Python",
        "Append-Only Log",
        "Crash Recovery",
        "Replication",
        "Leader-Follower",
        "Distributed Systems",
        "Stress Testing",
      ],
    },
    {
      title: "Containerized Relational Data Platform & SQL Analytics",
      image: sqlPlatformImg,
      description:
        "Developed a fully containerized relational data platform focused on structured storage, schema design, and high-performance analytical querying using PostgreSQL and Docker. The project involved designing normalized relational schemas, building complex SQL queries for multi-dimensional analytics, and optimizing query execution through indexing strategies and query-plan analysis. Docker Compose was used to orchestrate the database environment, enabling reproducible local development and testing workflows without external infrastructure dependencies. The platform processed and queried large datasets efficiently, demonstrating practical improvements in read performance through targeted indexing and schema refinement. This project reinforced core competencies in relational data modeling, SQL optimization, and container-based deployment patterns for data-intensive applications.",
      skills: [
        "PostgreSQL",
        "SQL Analytics",
        "Docker",
        "Schema Design",
        "Query Optimization",
        "Data Modeling",
        "Docker Compose",
      ],
    },
  ];

  const educationItems = [
    {
      institution: "University at Buffalo",
      logo: ubLogo,
      field: "Master's in Engineering Science (Artificial Intelligence)",
      duration: "Aug 2024 – Dec 2025",
      location: "Buffalo, NY",
      coursework: [
        "Design and Analysis of Algorithms",
        "Data Models and Query Languages",
        "Data Intensive Computing",
        "Applied Machine Learning",
        "Natural Language Processing",
        "Reinforcement Learning",
        "Pattern Recognition",
      ],
    },
    {
      institution: "Vignana Bharathi Institute of Technology",
      logo: vbitLogo,
      field: "Bachelor of Technology in Computer Science and Engineering",
      duration: "2019 – 2023",
      location: "Hyderabad, India",
      coursework: [
        "Object Oriented Programming through Java",
        "Data Structures",
        "Computer Organization",
        "Computer Networks",
        "Compiler Design",
        "Software Engineering",
        "Data Analytics",
        "Disaster Management",
        "Machine Learning",
        "Data Mining",
        "Cloud Computing",
        "Human Computer Interaction",
      ],
    },
  ];

  const certs = [
    { title: "Cloud Computing Certification", img: cloudCert },
    { title: "Computer Networking Certification", img: networkCert },
    { title: "Python Programming Certification", img: pythonCert },
    { title: "AWS Cloud Certification", img: awsCert },
    { title: "Cisco Networking Certification", img: ciscoCert },
    { title: "Oracle Database Certification", img: oracleCert },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white px-6 md:px-8 py-20 overflow-x-hidden relative">

      {/* ===== BACKGROUND DESIGN ===== */}
      {/* Grid pattern */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{
        backgroundImage: `
          linear-gradient(rgba(168,85,247,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(168,85,247,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />

      {/* Floating gradient orbs */}
      <div className="fixed top-[10%] left-[5%] w-72 h-72 rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(0,242,254,0.08) 0%, transparent 70%)",
          animation: "orbFloat1 12s ease-in-out infinite",
        }}
      />
      <div className="fixed top-[40%] right-[3%] w-96 h-96 rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)",
          animation: "orbFloat2 15s ease-in-out infinite",
        }}
      />
      <div className="fixed bottom-[10%] left-[10%] w-80 h-80 rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(255,0,128,0.06) 0%, transparent 70%)",
          animation: "orbFloat3 18s ease-in-out infinite",
        }}
      />
      <div className="fixed top-[60%] left-[50%] w-64 h-64 rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(0,242,254,0.05) 0%, transparent 70%)",
          animation: "orbFloat1 20s ease-in-out infinite reverse",
        }}
      />

      {/* Left side circuit */}
      <div className="fixed left-0 top-0 bottom-0 w-16 md:w-20 pointer-events-none z-0 flex items-center justify-center">
        <div className="h-full flex flex-col items-center justify-around py-[20%] opacity-15">
          <div className="w-3 h-3 rounded-full border border-cyan-400" style={{ animation: "spinSlow 8s linear infinite" }} />
          <div className="w-[1px] h-16 bg-gradient-to-b from-cyan-400 to-purple-500" />
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          <div className="w-[1px] h-20 bg-gradient-to-b from-purple-500 to-pink-500" />
          <div className="w-3 h-3 rounded-full border border-pink-500" style={{ animation: "spinSlow 6s linear infinite reverse" }} />
          <div className="w-[1px] h-16 bg-gradient-to-b from-pink-500 to-cyan-400" />
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: "1.5s" }} />
          <div className="w-[1px] h-20 bg-gradient-to-b from-cyan-400 to-purple-500" />
          <div className="w-3 h-3 rounded-full border border-purple-500" style={{ animation: "spinSlow 5s linear infinite" }} />
        </div>
      </div>

      {/* Right side circuit */}
      <div className="fixed right-0 top-0 bottom-0 w-16 md:w-20 pointer-events-none z-0 flex items-center justify-center">
        <div className="h-full flex flex-col items-center justify-around py-[15%] opacity-15">
          <div className="w-3 h-3 rounded-full border border-pink-500" style={{ animation: "spinSlow 4s linear infinite" }} />
          <div className="w-[1px] h-16 bg-gradient-to-b from-pink-500 to-purple-500" />
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          <div className="w-[1px] h-20 bg-gradient-to-b from-purple-500 to-cyan-400" />
          <div className="w-3 h-3 rounded-full border border-cyan-400" style={{ animation: "spinSlow 6s linear infinite reverse" }} />
          <div className="w-[1px] h-16 bg-gradient-to-b from-cyan-400 to-pink-500" />
          <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="w-[1px] h-20 bg-gradient-to-b from-pink-500 to-purple-500" />
          <div className="w-3 h-3 rounded-full border border-purple-500" style={{ animation: "spinSlow 5s linear infinite" }} />
        </div>
      </div>
      {/* Back button */}
      <button
        onClick={onBack}
        className="text-gray-400 hover:text-purple-400 transition mb-10 group flex items-center gap-2 relative z-10"
      >
        <span className="inline-block transition-transform group-hover:-translate-x-1">←</span>
        <span>Back</span>
      </button>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ===== NAME + PHOTO NEON HERO ===== */}
        <div className="flex flex-col items-center gap-6 mb-12">
          <AnimatedBlock direction="bottom">
            <div className="relative group flex-shrink-0" style={{
              animation: "floatPhoto 3s ease-in-out infinite",
            }}>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500" style={{
                animation: "glowPulse 2s ease-in-out infinite",
              }} />
              <img src={profileImg} alt="Jyothsna" className="relative w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-[#0B0F19] shadow-2xl" />
            </div>
          </AnimatedBlock>

          <div className="text-center overflow-hidden">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              {"Jyothsna Devi Goru".split("").map((char, i) => (
                <span
                  key={i}
                  style={{
                    display: "inline-block",
                    background: "linear-gradient(90deg, #00f2fe 0%, #a855f7 40%, #ff0080 70%, #00f2fe 100%)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: `neonShift 4s linear infinite, letterDrop 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + i * 0.04}s both`,
                    filter: "drop-shadow(0 0 8px rgba(168,85,247,0.5)) drop-shadow(0 0 20px rgba(0,242,254,0.3))",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>

            <p className="mt-3 text-sm md:text-base font-light tracking-widest uppercase" style={{
              background: "linear-gradient(90deg, #00f2fe, #a855f7, #ff0080)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              opacity: 0.7,
              animation: "slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.2s both",
            }}>
              Software Engineer &bull; Distributed Systems &bull; Applied AI
            </p>
          </div>
        </div>

        <style>{`
          @keyframes neonShift {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
          }
          @keyframes letterDrop {
            0% { opacity: 0; transform: translateY(-40px) rotateX(90deg) scale(0.5); }
            60% { opacity: 1; transform: translateY(4px) rotateX(-5deg) scale(1.02); }
            100% { opacity: 1; transform: translateY(0) rotateX(0deg) scale(1); }
          }
          @keyframes slideUpFade {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 0.7; transform: translateY(0); }
          }
          @keyframes floatPhoto {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          @keyframes glowPulse {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.05); }
          }
          @keyframes spinSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes orbFloat1 {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(30px, -40px); }
          }
          @keyframes orbFloat2 {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(-40px, 30px); }
          }
          @keyframes orbFloat3 {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(20px, 20px); }
          }
        `}</style>

        {/* ===== ABOUT ===== */}
        <div className="max-w-4xl mx-auto text-center space-y-10 mb-16">
          <AnimatedBlock direction="bottom">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              About{" "}
              <span className="text-purple-500">Systems & Intelligence</span>
            </h1>
          </AnimatedBlock>

          <AnimatedBlock direction="bottom" delay={0.15}>
            <p className="text-gray-300 leading-relaxed text-lg md:text-xl text-justify">
              I am a software engineer passionate about building scalable backend systems and applied AI solutions. My experience spans Zomato, where I worked on high-throughput distributed systems and real-time services, HealthPlix, where I built reliable healthcare workflows and live dashboards, and AICTE, where I developed machine learning pipelines for predictive modeling. Alongside this, my Master's in Artificial Intelligence strengthened my work in LLMs, transformer models, and intelligent application design. I enjoy building systems that combine strong engineering fundamentals with practical intelligence, with a focus on scalability, reliability, and real-world impact.
            </p>
          </AnimatedBlock>

          
        </div>

        <GlowDivider />

        {/* ===== SECTION 1: TECHNICAL SKILLS ===== */}
        <section className="mb-8">
          <SectionHeading white="Technical" purple="Skills" direction="left" />

          <AnimatedBlock direction="right" delay={0.1}>
            <p className="text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto mb-12">
              My technical foundation spans backend systems engineering, distributed architectures, cloud-native infrastructure, and applied artificial intelligence, enabling me to build scalable, intelligent, and production-ready platforms.

            </p>
          </AnimatedBlock>

          <div className="flex flex-wrap gap-5 justify-center max-w-5xl mx-auto">
            {allSkills.map((skill, index) => (
              <TechIconCard
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                index={index}
              />
            ))}
          </div>
        </section>

        <GlowDivider />

        {/* ===== SECTION 2: EXPERIENCE ===== */}
        <section className="mb-8">
          <SectionHeading
            white="Professional"
            purple="Experience"
            direction="right"
          />

          <div className="max-w-5xl mx-auto space-y-10">
            {experiences.map((item, index) => (
              <StaggerItem
                key={item.company}
                index={index}
                direction={index % 2 === 0 ? "left" : "right"}
                baseDelay={0.05}
              >
                <ThreeDCard className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                      <img
                        src={item.logo}
                        alt={item.company}
                        className="h-20 w-20 object-contain"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left space-y-3">
                      <h3 className="text-2xl font-bold">{item.company}</h3>
                      <p className="text-purple-400 font-semibold">
                        {item.title}
                      </p>
                      <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-gray-400">
                        <span>{item.duration}</span>
                        <span className="hidden md:inline">•</span>
                        <span>{item.location}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-justify">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ThreeDCard>
              </StaggerItem>
            ))}
          </div>
        </section>

        <GlowDivider />

        {/* ===== SECTION 3: PROJECTS ===== */}
        <section className="mb-8">
          <SectionHeading
            white="Featured"
            purple="Projects"
            direction="left"
          />

          <div className="max-w-5xl mx-auto space-y-10">
            {projectItems.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        <GlowDivider />

        {/* ===== SECTION 4: EDUCATION ===== */}
        <section className="mb-8">
          <SectionHeading
            white="Academic"
            purple="Background"
            direction="right"
          />

          <div className="max-w-5xl mx-auto space-y-10">
            {educationItems.map((item, index) => (
              <StaggerItem
                key={item.institution}
                index={index}
                direction={index % 2 === 0 ? "left" : "right"}
                baseDelay={0.1}
              >
                <ThreeDCard className="p-8">
                  <div className="text-center space-y-5">
                    <img
                      src={item.logo}
                      alt={item.institution}
                      className="h-20 mx-auto"
                    />
                    <h3 className="text-3xl font-bold">{item.institution}</h3>
                    <p className="text-purple-400 font-semibold">
                      {item.field}
                    </p>
                    <p className="text-gray-400">{item.duration}</p>
                    <p className="text-gray-400">{item.location}</p>

                    <div className="mt-6">
                      <p className="text-gray-300 font-semibold mb-4 text-left">
                        Coursework
                      </p>
                      <div className="flex flex-wrap gap-3 justify-start">
                        {item.coursework.map((course) => (
                          <div
                            key={course}
                            className="
                              px-5 py-2 rounded-full bg-[#111827]
                              border border-gray-700 text-sm
                              transition-all duration-300
                              hover:-translate-y-1 hover:border-purple-500
                              hover:shadow-[0_4px_20px_rgba(168,85,247,0.3)]
                            "
                          >
                            {course}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ThreeDCard>
              </StaggerItem>
            ))}
          </div>
        </section>

        <GlowDivider />

        {/* ===== SECTION 5: CERTIFICATIONS ===== */}
        <section className="mb-16">
          <SectionHeading
            white="Professional"
            purple="Certifications"
            direction="left"
          />

          <div className="max-w-6xl mx-auto">
            <CertificateCarousel certs={certs} />
          </div>
        </section>
      </div>
    </div>
  );
}