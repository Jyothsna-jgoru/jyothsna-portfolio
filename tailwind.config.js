/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        display: ["Sora", "Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        ink: {
          950: "#05070d",
          900: "#080b14",
          850: "#0b0f1a",
          800: "#0f1422",
          700: "#151b2c",
          600: "#1d2438",
        },
        accent: {
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
        },
        aqua: {
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
        },
      },
      maxWidth: {
        content: "72rem",
      },
      borderRadius: {
        "4xl": "1.75rem",
      },
      boxShadow: {
        panel:
          "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 18px 40px -18px rgba(0,0,0,0.9)",
        lift: "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 28px 60px -24px rgba(0,0,0,0.95)",
        glow: "0 0 0 1px rgba(139,92,246,0.25), 0 24px 60px -22px rgba(139,92,246,0.55)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        auroraA: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(6%, -8%, 0) scale(1.12)" },
        },
        auroraB: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1.05)" },
          "50%": { transform: "translate3d(-7%, 6%, 0) scale(0.95)" },
        },
        auroraC: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(4%, 7%, 0) scale(1.1)" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        caret: {
          "0%, 45%": { opacity: "1" },
          "50%, 95%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        popIn: {
          from: { opacity: "0", transform: "translateY(12px) scale(0.98)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        scrollCue: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "35%": { opacity: "1" },
          "100%": { transform: "translateY(14px)", opacity: "0" },
        },
      },
      animation: {
        auroraA: "auroraA 22s ease-in-out infinite",
        auroraB: "auroraB 27s ease-in-out infinite",
        auroraC: "auroraC 32s ease-in-out infinite",
        floatY: "floatY 6s ease-in-out infinite",
        caret: "caret 1.1s steps(1) infinite",
        shimmer: "shimmer 6s linear infinite",
        popIn: "popIn 0.32s cubic-bezier(0.16, 1, 0.3, 1)",
        fadeIn: "fadeIn 0.25s ease-out",
        scrollCue: "scrollCue 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
