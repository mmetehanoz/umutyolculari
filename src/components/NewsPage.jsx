import React, { useState } from 'react';
import './NewsPage.css';

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const newsCategories = [
    { id: 'all', name: 'Tümü' },
    { id: 'charity', name: 'Hayırseverlik' },
    { id: 'projects', name: 'Projeler' },
    { id: 'events', name: 'Etkinlikler' },
    { id: 'volunteers', name: 'Gönüllüler' },
    { id: 'donations', name: 'Bağışlar' },
    { id: 'children', name: 'Çocuklar' }
  ];

  const newsArticles = {
    charity: [
      {
        id: 1,
        title: 'Umut Yolcuları Derneği\'nden Büyük Yardım Kampanyası',
        excerpt: 'Derneğimiz, ihtiyaç sahiplerine ulaşmak için kapsamlı bir yardım kampanyası başlattı. Kampanya kapsamında gıda, giysi ve eğitim malzemeleri dağıtımı yapılacak.',
        content: 'Umut Yolcuları İnsani Yardım Derneği, toplumsal sorumluluk bilinciyle hareket ederek, ihtiyaç sahiplerine ulaşmak için büyük bir yardım kampanyası başlattı. Kampanya kapsamında gıda, giysi ve eğitim malzemeleri dağıtımı yapılacak. Dernek başkanı yaptığı açıklamada, "Amacımız hiçbir çocuğun aç kalmaması, hiçbir ailenin umutsuz kalmaması" dedi.',
        category: 'charity',
        date: '2024-01-15',
        author: 'Dernek Haberleri',
        imageUrl: 'https://images.unsplash.com/photo-1532629345422-7515f3d16c76?w=400&h=250&fit=crop',
        tags: ['Yardım', 'Kampanya', 'Sosyal Sorumluluk']
      },
      {
        id: 2,
        title: 'Hayırsever Bağışçılarımızla Buluşma Etkinliği',
        excerpt: 'Derneğimizin hayırsever bağışçılarıyla buluşma etkinliği büyük ilgi gördü. Etkinlikte derneğin çalışmaları ve gelecek planları paylaşıldı.',
        content: 'Umut Yolcuları İnsani Yardım Derneği\'nin hayırsever bağışçılarıyla buluşma etkinliği, İstanbul\'da gerçekleştirildi. Etkinlikte derneğin son dönemdeki çalışmaları, başarıları ve gelecek planları detaylı bir şekilde paylaşıldı. Bağışçılarımızın desteğiyle gerçekleştirilen projeler hakkında bilgi verildi.',
        category: 'charity',
        date: '2024-01-10',
        author: 'İletişim Ekibi',
        imageUrl: 'https://images.unsplash.com/photo-1523240798132-005145f6fa71?w=400&h=250&fit=crop',
        tags: ['Bağışçı', 'Etkinlik', 'Toplantı']
      }
    ],
    projects: [
      {
        id: 3,
        title: 'Eğitim Projesi: Geleceğe Umut',
        excerpt: 'Çocukların eğitimine destek vermek amacıyla başlattığımız "Geleceğe Umut" projesi kapsamında 500 çocuğa eğitim malzemesi dağıtıldı.',
        content: 'Umut Yolcuları İnsani Yardım Derneği, çocukların eğitimine destek vermek amacıyla başlattığı "Geleceğe Umut" projesi kapsamında 500 çocuğa eğitim malzemesi dağıtıldı. Proje kapsamında okul çantaları, defterler, kalemler ve diğer eğitim malzemeleri ihtiyaç sahibi çocuklara ulaştırıldı.',
        category: 'projects',
        date: '2024-01-08',
        author: 'Proje Ekibi',
        imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop',
        tags: ['Eğitim', 'Proje', 'Çocuklar']
      },
      {
        id: 4,
        title: 'Sağlık Projesi: Sağlıklı Gelecek',
        excerpt: 'Sağlık alanında yürüttüğümüz proje kapsamında 1000 aileye sağlık taraması yapıldı ve gerekli tedaviler sağlandı.',
        content: 'Umut Yolcuları İnsani Yardım Derneği, sağlık alanında yürüttüğü "Sağlıklı Gelecek" projesi kapsamında 1000 aileye sağlık taraması yaptı. Proje kapsamında çocukların ve yetişkinlerin sağlık durumları kontrol edildi ve gerekli tedaviler sağlandı.',
        category: 'projects',
        date: '2024-01-05',
        author: 'Sağlık Ekibi',
        imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop',
        tags: ['Sağlık', 'Proje', 'Tarama']
      }
    ],
    events: [
      {
        id: 5,
        title: 'Yılbaşı Yardım Etkinliği Başarıyla Tamamlandı',
        excerpt: 'Yılbaşı döneminde düzenlediğimiz yardım etkinliği kapsamında 200 aileye gıda ve giysi yardımı yapıldı.',
        content: 'Umut Yolcuları İnsani Yardım Derneği, yılbaşı döneminde düzenlediği yardım etkinliği kapsamında 200 aileye gıda ve giysi yardımı yaptı. Etkinlik kapsamında çocuklara oyuncak dağıtımı da gerçekleştirildi.',
        category: 'events',
        date: '2023-12-31',
        author: 'Etkinlik Ekibi',
        imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop',
        tags: ['Yılbaşı', 'Etkinlik', 'Yardım']
      },
      {
        id: 6,
        title: 'Gönüllü Eğitim Programı Başladı',
        excerpt: 'Yeni gönüllülerimiz için düzenlenen eğitim programı başladı. Program kapsamında gönüllülük kavramı ve çalışma alanları anlatılıyor.',
        content: 'Umut Yolcuları İnsani Yardım Derneği, yeni gönüllülerimiz için düzenlenen eğitim programı başladı. Program kapsamında gönüllülük kavramı, derneğin çalışma alanları ve gönüllülerin sorumlulukları detaylı bir şekilde anlatılıyor.',
        category: 'events',
        date: '2023-12-28',
        author: 'Gönüllü Koordinatörü',
        imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
        tags: ['Gönüllü', 'Eğitim', 'Program']
      }
    ],
    volunteers: [
      {
        id: 7,
        title: 'Gönüllü Hikayeleri: Ayşe Hanım\'ın Hikayesi',
        excerpt: '5 yıldır derneğimizde gönüllü olarak çalışan Ayşe Hanım\'ın hikayesi ve gönüllülük deneyimleri.',
        content: '5 yıldır derneğimizde gönüllü olarak çalışan Ayşe Hanım, gönüllülük deneyimlerini paylaştı. "Gönüllülük benim için bir yaşam tarzı haline geldi. İnsanlara yardım etmek, onların yüzünde gülümseme görmek beni çok mutlu ediyor" diyen Ayşe Hanım, gönüllülüğün kendisine kattığı değerleri anlattı.',
        category: 'volunteers',
        date: '2023-12-25',
        author: 'İletişim Ekibi',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
        tags: ['Gönüllü', 'Hikaye', 'Deneyim']
      }
    ],
    donations: [
      {
        id: 8,
        title: 'Kurumsal Bağışçılarımızdan Büyük Destek',
        excerpt: 'Kurumsal bağışçılarımızdan gelen desteklerle 1000 aileye yardım ulaştırıldı.',
        content: 'Kurumsal bağışçılarımızdan gelen desteklerle 1000 aileye yardım ulaştırıldı. Bağışçılarımızın desteğiyle gıda, giysi ve eğitim malzemeleri ihtiyaç sahiplerine dağıtıldı.',
        category: 'donations',
        date: '2023-12-20',
        author: 'Bağış Koordinatörü',
        imageUrl: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop',
        tags: ['Kurumsal', 'Bağış', 'Destek']
      }
    ],
    children: [
      {
        id: 9,
        title: 'Çocuklar İçin Oyun Alanı Projesi Tamamlandı',
        excerpt: 'Çocukların gelişimi için önemli olan oyun alanı projesi başarıyla tamamlandı.',
        content: 'Çocukların gelişimi için önemli olan oyun alanı projesi başarıyla tamamlandı. Proje kapsamında çocukların güvenli bir şekilde oynayabilecekleri alanlar oluşturuldu.',
        category: 'children',
        date: '2023-12-15',
        author: 'Proje Ekibi',
        imageUrl: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=250&fit=crop',
        tags: ['Çocuklar', 'Oyun Alanı', 'Proje']
      }
    ]
  };

  const getFilteredArticles = () => {
    let articles = [];
    if (activeCategory === 'all') {
      articles = Object.values(newsArticles).flat();
    } else {
      articles = newsArticles[activeCategory] || [];
    }

    if (searchTerm) {
      articles = articles.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return articles.sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  const filteredArticles = getFilteredArticles();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const openArticleModal = (article) => {
    setSelectedArticle(article);
  };

  const closeArticleModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="news-page">
      {/* Hero Section */}
      <div className="news-hero">
        <div className="news-hero-content">
          <h1 className="news-hero-title">Haberler</h1>
          <p className="news-hero-subtitle">
            Umut Yolcuları İnsani Yardım Derneği'nin güncel haberleri, etkinlikleri ve 
            projeleri hakkında bilgi alabileceğiniz haber merkezi
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="news-filter-section">
        <div className="news-filter-container">
          <div className="news-search-box">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Haberlerde ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="news-search-input"
            />
          </div>
          <div className="news-category-buttons">
            {newsCategories.map((category) => (
              <button
                key={category.id}
                className={`news-filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="news-grid-section">
        <div className="news-grid-container">
          {filteredArticles.map((article) => (
            <div key={article.id} className="news-card" onClick={() => openArticleModal(article)}>
              <div className="news-image">
                <img src={article.imageUrl} alt={article.title} />
                <div className="news-category-badge">
                  {newsCategories.find(cat => cat.id === article.category)?.name}
                </div>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="news-date">
                    <i className="fas fa-calendar-alt"></i>
                    {formatDate(article.date)}
                  </span>
                  <span className="news-author">
                    <i className="fas fa-user"></i>
                    {article.author}
                  </span>
                </div>
                <h3 className="news-title">{article.title}</h3>
                <p className="news-excerpt">{article.excerpt}</p>
                <div className="news-tags">
                  {article.tags.map((tag, index) => (
                    <span key={index} className="news-tag">{tag}</span>
                  ))}
                </div>
                <button className="news-read-more">
                  Devamını Oku <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="article-modal" onClick={closeArticleModal}>
          <div className="article-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="article-modal-close" onClick={closeArticleModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="article-modal-image">
              <img src={selectedArticle.imageUrl} alt={selectedArticle.title} />
            </div>
            <div className="article-modal-info">
              <div className="article-modal-meta">
                <span className="article-modal-date">
                  <i className="fas fa-calendar-alt"></i>
                  {formatDate(selectedArticle.date)}
                </span>
                <span className="article-modal-author">
                  <i className="fas fa-user"></i>
                  {selectedArticle.author}
                </span>
                <span className="article-modal-category">
                  {newsCategories.find(cat => cat.id === selectedArticle.category)?.name}
                </span>
              </div>
              <h2 className="article-modal-title">{selectedArticle.title}</h2>
              <p className="article-modal-content-text">{selectedArticle.content}</p>
              <div className="article-modal-tags">
                {selectedArticle.tags.map((tag, index) => (
                  <span key={index} className="article-modal-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Section */}
      <div className="news-newsletter-section">
        <div className="news-newsletter-container">
          <h2 className="news-newsletter-title">Haberlerden Haberdar Olun</h2>
          <p className="news-newsletter-text">
            Derneğimizin güncel haberlerini ve etkinliklerini e-posta ile almak için abone olun
          </p>
          <div className="news-newsletter-form">
            <input
              type="email"
              placeholder="E-posta adresinizi girin"
              className="news-newsletter-input"
            />
            <button className="news-newsletter-btn">
              <i className="fas fa-paper-plane"></i>
              Abone Ol
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage; 