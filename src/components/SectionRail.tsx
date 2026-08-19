import { navSections } from "../data/profile";
import useActiveSection from "../hooks/useActiveSection";

/**
 * Progress rail down the right edge: one marker per section, the current
 * one stretching into a lit bar. Doubles as navigation — each marker is a
 * real link, and hovering reveals the section name.
 *
 * Only from xl up, where the centred layout leaves clear margin.
 */
export default function SectionRail() {
  const active = useActiveSection();

  return (
    <nav
      aria-label="Section progress"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 xl:block 2xl:right-8"
    >
      <ul className="flex flex-col items-center gap-3.5">
        {navSections.map(({ id, label }) => {
          const isActive = active === id;

          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-label={label}
                aria-current={isActive ? "true" : undefined}
                className="group relative flex h-6 w-4 items-center justify-center"
              >
                {/* marker */}
                <span
                  className={`block rounded-full transition-all duration-500 ease-smooth ${
                    isActive
                      ? "h-6 w-[3px] bg-accent-400"
                      : "h-[5px] w-[5px] bg-white/25 group-hover:scale-125 group-hover:bg-white/70"
                  }`}
                  style={
                    isActive
                      ? { boxShadow: "0 0 14px rgba(139,92,246,0.85)" }
                      : undefined
                  }
                />

                {/* name, revealed on hover */}
                <span className="pointer-events-none absolute right-full mr-3 translate-x-1 whitespace-nowrap rounded-lg border border-white/10 bg-ink-800/95 px-2.5 py-1 text-[11px] font-medium text-[color:var(--txt)] opacity-0 shadow-lift transition-all duration-300 ease-smooth group-hover:translate-x-0 group-hover:opacity-100">
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
