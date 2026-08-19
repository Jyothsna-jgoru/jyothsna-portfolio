import Reveal from "./Reveal";

interface SectionHeadingProps {
  /** Two-digit section number shown in the eyebrow, e.g. "02" */
  index: string;
  eyebrow: string;
  title: string;
  /** Trailing word rendered in the gradient accent */
  accent: string;
  description?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  index,
  eyebrow,
  title,
  accent,
  description,
  align = "center",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={`mb-14 ${
        centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left"
      }`}
    >
      <Reveal direction="fade">
        <span
          className={`eyebrow ${centered ? "justify-center" : ""} w-full`}
        >
          <span className="h-px w-7 bg-gradient-to-r from-transparent to-accent-500/70" />
          <span className="text-[color:var(--txt-faint)]">{index}</span>
          <span>{eyebrow}</span>
          <span className="h-px w-7 bg-gradient-to-l from-transparent to-accent-500/70" />
        </span>
      </Reveal>

      <Reveal direction="up" delay={0.06}>
        <h2 className="mt-5 text-[1.9rem] font-bold leading-[1.15] sm:text-4xl md:text-[2.7rem]">
          {title} <span className="text-gradient">{accent}</span>
        </h2>
      </Reveal>

      {description && (
        <Reveal direction="up" delay={0.12}>
          <p className={`lede mt-5 ${centered ? "mx-auto" : ""}`}>{description}</p>
        </Reveal>
      )}
    </div>
  );
}
