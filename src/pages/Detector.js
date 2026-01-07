import React, { useState } from 'react';
import '../App.css';
import './styles/Detector.css';

const API_ENDPOINT = 'https://tq02egfd0c.execute-api.us-east-1.amazonaws.com/prod/detect';

function Detector() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file');
      return;
    }

    setSelectedImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
    setError(null);
  };

  const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = () => reject(new Error('Failed to load image file'));
      reader.readAsDataURL(file);
    });
  };

  const handleAnalyze = async () => {
    if (!selectedImage) {
      setError('Please select an image first');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const base64Image = await readFileAsBase64(selectedImage);

      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: base64Image })
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || 'Analysis failed');
      }

      const data = await response.json();
      setResult(data);

    } catch (err) {
      setError(err.message || 'Unexpected error occurred');

    } finally {
      setLoading(false);
    }
  };

  const getEmoji = (mood) => {
    const emojis = {
      happy: '😊',
      relaxed: '😌',
      sad: '😢',
      angry: '😠',
      playful: '😄',
      curious: '🤔',
      scared: '😨',
      sleepy: '😴'
    };
    return emojis[mood?.toLowerCase()] || '🐾';
  };

  const getMoodColor = (mood) => {
    const colors = {
      happy: '#10b981',
      relaxed: '#8b5cf6',
      sad: '#6366f1',
      angry: '#ef4444',
      playful: '#f59e0b',
      curious: '#3b82f6',
      scared: '#6b7280',
      sleepy: '#a855f7'
    };
    return colors[mood?.toLowerCase()] || '#6b7280';
  };

  const handleReset = () => {
    setSelectedImage(null);
    setPreview(null);
    setResult(null);
    setError(null);
  };

  return (
    <main className="detector-main">
      <div className="detector-container">
        <header className="detector-header">
          <h1 className="detector-title">🔍 Pet Mood Detector</h1>
          <p className="detector-subtitle">
            Upload a photo of your pet and let AI analyze their emotional state instantly
          </p>
        </header>

        {/* Upload Section */}
        {!preview && (
          <div className="upload-section">
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="file-input"
            />
            
            <label htmlFor="file-input" className="upload-card">
              <div className="upload-icon">📸</div>
              <h3>Choose a Photo</h3>
              <p>Select a clear image of your pet's face for best results</p>
              <div className="upload-button">
                <span className="upload-button-icon">📁</span>
                Browse Files
              </div>
            </label>
          </div>
        )}

        {/* Preview Section */}
        {preview && !result && !loading && (
          <div className="preview-section">
            <div className="preview-card">
              <img
                src={preview}
                alt="Pet preview"
                className="preview-image"
              />
            </div>

            <div className="action-buttons">
              <button
                className="btn btn-primary"
                onClick={handleAnalyze}
                disabled={loading}
              >
                <span className="btn-icon-inline">🔬</span>
                Analyze Mood
              </button>

              <button className="btn btn-secondary" onClick={handleReset}>
                <span className="btn-icon-inline">🔄</span>
                Choose Another
              </button>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="loading-section">
            <div className="loading-spinner-wrapper">
              <div className="loading-spinner"></div>
            </div>
            <h3 className="loading-text">Analyzing Your Pet's Mood...</h3>
            <p className="loading-subtext">Our AI is examining facial expressions and body language</p>
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="error-card">
            <div className="error-icon">⚠️</div>
            <h3 className="error-title">Oops! Something Went Wrong</h3>
            <p className="error-message">{error}</p>
            <button className="btn btn-primary" onClick={handleReset}>
              <span className="btn-icon-inline">🔄</span>
              Try Again
            </button>
          </div>
        )}

        {/* Result Section */}
        {result && !loading && (
          <div className="result-section">
            <div className="result-header">
              <h2 className="result-title">✨ Analysis Complete!</h2>
              <button className="btn-icon" onClick={handleReset} title="New analysis">
                <span>🆕</span>
              </button>
            </div>

            <div className="result-card-main">
              <div className="result-image-wrapper">
                <img src={preview} alt="Analyzed pet" className="result-image" />
                <div className="result-image-overlay"></div>
              </div>

              <div className="result-content">
                <div 
                  className="mood-badge"
                  style={{ 
                    background: `linear-gradient(135deg, ${getMoodColor(result.mood)}dd 0%, ${getMoodColor(result.mood)}99 100%)`,
                    boxShadow: `0 10px 40px ${getMoodColor(result.mood)}40`
                  }}
                >
                  <span className="mood-emoji-large">{getEmoji(result.mood)}</span>
                  <div className="mood-info">
                    <h3 className="mood-title">
                      {result.mood.charAt(0).toUpperCase() + result.mood.slice(1)}
                    </h3>
                    <p className="mood-confidence">
                      {Math.round(result.confidence)}% confidence
                    </p>
                  </div>
                </div>

                <div className="confidence-breakdown">
                  <div className="confidence-bar-wrapper">
                    <div className="confidence-label">
                      <span className="confidence-label-text">Confidence Level</span>
                      <span className="confidence-value">
                        {Math.round(result.confidence)}%
                      </span>
                    </div>
                    <div className="confidence-bar">
                      <div 
                        className="confidence-fill"
                        style={{ 
                          width: `${result.confidence}%`,
                          background: `linear-gradient(90deg, ${getMoodColor(result.mood)} 0%, ${getMoodColor(result.mood)}cc 100%)`,
                          boxShadow: `0 0 20px ${getMoodColor(result.mood)}60`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* All Predictions */}
            {result.allPredictions?.length > 0 && (
              <div className="predictions-card">
                <h4 className="predictions-title">🎯 All Detected Moods</h4>
                <div className="predictions-grid">
                  {result.allPredictions.map((pred, i) => (
                    <div 
                      key={i} 
                      className="prediction-tag"
                      style={{ 
                        borderColor: getMoodColor(pred.mood),
                        background: `${getMoodColor(pred.mood)}15`
                      }}
                    >
                      <span className="prediction-emoji">{getEmoji(pred.mood)}</span>
                      <div className="prediction-info">
                        <span className="prediction-mood">
                          {pred.mood.charAt(0).toUpperCase() + pred.mood.slice(1)}
                        </span>
                        <span 
                          className="prediction-conf"
                          style={{ color: getMoodColor(pred.mood) }}
                        >
                          {Math.round(pred.confidence)}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="result-actions">
              <button className="btn btn-primary" onClick={handleReset}>
                <span className="btn-icon-inline">🎯</span>
                Analyze Another Pet
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Detector;