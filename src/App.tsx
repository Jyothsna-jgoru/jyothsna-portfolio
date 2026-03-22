import { useState } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function App() {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div className="bg-[#020617] text-white min-h-screen">

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
