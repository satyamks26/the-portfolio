import { ExternalLink } from 'lucide-react';
import nutrilensImg from '../assets/nutrilens.png';
import aiInterviewImg from '../assets/ai-interview.png';
import windenCrmImg from '../assets/winden-crm.png';

const Github = ({ size = 16 }) => (
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

export default function Projects() {
  const projectsData = [
    {
      id: 'nutrilens-ai-calorie-tracker',
      title: 'NutriLens',
      subtitle: 'AI Food Calorie Tracker · Sole Developer',
      description: 'MERN application where users photograph any meal and instantly receive an AI nutritional breakdown (calories, protein, carbs, fat) using Google Gemini Vision API.',
      highlights: [
        'Structured prompt pipeline for Gemini guaranteeing consistent JSON and portion estimation.',
        'Persisted meal history in MongoDB for daily intake tracking across sessions without re-scanning.',
        'Integrated Cloudinary for media storage and JWT auth for strict user data privacy.'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini Vision', 'JWT', 'Cloudinary', 'Netlify'],
      github: 'https://github.com/satyamks26/nutrilens-client',
      demo: 'https://nutrilens-client.vercel.app',
      image: nutrilensImg
    },
    {
      id: 'ai-interview-prep',
      title: 'AI Interview Prep',
      subtitle: 'Adaptive Mock Interview Platform · Sole Developer',
      description: 'An adaptive platform using OpenAI API to dynamically generate role-specific questions on demand, replacing static banks with a personalized evaluation engine for 20+ active users.',
      highlights: [
        'Custom scoring algorithm evaluating candidate answers against expected competencies.',
        'MongoDB session history tracking weak areas, measuring ~50% reduction in prep time.',
        'Role-Based Access Control (RBAC) with JWT auth preventing cross-user data leakage.'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI API', 'JWT', 'RBAC', 'Netlify'],
      github: 'https://github.com/satyamks26/Ai-interview-prep',
      demo: 'https://ai-interview-prep-knk6.vercel.app',
      image: aiInterviewImg
    },
    {
      id: 'winden-crm',
      title: 'Winden CRM',
      subtitle: 'Full-Stack CRM · AI Lead Scoring · Sole Developer',
      description: 'A complete CRM managing leads, deals, tasks, and client interactions, with OpenAI API-powered lead scoring that surfaces highest-value sales opportunities automatically.',
      highlights: [
        'Implemented RBAC across leads, deals, and clients, preventing cross-team data access.',
        'Real-time notification layer using Socket.io for live updates on leads, tasks, and deals.',
        'Optimized MongoDB schemas and RESTful API endpoints achieving data integrity at scale.'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI API', 'Socket.io', 'JWT', 'RBAC', 'Vercel'],
      github: 'https://github.com/satyamks26/winden-client',
      demo: 'https://winden-client.vercel.app/login',
      image: windenCrmImg
    }
  ];

  const Card = ({ project, index }) => {
    return (
      <div className="project-card glass-panel">
        {/* LEGO Set Stud Strip */}
        <div className="lego-studs-strip">
          <span className="lego-stud-pill red" />
          <span className="lego-stud-pill yellow" />
          <span className="lego-stud-pill blue" />
          <span className="lego-stud-pill green" />
          <span className="lego-set-code">SET #{index + 1}00 · MASTER BUILDER</span>
        </div>

        <div className="card-image-wrap">
          <img src={project.image} alt={project.title} className="card-img" />
          <div className="card-live-badge">
            <span className="live-dot" /> Live Set
          </div>
        </div>
        <div className="card-body">
          <div className="card-header-group">
            <span className="card-subtitle">{project.subtitle}</span>
            <h3 className="card-title">{project.title}</h3>
          </div>
          <p className="card-desc">{project.description}</p>
          
          <ul className="card-highlights">
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>

          <div className="card-tech">
            {project.tech.map((t, idx) => (
              <span key={idx} className="tech-tag lego-brick-tag">
                <span className="tech-tag-stud" />
                {t}
              </span>
            ))}
          </div>
          <div className="card-actions">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary card-btn interactive"
            >
              <ExternalLink size={15} />
              <span>Live Demo</span>
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary card-btn interactive"
            >
              <Github size={15} />
              <span>Codebase</span>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="radial-glow" style={{ top: '20%', left: '40%' }} />

      <div className="section-header">
        <h2 className="section-title text-gradient">Featured Work & Shipped Sets</h2>
        <div className="section-underline" />
      </div>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <Card key={project.id} project={project} index={index} />
        ))}
      </div>

      <style>{`
        .projects-section {
          align-items: center;
        }

        .section-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 50px;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 12px;
        }

        .section-underline {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, var(--accent-cyan), var(--accent-blue));
          border-radius: 2px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          width: 100%;
          max-width: 1240px;
          margin-top: 20px;
        }


        .project-card {
          border-radius: 14px !important;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          background: #1c202a;
          border: 2px solid rgba(255, 255, 255, 0.14);
          border-top: 2px solid rgba(255, 255, 255, 0.35);
          position: relative;
          box-shadow: 0 6px 0 #0c0e12, 0 14px 28px rgba(0, 0, 0, 0.5);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          border-color: var(--lego-yellow);
          box-shadow: 0 10px 0 #0c0e12, 0 20px 40px rgba(0, 0, 0, 0.6);
        }

        .lego-studs-strip {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 18px;
          background: #151820;
          border-bottom: 2px solid rgba(0, 0, 0, 0.4);
        }

        .lego-stud-pill {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          box-shadow: inset 0 1.5px 1.5px rgba(255, 255, 255, 0.5), 0 1.5px 2px rgba(0, 0, 0, 0.4);
        }
        .lego-stud-pill.red { background: var(--lego-red); }
        .lego-stud-pill.yellow { background: var(--lego-yellow); }
        .lego-stud-pill.blue { background: var(--lego-blue); }
        .lego-stud-pill.green { background: var(--lego-green); }

        .lego-set-code {
          margin-left: auto;
          font-family: var(--font-mono);
          font-size: 10.5px;
          font-weight: 800;
          color: var(--lego-yellow);
          letter-spacing: 0.8px;
        }

        .card-image-wrap {
          height: 220px;
          position: relative;
          overflow: hidden;
          background: #111318;
          border-bottom: 2px solid rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.35s ease;
        }

        .project-card:hover .card-img {
          transform: scale(1.04);
        }

        .card-live-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          display: flex;
          align-items: center;
          gap: 6px;
          background: #151820;
          border: 1.5px solid var(--lego-green);
          padding: 4px 12px;
          border-radius: 6px;
          font-size: 11px;
          font-family: var(--font-mono);
          color: #ffffff;
          font-weight: 700;
          letter-spacing: 0.5px;
          box-shadow: 0 3px 0 #0a0b0e;
          z-index: 2;
        }

        .live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--lego-green);
          box-shadow: 0 0 6px var(--lego-green);
        }

        .card-body {
          padding: 24px 22px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          gap: 14px;
          text-align: left;
        }

        .card-header-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .card-subtitle {
          font-size: 11.5px;
          color: var(--lego-yellow);
          font-family: var(--font-mono);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .card-title {
          font-size: 1.55rem;
          font-weight: 800;
          font-family: var(--font-display);
          color: #ffffff;
          line-height: 1.2;
        }

        .card-desc {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .card-highlights {
          list-style: none;
          padding: 0;
          margin: 4px 0 8px 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .card-highlights li {
          font-size: 12px;
          line-height: 1.45;
          color: var(--text-secondary);
          position: relative;
          padding-left: 18px;
        }

        .card-highlights li::before {
          content: '■';
          position: absolute;
          left: 0;
          color: var(--lego-yellow);
          font-size: 9px;
          top: 1px;
        }

        .card-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: auto;
          padding-top: 12px;
        }

        .lego-brick-tag {
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
          background: #252a36;
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #f1f5f9;
          font-family: var(--font-mono);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 2px 0 #101217;
        }

        .tech-tag-stud {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--lego-yellow);
          display: inline-block;
        }

        .card-actions {
          display: flex;
          gap: 12px;
          padding-top: 18px;
          border-top: 2px solid rgba(0, 0, 0, 0.35);
          margin-top: 8px;
          position: relative;
          z-index: 5;
        }

        .card-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex: 1;
          padding: 10px 16px;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
          text-align: center;
          border-radius: 8px;
          cursor: pointer;
          position: relative;
          z-index: 6;
        }

        @media (max-width: 1120px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .card-body {
            padding: 20px;
          }
          .card-image-wrap {
            height: 180px;
          }
        }
      `}</style>
    </section>
  );
}
