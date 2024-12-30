import React, { useState, useEffect } from 'react';
import './Home.css';

const images = [
  'https://globaldesignnews.com/wp-content/uploads/2022/05/GDN_Zhengzhou-Grand-Theater_3.jpeg',
  'https://www.thespruce.com/thmb/5wCJOI-eUtvlnuQGwMB1xHqNxvE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1209349883-068917c3f6894950822c9a981e1e9d89.jpg',
  'https://images.aeonmedia.co/images/b3a7594b-161d-45f7-9037-b03a9f741b02/the-impossible-architecture-of-etienne-louis-boullee-landscape-2.jpg?width=3840&quality=75&format=auto',
  'https://5.imimg.com/data5/SELLER/Default/2022/3/NO/KX/QP/68460987/house-architect-designing-service.jpg',
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="home-container">
      <div className="welcome-section">
        <div className="slideshow-container">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slideshow-image" />
          <button onClick={() => setIsPlaying(!isPlaying)} className="play-pause-button">
            {isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
          </button>
        </div>
        <div className="overlay">
          <h1 className="title">Welcome to Our Architecture Firm</h1>
          <p className="welcome-note">
           * YOU CHOOSE , WE WILL DO IT *
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
