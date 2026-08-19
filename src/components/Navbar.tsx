import { useEffect, useState } from "react";
import { navSections, profile } from "../data/profile";
import useActiveSection from "../hooks/useActiveSection";

interface NavbarProps {
  onResumeClick: () => void;
}

export default function Navbar({ onResumeClick }: NavbarProps) {
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Solid background once the page has moved */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close the mobile sheet on Escape or when widening to desktop */
  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth ${
        scrolled || menuOpen
          ? "border-b border-white/[0.07] bg-ink-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="shell flex items-center justify-between"
        style={{ height: "var(--nav-h)" }}
        aria-label="Primary"
      >
        {/* Wordmark */}
        <a href="#home" className="group flex items-center gap-3" aria-label="Back to top">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-xl font-display text-[13px] font-bold text-white transition-transform duration-300 group-hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #8b5cf6, #6d28d9 55%, #0ea5e9)",
              boxShadow: "0 8px 22px -10px rgba(139,92,246,0.9)",
            }}
          >
            JG
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight sm:block">
            {profile.name}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navSections.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative block rounded-lg px-3 py-2 text-[13px] font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-[color:var(--txt-mute)] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 -z-10 rounded-lg border border-accent-500/25 bg-accent-500/[0.12]" />
                  )}
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={onResumeClick}
            className="btn-primary hidden !px-5 !py-2.5 text-[13px] sm:inline-flex"
          >
            Resume
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="btn-icon lg:hidden"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M3 7h18" />
                  <path d="M3 12h18" />
                  <path d="M3 17h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      {menuOpen && (
        <div className="border-t border-white/[0.07] bg-ink-950/95 backdrop-blur-xl lg:hidden">
          <ul className="shell grid grid-cols-2 gap-2 py-5">
            {navSections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                    active === id
                      ? "border-accent-500/30 bg-accent-500/[0.12] text-white"
                      : "border-white/[0.07] bg-white/[0.02] text-[color:var(--txt-mute)]"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="col-span-2">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onResumeClick();
                }}
                className="btn-primary w-full"
              >
                Request Resume
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
