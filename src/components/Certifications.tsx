import { useCallback, useEffect, useState } from "react";
import { certifications } from "../data/profile";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Certifications() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  const goNext = useCallback(
    () =>
      setOpenIndex((current) =>
        current === null ? current : (current + 1) % certifications.length
      ),
    []
  );

  const goPrev = useCallback(
    () =>
      setOpenIndex((current) =>
        current === null
          ? current
          : (current - 1 + certifications.length) % certifications.length
      ),
    []
  );

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", onKey);
    document.body.classList.add("overflow-locked");
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-locked");
    };
  }, [isOpen, goNext, goPrev]);

  return (
    <section id="certifications" className="section">
      <div className="shell">
        <SectionHeading
          index="06"
          eyebrow="Certifications"
          title="Professional"
          accent="Credentials"
          description="Select any credential to view it full size."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal
              key={cert.title}
              direction="up"
              delay={Math.min(i * 0.06, 0.3)}
              className="h-full"
            >
              <button
                onClick={() => setOpenIndex(i)}
                className="panel panel-hover group h-full w-full overflow-hidden p-5 text-left"
                aria-label={`View ${cert.title}`}
              >
                <div className="flex h-36 items-center justify-center rounded-xl border border-line-soft bg-app-60 p-3">
                  <img
                    src={cert.img}
                    alt=""
                    loading="lazy"
                    className="max-h-full max-w-full object-contain transition-transform duration-500 ease-smooth group-hover:scale-[1.05]"
                  />
                </div>
                <p className="mt-4 text-[13.5px] font-semibold transition-colors duration-300 group-hover:text-accent">
                  {cert.title}
                </p>
                <span className="mt-1 inline-flex items-center gap-1 text-[11px] text-[color:var(--txt-faint)]">
                  View credential
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" />
                    <path d="M8 7h9v9" />
                  </svg>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* lightbox */}
      {isOpen && openIndex !== null && (
        <div
          className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-scrim px-4 py-10 backdrop-blur-sm animate-fadeIn"
          onClick={() => setOpenIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={certifications[openIndex].title}
        >
          <button
            onClick={() => setOpenIndex(null)}
            aria-label="Close"
            className="btn-icon absolute right-5 top-5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </svg>
          </button>

          <p className="mb-6 font-display text-lg font-semibold text-white">
            {certifications[openIndex].title}
          </p>

          <div
            className="flex w-full max-w-5xl items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={goPrev} aria-label="Previous credential" className="btn-icon shrink-0 !h-12 !w-12">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="flex flex-1 justify-center overflow-hidden">
              <img
                key={openIndex}
                src={certifications[openIndex].img}
                alt={certifications[openIndex].title}
                className="max-h-[68vh] max-w-full rounded-xl border border-line-strong animate-popIn"
              />
            </div>

            <button onClick={goNext} aria-label="Next credential" className="btn-icon shrink-0 !h-12 !w-12">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>

          <div className="mt-7 flex gap-2.5" onClick={(e) => e.stopPropagation()}>
            {certifications.map((cert, i) => (
              <button
                key={cert.title}
                onClick={() => setOpenIndex(i)}
                aria-label={`Go to ${cert.title}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === openIndex
                    ? "w-6 bg-accent-500"
                    : "w-2 bg-[color:var(--txt-faint)] hover:bg-[color:var(--txt-mute)]"
                }`}
              />
            ))}
          </div>

          <p className="mt-4 font-mono text-[11px] text-[color:var(--txt-faint)]">
            {openIndex + 1} / {certifications.length}
          </p>
        </div>
      )}
    </section>
  );
}
