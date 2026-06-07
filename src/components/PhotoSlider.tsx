
import React, { useState, useEffect } from 'react';

import photo1 from './photo1.jpg';
import photo2 from './photo2.jpg';
import photo3 from './photo3.jpg';
import photo4 from './photo4.jpg';
import photo5 from './photo5.jpg';

const PhotoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Placeholder images - replace with your actual photos
  
  const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5
];


  const captions = [
    "Our first adventure together",
    "That magical sunset",
    "When you made me laugh so hard",
    "Our perfect day",
    "The moment I knew you were the one"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [photos.length]);

  return (
    <div className="photo-slider-container">
      <h2 className="slider-title">Our Beautiful Memories</h2>
      <div className="slider-wrapper">
        <div className="slider-content">
          <div className="photo-frame">
            <img 
              src={photos[currentSlide]} 
              alt={captions[currentSlide]}
              className="slider-image slider-image-animated"
              key={currentSlide}
            />
            <div className="photo-overlay">
              <p className="photo-caption">{captions[currentSlide]}</p>
            </div>
          </div>
        </div>
        
        <div className="slider-dots">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoSlider;
