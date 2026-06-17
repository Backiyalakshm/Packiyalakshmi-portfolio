import { Mail, Heart, Code2, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "./Icons";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative py-12" style={{ background: "rgba(5,11,24,0.95)", borderTop: "1px solid rgba(0,212,255,0.08)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#00d4ff,#7c3aed)" }}>
              <Code2 size={18} color="white" strokeWidth={2.5} />
            </div>
            <div>
              <p className="font-bold text-sm" style={{ color: "#f0f6ff", fontFamily: "Space Grotesk, sans-serif" }}>Packiyalakshmi M</p>
              <p className="text-xs" style={{ color: "#475569" }}>Full Stack Developer</p>
            </div>
          </div>

          <div className="flex gap-4">
            {[
              { icon: GithubIcon, href: "https://github.com/Backiyalakshm" },
              { icon: LinkedInIcon, href: "https://www.linkedin.com/in/packiyalakshmi-m-7479a12ba" },
              { icon: Mail, href: "mailto:backiyalakshmim029@gmail.com" },
            ].map(({ icon: Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#64748b" }}
                onMouseEnter={(e) => { e.currentTarget.style.color="#00d4ff"; e.currentTarget.style.borderColor="rgba(0,212,255,0.3)"; e.currentTarget.style.background="rgba(0,212,255,0.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color="#64748b"; e.currentTarget.style.borderColor="rgba(255,255,255,0.08)"; e.currentTarget.style.background="rgba(255,255,255,0.04)"; }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          <p className="text-xs flex items-center gap-1" style={{ color: "#475569" }}>
            Built with <Heart size={11} fill="#ec4899" color="#ec4899" /> by Packiyalakshmi © 2025
          </p>

          <button onClick={scrollTop}
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
            style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.2)", color: "#00d4ff" }}
            onMouseEnter={(e) => { e.currentTarget.style.background="rgba(0,212,255,0.18)"; e.currentTarget.style.transform="translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background="rgba(0,212,255,0.08)"; e.currentTarget.style.transform="translateY(0)"; }}
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
