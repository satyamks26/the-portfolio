import { motion } from 'framer-motion';
import { Database, Server, Cpu, Layers, Sparkles, ShieldCheck } from 'lucide-react';

export default function About() {
  const skillCategories = [
    {
      title: 'Frontend & Responsive UI',
      icon: <Layers size={22} className="cat-icon icon-purple" />,
      skills: ['React.js', 'HTML5 & CSS3', 'Tailwind CSS', 'Responsive UI Design', 'JavaScript (ES6+)'],
    },
    {
      title: 'Backend & System Architecture',
      icon: <Server size={22} className="cat-icon icon-cyan" />,
      skills: ['Node.js', 'Express.js', 'RESTful API Design', 'Socket.io', 'Event-Driven Architecture'],
    },
    {
      title: 'AI Integration & Pipelines',
      icon: <Sparkles size={22} className="cat-icon icon-pink" />,
      skills: ['Google Gemini Vision API', 'OpenAI API', 'Structured Prompt Pipelines', 'JSON Response Parsing'],
    },
    {
      title: 'Database & Auth Security',
      icon: <ShieldCheck size={22} className="cat-icon icon-blue" />,
      skills: ['MongoDB & Mongoose', 'Schema Design & Query Optimization', 'JWT Authentication', 'RBAC (Role-Based Access)'],
    },
    {
      title: 'Tools, DevOps & Fundamentals',
      icon: <Cpu size={22} className="cat-icon icon-cyan" />,
      skills: ['Git & GitHub Branching', 'Postman API', 'Vercel & Netlify Deployment', 'Cloudinary Media Storage', 'Data Structures & Algorithms'],
    },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="radial-glow" style={{ top: '30%', right: '10%' }} />

      <div className="section-header">
        <h2 className="section-title text-gradient">About Me</h2>
        <div className="section-underline" />
      </div>

      <div className="about-grid">
        {/* Bio Card */}
        <div className="about-bio glass-panel">
          <h3>Full-Stack MERN & AI Solutions</h3>
          <p>
            I am a Full-Stack MERN Developer who independently designs, builds, and ships production web applications that solve real-world problems. My experience spans the entire software engineering lifecycle — from designing normalized MongoDB schemas and building secure RESTful APIs to deploying responsive React frontends.
          </p>
          <p>
            I specialize in integrating AI APIs (Google Gemini Vision and OpenAI) with structured prompt engineering and JSON response validation, securing multi-tenant applications with JWT and Role-Based Access Control (RBAC), and orchestrating real-time event systems with Socket.io.
          </p>
          <div className="bio-stats">
            <div className="stat-item">
              <span className="stat-num text-gradient">3</span>
              <span className="stat-label">Shipped Apps</span>
            </div>
            <div className="stat-item">
              <span className="stat-num text-gradient">~50%</span>
              <span className="stat-label">Prep Time Saved</span>
            </div>
            <div className="stat-item">
              <span className="stat-num text-gradient">0</span>
              <span className="stat-label">Downtime</span>
            </div>
          </div>
        </div>

        {/* Skills Cards */}
        <div className="about-skills">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              className="skill-card glass-panel"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <div className="skill-card-header">
                {cat.icon}
                <h4>{cat.title}</h4>
              </div>
              <div className="skills-list">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-chip">
                    <span className="chip-dot" />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .about-section {
          align-items: center;
        }

        .section-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 60px;
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
          box-shadow: var(--glow-cyan);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 1.9fr;
          gap: 40px;
          width: 100%;
          max-width: 1200px;
        }

        .about-bio {
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          height: fit-content;
        }

        .about-bio h3 {
          font-size: 1.8rem;
          color: var(--text-primary);
        }

        .about-bio p {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .bio-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 20px;
          border-top: 1px solid var(--border-color);
          padding-top: 24px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .stat-num {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 800;
        }

        .stat-label {
          font-size: 11px;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 1px;
          margin-top: 4px;
        }

        .about-skills {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .skill-card:last-child {
          grid-column: span 2;
        }

        .skill-card {
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .skill-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .skill-card-header h4 {
          font-size: 1.15rem;
          font-weight: 600;
        }

        .cat-icon {
          padding: 8px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .icon-cyan { color: var(--accent-cyan); }
        .icon-blue { color: var(--accent-blue); }
        .icon-purple { color: var(--accent-purple); }
        .icon-pink { color: var(--accent-violet); }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .skill-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          font-size: 13px;
          font-family: var(--font-mono);
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .skill-card:hover .skill-chip {
          border-color: rgba(255, 255, 255, 0.1);
        }

        .skill-chip:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--accent-cyan);
          transform: scale(1.03);
        }

        .chip-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: var(--glow-cyan);
        }

        .skill-chip:nth-child(even) .chip-dot {
          background: var(--accent-blue);
          box-shadow: var(--glow-blue);
        }

        .skill-chip:nth-child(3n) .chip-dot {
          background: var(--accent-purple);
          box-shadow: var(--glow-purple);
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 580px) {
          .about-skills {
            grid-template-columns: 1fr;
          }
          .skill-card:last-child {
            grid-column: span 1;
          }
          .about-bio {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
