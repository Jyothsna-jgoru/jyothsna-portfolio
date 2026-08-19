/* ============================================================
   Ambient page background.

   Six stacked, purely decorative layers — no DOM nodes per
   particle, so it costs nothing to scroll:
     1. flat base colour
     2. violet glow behind the hero
     3. three slow aurora blobs
     4. engineering grid, masked so it fades out downward
     5. a faint starfield painted with radial gradients
     6. film grain + a bottom fade into the page colour
   ============================================================ */

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")";

const STARS = [
  "radial-gradient(1.1px 1.1px at 12% 18%, rgba(255,255,255,0.55), transparent)",
  "radial-gradient(1px 1px at 68% 9%, rgba(199,210,254,0.45), transparent)",
  "radial-gradient(1.2px 1.2px at 33% 62%, rgba(255,255,255,0.38), transparent)",
  "radial-gradient(1px 1px at 84% 47%, rgba(186,230,253,0.42), transparent)",
  "radial-gradient(1px 1px at 51% 88%, rgba(255,255,255,0.30), transparent)",
  "radial-gradient(1.3px 1.3px at 91% 76%, rgba(221,214,254,0.38), transparent)",
  "radial-gradient(1px 1px at 7% 79%, rgba(255,255,255,0.28), transparent)",
].join(",");

const GRID_MASK =
  "radial-gradient(ellipse 120% 70% at 50% 0%, #000 25%, rgba(0,0,0,0.45) 55%, transparent 85%)";

export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* 1. Base */}
      <div className="absolute inset-0 bg-ink-950" />

      {/* 2. Hero glow */}
      <div
        className="absolute left-1/2 top-[-22%] h-[46rem] w-[76rem] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(124,58,237,0.22) 0%, rgba(99,102,241,0.08) 45%, transparent 72%)",
        }}
      />

      {/* 3. Aurora */}
      <div
        className="absolute -left-[14%] top-[8%] h-[32rem] w-[32rem] rounded-full opacity-70 blur-[120px] animate-auroraA"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.20) 0%, transparent 68%)",
        }}
      />
      <div
        className="absolute -right-[10%] top-[38%] h-[36rem] w-[36rem] rounded-full opacity-70 blur-[130px] animate-auroraB"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.24) 0%, transparent 68%)",
        }}
      />
      <div
        className="absolute bottom-[-8%] left-[22%] h-[30rem] w-[30rem] rounded-full opacity-60 blur-[130px] animate-auroraC"
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,233,0.16) 0%, transparent 70%)",
        }}
      />

      {/* 4. Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.032) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(255,255,255,0.032) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          WebkitMaskImage: GRID_MASK,
          maskImage: GRID_MASK,
        }}
      />

      {/* 5. Starfield */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: STARS,
          backgroundSize: "560px 560px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* 6. Grain + bottom fade */}
      <div
        className="absolute inset-0 opacity-[0.028] mix-blend-overlay"
        style={{ backgroundImage: GRAIN }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-72"
        style={{
          background: "linear-gradient(to top, #05070d 10%, transparent 100%)",
        }}
      />
    </div>
  );
}
