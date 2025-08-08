import React, { useState } from 'react';
import './VideosPage.css';

const VideosPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const videoCategories = [
    { id: 'all', name: 'Tümü' },
    { id: 'projects', name: 'Projelerimiz' },
    { id: 'campaigns', name: 'Kampanyalarımız' },
    { id: 'promotional', name: 'Tanıtım Videolarımız' },
    { id: 'shorts', name: 'Kısa Videolarımız' }
  ];

  const videos = {
    projects: [
      {
        id: 1,
        title: 'Proje Tanıtımı - Umut Yolcuları',
        description: 'Derneğimizin yürüttüğü önemli projelerden birinin detaylı tanıtımı',
        youtubeId: 'exuAkzFFwwU',
        category: 'projects'
      },
      {
        id: 2,
        title: 'Sosyal Sorumluluk Projesi',
        description: 'Toplumsal fayda sağlayan projelerimizin görsel hikayesi',
        youtubeId: 'Z6FJZMCSV4k',
        category: 'projects'
      }
    ],
    campaigns: [
      {
        id: 3,
        title: 'Bağış Kampanyası - Yardım Eli',
        description: 'İhtiyaç sahiplerine ulaşmak için başlattığımız kampanya',
        youtubeId: 'PjGqcerXKKo',
        category: 'campaigns'
      },
      {
        id: 4,
        title: 'Eğitim Kampanyası - Geleceğe Umut',
        description: 'Eğitim alanında destek sağladığımız kampanya çalışmaları',
        youtubeId: 'ThSpx57gsnE',
        category: 'campaigns'
      }
    ],
    promotional: [
      {
        id: 5,
        title: 'Dernek Tanıtım Videosu',
        description: 'Umut Yolcuları İnsani Yardım Derneği tanıtım videosu',
        youtubeId: '9inU0moWxJI',
        category: 'promotional'
      },
      {
        id: 6,
        title: 'Misyon ve Vizyon Tanıtımı',
        description: 'Derneğimizin misyon ve vizyonunu anlatan tanıtım videosu',
        youtubeId: 'Ozv18Jnr5S4',
        category: 'promotional'
      }
    ],
    shorts: [
      {
        id: 7,
        title: 'Günlük Hayat - Kısa Video',
        description: 'Dernek çalışmalarından kısa kesitler',
        youtubeId: 'hVg2gtl39CQ',
        category: 'shorts'
      },
      {
        id: 8,
        title: 'Gönüllü Çalışmaları',
        description: 'Gönüllülerimizin çalışmalarından kısa videolar',
        youtubeId: 'UUtc4dkiAk0',
        category: 'shorts'
      },
      {
        id: 9,
        title: 'Yardım Dağıtımı',
        description: 'Yardım dağıtım çalışmalarından kısa kesitler',
        youtubeId: '3Ophs_gtOtY',
        category: 'shorts'
      },
      {
        id: 10,
        title: 'Çocuk Etkinlikleri',
        description: 'Çocuklarla yapılan etkinliklerden kısa videolar',
        youtubeId: '4W6YYfzSYoM',
        category: 'shorts'
      }
    ]
  };

  const getFilteredVideos = () => {
    if (activeCategory === 'all') {
      return Object.values(videos).flat();
    }
    return videos[activeCategory] || [];
  };

  const filteredVideos = getFilteredVideos();

  return (
    <div className="videos-page">
      {/* Hero Section */}
      <div className="videos-hero">
        <div className="videos-hero-content">
          <h1 className="videos-hero-title">Videolarımız</h1>
          <p className="videos-hero-subtitle">
            Umut Yolcuları İnsani Yardım Derneği'nin çalışmalarını, projelerini ve kampanyalarını 
            yakından takip edebileceğiniz video içeriklerimiz
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="videos-filter-section">
        <div className="videos-filter-container">
          {videoCategories.map((category) => (
            <button
              key={category.id}
              className={`videos-filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Videos Grid */}
      <div className="videos-grid-section">
        <div className="videos-grid-container">
          {filteredVideos.map((video) => (
            <div key={video.id} className="video-card">
              <div className="video-thumbnail">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
                <div className="video-category">
                  <span className="video-category-badge">
                    {videoCategories.find(cat => cat.id === video.category)?.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="videos-cta-section">
        <div className="videos-cta-container">
          <h2 className="videos-cta-title">Daha Fazla İçerik İçin</h2>
          <p className="videos-cta-text">
            YouTube kanalımızı takip ederek güncel videolarımızdan haberdar olun
          </p>
          <a 
            href="https://www.youtube.com/@umutyolcularitr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="videos-cta-btn"
          >
            <i className="fab fa-youtube"></i>
            YouTube Kanalımız
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideosPage; 