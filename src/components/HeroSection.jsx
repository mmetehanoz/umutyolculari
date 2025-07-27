import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const slides = [
  {
    id: 1,
    title: "Umut Yolcuları İnsani Yardım Derneği",
    subtitle: "Her Bağış Değerlidir, Her Kalp Önemlidir",
    description: "Dünyayı daha iyi bir yer yapmak için çalışıyoruz",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80",
    buttonText: "Keşfet",
    buttonSecondary: "Videoyu İzle"
  },
  {
    id: 2,
    title: "Yardım Eli Uzatın",
    subtitle: "İhtiyaç Sahiplerine Destek Olun",
    description: "Birlikte daha güçlüyüz, birlikte daha umutluyuz",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80",
    buttonText: "Bağış Yap",
    buttonSecondary: "Gönüllü Ol"
  },
  {
    id: 3,
    title: "Geleceğe Umut Taşıyoruz",
    subtitle: "Çocuklar İçin Daha İyi Bir Dünya",
    description: "Her çocuğun eğitim ve sağlık hakkı vardır",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1500&q=80",
    buttonText: "Destekle",
    buttonSecondary: "Hikayelerimiz"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero-section">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: `translateX(${(index - currentSlide) * 100}%)`
            }}
          >
            <div className="hero-overlay">
              <div className="hero-content">
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <p className="hero-description">{slide.description}</p>
                <div className="hero-buttons">
                  <button className="discover-btn">{slide.buttonText}</button>
                  <button className="watch-btn">{slide.buttonSecondary}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="hero-nav prev" onClick={prevSlide}>
        &#8249;
      </button>
      <button className="hero-nav next" onClick={nextSlide}>
        &#8250;
      </button>
      
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection; 