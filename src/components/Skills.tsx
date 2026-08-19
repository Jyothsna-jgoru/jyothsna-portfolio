import { useState } from "react";
import type { Skill } from "../data/profile";
import { skillCount, skillGroups } from "../data/profile";
import { customIconMap, deviconUrl } from "./TechIcons";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const ICON_CLASS = "h-[15px] w-[15px] shrink-0";

function SkillChip({ skill }: { skill: Skill }) {
  const [failed, setFailed] = useState(false);
  const custom = customIconMap[skill.name];

  return (
    <span className="chip-interactive">
      {custom ? (
        custom(ICON_CLASS)
      ) : skill.icon && !failed ? (
        <img
          src={deviconUrl(skill.icon)}
          alt=""
          loading="lazy"
          onError={() => setFailed(true)}
          className={`${ICON_CLASS} object-contain`}
        />
      ) : (
        <span
          className={`${ICON_CLASS} grid place-items-center rounded-[4px] bg-accent-500/20 text-[8px] font-bold text-accent-200`}
        >
          {skill.name.charAt(0)}
        </span>
      )}
      {skill.name}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="shell">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="Technical"
          accent="Toolkit"
          description="Backend development, distributed systems, cloud-native infrastructure, databases, API development, and applied artificial intelligence — the technologies I reach for when building scalable, reliable, production-ready software."
        />

        <Reveal direction="fade">
          <p className="mb-8 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--txt-faint)]">
            {skillCount} technologies · {skillGroups.length} disciplines
          </p>
        </Reveal>

        <div className="gap-5 md:columns-2 xl:columns-3">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.title}
              direction="up"
              delay={Math.min(i * 0.05, 0.3)}
              className="mb-5 break-inside-avoid"
            >
              <div className="panel panel-hover panel-sheen p-5">
                <header className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-[15px] font-semibold">
                    {group.title}
                  </h3>
                  <span className="font-mono text-[10px] text-[color:var(--txt-faint)]">
                    {String(group.skills.length).padStart(2, "0")}
                  </span>
                </header>

                <p className="mt-1.5 text-[12px] leading-relaxed text-[color:var(--txt-faint)]">
                  {group.blurb}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <li key={skill.name}>
                      <SkillChip skill={skill} />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
