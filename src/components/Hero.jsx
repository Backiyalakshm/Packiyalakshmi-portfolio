
import { Mail, Download, ArrowRight, MapPin } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "./Icons";

const particles = [
  { w: 4, h: 4, top: "15%", left: "8%", delay: "0s", dur: "3s" },
  { w: 3, h: 3, top: "70%", left: "5%", delay: "1s", dur: "4s" },
  { w: 5, h: 5, top: "40%", left: "92%", delay: "0.5s", dur: "3.5s" },
  { w: 3, h: 3, top: "80%", left: "88%", delay: "1.5s", dur: "2.8s" },
  { w: 4, h: 4, top: "25%", left: "78%", delay: "2s", dur: "4.2s" },
  { w: 2, h: 2, top: "60%", left: "15%", delay: "0.8s", dur: "3.2s" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
      style={{
        paddingTop: "120px",
        paddingBottom: "100px",
      }}
    >
      {/* Background Glow */}
      <div
        className="absolute top-20 left-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.5), transparent)",
        }}
      />

      <div
        className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.5), transparent)",
        }}
      />

      {/* Particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: p.w,
            height: p.h,
            top: p.top,
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.dur,
            opacity: 0.5,
          }}
        />
      ))}

      {/* Container */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
              style={{
                background: "rgba(0,212,255,0.08)",
                border: "1px solid rgba(0,212,255,0.2)",
                color: "#00d4ff",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: "#10b981",
                  boxShadow: "0 0 8px #10b981",
                }}
              />
              Available for Opportunities
            </div>

            <h1
              className="text-5xl lg:text-7xl font-black mb-6 leading-tight"
              style={{ letterSpacing: "-2px" }}
            >
              Hi, I'm{" "}
              <span className="gradient-text whitespace-nowrap">
                Packiyalakshmi
              </span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <div
                className="h-px w-10"
                style={{
                  background:
                    "linear-gradient(90deg,#00d4ff,transparent)",
                }}
              />
              <h2
                className="text-xl font-semibold"
                style={{ color: "#94a3b8" }}
              >
                Full Stack Developer
              </h2>
            </div>

            <p
              className="text-lg leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0"
              style={{ color: "#94a3b8" }}
            >
              Building scalable web applications using
              <span style={{ color: "#00d4ff" }}>
                {" "}Java • Spring Boot • React
              </span>
              {" "}and
              <span style={{ color: "#7c3aed" }}>
                {" "}Docker
              </span>.
              Passionate about clean architecture, secure REST APIs,
              CI/CD pipelines, and production-ready software.
            </p>

            <div
              className="flex items-center justify-center lg:justify-start gap-2 mb-8"
              style={{ color: "#64748b" }}
            >
              <MapPin size={16} />
              <span>India</span>
            </div>

            <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
              {[
                "Java",
                "Spring Boot",
                "React",
                "MySQL",
                "Docker",
                "GitHub Actions",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    background: "rgba(0,212,255,0.08)",
                    border: "1px solid rgba(0,212,255,0.2)",
                    color: "#7dd3fc",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <a href="#projects" className="btn-primary">
                View Projects
                <ArrowRight size={18} />
              </a>

              <a href="/resume.pdf" download className="btn-outline">
                <Download size={18} />
                Download CV
              </a>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              {[
                {
                  icon: GithubIcon,
                  href: "https://github.com/Backiyalakshm",
                },
                {
                  icon: LinkedInIcon,
                  href:
                    "https://www.linkedin.com/in/packiyalakshmi-m-7479a12ba",
                },
                {
                  icon: Mail,
                  href: "mailto:backiyalakshmim029@gmail.com",
                },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: "rgba(0,212,255,0.06)",
                    border: "1px solid rgba(0,212,255,0.15)",
                    color: "#94a3b8",
                  }}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="relative">

              <div
                className="animate-spin-slow absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg,#00d4ff,#7c3aed,#00d4ff)",
                  padding: "3px",
                  width: "360px",
                  height: "360px",
                }}
              >
                <div
                  className="w-full h-full rounded-full"
                  style={{ background: "var(--bg-primary)" }}
                />
              </div>

              <div
                className="animate-glow absolute inset-0 rounded-full"
                style={{
                  width: "360px",
                  height: "360px",
                }}
              />

              <div
                className="relative animate-float"
                style={{
                  width: "360px",
                  height: "360px",
                }}
              >
                <div
                  className="w-full h-full rounded-full overflow-hidden"
                  style={{
                    border: "3px solid transparent",
                    background:
                      "linear-gradient(#050b18,#050b18) padding-box, linear-gradient(135deg,#00d4ff,#7c3aed) border-box",
                    padding: "4px",
                  }}
                >
                  <img
                    src="/profile.jpg"
                    alt="Packiyalakshmi"
                    className="w-full h-full rounded-full object-cover object-top"
                  />
                </div>
              </div>

              <div
                className="absolute -bottom-2 -right-4 px-4 py-2 rounded-xl text-sm font-bold"
                style={{
                  background: "rgba(10,22,40,0.95)",
                  border: "1px solid rgba(16,185,129,0.4)",
                  color: "#10b981",
                }}
              >
                CGPA 8.6 🎓
              </div>

              <div
                className="absolute -top-2 -left-6 px-4 py-2 rounded-xl text-sm font-bold"
                style={{
                  background: "rgba(10,22,40,0.95)",
                  border: "1px solid rgba(0,212,255,0.3)",
                  color: "#00d4ff",
                }}
              >
                ☕ Java Developer
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20">
          <div
            className="flex flex-col items-center gap-2 text-sm"
            style={{ color: "#64748b" }}
          >
            <span>Scroll Down</span>
            <div
              className="w-px h-12"
              style={{
                background:
                  "linear-gradient(to bottom,#00d4ff,transparent)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

