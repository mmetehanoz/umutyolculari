import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const aboutCards = [
    {
      id: 1,
      title: "Bağışçı Dostu",
      description: "Organizasyonumuzdan en son haberler, etkinlikler ve etki hikayeleri hakkında güncel kalın. Bültenimize abone olun.",
      iconColor: "yellow"
    },
    {
      id: 2,
      title: "Güvenilir Bağış",
      description: "Organizasyonumuzdan en son haberler, etkinlikler ve etki hikayeleri hakkında güncel kalın. Bültenimize abone olun.",
      iconColor: "green"
    },
    {
      id: 3,
      title: "Hayırsever Bağış",
      description: "Organizasyonumuzdan en son haberler, etkinlikler ve etki hikayeleri hakkında güncel kalın. Bültenimize abone olun.",
      iconColor: "orange"
    },
    {
      id: 4,
      title: "Tedavi Yardımı",
      description: "Organizasyonumuzdan en son haberler, etkinlikler ve etki hikayeleri hakkında güncel kalın. Bültenimize abone olun.",
      iconColor: "green"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Banner Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-title">Hakkımızda</h1>
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Ana Sayfa</Link>
            <span className="breadcrumb-separator">→</span>
            <span className="breadcrumb-current">Hakkımızda</span>
          </div>
        </div>
      </section>

      {/* Content Cards Section */}
      <section className="about-content">
        <div className="about-cards-container">
          {aboutCards.map((card) => (
            <div key={card.id} className="about-card">
              <div className={`card-icon ${card.iconColor}`}>
                <i className="fas fa-hand-holding-usd"></i>
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              <Link to="#" className="card-link">
                Detayları Gör <i className="fas fa-arrow-up-right"></i>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us-section">
        <div className="about-us-container">
          <div className="about-us-image">
            <div className="image-frame">
              <img 
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Mutlu çocuklar" 
                className="about-us-img"
              />
            </div>
          </div>
          <div className="about-us-content">
            <div className="about-us-header">
              <span className="about-us-subtitle">Hakkımızda Bağış</span>
              <div className="about-us-line"></div>
            </div>
            <h2 className="about-us-title">Sizinle Birlikte Daha Fazla Hayat Kurtarabileceğimize İnanıyoruz</h2>
            <p className="about-us-description">
              Umut Yolcuları, yaklaşık her ülkede kar amacı gütmeyen kuruluşları, bağışçıları ve şirketleri birbirine bağlayan en büyük küresel crowdfunding topluluğudur. Afganistan'dan Zimbabve'ye (ve aradaki yüzlerce yere) kadar kar amacı gütmeyen kuruluşların daha etkili olmaları ve dünyamızı daha iyi bir yer haline getirmeleri için ihtiyaç duydukları araçlara, eğitime ve desteğe erişmelerine yardımcı oluyoruz.
            </p>
            <div className="about-us-checklist">
              <div className="checklist-item">
                <i className="fas fa-check check-icon green"></i>
                <span>Gıda İçin Hayırseverlik</span>
              </div>
              <div className="checklist-item">
                <i className="fas fa-check check-icon orange"></i>
                <span>Eğitim İçin Hayırseverlik</span>
              </div>
              <div className="checklist-item">
                <i className="fas fa-check check-icon yellow"></i>
                <span>Su İçin Hayırseverlik</span>
              </div>
              <div className="checklist-item">
                <i className="fas fa-check check-icon dark-green"></i>
                <span>Tıbbi Yardım İçin Hayırseverlik</span>
              </div>
            </div>
            <button className="about-us-button">
              Daha Fazla Bilgi <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Statistics and Video Section */}
      <section className="stats-video-section">
        <div className="stats-video-container">
          <div className="video-section">
            <div className="video-background">
              <div className="video-overlay">
                <div className="play-button">
                  <i className="fas fa-play"></i>
                </div>
                <div className="video-decorations">
                  <div className="decoration-line left"></div>
                  <div className="decoration-line right"></div>
                </div>
              </div>
              <iframe 
                src="https://www.youtube.com/embed/aFFZ1JDJJXo?rel=0&modestbranding=1" 
                title="Umut Yolcuları Tanıtım Videosu"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video-iframe"
              ></iframe>
            </div>
          </div>
          <div className="stats-section">
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">15K+</div>
                <div className="stat-label">İnanılmaz Gönüllü</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1K+</div>
                <div className="stat-label">Başarılı Kampanya</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">400+</div>
                <div className="stat-label">Aylık Bağışçı</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">35K+</div>
                <div className="stat-label">Ekip Desteği</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="work-process-section">
        <div className="work-process-container">
          <div className="work-process-header">
            <span className="work-process-subtitle">Çalışma Süreci</span>
            <h2 className="work-process-title">Bağış Çalışma Sürecimiz</h2>
          </div>
          <div className="work-process-steps">
            <div className="process-step">
              <div className="step-heart">
                <div className="heart-image">
                  <img 
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Farkındalık" 
                    className="heart-img"
                  />
                </div>
                <div className="step-icon">
                  <i className="fas fa-users"></i>
                  <i className="fas fa-handshake"></i>
                </div>
              </div>
              <h3 className="step-title">Farkındalık ve Katılım</h3>
              <p className="step-description">
                Hayır kuruluşunun misyonu ve desteklediği nedeni hakkında potansiyel bağışçıları ve destekçileri bilgilendirmek ve katılımını sağlamak. Sosyal medya gibi çeşitli kanalları kullanarak.
              </p>
            </div>
            <div className="process-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="process-step">
              <div className="step-heart">
                <div className="heart-image">
                  <img 
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Bağış Toplama" 
                    className="heart-img"
                  />
                </div>
                <div className="step-icon">
                  <i className="fas fa-shopping-cart"></i>
                  <span className="dollar-signs">$$</span>
                </div>
              </div>
              <h3 className="step-title">Bağış Toplama</h3>
              <p className="step-description">
                Birden fazla ödeme yöntemini kabul eden ve hem tek seferlik hem de tekrarlayan bağışlara izin veren güvenli ve kullanıcı dostu bir çevrimiçi bağış platformu kurmak.
              </p>
            </div>
            <div className="process-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="process-step">
              <div className="step-heart">
                <div className="heart-image">
                  <img 
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Etki ve Hesap Verebilirlik" 
                    className="heart-img"
                  />
                </div>
                <div className="step-icon">
                  <i className="fas fa-shield-alt"></i>
                  <i className="fas fa-check"></i>
                </div>
              </div>
              <h3 className="step-title">Etki ve Hesap Verebilirlik</h3>
              <p className="step-description">
                Hayır kuruluşunun misyonuyla uyumlu olan belirli projelere ve girişimlere fon ayırmak, kaynakların verimli ve etkili bir şekilde kullanılmasını sağlamak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button className="scroll-to-top" onClick={scrollToTop}>
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default AboutPage; 