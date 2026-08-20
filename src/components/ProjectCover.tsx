/* ============================================================
   Generated cover art for project cards.

   The real screenshots are architecture diagrams — dense, and
   illegible at card size. These abstract covers read instantly in
   a grid; the diagram itself is shown full size inside the detail
   dialog where there is room for it.

   Pure inline SVG: no image files, no network requests, and the
   palette follows the site tokens.
   ============================================================ */

export type CoverVariant =
  | "agent"
  | "concurrency"
  | "collab"
  | "compute"
  | "storage"
  | "lakehouse"
  | "secure"
  | "pipeline"
  | "forecast"
  | "verify"
  | "vision";

const PALETTE: Record<CoverVariant, [string, string]> = {
  agent: ["#8b5cf6", "#38bdf8"],
  concurrency: ["#6366f1", "#a78bfa"],
  collab: ["#a78bfa", "#22d3ee"],
  compute: ["#fb923c", "#38bdf8"],
  storage: ["#2dd4bf", "#38bdf8"],
  lakehouse: ["#38bdf8", "#fbbf24"],
  secure: ["#34d399", "#818cf8"],
  pipeline: ["#38bdf8", "#8b5cf6"],
  forecast: ["#34d399", "#38bdf8"],
  verify: ["#f472b6", "#a78bfa"],
  vision: ["#22d3ee", "#818cf8"],
};

/* ---------- motifs (drawn inside a 320 × 200 box) ---------- */

function Motif({ variant, a, b }: { variant: CoverVariant; a: string; b: string }) {
  switch (variant) {
    /* agentic loop: a planner core with tool satellites */
    case "agent":
      return (
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="160" cy="100" r="42" stroke={a} strokeWidth="1" opacity="0.28" />
          <circle cx="160" cy="100" r="60" stroke={a} strokeWidth="1" opacity="0.14" />
          {[
            [160, 44],
            [216, 100],
            [160, 156],
            [104, 100],
          ].map(([x, y], i) => (
            <g key={i}>
              <line x1="160" y1="100" x2={x} y2={y} stroke={b} strokeWidth="1.2" opacity="0.5" />
              <circle cx={x} cy={y} r="9" fill="var(--cover-bg)" stroke={b} strokeWidth="1.8" />
            </g>
          ))}
          <rect x="143" y="83" width="34" height="34" rx="10" fill="var(--cover-bg)" stroke={a} strokeWidth="2" />
          <circle cx="160" cy="100" r="5" fill={a} />
        </g>
      );

    /* concurrency: request lanes under load */
    case "concurrency":
      return (
        <g strokeLinecap="round">
          {[64, 88, 112, 136].map((y, i) => (
            <g key={y}>
              <line x1="70" y1={y} x2="250" y2={y} stroke={a} strokeWidth="1" opacity="0.16" />
              <line
                x1="70"
                y1={y}
                x2={110 + i * 42}
                y2={y}
                stroke={i % 2 ? b : a}
                strokeWidth="5"
                opacity="0.85"
              />
              <circle cx={110 + i * 42} cy={y} r="4" fill={i % 2 ? b : a} />
            </g>
          ))}
          <rect x="52" y="48" width="10" height="104" rx="5" fill={a} opacity="0.45" />
        </g>
      );

    /* collab: two concurrent edit streams converging on one document */
    case "collab":
      return (
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* replicas feeding in */}
          <path d="M42 66C64 66 68 100 92 100" stroke={b} strokeWidth="1.6" opacity="0.7" />
          <path d="M42 134C64 134 68 100 92 100" stroke={a} strokeWidth="1.6" opacity="0.7" />
          <circle cx="42" cy="66" r="5" fill={b} />
          <circle cx="42" cy="134" r="5" fill={a} />

          {/* shared document */}
          <rect x="92" y="46" width="146" height="108" rx="11" fill="var(--cover-bg)" stroke={a} strokeWidth="2" />
          {[
            [72, 108],
            [90, 126],
            [108, 92],
            [126, 116],
          ].map(([y, w], i) => (
            <line
              key={y}
              x1="110"
              y1={y}
              x2={110 + w}
              y2={y}
              stroke="var(--cover-ink)"
              strokeOpacity={0.26 - i * 0.04}
              strokeWidth="4"
            />
          ))}

          {/* live carets from two authors */}
          <g>
            <rect x="222" y="64" width="3" height="16" rx="1.5" fill={b} />
            <rect x="214" y="56" width="19" height="7" rx="2.5" fill={b} opacity="0.9" />
          </g>
          <g>
            <rect x="170" y="100" width="3" height="16" rx="1.5" fill={a} />
            <rect x="162" y="92" width="19" height="7" rx="2.5" fill={a} opacity="0.9" />
          </g>
        </g>
      );

    /* compute: a driver fanning one job out across partitions */
    case "compute":
      return (
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* driver */}
          <rect x="40" y="82" width="36" height="36" rx="10" fill="var(--cover-bg)" stroke={a} strokeWidth="2" />
          <circle cx="58" cy="100" r="5" fill={a} />

          {/* partitions, each further along than the last */}
          {[48, 80, 112, 144].map((y, i) => (
            <g key={y}>
              <path
                d={`M76 100C112 100 118 ${y + 11} 152 ${y + 11}`}
                stroke={b}
                strokeWidth="1.4"
                opacity="0.5"
              />
              <rect x="152" y={y} width="112" height="22" rx="6" fill="var(--cover-bg)" stroke={b} strokeWidth="1.6" />
              <line
                x1="161"
                y1={y + 11}
                x2={161 + 34 + i * 20}
                y2={y + 11}
                stroke={i === 3 ? a : b}
                strokeWidth="5"
                opacity="0.85"
              />
            </g>
          ))}
        </g>
      );

    /* storage: append-only log segments + index */
    case "storage":
      return (
        <g>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect
              key={i}
              x={62 + i * 33}
              y={112 - (i % 3) * 6}
              width="24"
              height={30 + (i % 3) * 12}
              rx="4"
              fill={i === 5 ? b : a}
              opacity={0.25 + i * 0.11}
            />
          ))}
          <line x1="56" y1="158" x2="264" y2="158" stroke={a} strokeWidth="1.5" opacity="0.4" />
          <ellipse cx="160" cy="56" rx="46" ry="13" fill="none" stroke={b} strokeWidth="1.8" opacity="0.75" />
          <path d="M114 56v16c0 7 21 13 46 13s46-6 46-13V56" fill="none" stroke={b} strokeWidth="1.8" opacity="0.5" />
        </g>
      );

    /* lakehouse: raw data refined down through medallion layers */
    case "lakehouse":
      return (
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          {[
            { y: 44, tone: "#c2825a", w: 156 },
            { y: 88, tone: "#cbd5e1", w: 132 },
            { y: 132, tone: "#fbbf24", w: 108 },
          ].map((layer, i) => {
            const x = (320 - layer.w) / 2;
            return (
              <g key={i}>
                <rect
                  x={x}
                  y={layer.y}
                  width={layer.w}
                  height="26"
                  rx="7"
                  fill="var(--cover-bg)"
                  stroke={layer.tone}
                  strokeWidth="2"
                />
                <line
                  x1={x + 13}
                  y1={layer.y + 13}
                  x2={x + 13 + layer.w * 0.3}
                  y2={layer.y + 13}
                  stroke={layer.tone}
                  strokeWidth="3.5"
                  opacity="0.75"
                />
                <circle cx={x + layer.w - 15} cy={layer.y + 13} r="3.5" fill={layer.tone} opacity="0.8" />
              </g>
            );
          })}

          {[72, 116].map((y) => (
            <path key={y} d={`M160 ${y}v10M155.5 ${y + 5.5}l4.5 5 4.5-5`} stroke={b} strokeWidth="1.8" />
          ))}
        </g>
      );

    /* secure: authenticated access in front of the ledger */
    case "secure":
      return (
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* token exchange either side */}
          <rect x="50" y="86" width="48" height="21" rx="6" stroke={b} strokeWidth="1.8" opacity="0.65" />
          <rect x="222" y="86" width="48" height="21" rx="6" stroke={b} strokeWidth="1.8" opacity="0.65" />
          <line x1="100" y1="96" x2="118" y2="96" stroke={b} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
          <line x1="202" y1="96" x2="220" y2="96" stroke={b} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />

          {/* lock */}
          <rect x="120" y="72" width="80" height="58" rx="13" fill="var(--cover-bg)" stroke={a} strokeWidth="2.4" />
          <path d="M139 72V59a21 21 0 0 1 42 0v13" stroke={a} strokeWidth="2.4" />
          <circle cx="160" cy="96" r="7" stroke={b} strokeWidth="2.4" />
          <line x1="160" y1="103" x2="160" y2="114" stroke={b} strokeWidth="2.4" />

          {/* ledger rows behind the lock */}
          {[148, 163].map((y, i) => (
            <g key={y}>
              <line x1="92" y1={y} x2="178" y2={y} stroke={a} strokeWidth="3.5" opacity={0.4 - i * 0.14} />
              <line x1="188" y1={y} x2="228" y2={y} stroke={b} strokeWidth="3.5" opacity={0.45 - i * 0.15} />
            </g>
          ))}
        </g>
      );

    /* pipeline: event flow through stages */
    case "pipeline":
      return (
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          {[70, 145, 220].map((x, i) => (
            <rect
              key={x}
              x={x}
              y="80"
              width="40"
              height="40"
              rx="11"
              fill="var(--cover-bg)"
              stroke={i === 1 ? b : a}
              strokeWidth="2"
            />
          ))}
          {[118, 193].map((x) => (
            <g key={x}>
              <line x1={x} y1="100" x2={x + 20} y2="100" stroke={b} strokeWidth="1.6" opacity="0.6" />
              <path d={`M${x + 15} 95l6 5-6 5`} stroke={b} strokeWidth="1.8" />
            </g>
          ))}
          {[58, 74, 90].map((y, i) => (
            <line key={y} x1="150" y1={y - 20} x2={175 + i * 12} y2={y - 20} stroke={a} strokeWidth="1.4" opacity={0.5 - i * 0.12} />
          ))}
          <circle cx="90" cy="100" r="5" fill={a} />
          <circle cx="165" cy="100" r="5" fill={b} />
          <circle cx="240" cy="100" r="5" fill={a} />
        </g>
      );

    /* forecast: history solid, prediction dashed */
    case "forecast":
      return (
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1="52" y1="156" x2="268" y2="156" stroke={a} strokeWidth="1.2" opacity="0.35" />
          <line x1="52" y1="44" x2="52" y2="156" stroke={a} strokeWidth="1.2" opacity="0.35" />
          <path d="M60 132 L92 118 L124 128 L156 92 L188 104" stroke={a} strokeWidth="2.6" />
          <path d="M188 104 L220 74 L252 62" stroke={b} strokeWidth="2.6" strokeDasharray="6 5" />
          {[
            [60, 132],
            [92, 118],
            [124, 128],
            [156, 92],
            [188, 104],
          ].map(([x, y]) => (
            <circle key={x} cx={x} cy={y} r="3.6" fill={a} />
          ))}
          <circle cx="252" cy="62" r="5" fill={b} />
          <line x1="188" y1="52" x2="188" y2="156" stroke={b} strokeWidth="1" strokeDasharray="3 4" opacity="0.4" />
        </g>
      );

    /* verify: claim checked against evidence */
    case "verify":
      return (
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          {[70, 88, 106].map((y, i) => (
            <line key={y} x1="58" y1={y} x2={112 + i * 14} y2={y} stroke={a} strokeWidth="3" opacity={0.5 - i * 0.1} />
          ))}
          <line x1="58" y1="124" x2="126" y2="124" stroke={a} strokeWidth="3" opacity="0.2" />
          <path
            d="M212 46l40 17v30c0 26-17 50-40 59-23-9-40-33-40-59V63l40-17z"
            fill="var(--cover-bg)"
            stroke={b}
            strokeWidth="2.2"
          />
          <path d="M195 100l12 12 24-26" stroke={b} strokeWidth="3.4" />
          <line x1="140" y1="88" x2="168" y2="88" stroke={b} strokeWidth="1.6" opacity="0.6" />
          <path d="M162 83l6 5-6 5" stroke={b} strokeWidth="1.8" />
        </g>
      );

    /* vision: detections with bounding boxes */
    case "vision":
      return (
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="58" y="46" width="204" height="108" rx="10" stroke={a} strokeWidth="1.2" opacity="0.3" />
          <rect x="86" y="68" width="66" height="58" rx="6" stroke={b} strokeWidth="2.2" />
          <rect x="168" y="94" width="72" height="34" rx="6" stroke={a} strokeWidth="2.2" />
          <rect x="86" y="58" width="30" height="9" rx="3" fill={b} opacity="0.85" />
          <rect x="168" y="84" width="30" height="9" rx="3" fill={a} opacity="0.85" />
          {[
            [86, 68],
            [152, 68],
            [86, 126],
            [152, 126],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3" fill={b} />
          ))}
          <line x1="196" y1="111" x2="228" y2="111" stroke={a} strokeWidth="2" opacity="0.6" />
        </g>
      );

    default:
      return null;
  }
}

export default function ProjectCover({ variant }: { variant: CoverVariant }) {
  const [a, b] = PALETTE[variant];
  const gid = `pc-${variant}`;

  return (
    <svg
      viewBox="0 0 320 200"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${gid}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={a} stopOpacity="0.22" />
          <stop offset="55%" stopColor="var(--cover-bg)" stopOpacity="0.9" />
          <stop offset="100%" stopColor={b} stopOpacity="0.2" />
        </linearGradient>

        <radialGradient id={`${gid}-glow`} cx="50%" cy="42%" r="55%">
          <stop offset="0%" stopColor={a} stopOpacity="0.3" />
          <stop offset="100%" stopColor={a} stopOpacity="0" />
        </radialGradient>

        <pattern id={`${gid}-grid`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="var(--cover-grid)" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="320" height="200" fill="var(--cover-base)" />
      <rect width="320" height="200" fill={`url(#${gid}-bg)`} />
      <rect width="320" height="200" fill={`url(#${gid}-grid)`} />
      <rect width="320" height="200" fill={`url(#${gid}-glow)`} />

      <Motif variant={variant} a={a} b={b} />

      {/* corner ticks */}
      <g stroke="var(--cover-ink)" strokeOpacity="0.16" strokeWidth="1.5" fill="none">
        <path d="M16 30V16h14" />
        <path d="M290 16h14v14" />
        <path d="M16 170v14h14" />
        <path d="M304 170v14h-14" />
      </g>
    </svg>
  );
}
