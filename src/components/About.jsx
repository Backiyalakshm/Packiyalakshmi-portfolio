import { Terminal, Award, Coffee, Users } from "lucide-react";

const stats = [
  { icon: Coffee, val: "3+", label: "Projects Built" },
  { icon: Award, val: "92%", label: "NPTEL Java Score" },
  { icon: Terminal, val: "8+", label: "Tech Skills" },
  { icon: Users, val: "2nd", label: "Runner-Up Hackathon" },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(124,58,237,0.08) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#00d4ff" }}>
            Get to know me
          </p>
          <h2 className="text-4xl lg:text-5xl font-black section-title" style={{ color: "#f0f6ff" }}>
            About Me
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left */}
          <div className="flex-1">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
              style={{
                background: "rgba(124,58,237,0.1)",
                border: "1px solid rgba(124,58,237,0.25)",
                color: "#a78bfa",
              }}
            >
              <Terminal size={13} /> Professional Summary
            </div>

            <p className="text-base leading-8 mb-5" style={{ color: "#94a3b8" }}>
              I'm a{" "}
              <span style={{ color: "#f0f6ff", fontWeight: 600 }}>
                Full Stack Developer
              </span>{" "}
              with a strong foundation in{" "}
              <span style={{ color: "#00d4ff" }}>Java, Spring Boot, React.js</span>, and{" "}
              <span style={{ color: "#7c3aed" }}>Docker</span>. I specialize in building
              scalable web applications, secure backend services, and responsive user
              interfaces that solve real-world problems.
            </p>
            <p className="text-base leading-8 mb-5" style={{ color: "#94a3b8" }}>
              During my internship at{" "}
              <span style={{ color: "#f0f6ff", fontWeight: 600 }}>
                UpgradeNow Technologies
              </span>
              , I designed and implemented RESTful APIs using Core Java and Spring Boot,
              optimized backend logic to reduce response latency, and delivered production
              improvements under a professional environment.
            </p>
            <p className="text-base leading-8 mb-8" style={{ color: "#94a3b8" }}>
              I've earned multiple{" "}
              <span style={{ color: "#f0f6ff", fontWeight: 600 }}>NPTEL certifications</span> including
              an Elite + Gold in Java (92%), and secured{" "}
              <span style={{ color: "#10b981", fontWeight: 600 }}>
                2nd Runner-Up at a 24-hour hackathon
              </span>{" "}
              — demonstrating both academic excellence and real-world problem-solving under pressure.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Problem Solver", "Team Player", "Fast Learner", "DevOps Aware"].map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-lg text-xs font-semibold"
                  style={{
                    background: "rgba(0,212,255,0.06)",
                    border: "1px solid rgba(0,212,255,0.15)",
                    color: "#7dd3fc",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — stats */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, val, label }) => (
                <div
                  key={label}
                  className="glass-card hover-glow p-6 text-center"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{
                      background: "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(124,58,237,0.15))",
                      border: "1px solid rgba(0,212,255,0.2)",
                    }}
                  >
                    <Icon size={22} style={{ color: "#00d4ff" }} />
                  </div>
                  <div
                    className="text-3xl font-black mb-1 gradient-text"
                  >
                    {val}
                  </div>
                  <div className="text-xs font-medium" style={{ color: "#64748b" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Education card */}
            <div
              className="glass-card mt-4 p-5"
              style={{ border: "1px solid rgba(124,58,237,0.2)" }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-lg"
                  style={{ background: "rgba(124,58,237,0.15)" }}
                >
                  🎓
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: "#f0f6ff" }}>
                    B.E. Computer Science & Engineering
                  </p>
                  <p className="text-xs mb-1" style={{ color: "#94a3b8" }}>
                    PSR Engineering College, Sivakasi
                  </p>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-semibold"
                    style={{
                      background: "rgba(16,185,129,0.12)",
                      color: "#10b981",
                      border: "1px solid rgba(16,185,129,0.25)",
                    }}
                  >
                    CGPA: 8.6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
