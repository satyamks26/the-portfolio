import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Sparkles, Lightbulb, Gauge } from 'lucide-react';

export default function Hero() {
  const [selectedPaint, setSelectedPaint] = useState('#d4d5d9');
  const [headlights, setHeadlights] = useState(true);

  const paintOptions = [
    { name: 'Chalk Gray', hex: '#d4d5d9', dotColor: '#d4d5d9' },
    { name: 'Giallo Orion', hex: '#eab308', dotColor: '#eab308' },
    { name: 'Guards Red', hex: '#e61919', dotColor: '#e61919' },
    { name: 'Miami Blue', hex: '#00b4d8', dotColor: '#00b4d8' },
    { name: 'Matte Carbon', hex: '#141416', dotColor: '#222329' },
  ];

  const handlePaintSelect = (hex) => {
    setSelectedPaint(hex);
    window.dispatchEvent(new CustomEvent('car-paint-change', { detail: hex }));
  };

  const handleHeadlightsToggle = () => {
    const nextState = !headlights;
    setHeadlights(nextState);
    window.dispatchEvent(new CustomEvent('car-headlights-toggle', { detail: nextState }));
  };

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
          {/* Engineering Badge */}
          <motion.div variants={itemVariants} className="hero-badge glass-panel">
            <Code2 size={13} className="badge-icon" />
            <span>Full-Stack MERN · AI-Integrated Architecture</span>
          </motion.div>

          {/* Title Header */}
          <motion.div variants={itemVariants} className="hero-title-group">
            <span className="hero-eyebrow">PORTFOLIO & EXPERIMENTAL LAB</span>
            <h1 className="hero-title">
              Hi, I am <span className="hero-name-gradient">Kumar Satyam</span>
            </h1>
          </motion.div>

          {/* Headline */}
          <motion.h2 variants={itemVariants} className="hero-subtitle">
            Engineering High-Performance Systems <br />
            with Precision & Speed.
          </motion.h2>

          {/* Executive Bio */}
          <motion.p variants={itemVariants} className="hero-description">
            Full-Stack Developer who independently architected, built, and shipped 3 production web applications solving real user problems — from Gemini Vision food nutrition analysis to an adaptive OpenAI interview platform and an intelligent CRM system.
          </motion.p>

          {/* Compact Profile Chip */}
          <motion.div variants={itemVariants} className="hero-profile-chip glass-panel">
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
          </motion.div>

          {/* Terminal Console Block */}
          <motion.div variants={itemVariants} className="hero-terminal glass-panel">
            <div className="terminal-header">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="terminal-title">runtime.sh · v2.6.0</span>
            </div>
            <div className="terminal-body">
              <p className="line"><span className="term-purple">const</span> engineer = <span className="term-cyan">new</span> MernArchitect(<span className="term-yellow">'Kumar Satyam'</span>);</p>
              <p className="line">engineer.stack = [<span className="term-yellow">'React'</span>, <span className="term-yellow">'Node'</span>, <span className="term-yellow">'Express'</span>, <span className="term-yellow">'MongoDB'</span>, <span className="term-yellow">'Gemini Vision'</span>];</p>
              <p className="line">engineer.deployments = <span className="term-green">'3 Shipped Production Apps · 0 Downtime'</span>;</p>
              <p className="line output">&gt; Core systems initialized. 60 FPS 3D studio live.</p>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div variants={itemVariants} className="hero-actions">
            <button onClick={() => handleScrollTo('projects')} className="btn-primary interactive">
              Explore Shipped Work
            </button>
            <button onClick={() => handleScrollTo('contact')} className="btn-secondary interactive">
              Get In Touch
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Automotive Showroom Stage Controls */}
        <motion.div
          className="showroom-stage-overlay"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Top HUD Telemetry Panel */}
          <div className="showroom-hud-header glass-panel">
            <div className="hud-metric">
              <Gauge size={14} className="hud-icon" />
              <span>AVENTADOR V12 · 770 HP</span>
            </div>
            <div className="hud-pill">
              <span className="hud-dot" />
              <span>PBR CLEARCOAT ACTIVE</span>
            </div>
          </div>

          {/* Interactive Paint Configurator Dock */}
          <div className="showroom-config-dock glass-panel">
            <div className="dock-label-group">
              <span className="dock-label">BESPOKE CLEARCOAT PAINT</span>
              <span className="dock-current">{paintOptions.find((p) => p.hex === selectedPaint)?.name}</span>
            </div>

            <div className="paint-swatches">
              {paintOptions.map((opt) => (
                <button
                  key={opt.hex}
                  onClick={() => handlePaintSelect(opt.hex)}
                  className={`swatch-btn interactive ${selectedPaint === opt.hex ? 'active' : ''}`}
                  title={opt.name}
                >
                  <span className="swatch-color" style={{ backgroundColor: opt.dotColor }} />
                  {selectedPaint === opt.hex && <span className="swatch-ring" />}
                </button>
              ))}
            </div>

            <div className="dock-divider" />

            {/* Headlights Toggle Switch */}
            <button
              onClick={handleHeadlightsToggle}
              className={`headlights-btn interactive ${headlights ? 'active' : ''}`}
            >
              <Lightbulb size={14} className="headlights-icon" />
              <span>{headlights ? 'LED DRL: ON' : 'LED DRL: OFF'}</span>
            </button>
          </div>

          <div className="showroom-hint">
            <span>Drag mouse to inspect vehicle clearcoat and reflections</span>
          </div>
        </motion.div>
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
          gap: 8px;
          padding: 6px 14px;
          border-radius: 20px !important;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--accent-cyan);
          border: 1px solid rgba(0, 240, 255, 0.25) !important;
          background: rgba(0, 240, 255, 0.04) !important;
          letter-spacing: 0.5px;
        }

        .badge-icon {
          color: var(--accent-cyan);
        }

        .hero-title-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .hero-eyebrow {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted);
          letter-spacing: 1.5px;
        }

        .hero-title {
          font-size: 3.6rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          line-height: 1.1;
        }

        .hero-name-gradient {
          background: linear-gradient(135deg, #ffffff 0%, #00f0ff 70%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.7rem;
          color: var(--text-primary);
          font-weight: 600;
          line-height: 1.25;
          letter-spacing: -0.01em;
        }

        .hero-description {
          font-size: 14.5px;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        /* Profile Mini Chip */
        .hero-profile-chip {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 10px 16px;
          border-radius: 12px !important;
          width: 100%;
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

        /* Terminal styling */
        .hero-terminal {
          width: 100%;
          text-align: left;
          border-radius: 12px !important;
          background: rgba(8, 9, 13, 0.75) !important;
          border: 1px solid var(--border-color) !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          overflow: hidden;
        }

        .terminal-header {
          display: flex;
          align-items: center;
          padding: 10px 14px;
          background: rgba(255, 255, 255, 0.02);
          border-bottom: 1px solid var(--border-color);
          gap: 6px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .dot-red { background-color: #ef4444; }
        .dot-yellow { background-color: #f59e0b; }
        .dot-green { background-color: #10b981; }

        .terminal-title {
          font-family: var(--font-mono);
          font-size: 10.5px;
          color: var(--text-muted);
          margin-left: 10px;
        }

        .terminal-body {
          padding: 14px 16px;
          font-family: var(--font-mono);
          font-size: 12px;
          line-height: 1.6;
        }

        .term-purple { color: #c084fc; }
        .term-cyan { color: #00f0ff; }
        .term-yellow { color: #fde047; }
        .term-green { color: #4ade80; }

        .line.output {
          color: var(--text-muted);
          margin-top: 6px;
          font-style: italic;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          margin-top: 6px;
        }

        /* Right Column Showroom Overlay Dock */
        .showroom-stage-overlay {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 16px;
          height: 520px;
          justify-content: space-between;
          padding: 20px 0;
          pointer-events: none;
        }

        .showroom-hud-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 8px 16px;
          border-radius: 30px !important;
          pointer-events: auto;
        }

        .hud-metric {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-family: var(--font-mono);
          color: var(--text-secondary);
          letter-spacing: 0.5px;
        }

        .hud-icon {
          color: var(--accent-cyan);
        }

        .hud-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10.5px;
          font-family: var(--font-mono);
          color: var(--accent-cyan);
        }

        .hud-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 6px var(--accent-cyan);
        }

        /* Configurator Dock */
        .showroom-config-dock {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 20px;
          border-radius: 30px !important;
          pointer-events: auto;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .dock-label-group {
          display: flex;
          flex-direction: column;
          gap: 2px;
          text-align: left;
        }

        .dock-label {
          font-size: 9.5px;
          color: var(--text-muted);
          font-family: var(--font-mono);
          letter-spacing: 0.8px;
        }

        .dock-current {
          font-size: 12px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .paint-swatches {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .swatch-btn {
          position: relative;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: none;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .swatch-color {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.25);
          transition: transform 0.2s;
        }

        .swatch-btn:hover .swatch-color {
          transform: scale(1.15);
        }

        .swatch-ring {
          position: absolute;
          inset: 0;
          border: 1.5px solid var(--accent-cyan);
          border-radius: 50%;
          box-shadow: var(--glow-cyan);
        }

        .dock-divider {
          width: 1px;
          height: 24px;
          background: var(--border-color);
        }

        .headlights-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 11px;
          font-family: var(--font-mono);
          cursor: pointer;
          transition: all 0.2s;
        }

        .headlights-btn.active {
          background: rgba(0, 240, 255, 0.1);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.2);
        }

        .headlights-icon {
          color: inherit;
        }

        .showroom-hint {
          font-family: var(--font-mono);
          font-size: 10.5px;
          color: var(--text-muted);
          letter-spacing: 0.5px;
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
          .showroom-stage-overlay {
            align-items: flex-start;
            height: auto;
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
