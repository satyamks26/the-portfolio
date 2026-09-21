import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Sparkles } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 120, damping: 14 },
    },
  };

  const toggleLegoExplode = () => {
    window.dispatchEvent(new CustomEvent('toggle-lego-explode'));
  };

  return (
    <section id="hero" className="section hero-section">
      <div className="radial-glow" style={{ top: '15%', left: '5%' }} />
      <div className="radial-glow" style={{ top: '25%', right: '15%' }} />

      <div className="hero-stage-grid">
        {/* Left Column: Developer Profile & Credentials */}
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Master Builder Badge */}
          <motion.div variants={itemVariants} className="hero-badge glass-panel lego-badge">
            <span className="badge-stud red" />
            <span className="badge-stud yellow" />
            <span className="badge-stud blue" />
            <span>Full-Stack MERN · Master Builder Architecture</span>
          </motion.div>

          {/* Title Header */}
          <motion.div variants={itemVariants} className="hero-title-group">
            <span className="hero-eyebrow">PORTFOLIO & MASTER BUILDER LAB</span>
            <h1 className="hero-title">
              Hi, I am <span className="hero-name-gradient">Kumar Satyam</span>
            </h1>
          </motion.div>

          {/* Headline */}
          <motion.h2 variants={itemVariants} className="hero-subtitle">
            Engineering High-Performance Systems <br />
            Brick by Brick.
          </motion.h2>

          {/* Executive Bio */}
          <motion.p variants={itemVariants} className="hero-description">
            Full-Stack Developer who independently architected, built, and shipped 3 production web applications solving real user problems — from Gemini Vision food nutrition analysis to an adaptive OpenAI interview platform and an intelligent CRM system.
          </motion.p>

          {/* Compact Profile Chip */}
          <motion.div variants={itemVariants} className="hero-profile-chip glass-panel brick-yellow">
            <div className="lego-studs-top-row">
              <span className="lego-brick-stud yellow" />
              <span className="lego-brick-stud green" />
              <span className="lego-brick-stud blue" />
              <span className="lego-brick-stud yellow" />
            </div>
            <div className="chip-content-wrap">
              <div className="chip-avatar-wrap">
                <img src="/profile.png" alt="Kumar Satyam" className="chip-avatar-img" />
                <span className="status-live-dot" />
              </div>
              <div className="chip-info">
                <div className="chip-name-row">
                  <span className="chip-name">Kumar Satyam</span>
                  <span className="chip-verified">AVAILABLE IMMEDIATELY</span>
                </div>
                <span className="chip-loc">Jamshedpur, IN · Open to Roles & Internships</span>
              </div>
            </div>
          </motion.div>

          {/* Terminal Console Block */}
          <motion.div variants={itemVariants} className="hero-terminal glass-panel brick-blue">
            <div className="lego-studs-top-row">
              <span className="lego-brick-stud red" />
              <span className="lego-brick-stud yellow" />
              <span className="lego-brick-stud green" />
              <span className="lego-brick-stud blue" />
              <span className="lego-brick-stud yellow" />
              <span className="lego-brick-stud red" />
            </div>
            <div className="terminal-header">
              <span className="lego-stud-pill red" />
              <span className="lego-stud-pill yellow" />
              <span className="lego-stud-pill green" />
              <span className="lego-stud-pill blue" />
              <span className="terminal-title">master-builder.sh · v3.0.0</span>
            </div>
            <div className="terminal-body">
              <p className="line"><span className="term-purple">const</span> engineer = <span className="term-cyan">new</span> MasterBuilder(<span className="term-yellow">'Kumar Satyam'</span>);</p>
              <p className="line">engineer.stack = [<span className="term-yellow">'React'</span>, <span className="term-yellow">'Node'</span>, <span className="term-yellow">'Express'</span>, <span className="term-yellow">'MongoDB'</span>, <span className="term-yellow">'Gemini Vision'</span>];</p>
              <p className="line">engineer.deployments = <span className="term-green">'3 Shipped Production Apps · 0 Downtime'</span>;</p>
              <p className="line output">&gt; LEGO architecture loaded. 120 FPS procedural 3D active.</p>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div variants={itemVariants} className="hero-actions">
            <button onClick={() => handleScrollTo('projects')} className="btn-primary interactive">
              Explore Shipped Sets
            </button>
            <button onClick={() => handleScrollTo('contact')} className="btn-secondary interactive">
              Get In Touch
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Canvas Visual Stage with Interactive Hint */}
        <div 
          className="hero-stage-canvas-spacer interactive"
          onClick={toggleLegoExplode}
          title="Click to Break and Snap LEGO Bricks!"
        >
          <div className="hero-3d-hint-pill">
            <span className="hint-brick-dot" />
            <span>Click Anywhere: Bricks Break & Snap!</span>
          </div>
        </div>
      </div>

      {/* Down Scroll Prompt */}
      <div className="hero-scroll-prompt interactive" onClick={() => handleScrollTo('about')}>
        <span>Scroll to explore full-stack architecture</span>
        <ArrowDown size={15} className="arrow-bob" />
      </div>

      <style>{`
        .hero-section {
          align-items: flex-start;
          padding-top: 110px;
          min-height: 100vh;
          position: relative;
        }

        .hero-stage-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 40px;
          align-items: center;
          width: 100%;
          max-width: 1280px;
          z-index: 10;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
          width: 100%;
          max-width: 580px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 18px;
          border-radius: 8px !important;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--lego-yellow);
          border: 1.5px solid rgba(254, 203, 0, 0.4) !important;
          background: #1c202a !important;
          box-shadow: 0 4px 0 #0c0e12;
          letter-spacing: 0.5px;
          font-weight: 700;
        }

        .badge-stud {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.6), 0 1px 2px rgba(0, 0, 0, 0.5);
        }
        .badge-stud.red { background: var(--lego-red); }
        .badge-stud.yellow { background: var(--lego-yellow); }
        .badge-stud.blue { background: var(--lego-blue); }

        .hero-title-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .hero-eyebrow {
          font-family: var(--font-mono);
          font-size: 11.5px;
          color: var(--lego-yellow);
          letter-spacing: 1.5px;
          font-weight: 700;
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: 3.5rem;
          font-weight: 900;
          letter-spacing: 0.02em;
          color: #ffffff;
          line-height: 1.12;
          text-transform: uppercase;
          text-shadow: 0 3px 0 #64748b, 0 6px 0 #0f172a, 0 8px 0 #000000;
        }

        .hero-name-gradient {
          display: inline-block;
          color: var(--lego-yellow) !important;
          -webkit-text-fill-color: var(--lego-yellow) !important;
          text-shadow: 
            0 3px 0 var(--lego-yellow-shadow),
            0 6px 0 #735400,
            0 8px 0 #000000;
        }

        .hero-subtitle {
          font-family: var(--font-display);
          font-size: 1.6rem;
          color: #f1f5f9;
          font-weight: 800;
          line-height: 1.25;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          text-shadow: 0 2px 0 #0284c7, 0 4px 0 #000000;
        }

        .hero-description {
          font-size: 14.5px;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        /* Profile Mini Chip */
        .hero-profile-chip {
          display: flex;
          flex-direction: column;
          border-radius: 12px !important;
          width: 100%;
          overflow: hidden;
        }

        .chip-stud-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: #11131a;
          border-bottom: 2px solid rgba(0, 0, 0, 0.4);
        }

        .chip-content-wrap {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 10px 16px;
        }

        .chip-avatar-wrap {
          position: relative;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          overflow: visible;
        }

        .chip-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .status-live-dot {
          position: absolute;
          bottom: 1px;
          right: 1px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #10b981;
          border: 2px solid #060608;
          box-shadow: 0 0 8px #10b981;
        }

        .chip-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          text-align: left;
        }

        .chip-name-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .chip-name {
          font-size: 13.5px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .chip-verified {
          font-size: 9.5px;
          padding: 2px 6px;
          border-radius: 4px;
          background: rgba(16, 185, 129, 0.12);
          color: #10b981;
          font-family: var(--font-mono);
          letter-spacing: 0.5px;
          font-weight: 600;
        }

        .chip-loc {
          font-size: 12px;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        /* LEGO Styled Terminal */
        .hero-terminal {
          width: 100%;
          text-align: left;
          border-radius: 12px !important;
          background: #181b24 !important;
          border: 2px solid rgba(255, 255, 255, 0.12) !important;
          border-top: 2px solid rgba(255, 255, 255, 0.28) !important;
          box-shadow: 0 6px 0 #0b0c10, 0 14px 28px rgba(0, 0, 0, 0.5);
          overflow: hidden;
        }

        .terminal-header {
          display: flex;
          align-items: center;
          padding: 10px 14px;
          background: #14161e;
          border-bottom: 2px solid rgba(0, 0, 0, 0.4);
          gap: 8px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.4), 0 1.5px 2px rgba(0,0,0,0.4);
        }
        .dot-red { background-color: var(--lego-red); }
        .dot-yellow { background-color: var(--lego-yellow); }
        .dot-green { background-color: var(--lego-green); }
        .dot-blue { background-color: var(--lego-blue); }

        .terminal-title {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--lego-yellow);
          font-weight: 700;
          margin-left: 8px;
        }

        .terminal-body {
          padding: 14px 16px;
          font-family: var(--font-mono);
          font-size: 12px;
          line-height: 1.6;
        }

        .term-purple { color: #f57d20; font-weight: 700; }
        .term-cyan { color: #0084ff; font-weight: 700; }
        .term-yellow { color: var(--lego-yellow); }
        .term-green { color: #4ade80; }

        .line.output {
          color: var(--lego-yellow);
          margin-top: 6px;
          font-style: italic;
          font-weight: 600;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          margin-top: 6px;
        }

        /* Right Column 3D Canvas Stage with Interactive Hint */
        .hero-stage-canvas-spacer {
          min-height: 480px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          padding-bottom: 20px;
          cursor: pointer;
          user-select: none;
        }

        .hero-3d-hint-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 20px;
          background: #1c202a;
          border: 2px solid var(--lego-yellow);
          box-shadow: 0 4px 0 #000000, 0 8px 20px rgba(0, 0, 0, 0.5);
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.5px;
          animation: floatHint 2.4s ease-in-out infinite;
          transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
        }

        .hero-stage-canvas-spacer:hover .hero-3d-hint-pill {
          border-color: var(--lego-red);
          transform: translateY(-2px);
          box-shadow: 0 6px 0 #000000, 0 12px 24px rgba(229, 37, 33, 0.35);
        }

        .hero-stage-canvas-spacer:active .hero-3d-hint-pill {
          transform: translateY(2px);
          box-shadow: 0 1px 0 #000000;
        }

        .hint-brick-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--lego-red);
          box-shadow: 0 0 6px var(--lego-red);
        }

        @keyframes floatHint {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .hero-scroll-prompt {
          position: absolute;
          bottom: 24px;
          left: 10%;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 11.5px;
          color: var(--text-muted);
          font-family: var(--font-mono);
          cursor: pointer;
          transition: color 0.2s;
        }

        .hero-scroll-prompt:hover {
          color: var(--accent-cyan);
        }

        .arrow-bob {
          animation: bob 1.8s ease-in-out infinite;
        }

        @keyframes bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }

        @media (max-width: 1024px) {
          .hero-stage-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-stage-canvas-spacer {
            min-height: 260px;
          }
          .hero-title {
            font-size: 2.8rem;
          }
          .hero-subtitle {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </section>
  );
}
