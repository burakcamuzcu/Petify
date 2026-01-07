import React from 'react';
import './styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-emoji">🐾</span>
              <span className="footer-logo-text">Petify</span>
            </div>
            <p className="footer-tagline">
              Understanding your pet's emotions through AI
            </p>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-info">
            <p className="footer-built">
              Built with <span className="heart">❤️</span> using <strong>AWS Cloud</strong>
            </p>
            <div className="footer-tech-grid">
              <span className="tech-badge">S3</span>
              <span className="tech-badge">Lambda</span>
              <span className="tech-badge">Rekognition</span>
              <span className="tech-badge">DynamoDB</span>
              <span className="tech-badge">API Gateway</span>
              <span className="tech-badge">Amplify</span>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © {currentYear} Petify. All rights reserved.
            </p>
            <div className="footer-links">
              <span className="footer-link-item">Privacy Policy</span>
              <span className="footer-separator">•</span>
              <span className="footer-link-item">Terms of Service</span>
              <span className="footer-separator">•</span>
              <span className="footer-link-item">Contact</span>
            </div>
          </div>
        </div>

        <div className="footer-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="url(#wave-gradient)" />
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0.1)" />
                <stop offset="50%" stopColor="rgba(99, 102, 241, 0.1)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </footer>
  );
}

export default Footer;