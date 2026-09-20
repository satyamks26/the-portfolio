import { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

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

import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate sending API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Trigger high-fidelity celebratory confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#000000', '#7d7d7d', '#c5a880'],
      });
    }, 1200);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="radial-glow" style={{ bottom: '10%', right: '5%' }} />

      <div className="section-header">
        <h2 className="section-title text-gradient">Get In Touch</h2>
        <div className="section-underline" />
      </div>

      <div className="contact-grid">
        {/* Left Column: Direct info details */}
        <div className="contact-info glass-panel">
          <h3>Let's build something epic</h3>
          <p>
            I am actively seeking full-time software engineering roles and internships — available immediately. If you are looking to hire a dedicated full-stack developer, want to discuss a project, or want to collaborate, feel free to reach out!
          </p>

          <div className="info-items">
            <div className="info-item">
              <Mail className="info-icon" size={18} />
              <div>
                <span>Email Me</span>
                <a href="mailto:kumarsatyamsks20@gmail.com" className="interactive">kumarsatyamsks20@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <Phone className="info-icon" size={18} />
              <div>
                <span>Direct Call</span>
                <a href="tel:+919798718521" className="interactive">+91-9798718521</a>
              </div>
            </div>

            <div className="info-item">
              <MapPin className="info-icon" size={18} />
              <div>
                <span>Location</span>
                <p>Jamshedpur, IN</p>
              </div>
            </div>
          </div>

          <div className="contact-socials-row">
            <a href="https://linkedin.com/in/kumarsatyam887" target="_blank" rel="noopener noreferrer" className="social-btn glass-panel interactive">
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/satyamks26" target="_blank" rel="noopener noreferrer" className="social-btn glass-panel interactive">
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Right Column: Dynamic Form */}
        <div className="contact-form-wrap glass-panel">
          {submitStatus === 'success' ? (
            <div className="form-success-state">
              <div className="success-icon-ring">
                <Send className="success-icon" size={28} />
              </div>
              <h3>Message Transmitted!</h3>
              <p>Thank you for reaching out. I'll review your transmission and get back to you shortly.</p>
              <button onClick={() => setSubmitStatus(null)} className="btn-secondary">
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="input-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="form-input"
                />
              </div>

              <div className="input-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="form-input"
                />
              </div>

              <div className="input-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Kumar, I checked your MERN stack code architecture..."
                  required
                  rows={5}
                  className="form-input form-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary form-submit-btn"
              >
                {isSubmitting ? 'Transmitting...' : 'Send Message'}
                <Send size={16} className="btn-send-icon" />
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .contact-section {
          align-items: center;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 40px;
          width: 100%;
          max-width: 1100px;
          margin-top: 20px;
        }

        .contact-info {
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .contact-info h3 {
          font-size: 1.8rem;
          color: var(--text-primary);
        }

        .contact-info p {
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 10px;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .info-icon {
          color: var(--accent-cyan);
          padding: 10px;
          border-radius: 12px;
          background: rgba(0, 242, 254, 0.05);
          border: 1px solid rgba(0, 242, 254, 0.1);
        }

        .info-item span {
          display: block;
          font-size: 11px;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.5px;
        }

        .info-item a, .info-item p {
          font-size: 15px;
          color: var(--text-primary);
          font-weight: 500;
        }

        .info-item a:hover {
          color: var(--accent-cyan);
        }

        .contact-socials-row {
          display: flex;
          gap: 16px;
          margin-top: 20px;
        }

        .social-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          border-radius: 12px !important;
          color: var(--text-secondary);
          font-size: 14px;
          font-weight: 500;
          transition: border-color var(--transition-fast), color var(--transition-fast);
        }

        .social-btn:hover {
          color: var(--accent-cyan);
          border-color: rgba(0, 242, 254, 0.2);
        }

        /* Form styling */
        .contact-form-wrap {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          text-align: left;
        }

        .input-group label {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .form-input {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 14px 18px;
          color: var(--text-primary);
          font-size: 14.5px;
          transition: border-color var(--transition-normal), box-shadow var(--transition-normal);
        }

        .form-input::placeholder {
          color: var(--text-muted);
        }

        .form-input:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 10px rgba(0, 242, 254, 0.15);
          background: rgba(255, 255, 255, 0.04);
        }

        .form-textarea {
          resize: none;
        }

        .form-submit-btn {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          font-size: 15px;
        }

        .btn-send-icon {
          transition: transform var(--transition-fast);
        }

        .form-submit-btn:hover .btn-send-icon {
          transform: translate(3px, -2px);
        }

        /* Success State */
        .form-success-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 20px;
          padding: 20px 0;
        }

        .success-icon-ring {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(0, 242, 254, 0.05);
          border: 2px solid var(--accent-cyan);
          box-shadow: var(--glow-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: scaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .success-icon {
          color: var(--accent-cyan);
          transform: rotate(-15deg);
        }

        @keyframes scaleIn {
          from { transform: scale(0); }
          to { transform: scale(1); }
        }

        .form-success-state h3 {
          font-size: 1.8rem;
          font-weight: 800;
        }

        .form-success-state p {
          max-width: 320px;
          font-size: 14.5px;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .contact-info, .contact-form-wrap {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
