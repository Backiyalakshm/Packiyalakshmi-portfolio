import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    setActive(href.replace("#", ""));

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(5,11,24,0.92)"
          : "rgba(5,11,24,0.3)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(0,212,255,0.1)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNav("#home")}
          className="flex items-center gap-3 font-bold text-xl"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg,#00d4ff,#7c3aed)",
            }}
          >
            <Code2 size={20} color="white" strokeWidth={2.5} />
          </div>

          <span className="gradient-text">PM</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link) => {
            const isActive = active === link.href.replace("#", "");

            return (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                style={{
                  color: isActive ? "#00d4ff" : "#94a3b8",
                  background: isActive
                    ? "rgba(0,212,255,0.08)"
                    : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.target.style.color = "#f8fafc";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.target.style.color = "#94a3b8";
                  }
                }}
              >
                {link.label}
              </button>
            );
          })}

          <a
            href="/resume.pdf"
            download
            className="btn-primary ml-4"
            style={{
              padding: "10px 22px",
              fontSize: "0.9rem",
            }}
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "#00d4ff" }}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 pt-4"
          style={{
            background: "rgba(5,11,24,0.98)",
            borderBottom: "1px solid rgba(0,212,255,0.1)",
          }}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all"
                style={{
                  color: "#94a3b8",
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          <a
            href="/resume.pdf"
            download
            className="btn-primary mt-4 w-full flex justify-center"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
