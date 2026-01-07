import React from 'react';
import '../App.css';
import './styles/About.css';

function About() {
  return (
    <main className="about-main">
      <div className="about-container">
        <header className="about-header">
          <div className="about-icon">🐾</div>
          <h1 className="about-title">About Petify</h1>
          <p className="about-subtitle">
            Using advanced AI technology to help pet owners understand their pet's emotions with clarity and precision
          </p>
        </header>

        <section className="about-section">
          <div className="section-header">
            <span className="section-icon">🔬</span>
            <h2 className="section-title">How It Works</h2>
          </div>
          <div className="info-cards">
            <div className="info-card">
              <div className="info-card-number">1</div>
              <div className="info-card-icon">📸</div>
              <h3 className="info-card-title">Upload Photo</h3>
              <p className="info-card-text">
                Choose a clear, well-lit photo of your pet showing their face and body language
              </p>
            </div>
            <div className="info-card">
              <div className="info-card-number">2</div>
              <div className="info-card-icon">🤖</div>
              <h3 className="info-card-title">AI Analysis</h3>
              <p className="info-card-text">
                Our AI examines facial expressions, posture, and behavioral patterns in real-time
              </p>
            </div>
            <div className="info-card">
              <div className="info-card-number">3</div>
              <div className="info-card-icon">✨</div>
              <h3 className="info-card-title">Get Results</h3>
              <p className="info-card-text">
                Receive instant mood prediction with detailed confidence scores and insights
              </p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="section-header">
            <span className="section-icon">💻</span>
            <h2 className="section-title">Technology Stack</h2>
          </div>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-card-icon">⚛️</div>
              <h3 className="tech-card-title">Frontend</h3>
              <p className="tech-card-desc">React + React Router</p>
              <div className="tech-card-badge">Modern UI</div>
            </div>
            <div className="tech-card">
              <div className="tech-card-icon">⚡</div>
              <h3 className="tech-card-title">Backend</h3>
              <p className="tech-card-desc">AWS Lambda + API Gateway</p>
              <div className="tech-card-badge">Serverless</div>
            </div>
            <div className="tech-card">
              <div className="tech-card-icon">🧠</div>
              <h3 className="tech-card-title">AI Engine</h3>
              <p className="tech-card-desc">Amazon Rekognition</p>
              <div className="tech-card-badge">Custom Labels</div>
            </div>
            <div className="tech-card">
              <div className="tech-card-icon">💾</div>
              <h3 className="tech-card-title">Storage</h3>
              <p className="tech-card-desc">S3 + DynamoDB</p>
              <div className="tech-card-badge">Cloud Native</div>
            </div>
            <div className="tech-card">
              <div className="tech-card-icon">🚀</div>
              <h3 className="tech-card-title">Hosting</h3>
              <p className="tech-card-desc">AWS Amplify</p>
              <div className="tech-card-badge">Auto Scale</div>
            </div>
            <div className="tech-card">
              <div className="tech-card-icon">🔒</div>
              <h3 className="tech-card-title">Security</h3>
              <p className="tech-card-desc">IAM + Encryption</p>
              <div className="tech-card-badge">Enterprise</div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="section-header">
            <span className="section-icon">🎯</span>
            <h2 className="section-title">Key Features</h2>
          </div>
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <div className="feature-content">
                <h4 className="feature-title">Instant Analysis</h4>
                <p className="feature-text">Get results in seconds with real-time AI processing</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎨</div>
              <div className="feature-content">
                <h4 className="feature-title">Beautiful Interface</h4>
                <p className="feature-text">Modern, intuitive design that works on any device</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <div className="feature-content">
                <h4 className="feature-title">Detailed Insights</h4>
                <p className="feature-text">Confidence scores and multiple mood detections</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌍</div>
              <div className="feature-content">
                <h4 className="feature-title">Always Available</h4>
                <p className="feature-text">Cloud-based service accessible 24/7 from anywhere</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section privacy-section">
          <div className="privacy-card">
            <div className="privacy-header">
              <span className="privacy-icon">🔒</span>
              <h2 className="privacy-title">Privacy First Approach</h2>
            </div>
            <div className="privacy-content">
              <p className="privacy-text">
                Your pet's privacy matters to us. All uploaded photos are processed instantly using secure AWS infrastructure and <strong>are never stored, shared, or used for training</strong>. 
              </p>
              <p className="privacy-text">
                Once analysis is complete, images are immediately discarded. We use industry-standard encryption and follow AWS best practices to ensure your data remains completely private and secure.
              </p>
              <div className="privacy-badges">
                <div className="privacy-badge">
                  <span>🔐</span>
                  <span>End-to-End Encrypted</span>
                </div>
                <div className="privacy-badge">
                  <span>🗑️</span>
                  <span>Auto-Delete</span>
                </div>
                <div className="privacy-badge">
                  <span>✅</span>
                  <span>GDPR Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="about-footer">
          <div className="footer-divider"></div>
          <div className="footer-content">
            <p className="footer-text">
              <span className="footer-heart">❤️</span>
              Made with passion for pet lovers everywhere
            </p>
            <p className="footer-subtext">
              Helping you understand your furry friends better, one photo at a time
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default About;