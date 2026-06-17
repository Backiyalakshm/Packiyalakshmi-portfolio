import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      className="noise"
      style={{
        background: "var(--bg-primary)",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      <section className="section-spacing">
        <Hero />
      </section>

      <section className="section-spacing">
        <About />
      </section>

      <section className="section-spacing">
        <Skills />
      </section>

      <section className="section-spacing">
        <Projects />
      </section>

      <section className="section-spacing">
        <Experience />
      </section>

      <section className="section-spacing">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}