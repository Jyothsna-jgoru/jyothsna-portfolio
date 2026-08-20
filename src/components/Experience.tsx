import { experiences } from "../data/profile";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="shell">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title="Professional"
          accent="Journey"
          description="Building and operating production systems across financial services, high-traffic consumer platforms, health-tech, and applied machine learning."
        />

        <div className="relative mx-auto max-w-4xl">
          {/* timeline rail */}
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-[7px] top-8 w-px bg-gradient-to-b from-accent-500/60 via-[color:var(--line-strong)] to-transparent"
          />

          <ol className="space-y-6">
            {experiences.map((item, i) => (
              <li key={item.company} className="relative pl-9 md:pl-14">
                {/* timeline node */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-8 flex h-[15px] w-[15px] items-center justify-center"
                >
                  {item.current && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-50" />
                  )}
                  <span
                    className={`relative h-[15px] w-[15px] rounded-full border-2 bg-app ${
                      item.current ? "border-accent-400" : "border-line-strong"
                    }`}
                    style={
                      item.current
                        ? { boxShadow: "0 0 0 4px rgba(139,92,246,0.14)" }
                        : undefined
                    }
                  />
                </span>

                <Reveal direction="right" delay={i * 0.08}>
                  <article className="panel panel-hover panel-sheen p-6 md:p-7">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                      {/* White plate, sized wide: every company mark here is a
                          wordmark, and two of the three are dark artwork that
                          would vanish on a dark tile. */}
                      <span className="flex h-14 w-[126px] shrink-0 items-center justify-center rounded-2xl bg-white px-3 py-2 shadow-[0_10px_26px_-14px_rgba(0,0,0,0.75)]">
                        {item.logo ? (
                          <img
                            src={item.logo}
                            alt={item.company}
                            loading="lazy"
                            className="h-full w-full object-contain"
                          />
                        ) : (
                          <span
                            className="font-display text-lg font-bold"
                            style={{
                              /* the plate is white in both themes */
                              background:
                                "linear-gradient(135deg, #6d28d9, #0369a1)",
                              WebkitBackgroundClip: "text",
                              backgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                            }}
                          >
                            {item.monogram ?? item.company.charAt(0)}
                          </span>
                        )}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                          <h3 className="font-display text-xl font-bold">
                            {item.company}
                          </h3>
                          <span
                            className={
                              item.current
                                ? "chip border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                                : "chip-accent"
                            }
                          >
                            {item.current && (
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            )}
                            {item.length}
                          </span>
                        </div>

                        <p className="mt-1.5 text-sm font-semibold text-accent">
                          {item.title}
                        </p>

                        <p className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[11px] text-[color:var(--txt-faint)]">
                          <span>{item.period}</span>
                          <span aria-hidden="true">·</span>
                          <span>{item.location}</span>
                        </p>

                        <p className="mt-4 text-[14px] leading-[1.8] text-[color:var(--txt-mute)]">
                          {item.description}
                        </p>

                        <ul className="mt-5 flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <li key={tag}>
                              <span className="chip">{tag}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
