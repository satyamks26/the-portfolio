import { useState, useEffect } from 'react';

export default function LegoBreakFx() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleGlobalClick = (e) => {
      // Trigger the 3D Canvas Master Builder Break & Join
      window.dispatchEvent(new CustomEvent('lego-break-and-join'));

      // Spawn 4 mini LEGO pieces at cursor position that shatter and snap back
      const id = Date.now() + Math.random();
      const x = e.clientX;
      const y = e.clientY;

      const newBurst = {
        id,
        x,
        y,
      };

      setParticles((prev) => [...prev.slice(-6), newBurst]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== id));
      }, 450);
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <div className="lego-break-fx-layer" style={{ pointerEvents: 'none', position: 'fixed', inset: 0, zIndex: 99999 }}>
      {particles.map((burst) => (
        <div
          key={burst.id}
          className="lego-burst-origin"
          style={{ position: 'absolute', left: burst.x, top: burst.y }}
        >
          {/* 4 classic LEGO color studs blasting out & snapping back */}
          <span className="lego-micro-piece micro-red" />
          <span className="lego-micro-piece micro-yellow" />
          <span className="lego-micro-piece micro-blue" />
          <span className="lego-micro-piece micro-green" />
        </div>
      ))}

      <style>{`
        .lego-burst-origin {
          width: 0;
          height: 0;
          pointer-events: none;
        }

        .lego-micro-piece {
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 3px;
          border: 1px solid rgba(0, 0, 0, 0.4);
          box-shadow: inset 0 1.5px 1px rgba(255, 255, 255, 0.6), 0 2px 4px rgba(0, 0, 0, 0.5);
          animation: shatterAndSnap 0.42s cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards;
        }

        .lego-micro-piece::after {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: inherit;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.8), 0 1px 1px rgba(0, 0, 0, 0.4);
        }

        .micro-red { background: #e52521; --dx: -28px; --dy: -28px; --rot: -45deg; }
        .micro-yellow { background: #fecb00; --dx: 28px; --dy: -28px; --rot: 45deg; }
        .micro-blue { background: #0055bf; --dx: -28px; --dy: 28px; --rot: -135deg; }
        .micro-green { background: #009640; --dx: 28px; --dy: 28px; --rot: 135deg; }

        @keyframes shatterAndSnap {
          0% {
            transform: translate(-50%, -50%) translate(0, 0) rotate(0deg) scale(0.6);
            opacity: 1;
          }
          35% {
            /* Burst outwards and tumble */
            transform: translate(-50%, -50%) translate(var(--dx), var(--dy)) rotate(var(--rot)) scale(1.15);
            opacity: 1;
          }
          75% {
            /* Snap immediately back together tightly */
            transform: translate(-50%, -50%) translate(calc(var(--dx) * 0.1), calc(var(--dy) * 0.1)) rotate(0deg) scale(1);
            opacity: 1;
          }
          100% {
            /* Form joined brick & dissolve */
            transform: translate(-50%, -50%) translate(0, 0) rotate(0deg) scale(0.85);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
