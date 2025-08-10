import React, { useState, useRef, useEffect } from 'react';
import './BeforeAfterSection.css';

// Using local assets
import beforeImage from '../assets/before-01.jpg';
import afterImage from '../assets/after-02.jpg';

const BeforeAfterSection = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mouseleave', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseUp);
    };
  }, [isDragging]);

  const updateSliderPosition = (clientX) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const position = ((clientX - rect.left) / rect.width) * 100;
      const clampedPosition = Math.max(0, Math.min(100, position));
      setSliderPosition(clampedPosition);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateSliderPosition(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateSliderPosition(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    if (e.touches && e.touches[0]) {
      updateSliderPosition(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      e.preventDefault();
      if (e.touches && e.touches[0]) {
        updateSliderPosition(e.touches[0].clientX);
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleClick = (e) => {
    if (!isDragging) {
      updateSliderPosition(e.clientX);
    }
  };

  return (
    <section className="before-after-section">
      <div className="before-after-container">
        <div className="before-after-header">
          <h2 className="before-after-title">Bir hayatı renklendirin!</h2>
          <p className="before-after-subtitle">
            yapacağınız yardımlar birinin hayatını değiştirebilir.
          </p>
        </div>
        
        <div className="before-after-slider-wrapper">
          <div 
            className="before-after-slider-container"
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClick={handleClick}
          >
            {/* Before Image (Grayscale) */}
            <div className="before-image-container">
              <img src={beforeImage} alt="Yardım Öncesi" className="before-image" />
            </div>
            
            {/* After Image (Color) */}
            <div 
              className="after-image-container"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
              }}
            >
              <img src={afterImage} alt="Yardım Sonrası" className="after-image" />
            </div>
            
            {/* Slider Line */}
            <div 
              className="slider-line"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="slider-handle">
                <div className="slider-arrow left">
                  <i className="fas fa-chevron-left"></i>
                </div>
                <div className="slider-arrow right">
                  <i className="fas fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
