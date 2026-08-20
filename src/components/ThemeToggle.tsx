import type { Theme } from "../hooks/useTheme";

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <button
      onClick={onToggle}
      role="switch"
      aria-checked={!isDark}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="relative flex h-9 w-[62px] shrink-0 items-center rounded-full border border-line bg-surface px-1 transition-colors duration-300"
    >
      {/* sliding knob */}
      <span
        className="absolute h-7 w-7 rounded-full transition-transform duration-500 ease-smooth"
        style={{
          transform: `translateX(${isDark ? 0 : 26}px)`,
          background: isDark
            ? "linear-gradient(135deg, #8b5cf6, #6d28d9)"
            : "linear-gradient(135deg, #fbbf24, #f59e0b)",
          boxShadow: isDark
            ? "0 6px 16px -6px rgba(139,92,246,0.9)"
            : "0 6px 16px -6px rgba(245,158,11,0.9)",
        }}
      />

      {/* moon */}
      <span
        className={`relative z-10 flex h-7 w-7 items-center justify-center transition-colors duration-300 ${
          isDark ? "text-white" : "text-[color:var(--txt-faint)]"
        }`}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      </span>

      {/* sun */}
      <span
        className={`relative z-10 ml-[10px] flex h-7 w-7 items-center justify-center transition-colors duration-300 ${
          isDark ? "text-[color:var(--txt-faint)]" : "text-white"
        }`}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      </span>
    </button>
  );
}
