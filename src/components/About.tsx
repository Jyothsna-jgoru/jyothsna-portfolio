import { about } from "../data/profile";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Engineering"
          accent="Profile"
        />

        <div className="mx-auto max-w-3xl space-y-5">
          {about.paragraphs.map((paragraph, i) => (
            <Reveal key={i} direction="up" delay={i * 0.08}>
              <p className="lede">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {about.focus.map((item, i) => (
            <Reveal key={item.title} direction="up" delay={0.1 + i * 0.08}>
              <article className="panel panel-hover panel-sheen group h-full p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-accent-500/25 bg-accent-500/[0.09] font-mono text-[11px] font-medium text-accent-300 transition-colors duration-300 group-hover:border-accent-500/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-[1.7] text-[color:var(--txt-mute)]">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
