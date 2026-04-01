import { useState, useEffect } from "react";
import profile from "../assets/Profile.png";

interface HeroProps {
  onProjectsClick: () => void;
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  if (hour < 21) return "Good Evening";
  return "Good Night";
}

function TypingText({ texts, speed = 80, pause = 2000 }: { texts: string[]; speed?: number; pause?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(charIndex + 1), speed);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(charIndex - 1), speed / 2);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((textIndex + 1) % texts.length);
    }
    setDisplayed(current.substring(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

  return (
    <span>
      {displayed}
      <span className="animate-pulse text-purple-400">|</span>
    </span>
  );
}

function Particles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 10,
    opacity: Math.random() * 0.3 + 0.1,
    color: ["#a855f7", "#00f2fe", "#ff0080", "#6366f1"][Math.floor(Math.random() * 4)],
  }));

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <div key={p.id} className="absolute rounded-full" style={{ left: `${p.left}%`, top: `${p.top}%`, width: `${p.size}px`, height: `${p.size}px`, backgroundColor: p.color, opacity: p.opacity, animation: `particleFloat${p.id % 3} ${p.duration}s ease-in-out ${p.delay}s infinite` }} />
      ))}
    </div>
  );
}

function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => { setPos({ x: e.clientX, y: e.clientY }); setVisible(true); };
    const handleLeave = () => setVisible(false);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    return () => { window.removeEventListener("mousemove", handleMove); window.removeEventListener("mouseleave", handleLeave); };
  }, []);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed z-50" style={{ left: pos.x - 150, top: pos.y - 150, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, rgba(99,102,241,0.06) 30%, transparent 70%)", transition: "left 0.15s ease-out, top 0.15s ease-out" }} />
  );
}

export default function Hero({ onProjectsClick }: HeroProps) {
  const [showResume, setShowResume] = useState(false);
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);
  const greeting = getGreeting();

  const stats = [
    { value: "2+", label: "YEARS EXPERIENCE", description: "Shipped real-world systems across food-tech, health-tech, and applied AI, which I built and deployed under real production demands." },
    { value: "7", label: "MAJOR PROJECTS", description: "Each project tackles a unique problem and was built to combine engineering depth with real-world impact." },
    { value: "2", label: "CLOUD PLATFORMS", description: "Hands-on experience building and deploying production systems on both AWS and Microsoft Azure cloud platforms." },
  ];

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#020617] px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: `linear-gradient(rgba(168,85,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.04) 1px, transparent 1px)`, backgroundSize: "50px 50px" }} />

        <Particles />
        <MouseGlow />

        <div className="absolute top-[5%] left-[2%] w-[500px] h-[500px] rounded-full pointer-events-none z-0" style={{ background: "radial-gradient(circle, rgba(0,242,254,0.1) 0%, transparent 70%)", animation: "orbFloat1 12s ease-in-out infinite" }} />
        <div className="absolute top-[30%] right-[0%] w-[600px] h-[600px] rounded-full pointer-events-none z-0" style={{ background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)", animation: "orbFloat2 15s ease-in-out infinite" }} />
        <div className="absolute bottom-[5%] left-[5%] w-[550px] h-[550px] rounded-full pointer-events-none z-0" style={{ background: "radial-gradient(circle, rgba(255,0,128,0.08) 0%, transparent 70%)", animation: "orbFloat3 18s ease-in-out infinite" }} />
        <div className="absolute top-[50%] right-[20%] w-[400px] h-[400px] rounded-full pointer-events-none z-0" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)", animation: "orbFloat1 22s ease-in-out infinite reverse" }} />

        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-28 pointer-events-none z-0 flex items-center justify-center">
          <div className="h-full flex flex-col items-center justify-around py-[10%] opacity-25">
            <div className="w-4 h-4 rounded-full border-2 border-cyan-400" style={{ animation: "spinSlow 8s linear infinite" }} />
            <div className="w-[2px] h-20 bg-gradient-to-b from-cyan-400 to-purple-500" />
            <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" />
            <div className="w-[2px] h-24 bg-gradient-to-b from-purple-500 to-pink-500" />
            <div className="w-5 h-5 rounded-full border-2 border-pink-500" style={{ animation: "spinSlow 6s linear infinite reverse" }} />
            <div className="w-[2px] h-20 bg-gradient-to-b from-pink-500 to-cyan-400" />
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: "1.5s" }} />
            <div className="w-[2px] h-24 bg-gradient-to-b from-cyan-400 to-purple-500" />
            <div className="w-4 h-4 rounded-full border-2 border-purple-500" style={{ animation: "spinSlow 5s linear infinite" }} />
          </div>
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-28 pointer-events-none z-0 flex items-center justify-center">
          <div className="h-full flex flex-col items-center justify-around py-[8%] opacity-25">
            <div className="w-4 h-4 rounded-full border-2 border-pink-500" style={{ animation: "spinSlow 4s linear infinite" }} />
            <div className="w-[2px] h-20 bg-gradient-to-b from-pink-500 to-purple-500" />
            <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" />
            <div className="w-[2px] h-24 bg-gradient-to-b from-purple-500 to-cyan-400" />
            <div className="w-5 h-5 rounded-full border-2 border-cyan-400" style={{ animation: "spinSlow 6s linear infinite reverse" }} />
            <div className="w-[2px] h-20 bg-gradient-to-b from-cyan-400 to-pink-500" />
            <div className="w-3 h-3 rounded-full bg-pink-500 animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="w-[2px] h-24 bg-gradient-to-b from-pink-500 to-purple-500" />
            <div className="w-4 h-4 rounded-full border-2 border-purple-500" style={{ animation: "spinSlow 7s linear infinite" }} />
          </div>
        </div>

        <div className="absolute top-4 left-4 pointer-events-none z-0 opacity-30"><svg width="60" height="60"><path d="M0 30 L0 0 L30 0" fill="none" stroke="#00f2fe" strokeWidth="2" /></svg></div>
        <div className="absolute top-4 right-4 pointer-events-none z-0 opacity-30"><svg width="60" height="60"><path d="M30 0 L60 0 L60 30" fill="none" stroke="#ff0080" strokeWidth="2" /></svg></div>
        <div className="absolute bottom-4 left-4 pointer-events-none z-0 opacity-30"><svg width="60" height="60"><path d="M0 30 L0 60 L30 60" fill="none" stroke="#ff0080" strokeWidth="2" /></svg></div>
        <div className="absolute bottom-4 right-4 pointer-events-none z-0 opacity-30"><svg width="60" height="60"><path d="M30 60 L60 60 L60 30" fill="none" stroke="#00f2fe" strokeWidth="2" /></svg></div>

        <style>{`
          @keyframes orbFloat1 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(30px, -40px); } }
          @keyframes orbFloat2 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-40px, 30px); } }
          @keyframes orbFloat3 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(20px, 20px); } }
          @keyframes spinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes particleFloat0 { 0%, 100% { transform: translate(0, 0) scale(1); } 25% { transform: translate(30px, -50px) scale(1.2); } 50% { transform: translate(-20px, -100px) scale(0.8); } 75% { transform: translate(40px, -50px) scale(1.1); } }
          @keyframes particleFloat1 { 0%, 100% { transform: translate(0, 0) scale(1); } 25% { transform: translate(-40px, -30px) scale(0.9); } 50% { transform: translate(20px, -80px) scale(1.3); } 75% { transform: translate(-30px, -40px) scale(1); } }
          @keyframes particleFloat2 { 0%, 100% { transform: translate(0, 0) scale(1); } 25% { transform: translate(50px, -40px) scale(1.1); } 50% { transform: translate(-30px, -90px) scale(0.7); } 75% { transform: translate(20px, -60px) scale(1.2); } }
          @keyframes greetingFade { 0% { opacity: 0; transform: translateY(-10px); } 100% { opacity: 1; transform: translateY(0); } }
        `}</style>

        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-20 items-center relative z-10">
          <div className="relative">
            <div className="relative bg-[#0f1628]/90 backdrop-blur-lg p-8 rounded-3xl text-center border border-purple-500/20 transition-all duration-500 hover:border-purple-500/40" style={{ boxShadow: "0 0 40px rgba(168,85,247,0.15), 0 20px 50px rgba(0,0,0,0.5)" }}>
              <div className="relative mx-auto w-48 h-48 md:w-56 md:h-56 mb-6">
                <img src={profile} alt="Jyothsna Devi Goru" className="relative w-full h-full rounded-2xl object-cover border-2 border-purple-500/30" />
              </div>

              <h2 className="text-xl md:text-2xl font-bold">Jyothsna Devi Goru</h2>
              <p className="text-gray-400 mt-2">Software Engineer</p>

              <div className="mt-8 space-y-5 text-left">
                <div className="flex items-center gap-4 hover:translate-x-1 transition-transform duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Email" className="w-6 h-6" />
                  <div>
                    <p className="text-gray-500 text-xs">EMAIL</p>
                    <a href="mailto:Jyothsnagoru28@gmail.com" className="text-sm font-medium hover:text-purple-400 transition">Jyothsnagoru28@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 hover:translate-x-1 transition-transform duration-300">
                  <div className="text-purple-400 text-xl">📞</div>
                  <div>
                    <p className="text-gray-500 text-xs">PHONE</p>
                    <a href="tel:+17164006611" className="text-sm font-medium hover:text-purple-400 transition">+1 716 4006611</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 hover:translate-x-1 transition-transform duration-300">
                  <div className="text-purple-400 text-xl">📍</div>
                  <div>
                    <p className="text-gray-500 text-xs">LOCATION</p>
                    <p className="text-sm font-medium">Buffalo, New York</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-8 mt-8">
                <a href="https://www.linkedin.com/in/jyothsna-g-b280l602u" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:scale-110 transition-all duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-5 h-5" />
                </a>
                <a href="https://github.com/Jyothsna-jgoru" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:scale-110 transition-all duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-5 h-5 invert" />
                </a>
                <a href="https://leetcode.com/u/Jyothsna_G/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:scale-110 transition-all duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="w-5 h-5 invert" />
                </a>
              </div>
            </div>
          </div>

          <div style={{ animation: "fadeInUp 0.8s ease-out" }}>
            <p className="text-purple-400 text-sm md:text-base font-medium tracking-wider mb-3" style={{ animation: "greetingFade 1s ease-out" }}>
              {greeting}, welcome to my portfolio
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              <TypingText texts={["Engineering Intelligence at Scale", "Building Distributed Systems", "Designing Cloud-Native Solutions", "Applying AI to Real Problems"]} />
            </h1>

            <p className="text-gray-400 mt-6 text-base md:text-lg">
              Software engineer dedicated to building high-performance distributed systems, intelligent data pipelines, and production-ready applications.
            </p>

            <div className="flex gap-10 mt-10 flex-wrap">
              {stats.map((stat) => (
                <div key={stat.label} className="relative cursor-default group/stat" onMouseEnter={() => setHoveredStat(stat.label)} onMouseLeave={() => setHoveredStat(null)}>
                  <div className="p-4 rounded-2xl border border-transparent hover:border-purple-500/40 hover:bg-purple-500/5 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300">
                    <h3 className="text-3xl md:text-4xl font-bold group-hover/stat:text-purple-400 transition-colors duration-300">{stat.value}</h3>
                    <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                  </div>
                  {hoveredStat === stat.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 p-4 rounded-xl bg-[#1a1f35] border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.2)] text-sm text-gray-300 leading-relaxed z-50" style={{ animation: "fadeInUp 0.2s ease-out" }}>
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#1a1f35] border-l border-t border-purple-500/30 rotate-45" />
                      {stat.description}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-6 mt-10 flex-wrap">
              <button onClick={() => setShowResume(true)} className="px-8 py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 border border-purple-400/30 shadow-[0_4px_15px_rgba(168,85,247,0.3)] hover:shadow-[0_6px_25px_rgba(168,85,247,0.5)] hover:border-purple-400/60 hover:-translate-y-1 active:translate-y-0 active:shadow-[0_2px_10px_rgba(168,85,247,0.3)] transition-all duration-300">
                Resume
              </button>
              <button onClick={onProjectsClick} className="px-8 py-4 text-base font-semibold rounded-xl bg-transparent border border-gray-600 shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:border-purple-500/60 hover:shadow-[0_6px_25px_rgba(168,85,247,0.3)] hover:bg-purple-500/5 hover:-translate-y-1 active:translate-y-0 transition-all duration-300">
                My Work →
              </button>
            </div>
          </div>
        </div>
      </section>

      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
    </>
  );
}

function ResumeModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#111827] p-8 rounded-2xl w-full max-w-md space-y-6 border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
        <h2 className="text-2xl font-bold text-center">Request Resume Access</h2>
        <p className="text-gray-400 text-center text-sm">Fill in your details and I will share my resume with you.</p>
        <form action="https://formsubmit.co/Jyothsnagoru28@gmail.com" method="POST" className="space-y-4">
          <input type="hidden" name="_next" value="https://jyothsna-portfolio-site.vercel.app" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Resume Request!" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded-lg bg-[#1F2937] border border-gray-600 focus:border-purple-500 focus:outline-none transition text-white" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded-lg bg-[#1F2937] border border-gray-600 focus:border-purple-500 focus:outline-none transition text-white" />
          <input type="text" name="company" placeholder="Company (Optional)" className="w-full p-3 rounded-lg bg-[#1F2937] border border-gray-600 focus:border-purple-500 focus:outline-none transition text-white" />
          <textarea name="message" placeholder="Reason for request" rows={3} className="w-full p-3 rounded-lg bg-[#1F2937] border border-gray-600 focus:border-purple-500 focus:outline-none transition text-white resize-none" />
          <button type="submit" className="w-full py-3 bg-purple-600 rounded-lg hover:bg-purple-700 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 font-medium">Submit Request</button>
        </form>
        <button onClick={onClose} className="text-gray-400 hover:text-white text-sm block mx-auto">Cancel</button>
      </div>
    </div>
  );
}