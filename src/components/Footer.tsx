import { navSections, profile } from "../data/profile";

/**
 * Deliberately lean. The Contact section immediately above already
 * carries the call to action, the email, the phone, the social links
 * and the form — so none of that is repeated here. The footer handles
 * identity, wayfinding and the legal line, and nothing else.
 */
export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07]">
      {/* accent hairline along the very top edge */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(139,92,246,0.7), rgba(56,189,248,0.5), transparent)",
        }}
      />

      {/* glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[22rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(139,92,246,0.15), transparent 70%)",
        }}
      />

      {/* oversized wordmark watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 select-none whitespace-nowrap text-center font-display font-extrabold leading-none tracking-tighter"
        style={{
          fontSize: "clamp(3.5rem, 15vw, 12rem)",
          transform: "translateY(28%)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0) 78%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent",
        }}
      >
        JYOTHSNA
      </div>

      <div className="shell relative z-10 pb-28 pt-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start">
          {/* identity */}
          <div>
            <div className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl font-display text-sm font-bold text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #8b5cf6, #6d28d9 55%, #0ea5e9)",
                  boxShadow: "0 10px 26px -12px rgba(139,92,246,0.9)",
                }}
              >
                JG
              </span>
              <span className="font-display text-base font-bold">
                {profile.name}
              </span>
            </div>

            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-[color:var(--txt-mute)]">
              Backend systems, distributed architecture, and applied AI — built
              to stay fast, correct, and observable in production.
            </p>

            {/* A closing note rather than another copy of the social links */}
            <figure className="mt-6 max-w-sm border-l-2 border-accent-500/40 pl-4">
              <blockquote className="font-display text-[15px] font-medium italic leading-relaxed text-[color:var(--txt)]">
                “Design for the failure case. The happy path takes care of
                itself.”
              </blockquote>
              <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--txt-faint)]">
                How I build
              </figcaption>
            </figure>
          </div>

          {/* wayfinding */}
          <nav aria-label="Footer">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--txt-faint)]">
              Explore
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2.5">
              {navSections.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="group inline-flex items-center gap-1.5 text-[13px] text-[color:var(--txt-mute)] transition-colors duration-300 hover:text-accent-200"
                  >
                    <span className="h-px w-0 bg-accent-400 transition-all duration-300 group-hover:w-3" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="hairline my-9" />

        {/* pr keeps the last line clear of the floating back-to-top button */}
        <div className="flex flex-col items-center justify-between gap-3 pr-16 text-[11.5px] text-[color:var(--txt-faint)] sm:flex-row xl:pr-0">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono">Built with React · TypeScript · Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
