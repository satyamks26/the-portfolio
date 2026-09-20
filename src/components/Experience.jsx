import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const history = [
    {
      role: 'Independent Software Developer | Product Builder',
      company: 'Sole Developer · 3 Production Applications Shipped',
      period: 'Jan 2026 – Present',
      icon: <Briefcase size={18} />,
      color: 'var(--accent-cyan)',
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
      color: 'var(--accent-blue)',
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
      color: 'var(--accent-purple)',
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
              {/* Timeline Dot/Icon */}
              <div 
                className="timeline-dot glass-panel" 
                style={{ 
                  color: item.color,
                  borderColor: item.color,
                  boxShadow: `0 0 10px ${item.color}40`
                }}
              >
                {item.icon}
              </div>

              {/* Timeline Box */}
              <div className="timeline-card glass-panel">
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
          width: 2px;
          background: linear-gradient(180deg, 
            var(--accent-cyan) 0%, 
            var(--accent-blue) 50%, 
            var(--accent-purple) 100%
          );
          opacity: 0.3;
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

        .timeline-dot {
          position: absolute;
          left: 12px;
          top: 18px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-secondary);
          border: 1px solid;
          z-index: 5;
        }

        .timeline-card {
          padding: 32px;
          transition: border-color var(--transition-normal), box-shadow var(--transition-normal);
        }

        .timeline-card:hover {
          border-color: rgba(255, 255, 255, 0.1);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 16px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 16px;
        }

        .role-title {
          font-size: 1.35rem;
          font-weight: 700;
        }

        .company-name {
          font-size: 14px;
          color: var(--accent-cyan);
          font-family: var(--font-mono);
        }

        .period-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          font-size: 12px;
          color: var(--text-secondary);
          font-family: var(--font-mono);
          white-space: nowrap;
        }

        .cal-icon {
          color: var(--text-muted);
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
          color: var(--accent-cyan);
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
