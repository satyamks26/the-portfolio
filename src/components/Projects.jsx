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

  const Card = ({ project }) => {
    return (
      <div className="project-card glass-panel">
        <div className="card-image-wrap">
          <img src={project.image} alt={project.title} className="card-img" />
          <div className="card-live-badge">
            <span className="live-dot" /> Live
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
              <span key={idx} className="tech-tag">{t}</span>
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
        <h2 className="section-title text-gradient">Featured Work</h2>
        <div className="section-underline" />
      </div>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <Card key={project.id} project={project} />
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
          border-radius: 16px !important;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          background: var(--glass-bg);
          border: 1px solid var(--border-color);
          position: relative;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease;
        }

        .project-card:hover {
          transform: translateY(-6px);
          border-color: var(--accent-cyan);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
        }

        .card-image-wrap {
          height: 220px;
          position: relative;
          overflow: hidden;
          background: #0f1117;
          border-bottom: 1px solid var(--border-color);
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
          transform: scale(1.03);
        }

        .card-live-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(12, 13, 18, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 10.5px;
          font-family: var(--font-mono);
          color: #f3f4f6;
          font-weight: 600;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          z-index: 2;
        }

        .live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 6px #10b981;
        }

        .card-body {
          padding: 26px 24px;
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
          color: var(--accent-blue);
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .card-title {
          font-size: 1.45rem;
          font-weight: 600;
          font-family: var(--font-display);
          color: var(--text-primary);
          line-height: 1.2;
        }

        .card-desc {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .card-highlights {
          list-style: none;
          padding: 0;
          margin: 4px 0 8px 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .card-highlights li {
          font-size: 12px;
          line-height: 1.45;
          color: var(--text-secondary);
          position: relative;
          padding-left: 14px;
        }

        .card-highlights li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--accent-blue);
          font-weight: bold;
        }

        .card-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: auto;
          padding-top: 10px;
        }

        .tech-tag {
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 4px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-family: var(--font-mono);
        }

        .card-actions {
          display: flex;
          gap: 12px;
          padding-top: 18px;
          border-top: 1px solid var(--border-color);
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
          font-weight: 600;
          text-decoration: none;
          text-align: center;
          border-radius: 4px;
          cursor: pointer;
          position: relative;
          z-index: 6;
          transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
        }

        .card-btn:hover {
          transform: translateY(-2px);
        }

        .card-btn:active {
          transform: translateY(0);
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
