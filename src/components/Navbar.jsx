import { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';

const Github = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);

          const scrollPos = window.scrollY + 200;
          for (const link of navLinks) {
            const el = document.getElementById(link.id);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPos >= top && scrollPos < top + height) {
                setActiveSection(link.id);
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content glass-panel">
        {/* LEGO Styled Letter Tile Logo */}
        <div className="navbar-logo-tiles" onClick={() => scrollToSection('hero')}>
          <span className="lego-letter-tile yellow">&lt;</span>
          <span className="lego-letter-tile">S</span>
          <span className="lego-letter-tile">A</span>
          <span className="lego-letter-tile">T</span>
          <span className="lego-letter-tile">Y</span>
          <span className="lego-letter-tile">A</span>
          <span className="lego-letter-tile">M</span>
          <span className="lego-letter-tile yellow">/&gt;</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`nav-btn ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
              {activeSection === link.id && <span className="nav-btn-stud" />}
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="navbar-socials">
          <a href="https://github.com/satyamks26" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub Profile">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/kumarsatyam887" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn Profile">
            <Linkedin size={18} />
          </a>
          <a href="mailto:kumarsatyamsks20@gmail.com" className="social-icon" aria-label="Email Satyam">
            <Mail size={18} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer glass-panel ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className={`mobile-nav-btn ${activeSection === link.id ? 'active' : ''}`}
          >
            {link.label}
          </button>
        ))}
      </div>

      <style>{`
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 24px 8%;
          z-index: 100;
          transition: padding var(--transition-normal);
        }
        
        .navbar-container.scrolled {
          padding: 16px 8%;
        }

        .navbar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 24px;
          border-radius: 14px !important;
          border: 2px solid rgba(255, 255, 255, 0.14);
          border-top: 2px solid rgba(255, 255, 255, 0.35);
          background: #1c202a;
          box-shadow: 0 6px 0 #0a0c10, 0 12px 28px rgba(0, 0, 0, 0.6);
        }

        .navbar-logo-tiles {
          display: flex;
          align-items: center;
          gap: 2px;
          cursor: pointer;
          user-select: none;
        }

        .navbar-links {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .nav-btn {
          background: #141720;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-top: 2px solid rgba(255, 255, 255, 0.28);
          border-radius: 6px;
          color: var(--text-secondary);
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.5px;
          padding: 7px 16px;
          box-shadow: 0 3px 0 #090a0d;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          position: relative;
          transition: transform 0.1s ease, color 0.15s ease, background 0.15s ease, box-shadow 0.1s ease;
          cursor: pointer;
        }

        .nav-btn:hover {
          color: var(--lego-yellow);
          transform: translateY(-2px);
          box-shadow: 0 5px 0 #090a0d;
        }

        .nav-btn.active {
          color: #111317;
          background: var(--lego-yellow);
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 0 3px 0 var(--lego-yellow-shadow);
        }

        .nav-btn:active {
          transform: translateY(2px);
          box-shadow: 0 1px 0 #090a0d;
        }

        .nav-btn-stud {
          width: 7px;
          height: 7px;
          background: #111317;
          border-radius: 50%;
          display: inline-block;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.5);
        }

        .navbar-socials {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: #252a36;
          border: 1px solid rgba(255, 255, 255, 0.14);
          box-shadow: 0 3px 0 #0e1015;
          color: var(--text-primary);
          transition: transform 0.1s ease, color 0.15s ease, border-color 0.15s ease, box-shadow 0.1s ease;
        }

        .social-icon:hover {
          color: var(--lego-yellow);
          border-color: var(--lego-yellow);
          transform: translateY(-2px);
          box-shadow: 0 5px 0 #0e1015, 0 6px 14px rgba(254, 203, 0, 0.3);
        }

        .social-icon:active {
          transform: translateY(2px);
          box-shadow: 0 1px 0 #0e1015;
        }


        .mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-primary);
        }

        .mobile-drawer {
          display: none;
          position: absolute;
          top: 80px;
          right: 8%;
          width: 200px;
          flex-direction: column;
          padding: 16px;
          border-radius: 16px;
          gap: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .mobile-drawer.open {
          display: flex;
        }

        .mobile-nav-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          padding: 10px;
          border-radius: 8px;
          text-align: left;
          font-size: 15px;
          transition: background var(--transition-fast), color var(--transition-fast);
        }

        .mobile-nav-btn:hover, .mobile-nav-btn.active {
          background: rgba(255, 255, 255, 0.05);
          color: var(--accent-cyan);
        }

        @media (max-width: 768px) {
          .navbar-links, .navbar-socials {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
          .navbar-container {
            padding: 16px 5%;
          }
          .navbar-container.scrolled {
            padding: 12px 5%;
          }
          .mobile-drawer {
            right: 5%;
            top: 75px;
          }
        }
      `}</style>
    </nav>
  );
}
