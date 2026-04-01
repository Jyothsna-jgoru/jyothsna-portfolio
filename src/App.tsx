import { useState } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function App() {
  const [showProjects, setShowProjects] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const goToProjects = () => {
    setTransitioning(true);
    setTimeout(() => {
      setShowProjects(true);
      setTransitioning(false);
      window.scrollTo(0, 0);
    }, 500);
  };

  const goToHome = () => {
    setTransitioning(true);
    setTimeout(() => {
      setShowProjects(false);
      setTransitioning(false);
      window.scrollTo(0, 0);
    }, 500);
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen flex flex-col">

      {showProjects && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            zIndex: 99999,
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "#a855f7",
            color: "white",
            fontSize: "22px",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 20px rgba(168,85,247,0.4)",
          }}
        >
          ↑
        </button>
      )}

      <div
        className="flex-1"
        style={{
          opacity: transitioning ? 0 : 1,
          transform: transitioning ? "scale(0.98)" : "scale(1)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        {!showProjects && (
          <Hero onProjectsClick={goToProjects} />
        )}

        {showProjects && (
          <Projects onBack={goToHome} />
        )}
      </div>

      {/* PROFESSIONAL FOOTER */}
      <footer className="bg-[#070b14] border-t border-gray-800/50 py-8 px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Left - Name & tagline */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Jyothsna Devi <span className="text-purple-400">Goru</span>
              </h3>
              <p className="text-gray-500 text-sm mt-1">Software Engineer &bull; Distributed Systems &bull; Applied AI</p>
            </div>

            {/* Center - Social links */}
            <div className="flex gap-5">
              <a href="https://www.linkedin.com/in/jyothsna-g-b280l602u" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 hover:border-purple-500 hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] hover:scale-110 transition-all duration-300">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-4 h-4" />
              </a>
              <a href="https://github.com/Jyothsna-jgoru" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 hover:border-purple-500 hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] hover:scale-110 transition-all duration-300">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-4 h-4 invert" />
              </a>
              <a href="https://leetcode.com/u/Jyothsna_G/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 hover:border-purple-500 hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] hover:scale-110 transition-all duration-300">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="w-4 h-4 invert" />
              </a>
              <a href="mailto:Jyothsnagoru28@gmail.com" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 hover:border-purple-500 hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] hover:scale-110 transition-all duration-300">
                <span className="text-sm">✉</span>
              </a>
            </div>

            {/* Right - Built with */}
            <div className="text-center md:text-right">
              <p className="text-gray-500 text-sm">Built with React, TypeScript & Tailwind CSS</p>
              <p className="text-gray-600 text-xs mt-1">Deployed on Vercel</p>
            </div>

          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent my-6" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-gray-600 text-xs">&copy; {new Date().getFullYear()} Jyothsna Devi Goru. All rights reserved.</p>
            <p className="text-gray-600 text-xs">Buffalo, New York</p>
          </div>

        </div>
      </footer>

    </div>
  );
}