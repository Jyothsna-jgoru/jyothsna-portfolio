import { useState } from "react";
import profile from "../assets/profile.jpg";

interface HeroProps {
  onProjectsClick: () => void;
}

export default function Hero({ onProjectsClick }: HeroProps) {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#020617] px-6 relative overflow-hidden">

        {/* Grid pattern */}
        <div className="absolute inset-0 pointer-events-none z-0" style={{
          backgroundImage: `
            linear-gradient(rgba(168,85,247,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }} />

        {/* Floating gradient orbs */}
        <div className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full pointer-events-none z-0" style={{ background: "radial-gradient(circle, rgba(0,242,254,0.08) 0%, transparent 70%)", animation: "orbFloat1 12s ease-in-out infinite" }} />
        <div className="absolute top-[40%] right-[3%] w-96 h-96 rounded-full pointer-events-none z-0" style={{ background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)", animation: "orbFloat2 15s ease-in-out infinite" }} />
        <div className="absolute bottom-[10%] left-[10%] w-80 h-80 rounded-full pointer-events-none z-0" style={{ background: "radial-gradient(circle, rgba(255,0,128,0.06) 0%, transparent 70%)", animation: "orbFloat3 18s ease-in-out infinite" }} />

        {/* Left side circuit */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-20 pointer-events-none z-0 flex items-center justify-center">
          <div className="h-full flex flex-col items-center justify-around py-[20%] opacity-15">
            <div className="w-3 h-3 rounded-full border border-cyan-400" style={{ animation: "spinSlow 8s linear infinite" }} />
            <div className="w-[1px] h-16 bg-gradient-to-b from-cyan-400 to-purple-500" />
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <div className="w-[1px] h-20 bg-gradient-to-b from-purple-500 to-pink-500" />
            <div className="w-3 h-3 rounded-full border border-pink-500" style={{ animation: "spinSlow 6s linear infinite reverse" }} />
            <div className="w-[1px] h-16 bg-gradient-to-b from-pink-500 to-cyan-400" />
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: "1.5s" }} />
          </div>
        </div>

        {/* Right side circuit */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-20 pointer-events-none z-0 flex items-center justify-center">
          <div className="h-full flex flex-col items-center justify-around py-[15%] opacity-15">
            <div className="w-3 h-3 rounded-full border border-pink-500" style={{ animation: "spinSlow 4s linear infinite" }} />
            <div className="w-[1px] h-16 bg-gradient-to-b from-pink-500 to-purple-500" />
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <div className="w-[1px] h-20 bg-gradient-to-b from-purple-500 to-cyan-400" />
            <div className="w-3 h-3 rounded-full border border-cyan-400" style={{ animation: "spinSlow 6s linear infinite reverse" }} />
            <div className="w-[1px] h-16 bg-gradient-to-b from-cyan-400 to-pink-500" />
            <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
        </div>

        {/* Corner brackets */}
        <div className="absolute top-3 left-3 pointer-events-none z-0 opacity-20"><svg width="40" height="40"><path d="M0 20 L0 0 L20 0" fill="none" stroke="#00f2fe" strokeWidth="1.5" /></svg></div>
        <div className="absolute top-3 right-3 pointer-events-none z-0 opacity-20"><svg width="40" height="40"><path d="M20 0 L40 0 L40 20" fill="none" stroke="#ff0080" strokeWidth="1.5" /></svg></div>
        <div className="absolute bottom-3 left-3 pointer-events-none z-0 opacity-20"><svg width="40" height="40"><path d="M0 20 L0 40 L20 40" fill="none" stroke="#ff0080" strokeWidth="1.5" /></svg></div>
        <div className="absolute bottom-3 right-3 pointer-events-none z-0 opacity-20"><svg width="40" height="40"><path d="M20 40 L40 40 L40 20" fill="none" stroke="#00f2fe" strokeWidth="1.5" /></svg></div>

        <style>{`
          @keyframes orbFloat1 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(30px, -40px); } }
          @keyframes orbFloat2 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-40px, 30px); } }
          @keyframes orbFloat3 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(20px, 20px); } }
          @keyframes spinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        `}</style>

        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-20 items-center relative z-10">

          {/* LEFT SIDE */}
          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl text-center shadow-xl">

            <img
              src={profile}
              alt="Jyothsna Devi Goru"
              className="w-72 h-72 md:w-80 md:h-80 mx-auto rounded-2xl object-cover mb-6"
            />

            <h2 className="text-3xl md:text-4xl font-bold">
              Jyothsna Devi Goru
            </h2>

            <p className="text-gray-400 mt-2">
              Software Engineer
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-5 text-left">

              {/* Email */}
              <div className="flex items-center gap-4">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                  alt="Email"
                  className="w-6 h-6"
                />
                <div>
                  <p className="text-gray-500 text-xs">EMAIL</p>
                  <a
                    href="mailto:Jyothsnagoru28@gmail.com"
                    className="text-sm font-medium hover:text-purple-400 transition"
                  >
                    Jyothsnagoru28@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="text-purple-400 text-xl">📞</div>
                <div>
                  <p className="text-gray-500 text-xs">PHONE</p>
                  <a
                    href="tel:+17164006611"
                    className="text-sm font-medium hover:text-purple-400 transition"
                  >
                    +1 716 4006611
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="text-purple-400 text-xl">📍</div>
                <div>
                  <p className="text-gray-500 text-xs">LOCATION</p>
                  <p className="text-sm font-medium">
                    Buffalo, New York
                  </p>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-8">

              <a
                href="https://www.linkedin.com/in/jyothsna-g-b280l602u"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn"
                  className="w-7 h-7"
                />
              </a>

              <a
                href="https://github.com/Jyothsna-jgoru"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                  className="w-7 h-7 invert"
                />
              </a>

              <a
                href="https://leetcode.com/u/Jyothsna_G/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                  alt="LeetCode"
                  className="w-7 h-7 invert"
                />
              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Building Scalable Systems into{" "}
              <span className="text-purple-500">Reality</span>
            </h1>

            <p className="text-gray-400 mt-6 text-lg md:text-xl">
              Backend-focused engineer specializing in distributed systems,
              cloud-native architecture, and intelligent infrastructure.
            </p>

            <div className="flex gap-16 mt-10">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold">2+</h3>
                <p className="text-gray-500 text-sm">YEARS EXPERIENCE</p>
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-bold">7</h3>
                <p className="text-gray-500 text-sm">MAJOR SYSTEMS</p>
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-bold">2</h3>
                <p className="text-gray-500 text-sm">CLOUD PLATFORM</p>
              </div>
            </div>

            <div className="flex gap-6 mt-10">
              <button
                onClick={() => setShowResume(true)}
                className="px-8 py-4 text-lg bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg font-medium hover:scale-105 transition"
              >
                Resume
              </button>

              <button
                onClick={onProjectsClick}
                className="px-8 py-4 text-lg border border-gray-600 rounded-lg hover:bg-gray-800 transition"
              >
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

/* ================= RESUME MODAL ================= */

function ResumeModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-[#111827] p-8 rounded-2xl w-full max-w-md space-y-6">

        <h2 className="text-2xl font-bold text-center">
          Request Resume Access
        </h2>

        <form
          action="https://formsubmit.co/Jyothsnagoru28@gmail.com"
          method="POST"
          className="space-y-4"
        >
          <input type="hidden" name="_next" value="https://jyothsna-portfolio-mu.vercel.app" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Resume Request!" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-[#1F2937] border border-gray-600"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-[#1F2937] border border-gray-600"
          />

          <textarea
            name="message"
            placeholder="Reason for request"
            className="w-full p-3 rounded-lg bg-[#1F2937] border border-gray-600"
          />

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
          >
            Submit Request
          </button>
        </form>

        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white text-sm block mx-auto"
        >
          Cancel
        </button>

      </div>
    </div>
  );
}
