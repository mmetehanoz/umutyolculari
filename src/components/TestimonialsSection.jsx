import React, { useRef, useEffect } from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const scrollContainerRef = useRef(null);
  let isScrolling = false;
  let startX = 0;
  let scrollLeft = 0;
  let autoScrollInterval = null;
  const testimonials = [
    {
      id: 1,
      name: "Ahmet Yılmaz",
      rating: 5,
      date: "2 hafta önce",
      text: "Umut Yolcuları Derneği gerçekten çok güzel işler yapıyor. Çocuklara yardım etmek için her zaman destek oluyorum. Çok teşekkürler!",
      avatar: "AY"
    },
    {
      id: 2,
      name: "Fatma Demir",
      rating: 5,
      date: "1 ay önce",
      text: "Bağış yapmaya başladığımdan beri çok mutluyum. Derneğin şeffaflığı ve güvenilirliği beni çok etkiledi. Herkese tavsiye ederim.",
      avatar: "FD"
    },
    {
      id: 3,
      name: "Mehmet Kaya",
      rating: 5,
      date: "3 hafta önce",
      text: "Uzun zamandır bu derneği takip ediyorum. Yapılan yardımların gerçekten ihtiyaç sahiplerine ulaştığını görüyorum. Çok güzel bir organizasyon.",
      avatar: "MK"
    },
    {
      id: 4,
      name: "Ayşe Özkan",
      rating: 5,
      date: "1 hafta önce",
      text: "Çocukların yüzündeki gülümsemeyi görmek paha biçilemez. Umut Yolcuları sayesinde birçok çocuğa umut olabiliyoruz. Teşekkürler!",
      avatar: "AÖ"
    },
    {
      id: 5,
      name: "Ali Yıldız",
      rating: 5,
      date: "2 ay önce",
      text: "Derneğin çalışmalarını yakından takip ediyorum. Şeffaf ve güvenilir bir kuruluş. Bağış yaparken hiç tereddüt etmiyorum.",
      avatar: "AY"
    },
    {
      id: 6,
      name: "Zeynep Arslan",
      rating: 5,
      date: "3 ay önce",
      text: "Umut Yolcuları ile tanıştığım günden beri düzenli olarak bağış yapıyorum. Çocukların geleceği için çok önemli bir çalışma.",
      avatar: "ZA"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <i 
        key={index} 
        className={`fas fa-star ${index < rating ? 'filled' : 'empty'}`}
      ></i>
    ));
  };

  // Touch/Swipe handlers
  const handleMouseDown = (e) => {
    isScrolling = true;
    startX = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft = scrollContainerRef.current.scrollLeft;
    scrollContainerRef.current.style.cursor = 'grabbing';
    // Otomatik kaydırmayı durdur
    stopAutoScroll();
  };

  const handleMouseLeave = () => {
    isScrolling = false;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
    // Otomatik kaydırmayı tekrar başlat
    resumeAutoScroll();
  };

  const handleMouseUp = () => {
    isScrolling = false;
    scrollContainerRef.current.style.cursor = 'grab';
    // Otomatik kaydırmayı tekrar başlat
    resumeAutoScroll();
  };

  const handleMouseMove = (e) => {
    if (!isScrolling) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    startX = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft = scrollContainerRef.current.scrollLeft;
    // Otomatik kaydırmayı durdur
    stopAutoScroll();
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Otomatik kaydırma fonksiyonları
  const startAutoScroll = () => {
    if (autoScrollInterval) return;
    
    autoScrollInterval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const cardWidth = 280 + 30; // kart genişliği + gap
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        if (container.scrollLeft >= maxScroll) {
          // Son karta geldiğinde başa dön
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Bir sonraki karta kay
          container.scrollTo({ 
            left: container.scrollLeft + cardWidth, 
            behavior: 'smooth' 
          });
        }
      }
    }, 3000); // 3 saniyede bir
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
      autoScrollInterval = null;
    }
  };

  const resumeAutoScroll = () => {
    setTimeout(startAutoScroll, 2000); // 2 saniye sonra tekrar başlat
  };

  // Component mount olduğunda otomatik kaydırmayı başlat
  useEffect(() => {
    startAutoScroll();
    
    // Component unmount olduğunda temizlik
    return () => {
      stopAutoScroll();
    };
  }, []);

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2>Sizden Gelenler</h2>
          <p>Bağışçılarımızın deneyimleri ve yorumları</p>
        </div>
        
        <div 
          className="testimonials-grid"
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onMouseEnter={stopAutoScroll}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="avatar">{testimonial.avatar}</div>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <div className="rating">
                    {renderStars(testimonial.rating)}
                  </div>
                  <span className="date">{testimonial.date}</span>
                </div>
              </div>
              <div className="testimonial-content">
                <p>{testimonial.text}</p>
              </div>
              <div className="google-badge">
                <i className="fab fa-google"></i>
                <span>Google'dan</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonials-footer">
          <div className="google-reviews-link">
            <a href="#" className="google-reviews-btn">
              <i className="fab fa-google"></i>
              Tüm Google Yorumlarını Gör
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
