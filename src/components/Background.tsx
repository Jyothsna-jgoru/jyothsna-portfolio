/* ============================================================
   Ambient page background.

   Two colours over the page base: violet in the upper left, sky in
   the lower right, both washing out before they meet. These are the
   same two accents the buttons, chips and headings use, so the page
   reads as one palette rather than a backdrop plus a theme.

   Every layer reads its colour from a token, so the light theme gets
   genuinely different values rather than an inverted dark one — the
   washes lighten, the starfield disappears (stars on white read as
   dirt), and the grain drops to almost nothing.

   No grid, no particles: every layer is a painted gradient, so the
   whole background costs a handful of DOM nodes.
   ============================================================ */

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")";

const STARS = [
  "radial-gradient(1.1px 1.1px at 12% 18%, rgba(255,255,255,0.4), transparent)",
  "radial-gradient(1px 1px at 68% 9%, rgba(199,210,254,0.34), transparent)",
  "radial-gradient(1.2px 1.2px at 33% 62%, rgba(255,255,255,0.28), transparent)",
  "radial-gradient(1px 1px at 84% 47%, rgba(186,230,253,0.32), transparent)",
  "radial-gradient(1px 1px at 51% 88%, rgba(255,255,255,0.22), transparent)",
  "radial-gradient(1.3px 1.3px at 91% 76%, rgba(221,214,254,0.28), transparent)",
].join(",");

export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* 1. Page base */}
      <div className="absolute inset-0 bg-app" />

      {/* 2. The two-colour diagonal wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg," +
            " var(--wash-1) 0%," +
            " var(--wash-2) 26%," +
            " transparent 47%," +
            " transparent 55%," +
            " var(--wash-3) 76%," +
            " var(--wash-4) 100%)",
        }}
      />

      {/* 3. Violet field, upper left */}
      <div
        className="absolute -left-[18%] -top-[22%] h-[46rem] w-[46rem] rounded-full blur-[130px] animate-auroraA"
        style={{ background: "var(--field-violet)" }}
      />

      {/* 4. Sky field, lower right */}
      <div
        className="absolute -bottom-[24%] -right-[16%] h-[46rem] w-[46rem] rounded-full blur-[130px] animate-auroraB"
        style={{ background: "var(--field-sky)" }}
      />

      {/* 5. Centre vignette — keeps long-form text on a calm surface */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--vignette)" }}
      />

      {/* 6. Starfield — dark theme only */}
      <div
        className="absolute inset-0 opacity-60 [html[data-theme='light']_&]:hidden"
        style={{
          backgroundImage: STARS,
          backgroundSize: "620px 620px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* 7. Grain */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay [html[data-theme='light']_&]:opacity-[0.012]"
        style={{ backgroundImage: GRAIN }}
      />
    </div>
  );
}
