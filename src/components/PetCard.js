import React from "react";
import "./styles/PetCard.css";

function PetCard({ mood, confidence, img, alt }) {
  const getMoodEmoji = (mood) => {
    const emojis = {
      happy: "😊",
      relaxed: "😌",
      playful: "😄",
      curious: "🤔",
      sad: "😢",
      angry: "😠",
      scared: "😨",
      sleepy: "😴"
    };
    return emojis[mood?.toLowerCase()] || "🐾";
  };

  const getMoodColor = (mood) => {
    const colors = {
      happy: "#10b981",
      relaxed: "#8b5cf6",
      playful: "#f59e0b",
      curious: "#3b82f6",
      sad: "#6366f1",
      angry: "#ef4444",
      scared: "#6b7280",
      sleepy: "#a855f7"
    };
    return colors[mood?.toLowerCase()] || "#6b7280";
  };

  const getMoodGradient = (mood) => {
    const gradients = {
      happy: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      relaxed: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
      playful: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
      curious: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
      sad: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
      angry: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
      scared: "linear-gradient(135deg, #6b7280 0%, #4b5563 100%)",
      sleepy: "linear-gradient(135deg, #a855f7 0%, #9333ea 100%)"
    };
    return gradients[mood?.toLowerCase()] || "linear-gradient(135deg, #6b7280 0%, #4b5563 100%)";
  };

  const capitalizedMood = mood ? mood.charAt(0).toUpperCase() + mood.slice(1) : "Unknown";

  return (
    <div className="pet-card">
      <div className="pet-card-image-wrapper">
        <img 
          src={img} 
          alt={alt || `Pet showing ${mood} mood`} 
          loading="lazy" 
          className="pet-card-image" 
        />
        <div className="pet-card-image-overlay"></div>
      </div>

      <div className="pet-card-overlay">
        <div className="pet-card-content">
          <div 
            className="pet-card-badge"
            style={{ 
              background: getMoodGradient(mood),
              boxShadow: `0 8px 30px ${getMoodColor(mood)}60`
            }}
          >
            <span className="pet-card-emoji">{getMoodEmoji(mood)}</span>
            <span className="pet-card-badge-text">{capitalizedMood}</span>
          </div>

          <h3 className="pet-card-title">{capitalizedMood} Mood</h3>

          <div className="pet-card-confidence">
            <div className="confidence-label">
              <span className="confidence-label-text">Confidence</span>
              <span 
                className="confidence-percentage"
                style={{ color: getMoodColor(mood) }}
              >
                {confidence}%
              </span>
            </div>
            <div className="confidence-bar">
              <div 
                className="confidence-fill" 
                style={{ 
                  width: `${confidence}%`,
                  background: getMoodGradient(mood),
                  boxShadow: `0 0 15px ${getMoodColor(mood)}80`
                }}
              />
            </div>
          </div>

          <div className="pet-card-stats">
            <div className="stat-item">
              <span className="stat-icon">🎯</span>
              <span className="stat-value">{confidence}%</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-icon">✨</span>
              <span className="stat-label">AI Analyzed</span>
            </div>
          </div>
        </div>
      </div>

      <div 
        className="pet-card-glow"
        style={{ 
          background: `radial-gradient(circle at center, ${getMoodColor(mood)}40 0%, transparent 70%)`
        }}
      ></div>
    </div>
  );
}

export default PetCard;