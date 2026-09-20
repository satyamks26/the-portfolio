import CustomCursor from './components/CustomCursor';
import MainCanvas from './components/Canvas/MainCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      {/* Lagging Custom Cursor for high-end feel */}
      <CustomCursor />

      {/* Persistent 3D Interactive Canvas background */}
      <MainCanvas />

      {/* Background architectural columns lines */}
      <div className="bg-gridlines">
        <div className="gridline" />
        <div className="gridline" />
        <div className="gridline" />
        <div className="gridline" />
      </div>

      {/* Floating Glassmorphic Navigation Bar */}
      <Navbar />

      {/* Main Portfolio Layout Content */}
      <main className="portfolio-main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Minimalist Footnotes */}
      <footer className="portfolio-footer">
        <p>© {new Date().getFullYear()} Kumar Satyam · Full-Stack Developer (MERN) · Available Immediately</p>
      </footer>

      <style>{`
        .portfolio-main {
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 10;
        }

        .portfolio-footer {
          padding: 40px 0;
          text-align: center;
          border-top: 1px solid var(--border-color);
          position: relative;
          z-index: 10;
          background: rgba(3, 3, 12, 0.6);
          backdrop-filter: blur(5px);
        }

        .portfolio-footer p {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-muted);
        }
      `}</style>
    </>
  );
}
