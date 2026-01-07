import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './styles/Home.css';function Home() {
return (
<main className="home-main">
{/* Hero Section */}
<section className="hero">
<div className="hero-content">
<h1 className="hero-title">
Understand Your Pet's Emotions with <span className="highlight">AI</span>
</h1>      <p className="hero-subtitle">
        Petify analyzes your dog's or cat's face using advanced AI to detect mood 
        and emotional state within seconds. Upload a photo and discover what your pet is feeling.
      </p>      <Link to="/detect" className="cta-button">
        <span className="cta-icon">🐾</span>
        Try It Now — Upload a Photo
        <span className="cta-arrow">→</span>
      </Link>
    </div>    <div className="hero-decoration">
      <div className="floating-emoji emoji-1">🐶</div>
      <div className="floating-emoji emoji-2">🐱</div>
      <div className="floating-emoji emoji-3">❤️</div>
    </div>
  </section>  {/* Features Section */}
  <section className="features">
    <div className="feature-card">
      <div className="feature-icon">⚡</div>
      <h3 className="feature-title">Instant Analysis</h3>
      <p className="feature-description">
        Get mood detection results in seconds using cutting-edge AI technology
      </p>
    </div>    <div className="feature-card">
      <div className="feature-icon">🤖</div>
      <h3 className="feature-title">AWS-Powered AI</h3>
      <p className="feature-description">
        Built on Amazon Rekognition for enterprise-grade accuracy and reliability
      </p>
    </div>    <div className="feature-card">
      <div className="feature-icon">🔒</div>
      <h3 className="feature-title">Privacy First</h3>
      <p className="feature-description">
        Your images are processed instantly and never stored on our servers
      </p>
    </div>
  </section>  {/* Examples Preview */}
  <section className="examples-section">
    <h2 className="section-title">See It in Action</h2>
    <p className="section-subtitle">Real pet mood detection examples</p>    <div className="preview-grid">
      <div className="preview-card">
        <img
          src="https://images.unsplash.com/photo-1543466835-00a7907e9de1"
          alt="Happy dog"
          className="preview-image"
        />
        <div className="preview-label">
          <span className="label-emoji">😊</span>
          <span className="label-text">Happy</span>
        </div>
      </div>      <div className="preview-card">
        <img
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba"
          alt="Relaxed cat"
          className="preview-image"
        />
        <div className="preview-label">
          <span className="label-emoji">😌</span>
          <span className="label-text">Relaxed</span>
        </div>
      </div>      <div className="preview-card">
        <img
          src="https://images.unsplash.com/photo-1560743641-3914f2c45636"
          alt="Playful puppy"
          className="preview-image"
        />
        <div className="preview-label">
          <span className="label-emoji">😄</span>
          <span className="label-text">Playful</span>
        </div>
      </div>
    </div>
  </section>
</main>
);
}export default Home;