import { useEffect, useState } from "react";
import type { Project, ProjectCategory } from "../data/profile";
import { projectCategories, projects } from "../data/profile";
import ProjectCover from "./ProjectCover";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

/* ================= detail dialog ================= */

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.classList.add("overflow-locked");
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-locked");
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-scrim px-4 py-10 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="panel panel-sheen w-full max-w-3xl overflow-hidden !bg-raised-95 animate-popIn"
      >
        <div className="relative border-b border-line-soft bg-app-60 p-4">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="mx-auto max-h-[46vh] w-auto max-w-full rounded-xl object-contain"
            />
          ) : (
            /* no screenshot yet — show the cover art at full size instead */
            <div className="mx-auto aspect-[16/9] w-full max-w-2xl overflow-hidden rounded-xl">
              <ProjectCover variant={project.cover} />
            </div>
          )}
          <button
            onClick={onClose}
            aria-label="Close"
            className="btn-icon absolute right-3 top-3 !bg-app-80"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="p-6 md:p-8">
          <span className="chip-accent">{project.category}</span>

          <h3
            id="project-modal-title"
            className="mt-4 font-display text-xl font-bold md:text-2xl"
          >
            {project.title}
          </h3>

          {project.highlights && (
            <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-surface-2 sm:max-w-md">
              {project.highlights.map((h) => (
                <div key={h.label} className="bg-raised px-4 py-3">
                  <span className="block font-display text-lg font-bold text-primary">
                    {h.value}
                  </span>
                  <span className="mt-0.5 block text-[11px] text-[color:var(--txt-faint)]">
                    {h.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          <p className="mt-6 text-[14px] leading-[1.85] text-[color:var(--txt-mute)]">
            {project.description}
          </p>

          <div className="hairline my-6" />

          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--txt-faint)]">
            Built with
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {project.skills.map((skill) => (
              <li key={skill}>
                <span className="chip">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ================= card ================= */

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const shown = project.skills.slice(0, 5);
  const rest = project.skills.length - shown.length;

  return (
    <article className="panel panel-hover group h-full overflow-hidden">
      <button
        onClick={onOpen}
        className="flex h-full w-full flex-col text-left"
        aria-label={`View details for ${project.title}`}
      >
        {/* cover art — the real diagram lives in the detail dialog */}
        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden border-b border-line-soft">
          <div className="h-full w-full transition-transform duration-700 ease-smooth group-hover:scale-[1.05]">
            <ProjectCover variant={project.cover} />
          </div>
          <span className="absolute left-3 top-3 rounded-lg border border-accent-500/25 bg-app-85 px-2.5 py-1 text-[10.5px] font-medium text-accent backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        {/* body */}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-[16.5px] font-semibold leading-snug transition-colors duration-300 group-hover:text-accent">
            {project.title}
          </h3>

          <p className="mt-2.5 text-[13px] leading-[1.7] text-[color:var(--txt-mute)]">
            {project.summary}
          </p>

          {project.highlights && (
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {project.highlights.map((h) => (
                <span key={h.label}>
                  <span className="font-display text-[15px] font-bold text-primary">
                    {h.value}
                  </span>
                  <span className="ml-1.5 text-[11px] text-[color:var(--txt-faint)]">
                    {h.label}
                  </span>
                </span>
              ))}
            </div>
          )}

          <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
            {shown.map((skill) => (
              <li key={skill}>
                <span className="chip">{skill}</span>
              </li>
            ))}
            {rest > 0 && (
              <li>
                <span className="chip !text-[color:var(--txt-faint)]">+{rest}</span>
              </li>
            )}
          </ul>

          <span className="mt-5 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-accent">
            View details
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </button>
    </article>
  );
}

/* ================= section ================= */

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  const countFor = (category: ProjectCategory) =>
    category === "All"
      ? projects.length
      : projects.filter((p) => p.category === category).length;

  return (
    <section id="projects" className="section">
      <div className="shell">
        <SectionHeading
          index="04"
          eyebrow="Projects"
          title="Featured"
          accent="Work"
          description="Systems, pipelines, and applied AI built end to end. Select any project to read the full engineering breakdown."
        />

        {/* filters */}
        <Reveal direction="fade">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {projectCategories.map((category) => {
              const isActive = filter === category;
              return (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  aria-pressed={isActive}
                  className={`rounded-xl border px-4 py-2 text-[12.5px] font-medium transition-all duration-300 ease-smooth ${
                    isActive
                      ? "border-accent-500/45 bg-accent-500/[0.14] text-primary"
                      : "border-line bg-surface text-[color:var(--txt-mute)] hover:border-accent-500/30 hover:text-primary"
                  }`}
                >
                  {category}
                  <span className="ml-2 font-mono text-[10px] text-[color:var(--txt-faint)]">
                    {String(countFor(category)).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* grid */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal
              key={project.title}
              direction="up"
              delay={Math.min(i * 0.05, 0.25)}
              className="h-full"
            >
              <ProjectCard project={project} onOpen={() => setSelected(project)} />
            </Reveal>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
