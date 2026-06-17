import { ExternalLink, GitBranch } from "lucide-react";
import { GithubIcon } from "./Icons";

const projects = [
  {
    id: 1, title: "Civic Issue Reporting System", tagline: "Citizen Grievance Management Platform",
    description: "A full-stack platform enabling citizens to report local civic issues and track resolution status. Features role-based authentication for citizens and administrators, real-time complaint tracking, and secure REST APIs. Containerized with Docker and deployed via GitHub Actions CI/CD pipeline.",
    tech: ["Java", "Spring Boot", "React.js", "MySQL", "Docker", "GitHub Actions"],
    github: "https://github.com/Backiyalakshm", highlight: "Dockerized · CI/CD", color: "#00d4ff", emoji: "🏛️",
    features: ["Role-based Auth", "Complaint Tracking", "CI/CD Pipeline", "Docker Compose"],
  },
  {
    id: 2, title: "TaskFlow Kanban Dashboard", tagline: "Dockerized Full Stack Task Management",
    description: "A Kanban-based task management application with drag-and-drop boards, user authentication, CRUD operations, and secure REST APIs. Frontend built in React.js with Spring Boot backend. Fully Dockerized with automated GitHub Actions deployment.",
    tech: ["React.js", "Spring Boot", "MySQL", "Docker", "GitHub Actions", "REST API"],
    github: "https://github.com/Backiyalakshm", highlight: "Full Stack · Kanban", color: "#7c3aed", emoji: "📋",
    features: ["Auth System", "CRUD + Tracking", "Docker Compose", "GitHub Actions"],
  },
  {
    id: 3, title: "Hotel Food Ordering System", tagline: "Java + MySQL Backend Application",
    description: "A console-based food ordering system for hotels built using Core Java and MySQL. Supports menu management, order placement, billing, and data persistence with JDBC integration. Clean OOP architecture with layered design patterns.",
    tech: ["Java", "MySQL", "JDBC", "OOP"],
    github: "https://github.com/Backiyalakshm", highlight: "Java · MySQL", color: "#10b981", emoji: "🍽️",
    features: ["Menu Management", "Order System", "Billing", "JDBC / MySQL"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 80% 60%, rgba(124,58,237,0.07) 0%, transparent 70%)" }} />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#00d4ff" }}>What I've built</p>
          <h2 className="text-4xl lg:text-5xl font-black section-title" style={{ color: "#f0f6ff" }}>Featured Projects</h2>
        </div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div key={project.id} className="glass-card hover-glow overflow-hidden" style={{ borderColor: `${project.color}18` }}>
              <div className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0`}>
                {/* Color panel */}
                <div className="flex items-center justify-center p-10 lg:w-64 flex-shrink-0" style={{ background: `linear-gradient(135deg, ${project.color}12, ${project.color}06)`, borderRight: idx % 2 === 0 ? `1px solid ${project.color}15` : "none", borderLeft: idx % 2 !== 0 ? `1px solid ${project.color}15` : "none" }}>
                  <div className="text-center">
                    <div className="text-6xl mb-4">{project.emoji}</div>
                    <div className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: `${project.color}18`, color: project.color, border: `1px solid ${project.color}30` }}>{project.highlight}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-black mb-1" style={{ color: "#f0f6ff" }}>{project.title}</h3>
                      <p className="text-sm font-medium" style={{ color: project.color }}>{project.tagline}</p>
                    </div>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#94a3b8" }}
                      onMouseEnter={(e) => { e.currentTarget.style.background="rgba(255,255,255,0.1)"; e.currentTarget.style.color="#f0f6ff"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background="rgba(255,255,255,0.05)"; e.currentTarget.style.color="#94a3b8"; }}
                    >
                      <GithubIcon size={13} /> GitHub
                    </a>
                  </div>

                  <p className="text-sm leading-7 mb-5" style={{ color: "#94a3b8" }}>{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.features.map((f) => (
                      <span key={f} className="flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full" style={{ background: `${project.color}10`, color: project.color, border: `1px solid ${project.color}25` }}>
                        <GitBranch size={10} /> {f}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-md font-medium" style={{ background: "rgba(255,255,255,0.05)", color: "#64748b", border: "1px solid rgba(255,255,255,0.08)" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="https://github.com/Backiyalakshm" target="_blank" rel="noopener noreferrer" className="btn-outline">
            <GithubIcon size={16} /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
