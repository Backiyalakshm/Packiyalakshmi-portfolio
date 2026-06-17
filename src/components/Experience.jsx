import { Briefcase, Calendar, Trophy, CheckCircle } from "lucide-react";

const experiences = [
  {
    type: "internship",
    role: "Java Backend Developer Intern",
    company: "UpgradeNow Technologies",
    duration: "Nov 2025 – Dec 2025",
    color: "#00d4ff",
    emoji: "💼",
    points: [
      "Developed backend services using Core Java and Spring Boot frameworks",
      "Designed and implemented RESTful APIs to improve application performance",
      "Optimized backend logic, reducing response latency and improving efficiency",
    ],
  },
];

const hackathons = [
  {
    event: "Applitz 24-Hour Hackathon",
    result: "2nd Runner-Up 🏆",
    prize: "Cash Prize: ₹5,000",
    description:
      "Developed and presented an innovative full-stack software solution within 24 hours, securing 2nd Runner-Up among all participating teams.",
    color: "#f59e0b",
  },
];

const certifications = [
  { name: "Programming in Java – NPTEL", badge: "Elite + Gold · 92%", period: "Jan – Apr 2026", color: "#f59e0b" },
  { name: "DSA Using Java – NPTEL", badge: "61%", period: "Jul – Oct 2024", color: "#00d4ff" },
  { name: "Cloud Computing – NPTEL", badge: "69%", period: "Jan – Apr 2024", color: "#7c3aed" },
  { name: "DevOps Foundation – LinkedIn Learning", badge: "Completed", period: "May 2026", color: "#10b981" },
  { name: "Agile Foundations – LinkedIn Learning", badge: "Completed", period: "Jun 2026", color: "#ec4899" },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative" style={{ background: "rgba(10,22,40,0.4)" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 10% 50%, rgba(0,212,255,0.06) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#00d4ff" }}>
            My journey
          </p>
          <h2 className="text-4xl lg:text-5xl font-black section-title" style={{ color: "#f0f6ff" }}>
            Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column */}
          <div>
            {/* Internship */}
            <h3
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-5"
              style={{ color: "#94a3b8" }}
            >
              <Briefcase size={14} /> Internship
            </h3>
            {experiences.map((exp) => (
              <div key={exp.role} className="glass-card hover-glow p-6 mb-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{
                      background: `${exp.color}15`,
                      border: `1px solid ${exp.color}25`,
                    }}
                  >
                    {exp.emoji}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-base mb-1" style={{ color: "#f0f6ff" }}>
                      {exp.role}
                    </h4>
                    <p className="font-semibold text-sm mb-2" style={{ color: exp.color }}>
                      {exp.company}
                    </p>
                    <div
                      className="flex items-center gap-1 text-xs mb-4"
                      style={{ color: "#64748b" }}
                    >
                      <Calendar size={12} /> {exp.duration}
                    </div>
                    <ul className="space-y-2">
                      {exp.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#94a3b8" }}>
                          <CheckCircle
                            size={14}
                            className="flex-shrink-0 mt-0.5"
                            style={{ color: "#10b981" }}
                          />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            {/* Hackathon */}
            <h3
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-5"
              style={{ color: "#94a3b8" }}
            >
              <Trophy size={14} /> Hackathon
            </h3>
            {hackathons.map((h) => (
              <div
                key={h.event}
                className="glass-card hover-glow p-6"
                style={{ borderColor: `${h.color}20` }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🏆</div>
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: "#f0f6ff" }}>
                      {h.event}
                    </h4>
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-xs font-bold px-2 py-1 rounded-full"
                        style={{
                          background: `${h.color}18`,
                          color: h.color,
                          border: `1px solid ${h.color}30`,
                        }}
                      >
                        {h.result}
                      </span>
                      <span className="text-xs font-semibold" style={{ color: "#10b981" }}>
                        {h.prize}
                      </span>
                    </div>
                    <p className="text-sm leading-6" style={{ color: "#94a3b8" }}>
                      {h.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right column — Certifications */}
          <div>
            <h3
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-5"
              style={{ color: "#94a3b8" }}
            >
              🎖️ Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="glass-card hover-glow p-5"
                  style={{ borderColor: `${cert.color}18` }}
                >
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <p className="font-semibold text-sm mb-1" style={{ color: "#f0f6ff" }}>
                        {cert.name}
                      </p>
                      <p className="text-xs" style={{ color: "#64748b" }}>
                        {cert.period}
                      </p>
                    </div>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{
                        background: `${cert.color}15`,
                        color: cert.color,
                        border: `1px solid ${cert.color}25`,
                      }}
                    >
                      {cert.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
