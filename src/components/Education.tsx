import { education } from "../data/profile";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="shell">
        <SectionHeading
          index="05"
          eyebrow="Education"
          title="Academic"
          accent="Background"
        />

        <div className="mx-auto grid max-w-5xl gap-5">
          {education.map((item, i) => (
            <Reveal
              key={item.institution}
              direction="up"
              delay={i * 0.08}
              className="h-full"
            >
              <article className="panel panel-hover relative flex h-full flex-col overflow-hidden p-6 pl-7 md:p-7 md:pl-9">
                {/* accent spine */}
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-[3px]"
                  style={{
                    background:
                      "linear-gradient(to bottom, #8b5cf6, #6d28d9 55%, #38bdf8)",
                  }}
                />

                <div className="flex items-start gap-5">
                  {/* White plate so dark university marks stay legible. Sized
                      wide because both logos are wordmarks, not square seals —
                      a square plate would render them as a thin sliver. */}
                  <span className="flex h-14 w-[136px] shrink-0 items-center justify-center rounded-2xl bg-white px-3 py-2 shadow-[0_10px_26px_-12px_rgba(0,0,0,0.9)]">
                    <img
                      src={item.logo}
                      alt={item.institution}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-bold leading-snug md:text-xl">
                      {item.field}
                    </h3>
                    <p className="mt-1.5 text-[14px] font-semibold text-accent-300">
                      {item.institution}
                    </p>
                    <p className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[11px] text-[color:var(--txt-faint)]">
                      <span>{item.period}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.location}</span>
                    </p>
                  </div>
                </div>

                <div className="hairline my-6" />

                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--txt-faint)]">
                  Relevant coursework
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {item.coursework.map((course) => (
                    <li key={course}>
                      <span className="chip-interactive">{course}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
