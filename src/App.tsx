import { useState } from "react";

import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";
import SectionRail from "./components/SectionRail";
import SectionDivider from "./components/ui/SectionDivider";
import { BackToTop, ScrollProgress } from "./components/ScrollControls";

export default function App() {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <Background />
      <ScrollProgress />
      <Navbar onResumeClick={() => setShowResume(true)} />
      <SectionRail />

      <main>
        <Hero />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Certifications />
        <SectionDivider />
        <Contact />
      </main>

      <Footer />

      <BackToTop />

      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
    </>
  );
}
