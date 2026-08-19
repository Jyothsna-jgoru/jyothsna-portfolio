import { useEffect, useState } from "react";
import { navSections } from "../data/profile";

/**
 * Reports which section is currently crossing the middle of the viewport.
 *
 * Shared by the navbar and the section rail so the two indicators can
 * never disagree about where the reader is.
 */
export default function useActiveSection() {
  const [active, setActive] = useState(navSections[0].id);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    navSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}
