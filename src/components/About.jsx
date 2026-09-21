import { motion } from 'framer-motion';
import { Database, Server, Cpu, Layers, Sparkles, ShieldCheck } from 'lucide-react';

export default function About() {
  const skillCategories = [
    {
      title: 'Frontend & Responsive UI',
      icon: <Layers size={22} className="cat-icon icon-purple" />,
      colorTheme: 'blue',
      studColor: 'blue',
      brickCode: 'FRONTEND · 2x4 BLUE BRICK',
      skills: ['React.js', 'HTML5 & CSS3', 'Tailwind CSS', 'Responsive UI Design', 'JavaScript (ES6+)'],
    },
    {
      title: 'Backend & System Architecture',
      icon: <Server size={22} className="cat-icon icon-cyan" />,
      colorTheme: 'red',
      studColor: 'red',
      brickCode: 'BACKEND · 2x4 RED BRICK',
      skills: ['Node.js', 'Express.js', 'RESTful API Design', 'Socket.io', 'Event-Driven Architecture'],
    },
    {
      title: 'AI Integration & Pipelines',
      icon: <Sparkles size={22} className="cat-icon icon-pink" />,
      colorTheme: 'yellow',
      studColor: 'yellow',
      brickCode: 'AI PIPELINES · 2x4 YELLOW BRICK',
      skills: ['Google Gemini Vision API', 'OpenAI API', 'Structured Prompt Pipelines', 'JSON Response Parsing'],
    },
    {
      title: 'Database & Auth Security',
      icon: <ShieldCheck size={22} className="cat-icon icon-blue" />,
      colorTheme: 'green',
      studColor: 'green',
      brickCode: 'DATABASE · 2x4 GREEN BRICK',
      skills: ['MongoDB & Mongoose', 'Schema Design & Query Optimization', 'JWT Authentication', 'RBAC (Role-Based Access)'],
    },
    {
      title: 'Tools, DevOps & Fundamentals',
      icon: <Cpu size={22} className="cat-icon icon-cyan" />,
      colorTheme: 'orange',
      studColor: 'orange',
      brickCode: 'DEVOPS · 2x4 ORANGE BRICK',
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
          <div className="lego-studs-strip">
            <span className="lego-stud-pill red" />
            <span className="lego-stud-pill yellow" />
            <span className="lego-stud-pill blue" />
            <span className="lego-stud-pill green" />
            <span className="lego-set-code">BUILDER BIO</span>
          </div>

          <div className="bio-inner-content">
            <h3>Full-Stack MERN & AI Solutions</h3>
            <p>
              I am a Full-Stack MERN Developer who independently designs, builds, and ships production web applications that solve real-world problems. My experience spans the entire software engineering lifecycle — from designing normalized MongoDB schemas and building secure RESTful APIs to deploying responsive React frontends.
            </p>
            <p>
              I specialize in integrating AI APIs (Google Gemini Vision and OpenAI) with structured prompt engineering and JSON response validation, securing multi-tenant applications with JWT and Role-Based Access Control (RBAC), and orchestrating real-time event systems with Socket.io.
            </p>
            <div className="bio-stats">
              <div className="stat-item">
                <span className="stat-num stat-yellow">3</span>
                <span className="stat-label">Shipped Sets</span>
              </div>
              <div className="stat-item">
                <span className="stat-num stat-red">~50%</span>
                <span className="stat-label">Prep Time Saved</span>
              </div>
              <div className="stat-item">
                <span className="stat-num stat-green">0</span>
                <span className="stat-label">Downtime</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Cards */}
        <div className="about-skills">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              className={`skill-card glass-panel brick-theme-${cat.colorTheme}`}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <div className="lego-studs-strip">
                <span className={`lego-stud-pill ${cat.studColor}`} />
                <span className={`lego-stud-pill ${cat.studColor}`} />
                <span className={`lego-stud-pill ${cat.studColor}`} />
                <span className={`lego-stud-pill ${cat.studColor}`} />
                <span className="lego-set-code">{cat.brickCode}</span>
              </div>
              <div className="skill-card-body">
                <div className="skill-card-header">
                  {cat.icon}
                  <h4>{cat.title}</h4>
                </div>
                <div className="skills-list">
                  {cat.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-chip lego-skill-brick">
                      <span className="chip-stud" />
                      {skill}
                    </span>
                  ))}
                </div>
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
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: fit-content;
        }

        .bio-inner-content {
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .about-bio h3 {
          font-size: 1.8rem;
          color: #ffffff;
          font-weight: 800;
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
          margin-top: 14px;
          border-top: 2px solid rgba(0, 0, 0, 0.4);
          padding-top: 22px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .stat-num {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 900;
        }

        .stat-num.stat-yellow { color: var(--lego-yellow); text-shadow: 0 2px 0 var(--lego-yellow-shadow); }
        .stat-num.stat-red { color: var(--lego-red); text-shadow: 0 2px 0 var(--lego-red-shadow); }
        .stat-num.stat-green { color: var(--lego-green); text-shadow: 0 2px 0 var(--lego-green-shadow); }

        .stat-label {
          font-size: 11px;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.8px;
          font-weight: 700;
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
          padding: 0;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .skill-card-body {
          padding: 22px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .skill-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .skill-card-header h4 {
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
        }

        .cat-icon {
          padding: 8px;
          border-radius: 8px;
          background: #252a36;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 2px 0 #101217;
        }
        
        .icon-cyan { color: var(--lego-blue); }
        .icon-blue { color: var(--lego-green); }
        .icon-purple { color: var(--lego-red); }
        .icon-pink { color: var(--lego-yellow); }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .lego-skill-brick {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: #252a36;
          border: 1.5px solid rgba(255, 255, 255, 0.12);
          border-radius: 6px;
          font-size: 12.5px;
          font-family: var(--font-mono);
          color: #f8fafc;
          font-weight: 700;
          box-shadow: 0 3px 0 #101217;
          transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
        }

        .lego-skill-brick:hover {
          color: #ffffff;
          border-color: var(--lego-yellow);
          transform: translateY(-2px);
          box-shadow: 0 5px 0 #101217;
        }

        .chip-stud {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--lego-yellow);
          box-shadow: 0 0 5px var(--lego-yellow);
        }
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
