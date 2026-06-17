import { useState } from "react";

const categories = [
  {
    label: "Backend",
    icon: "⚙️",
    color: "#00d4ff",
    skills: [
      { name: "Java", level: 88, icon: "☕" },
      { name: "Spring Boot", level: 82, icon: "🌱" },
      { name: "REST API", level: 85, icon: "🔗" },
    ],
  },
  {
    label: "Frontend",
    icon: "🎨",
    color: "#7c3aed",
    skills: [
      { name: "HTML5 & CSS3", level: 90, icon: "🌐" },
      { name: "JavaScript", level: 80, icon: "⚡" },
      { name: "React.js", level: 75, icon: "⚛️" },
      { name: "Tailwind CSS", level: 78, icon: "💎" },
    ],
  },
  {
    label: "Database",
    icon: "🗄️",
    color: "#10b981",
    skills: [
      { name: "MySQL", level: 85, icon: "🐬" },
    ],
  },
  {
    label: "DevOps & Tools",
    icon: "🚀",
    color: "#f59e0b",
    skills: [
      { name: "Docker", level: 78, icon: "🐳" },
      { name: "Git & GitHub", level: 88, icon: "🐙" },
      { name: "Linux", level: 72, icon: "🐧" },
      { name: "Postman", level: 82, icon: "📮" },
    ],
  },
  {
    label: "Other",
    icon: "💡",
    color: "#ec4899",
    skills: [
      { name: "DSA / Problem Solving", level: 80, icon: "🧩" },
      { name: "Python", level: 65, icon: "🐍" },
      { name: "C", level: 70, icon: "🔧" },
    ],
  },
];

const certifications = [
  { name: "Programming in Java", org: "NPTEL", score: "Elite + Gold · 92%", color: "#f59e0b" },
  { name: "DSA Using Java", org: "NPTEL", score: "61%", color: "#00d4ff" },
  { name: "Cloud Computing", org: "NPTEL", score: "69%", color: "#7c3aed" },
  { name: "DevOps Foundation", org: "LinkedIn Learning", score: "2026", color: "#10b981" },
  { name: "Agile Foundations", org: "LinkedIn Learning", score: "2026", color: "#ec4899" },
];

export default function Skills() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="skills" className="py-28 relative" style={{ background: "rgba(10,22,40,0.4)" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 20% 50%, rgba(0,212,255,0.06) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#00d4ff" }}>
            What I work with
          </p>
          <h2 className="text-4xl lg:text-5xl font-black section-title" style={{ color: "#f0f6ff" }}>
            Skills & Tech Stack
          </h2>
        </div>

        {/* Skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="glass-card hover-glow p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{
                    background: `${cat.color}18`,
                    border: `1px solid ${cat.color}30`,
                  }}
                >
                  {cat.icon}
                </div>
                <h3 className="font-bold text-sm" style={{ color: "#f0f6ff" }}>
                  {cat.label}
                </h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{skill.icon}</span>
                        <span className="text-sm font-medium" style={{ color: "#cbd5e1" }}>
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-bold" style={{ color: cat.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${cat.color}, ${cat.color}99)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3
            className="text-xl font-bold mb-6 text-center"
            style={{ color: "#f0f6ff" }}
          >
            🏆 Certifications
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="px-4 py-3 rounded-xl"
                style={{
                  background: "rgba(13,31,60,0.6)",
                  border: `1px solid ${cert.color}30`,
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="text-sm font-semibold" style={{ color: "#f0f6ff" }}>
                  {cert.name}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs" style={{ color: "#64748b" }}>{cert.org}</span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-bold"
                    style={{
                      background: `${cert.color}15`,
                      color: cert.color,
                    }}
                  >
                    {cert.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
