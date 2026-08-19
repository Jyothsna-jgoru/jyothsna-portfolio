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

        <div className="grid gap-5 lg:grid-cols-2">
          {education.map((item, i) => (
            <Reveal
              key={item.institution}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 0.08}
              className="h-full"
            >
              <article className="panel panel-hover panel-sheen flex h-full flex-col p-6 md:p-7">
                <div className="flex items-start gap-4">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04] p-2.5">
                    <img
                      src={item.logo}
                      alt={item.institution}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </span>

                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-bold leading-snug">
                      {item.institution}
                    </h3>
                    <p className="mt-1.5 text-[13.5px] font-semibold text-accent-300">
                      {item.field}
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
