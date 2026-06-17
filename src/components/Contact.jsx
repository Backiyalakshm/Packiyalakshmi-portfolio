import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "./Icons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:backiyalakshmim029@gmail.com?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle = (name) => ({
    background: focused === name ? "rgba(0,212,255,0.06)" : "rgba(13,31,60,0.6)",
    border: focused === name ? "1px solid rgba(0,212,255,0.4)" : "1px solid rgba(255,255,255,0.08)",
    borderRadius: "10px", color: "#f0f6ff", padding: "12px 16px", width: "100%", outline: "none",
    fontFamily: "Inter, sans-serif", fontSize: "0.9rem", transition: "all 0.25s ease", backdropFilter: "blur(10px)",
  });

  const labelStyle = { display: "block", marginBottom: "6px", fontSize: "0.78rem", fontWeight: 600, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px" };

  const contacts = [
    { icon: Mail, label: "Email", value: "backiyalakshmim029@gmail.com", href: "mailto:backiyalakshmim029@gmail.com", color: "#00d4ff" },
    { icon: GithubIcon, label: "GitHub", value: "github.com/Backiyalakshm", href: "https://github.com/Backiyalakshm", color: "#7c3aed" },
    { icon: LinkedInIcon, label: "LinkedIn", value: "packiyalakshmi-m", href: "https://www.linkedin.com/in/packiyalakshmi-m-7479a12ba", color: "#0ea5e9" },
    { icon: MapPin, label: "Location", value: "India", href: null, color: "#10b981" },
  ];

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 80%, rgba(124,58,237,0.07) 0%, transparent 70%)" }} />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#00d4ff" }}>Let's connect</p>
          <h2 className="text-4xl lg:text-5xl font-black section-title" style={{ color: "#f0f6ff" }}>Get In Touch</h2>
          <p className="text-sm mt-6 max-w-lg mx-auto" style={{ color: "#64748b" }}>I'm currently open to full-time opportunities and freelance projects. Drop me a message — I'll get back to you quickly!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <div className="space-y-5 mb-10">
              {contacts.map(({ icon: Icon, label, value, href, color }) => (
                <div key={label} className="glass-card hover-glow flex items-center gap-4 p-5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}15`, border: `1px solid ${color}25` }}>
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "#64748b" }}>{label}</p>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium transition-colors" style={{ color: "#f0f6ff" }}
                        onMouseEnter={(e) => (e.target.style.color = color)} onMouseLeave={(e) => (e.target.style.color = "#f0f6ff")}>{value}</a>
                    ) : (
                      <p className="text-sm font-medium" style={{ color: "#f0f6ff" }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl" style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#10b981", boxShadow: "0 0 8px #10b981" }} />
                <span className="font-bold text-sm" style={{ color: "#10b981" }}>Available for Work</span>
              </div>
              <p className="text-xs leading-5" style={{ color: "#64748b" }}>Actively looking for Full Stack Developer roles (Java / Spring Boot / React). Open to remote, hybrid, or on-site opportunities.</p>
            </div>
          </div>

          {/* Right — form */}
          <div className="glass-card p-8">
            <h3 className="font-bold text-lg mb-6" style={{ color: "#f0f6ff" }}>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label style={labelStyle}>Name</label>
                  <input type="text" name="name" placeholder="Your name" required value={form.name} onChange={handleChange} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} style={inputStyle("name")} />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input type="email" name="email" placeholder="your@email.com" required value={form.email} onChange={handleChange} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} style={inputStyle("email")} />
                </div>
              </div>
              <div className="mb-4">
                <label style={labelStyle}>Subject</label>
                <input type="text" name="subject" placeholder="Job opportunity / Collaboration" value={form.subject} onChange={handleChange} onFocus={() => setFocused("subject")} onBlur={() => setFocused(null)} style={inputStyle("subject")} />
              </div>
              <div className="mb-6">
                <label style={labelStyle}>Message</label>
                <textarea name="message" rows={5} placeholder="Hi Packiyalakshmi, I'd like to discuss..." required value={form.message} onChange={handleChange} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} style={{ ...inputStyle("message"), resize: "vertical" }} />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                {sent ? <><CheckCircle size={16} /> Message Sent!</> : <><Send size={16} /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
