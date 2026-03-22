import { useState } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function App() {
  const [showProjects, setShowProjects] = useState(false);

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

      {!showProjects && (
        <Hero
          onProjectsClick={() => setShowProjects(true)}
        />
      )}

      {showProjects && (
        <Projects
          onBack={() => setShowProjects(false)}
        />
      )}

    </div>
  );
}