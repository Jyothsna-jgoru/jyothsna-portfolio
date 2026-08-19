import { useEffect, useRef, useState } from "react";
import {
  coreStack,
  education,
  focusAreas,
  profile,
  socials,
  stats,
} from "../data/profile";
import { deviconUrl } from "./TechIcons";
import { ArrowRightIcon } from "./ui/Icons";
import Reveal from "./ui/Reveal";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  if (hour < 21) return "Good evening";
  return "Good night";
}

/* ---------- rotating specialisation line ---------- */

function TypingText({
  texts,
  speed = 70,
  pause = 2100,
}: {
  texts: string[];
  speed?: number;
  pause?: number;
}) {
  const [index, setIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && charCount < current.length) {
      timer = setTimeout(() => setCharCount((c) => c + 1), speed);
    } else if (!deleting && charCount === current.length) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charCount > 0) {
      timer = setTimeout(() => setCharCount((c) => c - 1), speed / 2.2);
    } else {
      setDeleting(false);
      setIndex((i) => (i + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [charCount, deleting, index, texts, speed, pause]);

  return (
    <span>
      {texts[index].substring(0, charCount)}
      <span className="ml-0.5 inline-block animate-caret text-accent-400">▍</span>
    </span>
  );
}

/* ---------- small labelled block on the profile card ---------- */

function CardBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-[color:var(--txt-faint)]">
        {label}
      </p>
      <div className="mt-2.5">{children}</div>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const degree = education[0];

  /* Cursor-following glow, written straight to CSS vars (no re-renders) */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const apply = () => {
      frame = 0;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
      if (!frame) frame = window.requestAnimationFrame(apply);
    };

    el.addEventListener("mousemove", onMove);
    return () => {
      el.removeEventListener("mousemove", onMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="group/hero relative flex min-h-screen items-center overflow-hidden pb-24 pt-32 md:pt-28"
    >
      {/* cursor glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-700 group-hover/hero:opacity-100 md:block"
        style={{
          background:
            "radial-gradient(340px circle at var(--mx, 50%) var(--my, 50%), rgba(139,92,246,0.10), transparent 68%)",
        }}
      />

      <div className="shell relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* ---------------- copy ---------------- */}
        <div>
          <Reveal direction="fade">
            <span className="eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
              </span>
              {getGreeting()} — welcome
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.08}>
            <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.04] sm:text-5xl lg:text-[3.5rem]">
              {profile.firstName}
              <br />
              <span className="text-gradient">{profile.lastName}</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.14}>
            <div className="mt-5 flex min-h-[1.75rem] items-center gap-3 font-mono text-[13px] text-accent-300 sm:text-sm">
              <span className="h-px w-8 shrink-0 bg-gradient-to-r from-transparent to-accent-500/70" />
              <TypingText texts={profile.roles} />
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="lede mt-6 max-w-xl">{profile.intro}</p>
          </Reveal>

          <Reveal direction="up" delay={0.26}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                View my work
                <ArrowRightIcon />
              </a>
              <a href="#contact" className="btn-ghost">
                Get in touch
              </a>
            </div>
          </Reveal>

          {/* stats */}
          <Reveal direction="up" delay={0.32}>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.06]">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group relative bg-ink-950/80 px-4 py-5 text-center transition-colors duration-300 hover:bg-accent-500/[0.06]"
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-2xl font-bold text-white sm:text-3xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-[10.5px] uppercase tracking-[0.14em] text-[color:var(--txt-faint)] sm:text-[11px]">
                      {stat.label}
                    </span>
                  </dd>

                  {/* hover detail */}
                  <span className="pointer-events-none absolute left-1/2 top-full z-30 mt-3 w-60 -translate-x-1/2 translate-y-2 rounded-xl border border-accent-500/25 bg-ink-800 p-3 text-left text-[11.5px] leading-relaxed text-[color:var(--txt-mute)] opacity-0 shadow-lift transition-all duration-300 ease-smooth group-hover:translate-y-0 group-hover:opacity-100">
                    {stat.description}
                  </span>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* ---------------- profile card ---------------- */}
        <Reveal direction="right" delay={0.16}>
          <div className="panel panel-sheen mx-auto max-w-md p-6 md:p-7">
            <div className="relative mx-auto aspect-square w-full max-w-[290px]">
              <div
                className="absolute -inset-3 rounded-[1.6rem] opacity-70 blur-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(139,92,246,0.45), rgba(56,189,248,0.28))",
                }}
              />
              <img
                src={profile.photo}
                alt={profile.name}
                loading="eager"
                className="relative h-full w-full rounded-3xl border border-white/10 object-cover"
              />
            </div>

            <div className="mt-6 text-center">
              <h2 className="font-display text-lg font-bold">{profile.name}</h2>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-300">
                {profile.role}
              </p>
            </div>

            <div className="hairline my-6" />

            <div className="space-y-5">
              {/* highest qualification */}
              <CardBlock label="Education">
                <div className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] p-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] p-1.5">
                    <img
                      src={degree.logo}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-[13px] font-semibold leading-snug">
                      {degree.field}
                    </span>
                    <span className="mt-0.5 block font-mono text-[10.5px] leading-snug text-[color:var(--txt-faint)]">
                      {degree.institution}
                    </span>
                  </span>
                </div>
              </CardBlock>

              {/* focus */}
              <CardBlock label="Focus areas">
                <ul className="flex flex-wrap gap-1.5">
                  {focusAreas.map((area) => (
                    <li key={area}>
                      <span className="chip-accent">{area}</span>
                    </li>
                  ))}
                </ul>
              </CardBlock>

              {/* stack */}
              <CardBlock label="Core stack">
                <ul className="flex flex-wrap gap-2">
                  {coreStack.map((tech) => (
                    <li key={tech.name}>
                      <span
                        title={tech.name}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.03] p-1.5 transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-accent-500/40 hover:bg-accent-500/[0.08]"
                      >
                        <img
                          src={deviconUrl(tech.icon)}
                          alt={tech.name}
                          loading="lazy"
                          className="h-full w-full object-contain"
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </CardBlock>
            </div>

            <div className="hairline my-6" />

            <div className="flex justify-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="btn-icon"
                >
                  <img
                    src={social.icon}
                    alt=""
                    className={`h-[18px] w-[18px] ${social.invert ? "invert" : ""}`}
                  />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[color:var(--txt-faint)] transition-colors duration-300 hover:text-white md:flex"
      >
        <span className="font-mono text-[9.5px] uppercase tracking-[0.28em]">Scroll</span>
        <span className="relative h-8 w-5 rounded-full border border-white/15">
          <span className="absolute left-1/2 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent-400 animate-scrollCue" />
        </span>
      </a>
    </section>
  );
}
