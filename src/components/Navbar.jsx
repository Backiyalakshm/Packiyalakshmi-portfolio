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
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(5,11,24,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,212,255,0.1)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNav("#home")}
          className="flex items-center gap-2 font-bold text-lg"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#00d4ff,#7c3aed)" }}
          >
            <Code2 size={18} color="white" strokeWidth={2.5} />
          </div>
          <span className="gradient-text">PM</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = active === link.href.replace("#", "");
            return (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  color: isActive ? "#00d4ff" : "#94a3b8",
                  background: isActive ? "rgba(0,212,255,0.08)" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.target.style.color = "#f0f6ff";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.target.style.color = "#94a3b8";
                }}
              >
                {link.label}
              </button>
            );
          })}
          <a
            href="/resume.pdf"
            download
            className="btn-primary ml-3"
            style={{ padding: "8px 20px", fontSize: "0.82rem" }}
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "#00d4ff" }}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 pt-2"
          style={{
            background: "rgba(5,11,24,0.97)",
            borderBottom: "1px solid rgba(0,212,255,0.1)",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="block w-full text-left px-4 py-3 rounded-lg mb-1 text-sm font-medium transition-all"
              style={{ color: "#94a3b8" }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download
            className="btn-primary mt-3 w-full justify-center"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
