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
    <div className="bg-[#020617] text-white min-h-screen">

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

    </div>
  );
}