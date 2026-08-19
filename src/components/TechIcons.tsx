/* ============================================================
   Hand-built SVG icons for technologies that have no devicon
   logo. Each renderer takes a className so the same icon works
   at chip size and at tile size.
   ============================================================ */

import type { ReactElement } from "react";

type IconRenderer = (className: string) => ReactElement;

const svg = (className: string, children: ReactElement[]) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
    {children}
  </svg>
);

export const customIconMap: Record<string, IconRenderer> = {
  SQL: (c) =>
    svg(c, [
      <ellipse key="a" cx="24" cy="12" rx="16" ry="6" fill="none" stroke="#4FC3F7" strokeWidth="2.5" />,
      <path key="b" d="M8 12v24c0 3.3 7.2 6 16 6s16-2.7 16-6V12" fill="none" stroke="#4FC3F7" strokeWidth="2.5" />,
      <ellipse key="c" cx="24" cy="24" rx="16" ry="6" fill="none" stroke="#4FC3F7" strokeWidth="1.5" opacity="0.5" />,
    ]),

  "REST APIs": (c) =>
    svg(c, [
      <rect key="a" x="6" y="8" width="14" height="14" rx="3" fill="none" stroke="#66BB6A" strokeWidth="2.5" />,
      <rect key="b" x="28" y="26" width="14" height="14" rx="3" fill="none" stroke="#66BB6A" strokeWidth="2.5" />,
      <path key="c" d="M24 15v18" stroke="#66BB6A" strokeWidth="2.5" strokeDasharray="3 2" />,
      <circle key="d" cx="24" cy="24" r="3" fill="#66BB6A" />,
    ]),

  WebSockets: (c) =>
    svg(c, [
      <path key="a" d="M8 32l8-8 8 8 8-8 8 8" fill="none" stroke="#FF7043" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />,
      <path key="b" d="M8 16l8 8 8-8 8 8 8-8" fill="none" stroke="#FF7043" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />,
      <circle key="c" cx="8" cy="32" r="2.5" fill="#FF7043" />,
      <circle key="d" cx="40" cy="32" r="2.5" fill="#FF7043" />,
    ]),

  SignalR: (c) =>
    svg(c, [
      <circle key="a" cx="14" cy="24" r="5" fill="#4FC3F7" />,
      <path key="b" d="M24 16a11 11 0 0 1 0 16" fill="none" stroke="#4FC3F7" strokeWidth="2.4" strokeLinecap="round" />,
      <path key="c" d="M31 10a19 19 0 0 1 0 28" fill="none" stroke="#4FC3F7" strokeWidth="2.4" strokeLinecap="round" opacity="0.7" />,
      <path key="d" d="M38 5a26 26 0 0 1 0 38" fill="none" stroke="#4FC3F7" strokeWidth="2.4" strokeLinecap="round" opacity="0.4" />,
    ]),

  "Server-Sent Events (SSE)": (c) =>
    svg(c, [
      <path key="a" d="M10 12h28" stroke="#AB47BC" strokeWidth="2.5" strokeLinecap="round" />,
      <path key="b" d="M10 20h22" stroke="#AB47BC" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />,
      <path key="c" d="M10 28h16" stroke="#AB47BC" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />,
      <path key="d" d="M10 36h10" stroke="#AB47BC" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />,
      <polygon key="e" points="38,18 42,24 38,30" fill="#AB47BC" />,
    ]),

  RBAC: (c) =>
    svg(c, [
      <path key="a" d="M24 4L8 12v12c0 10.5 6.8 20.3 16 24 9.2-3.7 16-13.5 16-24V12L24 4z" fill="none" stroke="#FFA726" strokeWidth="2.5" />,
      <path key="b" d="M17 24l5 5 9-9" fill="none" stroke="#FFA726" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />,
    ]),

  "Microsoft Graph API": (c) =>
    svg(c, [
      <circle key="a" cx="24" cy="14" r="5" fill="none" stroke="#00B0FF" strokeWidth="2.5" />,
      <circle key="b" cx="12" cy="34" r="5" fill="none" stroke="#00B0FF" strokeWidth="2.5" />,
      <circle key="c" cx="36" cy="34" r="5" fill="none" stroke="#00B0FF" strokeWidth="2.5" />,
      <line key="d" x1="21" y1="18" x2="14" y2="30" stroke="#00B0FF" strokeWidth="2" />,
      <line key="e" x1="27" y1="18" x2="34" y2="30" stroke="#00B0FF" strokeWidth="2" />,
      <line key="f" x1="17" y1="34" x2="31" y2="34" stroke="#00B0FF" strokeWidth="2" />,
    ]),

  "Azure Cosmos DB": (c) =>
    svg(c, [
      <circle key="a" cx="24" cy="24" r="16" fill="none" stroke="#38BDF8" strokeWidth="2" />,
      <ellipse key="b" cx="24" cy="24" rx="16" ry="6" fill="none" stroke="#38BDF8" strokeWidth="2" transform="rotate(45 24 24)" />,
      <ellipse key="c" cx="24" cy="24" rx="16" ry="6" fill="none" stroke="#38BDF8" strokeWidth="2" transform="rotate(-45 24 24)" />,
      <circle key="d" cx="24" cy="24" r="3" fill="#38BDF8" />,
    ]),

  "HPA Autoscaling": (c) =>
    svg(c, [
      <path key="a" d="M8 40V20l12 12V20l12 12V8" fill="none" stroke="#26A69A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />,
      <polygon key="b" points="32,4 36,12 28,12" fill="#26A69A" />,
    ]),

  "Unit Testing": (c) =>
    svg(c, [
      <rect key="a" x="8" y="6" width="32" height="36" rx="4" fill="none" stroke="#4CAF50" strokeWidth="2.5" />,
      <path key="b" d="M16 18l4 4 8-8" fill="none" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />,
      <path key="c" d="M16 30l4 4 8-8" fill="none" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />,
    ]),

  "Integration Testing": (c) =>
    svg(c, [
      <rect key="a" x="4" y="16" width="12" height="12" rx="2" fill="none" stroke="#7E57C2" strokeWidth="2.5" />,
      <rect key="b" x="32" y="16" width="12" height="12" rx="2" fill="none" stroke="#7E57C2" strokeWidth="2.5" />,
      <rect key="c" x="18" y="4" width="12" height="12" rx="2" fill="none" stroke="#7E57C2" strokeWidth="2.5" />,
      <rect key="d" x="18" y="32" width="12" height="12" rx="2" fill="none" stroke="#7E57C2" strokeWidth="2.5" />,
      <line key="e" x1="24" y1="16" x2="24" y2="32" stroke="#7E57C2" strokeWidth="2" />,
      <line key="f" x1="16" y1="22" x2="32" y2="22" stroke="#7E57C2" strokeWidth="2" />,
    ]),

  JUnit: (c) =>
    svg(c, [
      <circle key="a" cx="24" cy="24" r="16" fill="none" stroke="#DC4A3D" strokeWidth="2.5" />,
      <path key="b" d="M16 24l6 6 10-12" fill="none" stroke="#25A162" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />,
    ]),

  "CI/CD Gates": (c) =>
    svg(c, [
      <path key="a" d="M24 8a16 16 0 0 1 0 32" fill="none" stroke="#42A5F5" strokeWidth="2.5" />,
      <path key="b" d="M24 40a16 16 0 0 1 0-32" fill="none" stroke="#EF5350" strokeWidth="2.5" />,
      <polygon key="c" points="28,8 24,2 20,8" fill="#42A5F5" />,
      <polygon key="d" points="20,40 24,46 28,40" fill="#EF5350" />,
    ]),

  "Automated Rollback": (c) =>
    svg(c, [
      <path key="a" d="M16 8l-8 8 8 8" fill="none" stroke="#FF8A65" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />,
      <path key="b" d="M8 16h24c5.5 0 10 4.5 10 10s-4.5 10-10 10H16" fill="none" stroke="#FF8A65" strokeWidth="2.5" strokeLinecap="round" />,
    ]),

  "Release Runbooks": (c) =>
    svg(c, [
      <path key="a" d="M12 6h24a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4z" fill="none" stroke="#90A4AE" strokeWidth="2.5" />,
      <path key="b" d="M16 16h16M16 24h12M16 32h8" stroke="#90A4AE" strokeWidth="2" strokeLinecap="round" />,
    ]),

  "Structured Logging": (c) =>
    svg(c, [
      <rect key="a" x="6" y="6" width="36" height="36" rx="4" fill="none" stroke="#80CBC4" strokeWidth="2.5" />,
      <path key="b" d="M12 24h24M12 30h18M12 36h12" stroke="#80CBC4" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />,
      <path key="c" d="M12 14l4 3-4 3" stroke="#80CBC4" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />,
    ]),

  "Monitoring & Alerting": (c) =>
    svg(c, [
      <rect key="a" x="4" y="8" width="40" height="28" rx="3" fill="none" stroke="#FFB74D" strokeWidth="2.5" />,
      <polyline key="b" points="10,28 18,20 24,26 34,16" fill="none" stroke="#FFB74D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />,
      <circle key="c" cx="34" cy="16" r="2" fill="#FF5252" />,
      <line key="d" x1="20" y1="40" x2="28" y2="40" stroke="#FFB74D" strokeWidth="2.5" strokeLinecap="round" />,
    ]),

  "SQL Query-Plan Review": (c) =>
    svg(c, [
      <circle key="a" cx="20" cy="20" r="12" fill="none" stroke="#90CAF9" strokeWidth="2.5" />,
      <line key="b" x1="29" y1="29" x2="40" y2="40" stroke="#90CAF9" strokeWidth="3" strokeLinecap="round" />,
      <path key="c" d="M14 22h4v4h-4zM22 16h4v10h-4z" fill="#90CAF9" opacity="0.8" />,
    ]),

  Indexing: (c) =>
    svg(c, [
      <rect key="a" x="8" y="6" width="8" height="36" rx="2" fill="none" stroke="#CE93D8" strokeWidth="2" />,
      <rect key="b" x="20" y="14" width="8" height="28" rx="2" fill="none" stroke="#CE93D8" strokeWidth="2" opacity="0.8" />,
      <rect key="c" x="32" y="22" width="8" height="20" rx="2" fill="none" stroke="#CE93D8" strokeWidth="2" opacity="0.6" />,
    ]),

  "SQL Optimization": (c) =>
    svg(c, [
      <circle key="a" cx="24" cy="24" r="16" fill="none" stroke="#4DB6AC" strokeWidth="2.5" />,
      <path key="b" d="M24 14v10l7 7" fill="none" stroke="#4DB6AC" strokeWidth="2.5" strokeLinecap="round" />,
    ]),

  "LLM Fine-Tuning (LoRA)": (c) =>
    svg(c, [
      <path key="a" d="M24 6c-4 0-7 2-8 5-3 0-6 3-6 6s2 5 4 6c-1 2-1 5 1 7s5 3 7 2c1 3 4 5 7 5" fill="none" stroke="#E040FB" strokeWidth="2" />,
      <path key="b" d="M24 6c4 0 7 2 8 5 3 0 6 3 6 6s-2 5-4 6c1 2 1 5-1 7s-5 3-7 2c-1 3-4 5-7 5" fill="none" stroke="#E040FB" strokeWidth="2" />,
      <line key="c" x1="24" y1="6" x2="24" y2="42" stroke="#E040FB" strokeWidth="1.5" opacity="0.4" />,
    ]),

  "NF4 4-bit Quantization": (c) =>
    svg(c, [
      <rect key="a" x="6" y="6" width="16" height="16" rx="2" fill="none" stroke="#FF6E40" strokeWidth="2.5" />,
      <rect key="b" x="26" y="6" width="8" height="8" rx="1" fill="none" stroke="#FF6E40" strokeWidth="2" />,
      <rect key="c" x="36" y="6" width="6" height="6" rx="1" fill="none" stroke="#FF6E40" strokeWidth="1.5" opacity="0.7" />,
      <rect key="d" x="26" y="16" width="6" height="6" rx="1" fill="none" stroke="#FF6E40" strokeWidth="1.5" opacity="0.7" />,
      <rect key="e" x="8" y="28" width="32" height="12" rx="2" fill="none" stroke="#FF6E40" strokeWidth="1.5" opacity="0.5" />,
    ]),

  "Mistral-7B": (c) =>
    svg(c, [
      <rect key="a" x="6" y="10" width="36" height="28" rx="4" fill="none" stroke="#FF6E40" strokeWidth="2.5" />,
      <circle key="b" cx="16" cy="24" r="4" fill="none" stroke="#FF6E40" strokeWidth="2" />,
      <circle key="c" cx="32" cy="24" r="4" fill="none" stroke="#FF6E40" strokeWidth="2" />,
      <line key="d" x1="20" y1="24" x2="28" y2="24" stroke="#FF6E40" strokeWidth="2" />,
    ]),

  DistilBERT: (c) =>
    svg(c, [
      <rect key="a" x="6" y="10" width="36" height="28" rx="4" fill="none" stroke="#FFA726" strokeWidth="2.5" />,
      <circle key="b" cx="16" cy="24" r="4" fill="none" stroke="#FFA726" strokeWidth="2" />,
      <circle key="c" cx="32" cy="24" r="4" fill="none" stroke="#FFA726" strokeWidth="2" />,
      <line key="d" x1="20" y1="24" x2="28" y2="24" stroke="#FFA726" strokeWidth="2" />,
    ]),

  XGBoost: (c) =>
    svg(c, [
      <circle key="a" cx="24" cy="10" r="5" fill="none" stroke="#EF5350" strokeWidth="2" />,
      <circle key="b" cx="14" cy="26" r="4" fill="none" stroke="#42A5F5" strokeWidth="2" />,
      <circle key="c" cx="34" cy="26" r="4" fill="none" stroke="#42A5F5" strokeWidth="2" />,
      <circle key="d" cx="8" cy="40" r="3" fill="none" stroke="#66BB6A" strokeWidth="1.5" />,
      <circle key="e" cx="20" cy="40" r="3" fill="none" stroke="#66BB6A" strokeWidth="1.5" />,
      <circle key="f" cx="28" cy="40" r="3" fill="none" stroke="#66BB6A" strokeWidth="1.5" />,
      <circle key="g" cx="40" cy="40" r="3" fill="none" stroke="#66BB6A" strokeWidth="1.5" />,
      <line key="h" x1="24" y1="15" x2="14" y2="22" stroke="#78909C" strokeWidth="1.5" />,
      <line key="i" x1="24" y1="15" x2="34" y2="22" stroke="#78909C" strokeWidth="1.5" />,
      <line key="j" x1="14" y1="30" x2="8" y2="37" stroke="#78909C" strokeWidth="1" />,
      <line key="k" x1="14" y1="30" x2="20" y2="37" stroke="#78909C" strokeWidth="1" />,
      <line key="l" x1="34" y1="30" x2="28" y2="37" stroke="#78909C" strokeWidth="1" />,
      <line key="m" x1="34" y1="30" x2="40" y2="37" stroke="#78909C" strokeWidth="1" />,
    ]),

  "Random Forest": (c) =>
    svg(c, [
      <circle key="a" cx="24" cy="10" r="5" fill="none" stroke="#66BB6A" strokeWidth="2.5" />,
      <circle key="b" cx="12" cy="28" r="4" fill="none" stroke="#66BB6A" strokeWidth="2" />,
      <circle key="c" cx="36" cy="28" r="4" fill="none" stroke="#66BB6A" strokeWidth="2" />,
      <circle key="d" cx="6" cy="42" r="3" fill="none" stroke="#66BB6A" strokeWidth="1.5" />,
      <circle key="e" cx="18" cy="42" r="3" fill="none" stroke="#66BB6A" strokeWidth="1.5" />,
      <circle key="f" cx="30" cy="42" r="3" fill="none" stroke="#66BB6A" strokeWidth="1.5" />,
      <circle key="g" cx="42" cy="42" r="3" fill="none" stroke="#66BB6A" strokeWidth="1.5" />,
      <line key="h" x1="24" y1="15" x2="12" y2="24" stroke="#66BB6A" strokeWidth="1.5" />,
      <line key="i" x1="24" y1="15" x2="36" y2="24" stroke="#66BB6A" strokeWidth="1.5" />,
      <line key="j" x1="12" y1="32" x2="6" y2="39" stroke="#66BB6A" strokeWidth="1.5" />,
      <line key="k" x1="12" y1="32" x2="18" y2="39" stroke="#66BB6A" strokeWidth="1.5" />,
      <line key="l" x1="36" y1="32" x2="30" y2="39" stroke="#66BB6A" strokeWidth="1.5" />,
      <line key="m" x1="36" y1="32" x2="42" y2="39" stroke="#66BB6A" strokeWidth="1.5" />,
    ]),

  SVM: (c) =>
    svg(c, [
      <line key="a" x1="6" y1="42" x2="42" y2="6" stroke="#F48FB1" strokeWidth="2.5" />,
      <line key="b" x1="6" y1="38" x2="38" y2="6" stroke="#F48FB1" strokeWidth="1" opacity="0.35" strokeDasharray="3 2" />,
      <line key="c" x1="10" y1="42" x2="42" y2="10" stroke="#F48FB1" strokeWidth="1" opacity="0.35" strokeDasharray="3 2" />,
      <circle key="d" cx="14" cy="34" r="3" fill="#42A5F5" />,
      <circle key="e" cx="10" cy="28" r="3" fill="#42A5F5" />,
      <circle key="f" cx="34" cy="14" r="3" fill="#EF5350" />,
      <circle key="g" cx="38" cy="18" r="3" fill="#EF5350" />,
    ]),

  SMOTE: (c) =>
    svg(c, [
      <line key="a" x1="24" y1="6" x2="24" y2="42" stroke="#26C6DA" strokeWidth="2.5" />,
      <line key="b" x1="8" y1="16" x2="40" y2="16" stroke="#26C6DA" strokeWidth="2.5" />,
      <circle key="c" cx="9" cy="16" r="3" fill="#EF5350" opacity="0.85" />,
      <circle key="d" cx="39" cy="16" r="3" fill="#42A5F5" opacity="0.85" />,
      <circle key="e" cx="33" cy="16" r="3" fill="#42A5F5" opacity="0.85" />,
      <polygon key="f" points="24,6 20,2 28,2" fill="#26C6DA" />,
    ]),

  "Stratified k-Fold Cross-Validation": (c) =>
    svg(c, [
      <rect key="a" x="6" y="8" width="8" height="32" rx="1" fill="#7E57C2" opacity="0.75" />,
      <rect key="b" x="16" y="8" width="8" height="32" rx="1" fill="#7E57C2" opacity="0.3" />,
      <rect key="c" x="26" y="8" width="8" height="32" rx="1" fill="#7E57C2" opacity="0.3" />,
      <rect key="d" x="36" y="8" width="8" height="32" rx="1" fill="#7E57C2" opacity="0.3" />,
      <rect key="e" x="16" y="16" width="8" height="8" rx="1" fill="#E040FB" opacity="0.7" />,
      <rect key="f" x="26" y="24" width="8" height="8" rx="1" fill="#E040FB" opacity="0.7" />,
      <rect key="g" x="36" y="32" width="8" height="8" rx="1" fill="#E040FB" opacity="0.7" />,
    ]),

  "Metrics (Accuracy, ROC-AUC, F1)": (c) =>
    svg(c, [
      <path key="a" d="M6 42 Q12 10, 24 24 Q36 38, 42 6" fill="none" stroke="#FDD835" strokeWidth="2.5" />,
      <line key="b" x1="6" y1="42" x2="42" y2="42" stroke="#FDD835" strokeWidth="1.5" opacity="0.4" />,
      <line key="c" x1="6" y1="42" x2="6" y2="6" stroke="#FDD835" strokeWidth="1.5" opacity="0.4" />,
      <circle key="d" cx="24" cy="24" r="2.5" fill="#FDD835" />,
    ]),

  Microservices: (c) =>
    svg(c, [
      <rect key="a" x="4" y="4" width="12" height="12" rx="3" fill="none" stroke="#42A5F5" strokeWidth="2" />,
      <rect key="b" x="32" y="4" width="12" height="12" rx="3" fill="none" stroke="#66BB6A" strokeWidth="2" />,
      <rect key="c" x="4" y="32" width="12" height="12" rx="3" fill="none" stroke="#FF7043" strokeWidth="2" />,
      <rect key="d" x="32" y="32" width="12" height="12" rx="3" fill="none" stroke="#AB47BC" strokeWidth="2" />,
      <line key="e" x1="16" y1="10" x2="32" y2="10" stroke="#78909C" strokeWidth="1.5" strokeDasharray="3 2" />,
      <line key="f" x1="10" y1="16" x2="10" y2="32" stroke="#78909C" strokeWidth="1.5" strokeDasharray="3 2" />,
      <line key="g" x1="38" y1="16" x2="38" y2="32" stroke="#78909C" strokeWidth="1.5" strokeDasharray="3 2" />,
      <line key="h" x1="16" y1="38" x2="32" y2="38" stroke="#78909C" strokeWidth="1.5" strokeDasharray="3 2" />,
    ]),

  "Distributed Systems": (c) =>
    svg(c, [
      <circle key="a" cx="24" cy="24" r="5" fill="none" stroke="#26C6DA" strokeWidth="2.5" />,
      <circle key="b" cx="10" cy="10" r="4" fill="none" stroke="#26C6DA" strokeWidth="2" />,
      <circle key="c" cx="38" cy="10" r="4" fill="none" stroke="#26C6DA" strokeWidth="2" />,
      <circle key="d" cx="10" cy="38" r="4" fill="none" stroke="#26C6DA" strokeWidth="2" />,
      <circle key="e" cx="38" cy="38" r="4" fill="none" stroke="#26C6DA" strokeWidth="2" />,
      <line key="f" x1="20" y1="20" x2="13" y2="13" stroke="#26C6DA" strokeWidth="1.5" />,
      <line key="g" x1="28" y1="20" x2="35" y2="13" stroke="#26C6DA" strokeWidth="1.5" />,
      <line key="h" x1="20" y1="28" x2="13" y2="35" stroke="#26C6DA" strokeWidth="1.5" />,
      <line key="i" x1="28" y1="28" x2="35" y2="35" stroke="#26C6DA" strokeWidth="1.5" />,
    ]),

  "Event-Driven Architecture": (c) =>
    svg(c, [
      <polygon key="a" points="24,4 28,18 20,18" fill="#FFA726" />,
      <polygon key="b" points="24,18 30,36 18,36" fill="#FFA726" opacity="0.6" />,
      <line key="c" x1="24" y1="36" x2="24" y2="44" stroke="#FFA726" strokeWidth="2" />,
      <circle key="d" cx="12" cy="30" r="3" fill="none" stroke="#FFA726" strokeWidth="1.5" opacity="0.5" />,
      <circle key="e" cx="36" cy="30" r="3" fill="none" stroke="#FFA726" strokeWidth="1.5" opacity="0.5" />,
    ]),

  "Asynchronous Processing": (c) =>
    svg(c, [
      <path key="a" d="M8 16h12" stroke="#7E57C2" strokeWidth="2.5" strokeLinecap="round" />,
      <path key="b" d="M28 16h12" stroke="#7E57C2" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />,
      <path key="c" d="M8 24h12" stroke="#7E57C2" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />,
      <path key="d" d="M28 24h12" stroke="#7E57C2" strokeWidth="2.5" strokeLinecap="round" />,
      <path key="e" d="M8 32h12" stroke="#7E57C2" strokeWidth="2.5" strokeLinecap="round" />,
      <path key="f" d="M28 32h12" stroke="#7E57C2" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />,
      <polygon key="g" points="22,12 26,16 22,20" fill="#7E57C2" />,
      <polygon key="h" points="26,28 22,32 26,36" fill="#7E57C2" opacity="0.7" />,
    ]),

  "Caching Strategies": (c) =>
    svg(c, [
      <rect key="a" x="8" y="8" width="32" height="32" rx="4" fill="none" stroke="#EF5350" strokeWidth="2.5" />,
      <line key="b" x1="8" y1="20" x2="40" y2="20" stroke="#EF5350" strokeWidth="1.5" />,
      <line key="c" x1="8" y1="32" x2="40" y2="32" stroke="#EF5350" strokeWidth="1.5" />,
      <line key="d" x1="24" y1="8" x2="24" y2="40" stroke="#EF5350" strokeWidth="1.5" />,
      <circle key="e" cx="16" cy="14" r="2" fill="#FDD835" />,
      <circle key="f" cx="32" cy="26" r="2" fill="#FDD835" />,
    ]),

  "Polyglot Persistence": (c) =>
    svg(c, [
      <ellipse key="a" cx="14" cy="14" rx="10" ry="5" fill="none" stroke="#42A5F5" strokeWidth="2" />,
      <path key="b" d="M4 14v8c0 2.8 4.5 5 10 5s10-2.2 10-5v-8" fill="none" stroke="#42A5F5" strokeWidth="2" />,
      <rect key="c" x="26" y="22" width="18" height="14" rx="2" fill="none" stroke="#66BB6A" strokeWidth="2" />,
      <path key="d" d="M32 26l-3 3 3 3M38 26l3 3-3 3" fill="none" stroke="#66BB6A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
    ]),

  Observability: (c) =>
    svg(c, [
      <path key="a" d="M4 24s8-14 20-14 20 14 20 14-8 14-20 14S4 24 4 24z" fill="none" stroke="#80DEEA" strokeWidth="2.5" />,
      <circle key="b" cx="24" cy="24" r="6" fill="none" stroke="#80DEEA" strokeWidth="2.5" />,
      <circle key="c" cx="24" cy="24" r="2.5" fill="#80DEEA" />,
    ]),

  "Incident Response & On-Call": (c) =>
    svg(c, [
      <path key="a" d="M24 4L4 40h40L24 4z" fill="none" stroke="#FF5252" strokeWidth="2.5" strokeLinejoin="round" />,
      <line key="b" x1="24" y1="18" x2="24" y2="28" stroke="#FF5252" strokeWidth="3" strokeLinecap="round" />,
      <circle key="c" cx="24" cy="34" r="2" fill="#FF5252" />,
    ]),

  "Root Cause Analysis (RCA)": (c) =>
    svg(c, [
      <circle key="a" cx="20" cy="20" r="14" fill="none" stroke="#FFB74D" strokeWidth="2.5" />,
      <line key="b" x1="30" y1="30" x2="42" y2="42" stroke="#FFB74D" strokeWidth="3" strokeLinecap="round" />,
      <circle key="c" cx="20" cy="20" r="5" fill="none" stroke="#FFB74D" strokeWidth="1.5" opacity="0.5" />,
      <circle key="d" cx="20" cy="20" r="1.5" fill="#FFB74D" />,
    ]),

  SDLC: (c) =>
    svg(c, [
      <circle key="a" cx="24" cy="24" r="16" fill="none" stroke="#9CCC65" strokeWidth="2.5" />,
      <polygon key="b" points="24,12 20,20 28,20" fill="#9CCC65" opacity="0.85" />,
      <polygon key="c" points="32,20 34,28 28,26" fill="#9CCC65" opacity="0.6" />,
      <polygon key="d" points="30,32 24,36 22,30" fill="#9CCC65" opacity="0.85" />,
      <polygon key="e" points="16,30 14,22 20,24" fill="#9CCC65" opacity="0.6" />,
    ]),

  "Apache Kafka": (c) =>
    svg(c, [
      <circle key="a" cx="24" cy="24" r="5" fill="none" stroke="#CBD5E1" strokeWidth="2" />,
      <circle key="b" cx="24" cy="10" r="4" fill="none" stroke="#CBD5E1" strokeWidth="2" />,
      <circle key="c" cx="36" cy="17" r="4" fill="none" stroke="#CBD5E1" strokeWidth="2" />,
      <circle key="d" cx="36" cy="31" r="4" fill="none" stroke="#CBD5E1" strokeWidth="2" />,
      <circle key="e" cx="24" cy="38" r="4" fill="none" stroke="#CBD5E1" strokeWidth="2" />,
      <circle key="f" cx="12" cy="31" r="4" fill="none" stroke="#CBD5E1" strokeWidth="2" />,
      <circle key="g" cx="12" cy="17" r="4" fill="none" stroke="#CBD5E1" strokeWidth="2" />,
      <line key="h" x1="24" y1="19" x2="24" y2="14" stroke="#4FC3F7" strokeWidth="1.5" />,
      <line key="i" x1="28" y1="21" x2="33" y2="18" stroke="#4FC3F7" strokeWidth="1.5" />,
      <line key="j" x1="28" y1="27" x2="33" y2="30" stroke="#4FC3F7" strokeWidth="1.5" />,
      <line key="k" x1="24" y1="29" x2="24" y2="34" stroke="#4FC3F7" strokeWidth="1.5" />,
      <line key="l" x1="20" y1="27" x2="15" y2="30" stroke="#4FC3F7" strokeWidth="1.5" />,
      <line key="m" x1="20" y1="21" x2="15" y2="18" stroke="#4FC3F7" strokeWidth="1.5" />,
    ]),

  "Agile Collaboration": (c) =>
    svg(c, [
      <path key="a" d="M24 8a16 16 0 0 1 14 8" fill="none" stroke="#29B6F6" strokeWidth="2.5" strokeLinecap="round" />,
      <path key="b" d="M38 16a16 16 0 0 1 0 16" fill="none" stroke="#66BB6A" strokeWidth="2.5" strokeLinecap="round" />,
      <path key="c" d="M38 32a16 16 0 0 1-14 8" fill="none" stroke="#FFA726" strokeWidth="2.5" strokeLinecap="round" />,
      <path key="d" d="M24 40a16 16 0 0 1-14-8" fill="none" stroke="#EF5350" strokeWidth="2.5" strokeLinecap="round" />,
      <path key="e" d="M10 32a16 16 0 0 1 0-16" fill="none" stroke="#AB47BC" strokeWidth="2.5" strokeLinecap="round" />,
      <path key="f" d="M10 16a16 16 0 0 1 14-8" fill="none" stroke="#26C6DA" strokeWidth="2.5" strokeLinecap="round" />,
      <polygon key="g" points="24,4 28,10 20,10" fill="#29B6F6" />,
    ]),
};

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const deviconUrl = (icon: string) => `${DEVICON_BASE}/${icon}.svg`;
