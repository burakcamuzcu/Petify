import React from 'react';
import '../App.css';
import './styles/Gallery.css';

function Gallery() {
  const galleryItems = [
    {
      mood: 'happy',
      confidence: 92,
      img: 'https://media.istockphoto.com/id/1050802310/photo/small-happy-dog-portrait-close-up-of-cute-brown-puppy-smiling-outdoors-in-a-park-funny.jpg?s=170667a&w=0&k=20&c=EjGoS3dMy4LFaupc9HhZY6tHzkBJCpCLGRy7AKCg0wE=',
      alt: 'Happy brown puppy smiling'
    },
    {
      mood: 'relaxed',
      confidence: 87,
      img: 'https://media.istockphoto.com/id/1325997570/photo/bengal-cat-lying-on-sofa-and-smiling.jpg?s=612x612&w=0&k=20&c=U6HBa06jHDDZ4Wbd1GylTEybkvUCUaMf7blxCr-bon0=',
      alt: 'Relaxed Bengal cat chilling on sofa'
    },
    {
      mood: 'playful',
      confidence: 95,
      img: 'https://media.istockphoto.com/id/1784091605/photo/happy-active-dog-running-with-a-tennis-toy-ball-puppy-hyperactivity.jpg?s=612x612&w=0&k=20&c=13lQcRSN2GmQRZKAG2UEJLlaxceA-pHFYDHMCZh0UDs=',
      alt: 'Playful puppy running with toy'
    },
    {
      mood: 'curious',
      confidence: 78,
      img: 'https://www.shutterstock.com/image-photo/curious-cat-looks-straight-into-260nw-764666014.jpg',
      alt: 'Curious cat staring at camera'
    },
    {
      mood: 'happy',
      confidence: 89,
      img: 'https://media.istockphoto.com/id/511375254/photo/dog-having-a-big-smile.jpg?s=612x612&w=0&k=20&c=dXmUrYXGEoZmaBqJ2md7WAVCJGWO5UiD5plNs1bDfcM=',
      alt: 'Golden retriever smiling happily'
    },
    {
      mood: 'sad',
      confidence: 72,
      img: 'https://media.istockphoto.com/id/1170679242/photo/little-brown-stray-dog-on-the-street.jpg?s=612x612&w=0&k=20&c=gfX5Fn8QncUK9ymUjFLhNJ-ishPIlZdGWMwHlKEQXo4=',
      alt: 'Sad puppy looking down'
    }
  ];

  const getMoodEmoji = (mood) => {
    const emojis = {
      happy: '😊',
      relaxed: '😌',
      playful: '😄',
      curious: '🤔',
      sad: '😢'
    };
    return emojis[mood] || '🐾';
  };

  return (
    <main className="gallery-main">
      <div className="gallery-header">
        <h1>🐾 Pet Mood Gallery</h1>
        <p>Here are some example predictions made by the AI model based on different pet photos.</p>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div key={index} className="gallery-card">
            <img src={item.img} alt={item.alt} loading="lazy" />

            <div className="gallery-overlay">
              <div className="overlay-content">
                <div className="mood-emoji-large">{getMoodEmoji(item.mood)}</div>
                <h3>{item.mood.charAt(0).toUpperCase() + item.mood.slice(1)}</h3>
                <p>Confidence: {item.confidence}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Gallery;
