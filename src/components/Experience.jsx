import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const history = [
    {
      role: 'Independent Software Developer | Product Builder',
      company: 'Sole Developer · 3 Production Applications Shipped',
      period: 'Jan 2026 – Present',
      icon: <Briefcase size={18} />,
      color: 'var(--lego-yellow)',
      description: 'Independently designed, built, and deployed 3 full-stack MERN applications end-to-end — handling everything from database schema design and REST API architecture to responsive React UIs and cloud deployments on Vercel and Netlify.',
      details: [
        'Integrated two AI APIs (Google Gemini Vision, OpenAI) across projects — building structured prompt pipelines, parsing JSON responses, and wiring outputs into live product features.',
        'Enforced security across all applications with JWT-based authentication, protected API routes, and role-based access control (RBAC) to ensure strict user data isolation.',
        'Maintained clean deployment workflows using Git branching, structured commits, and CI-ready practices across every project with zero downtime across all production environments.'
      ]
    },
    {
      role: 'Diploma in Computer Science (Certificate)',
      company: 'Aptech Learning',
      period: '2020 – 2021',
      icon: <GraduationCap size={18} />,
      color: 'var(--lego-blue)',
      description: 'Professional diploma program covering software development principles, core computer science concepts, database management, and programming foundations.',
      details: [
        'Studied computer science fundamentals, structured database modeling, query optimization, and application architecture.',
        'Mastered core problem-solving techniques using data structures, algorithms, and modern programming practices.'
      ]
    },
    {
      role: 'Bachelor of Arts — English Language & Literature',
      company: 'Kolhan University, Chaibasa',
      period: '2019',
      icon: <GraduationCap size={18} />,
      color: 'var(--lego-red)',
      description: 'Academic background cultivating deep analytical thinking, logical structured problem solving, and effective cross-functional technical communication.',
      details: [
        'Fostered advanced analytical synthesis and clear technical communication skills essential for architectural documentation and team collaboration.',
        'Applied disciplined analytical reading and problem decomposition methodologies to software system design and complex debugging.'
      ]
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="radial-glow" style={{ bottom: '10%', left: '5%' }} />

      <div className="section-header">
        <h2 className="section-title text-gradient">Development Path</h2>
        <div className="section-underline" />
      </div>

      <div className="timeline-container">
        {/* The glowing vertical bar line */}
        <div className="timeline-line" />

        <div className="timeline-items">
          {history.map((item, idx) => (
            <motion.div
              key={idx}
              className="timeline-item"
              initial={{ x: idx % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
            >
              {/* Timeline Dot/Icon as LEGO Round Stud */}
              <div 
                className="timeline-dot lego-stud-marker" 
                style={{ 
                  backgroundColor: item.color,
                  boxShadow: `0 4px 0 #000000, 0 6px 16px ${item.color}60`
                }}
              >
                {item.icon}
              </div>

              {/* Timeline Box as 3D LEGO Brick */}
              <div className={`timeline-card glass-panel lego-brick-card ${idx === 0 ? 'brick-yellow' : idx === 1 ? 'brick-blue' : 'brick-red'}`}>
                <div className="lego-studs-top-row">
                  <span className={`lego-brick-stud ${idx === 0 ? 'yellow' : idx === 1 ? 'blue' : 'red'}`} />
                  <span className={`lego-brick-stud ${idx === 0 ? 'yellow' : idx === 1 ? 'blue' : 'red'}`} />
                  <span className={`lego-brick-stud ${idx === 0 ? 'yellow' : idx === 1 ? 'blue' : 'red'}`} />
                  <span className={`lego-brick-stud ${idx === 0 ? 'yellow' : idx === 1 ? 'blue' : 'red'}`} />
                </div>

                <div className="lego-studs-strip">
                  <span className="lego-stud-pill yellow" />
                  <span className="lego-stud-pill red" />
                  <span className="lego-stud-pill blue" />
                  <span className="lego-set-code">{item.period}</span>
                </div>

                <div className="timeline-card-inner">
                  <div className="card-header">
                    <div>
                      <h3 className="role-title">{item.role}</h3>
                      <span className="company-name">{item.company}</span>
                    </div>
                    <span className="period-badge">
                      <Calendar size={12} className="cal-icon" />
                      {item.period}
                    </span>
                  </div>
                  <p className="card-description">{item.description}</p>
                  <ul className="card-details">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          align-items: center;
        }

        .timeline-container {
          position: relative;
          width: 100%;
          max-width: 900px;
          margin-top: 20px;
          padding: 20px 0;
        }

        /* The timeline vertical center line */
        .timeline-line {
          position: absolute;
          left: 31px;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, 
            var(--lego-yellow) 0%, 
            var(--lego-blue) 50%, 
            var(--lego-red) 100%
          );
          border-radius: 2px;
          opacity: 0.6;
        }

        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 50px;
        }

        .timeline-item {
          position: relative;
          padding-left: 80px; /* Space for the timeline node */
        }

        .lego-stud-marker {
          position: absolute;
          left: 12px;
          top: 18px;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          border: 2px solid rgba(255, 255, 255, 0.4);
          z-index: 5;
        }

        .timeline-card {
          padding: 0;
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .timeline-card:hover {
          transform: translateY(-4px);
        }

        .timeline-card-inner {
          padding: 26px 30px;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 16px;
          border-bottom: 2px solid rgba(0, 0, 0, 0.35);
          padding-bottom: 16px;
        }

        .role-title {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          text-shadow: 0 2px 0 #000000;
        }

        .company-name {
          font-size: 13px;
          color: var(--lego-yellow);
          font-family: var(--font-mono);
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .period-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: #141720;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-top: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 6px;
          font-family: var(--font-mono);
          font-size: 11.5px;
          font-weight: 700;
          color: var(--lego-yellow);
          box-shadow: 0 3px 0 #090a0d;
          white-space: nowrap;
        }

        .cal-icon {
          color: var(--lego-yellow);
        }

        .card-description {
          font-size: 14.5px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }

        .card-details {
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: var(--text-secondary);
          font-size: 13.5px;
        }

        .card-details li::marker {
          color: var(--lego-yellow);
        }

        @media (max-width: 768px) {
          .card-header {
            flex-direction: column;
            gap: 8px;
          }
          .period-badge {
            align-self: flex-start;
          }
          .timeline-card {
            padding: 20px;
          }
          .timeline-line {
            left: 21px;
          }
          .timeline-dot {
            left: 2px;
            width: 36px;
            height: 36px;
          }
          .timeline-item {
            padding-left: 55px;
          }
        }
      `}</style>
    </section>
  );
}
