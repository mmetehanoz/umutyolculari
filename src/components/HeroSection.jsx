import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const slides = [
  {
    id: 1,
    title: "İyiliği Göze Alın",
    subtitle: "Katarakt Ameliyatı",
    category: "Katarakt",
    icon: "fas fa-eye",
    description: "Teknik ve maddi imkânsızlıklar nedeniyle milyonlarca insan ameliyat olamadığı için görme yeteneğini kaybediyor ve yaşamını başkalarına bağımlı bir şekilde sürdürüyor.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1500&q=80",
    buttonText: "Bağış Yap",
    buttonSecondary: "Detaylı Bilgi",
    donationId: "katarakt"
  },
  {
    id: 2,
    title: "Su Hayattır",
    subtitle: "Temiz Su Projesi",
    category: "Su",
    icon: "fas fa-tint",
    description: "Dünya genelinde milyonlarca insan temiz suya erişemiyor. Su kuyuları açarak hayat kurtarıyoruz.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1500&q=80",
    buttonText: "Bağış Yap",
    buttonSecondary: "Detaylı Bilgi",
    donationId: "su"
  },
  {
    id: 3,
    title: "Eğitim Gelecektir",
    subtitle: "Eğitim Destek Projesi",
    category: "Eğitim",
    icon: "fas fa-graduation-cap",
    description: "Her çocuğun eğitim hakkı vardır. Okullar inşa ediyor, eğitim materyalleri sağlıyoruz.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1500&q=80",
    buttonText: "Bağış Yap",
    buttonSecondary: "Detaylı Bilgi",
    donationId: "egitim"
  },
  {
    id: 4,
    title: "Fidan Dikimi",
    subtitle: "Yeşil Dünya Projesi",
    category: "Fidan",
    icon: "fas fa-seedling",
    description: "Çevre dostu bir dünya için fidan dikimi yapıyor, gelecek nesillere yeşil bir dünya bırakıyoruz.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1500&q=80",
    buttonText: "Bağış Yap",
    buttonSecondary: "Detaylı Bilgi",
    donationId: "fidan"
  },
  {
    id: 5,
    title: "Kriz Bölgeleri",
    subtitle: "Acil Yardım Projesi",
    category: "Kriz Bölgeleri",
    icon: "fas fa-band-aid",
    description: "Afet ve kriz bölgelerinde acil yardım sağlıyor, insanların temel ihtiyaçlarını karşılıyoruz.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1500&q=80",
    buttonText: "Bağış Yap",
    buttonSecondary: "Detaylı Bilgi",
    donationId: "kriz"
  },
  {
    id: 6,
    title: "Filistin Yardımı",
    subtitle: "İnsani Yardım Projesi",
    category: "Filistin",
    icon: "fas fa-map-pin",
    description: "Filistin'deki kardeşlerimize yardım eli uzatıyor, temel ihtiyaçlarını karşılıyoruz.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1500&q=80",
    buttonText: "Bağış Yap",
    buttonSecondary: "Detaylı Bilgi",
    donationId: "filistin"
  },
  {
    id: 7,
    title: "Zekat Projesi",
    subtitle: "İslami Yardım",
    category: "Zekat",
    icon: "fas fa-coins",
    description: "Zekat ibadetini yerine getiriyor, ihtiyaç sahiplerine yardım ediyoruz.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1500&q=80",
    buttonText: "Bağış Yap",
    buttonSecondary: "Detaylı Bilgi",
    donationId: "zekat"
  },
  {
    id: 8,
    title: "Türkiye Yardımı",
    subtitle: "Yerel Projeler",
    category: "Türkiye",
    icon: "fas fa-map-marker-alt",
    description: "Türkiye genelinde ihtiyaç sahiplerine yardım ediyor, sosyal sorumluluk projeleri yürütüyoruz.",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1500&q=80",
    buttonText: "Bağış Yap",
    buttonSecondary: "Detaylı Bilgi",
    donationId: "turkiye"
  }
];

const categories = [
  { name: "Fidan", icon: "fas fa-seedling", slideIndex: 3 },
  { name: "Su", icon: "fas fa-tint", slideIndex: 1 },
  { name: "Katarakt", icon: "fas fa-eye", slideIndex: 0 },
  { name: "Kriz Bölgeleri", icon: "fas fa-band-aid", slideIndex: 4 },
  { name: "Filistin", icon: "fas fa-map-pin", slideIndex: 5 },
  { name: "Zekat", icon: "fas fa-coins", slideIndex: 6 },
  { name: "Türkiye", icon: "fas fa-map-marker-alt", slideIndex: 7 },
  { name: "Eğitim", icon: "fas fa-graduation-cap", slideIndex: 2 }
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

  const handleCategoryClick = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const handleDonationClick = (donationId) => {
    // Bağış sayfasına yönlendirme
    window.location.hash = `#/bagislar?campaign=${donationId}`;
  };

  return (
    <section className="hero-section">
      {/* Desktop Slider */}
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
                  <a href="#" className="detail-link">{slide.buttonSecondary} &gt;</a>
                  <button className="discover-btn" onClick={() => handleDonationClick(slide.donationId)}>
                    <i className="fas fa-heart"></i> {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Mobile Cards */}
      <div className="mobile-cards">
        {slides.map((slide, index) => (
          <div key={slide.id} className={`mobile-card ${index === currentSlide ? 'active' : ''}`}>
            <div className="card-image" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="card-overlay">
                <div className="card-category">
                  <i className={slide.icon}></i>
                  <span>{slide.category}</span>
                </div>
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">{slide.title}</h3>
              <p className="card-description">{slide.description}</p>
              <button className="card-donate-btn" onClick={() => handleDonationClick(slide.donationId)}>
                <i className="fas fa-heart"></i> {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Desktop Navigation */}
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
      
      {/* Mobile Navigation Dots */}
      <div className="mobile-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`mobile-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      
      {/* Category Buttons */}
      <div className="hero-categories">
        {categories.map((category, index) => (
          <div 
            key={index}
            className={`category-item ${slides[category.slideIndex].id === slides[currentSlide].id ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category.slideIndex)}
          >
            <i className={category.icon}></i>
            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection; 