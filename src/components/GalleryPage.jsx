import React, { useState } from 'react';
import './GalleryPage.css';

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryCategories = [
    { id: 'all', name: 'Tümü' },
    { id: 'events', name: 'Etkinlikler' },
    { id: 'projects', name: 'Projeler' },
    { id: 'volunteers', name: 'Gönüllüler' },
    { id: 'donations', name: 'Bağışlar' },
    { id: 'children', name: 'Çocuklar' }
  ];

  const galleryImages = {
    events: [
      {
        id: 1,
        title: 'Yardım Dağıtım Etkinliği',
        description: 'İhtiyaç sahiplerine yardım dağıtımı sırasında çekilen fotoğraflar',
        imageUrl: 'https://images.unsplash.com/photo-1532629345422-7515f3d16c76?w=400&h=300&fit=crop',
        category: 'events'
      },
      {
        id: 2,
        title: 'Eğitim Kampanyası',
        description: 'Eğitim alanında destek sağladığımız kampanya etkinlikleri',
        imageUrl: 'https://images.unsplash.com/photo-1523240798132-005145f6fa71?w=400&h=300&fit=crop',
        category: 'events'
      },
      {
        id: 3,
        title: 'Gönüllü Toplantısı',
        description: 'Gönüllülerimizle yapılan toplantı ve planlama etkinlikleri',
        imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop',
        category: 'events'
      }
    ],
    projects: [
      {
        id: 4,
        title: 'Sosyal Sorumluluk Projesi',
        description: 'Toplumsal fayda sağlayan projelerimizin görsel dokümantasyonu',
        imageUrl: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop',
        category: 'projects'
      },
      {
        id: 5,
        title: 'Çevre Projesi',
        description: 'Çevre koruma ve sürdürülebilirlik projelerimiz',
        imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
        category: 'projects'
      },
      {
        id: 6,
        title: 'Sağlık Projesi',
        description: 'Sağlık alanında yürüttüğümüz projeler',
        imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
        category: 'projects'
      }
    ],
    volunteers: [
      {
        id: 7,
        title: 'Gönüllü Çalışmaları',
        description: 'Gönüllülerimizin çalışmalarından kareler',
        imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
        category: 'volunteers'
      },
      {
        id: 8,
        title: 'Gönüllü Eğitimi',
        description: 'Gönüllülerimizin eğitim ve gelişim süreçleri',
        imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
        category: 'volunteers'
      },
      {
        id: 9,
        title: 'Takım Çalışması',
        description: 'Gönüllü ekibimizin birlikte çalışma anları',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
        category: 'volunteers'
      }
    ],
    donations: [
      {
        id: 10,
        title: 'Bağış Toplama',
        description: 'Bağış toplama kampanyalarımızdan görseller',
        imageUrl: 'https://images.unsplash.com/photo-1532629345422-7515f3d16c76?w=400&h=300&fit=crop',
        category: 'donations'
      },
      {
        id: 11,
        title: 'Yardım Dağıtımı',
        description: 'Toplanan bağışların ihtiyaç sahiplerine dağıtımı',
        imageUrl: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop',
        category: 'donations'
      },
      {
        id: 12,
        title: 'Bağışçı Etkinlikleri',
        description: 'Bağışçılarımızla yapılan etkinlikler',
        imageUrl: 'https://images.unsplash.com/photo-1523240798132-005145f6fa71?w=400&h=300&fit=crop',
        category: 'donations'
      }
    ],
    children: [
      {
        id: 13,
        title: 'Çocuk Etkinlikleri',
        description: 'Çocuklarla yapılan eğitici ve eğlenceli etkinlikler',
        imageUrl: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop',
        category: 'children'
      },
      {
        id: 14,
        title: 'Çocuk Eğitimi',
        description: 'Çocukların eğitim ve gelişim süreçleri',
        imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
        category: 'children'
      },
      {
        id: 15,
        title: 'Çocuk Oyunları',
        description: 'Çocuklarla yapılan oyun ve aktiviteler',
        imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
        category: 'children'
      }
    ]
  };

  const getFilteredImages = () => {
    if (activeCategory === 'all') {
      return Object.values(galleryImages).flat();
    }
    return galleryImages[activeCategory] || [];
  };

  const filteredImages = getFilteredImages();

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <div className="gallery-hero">
        <div className="gallery-hero-content">
          <h1 className="gallery-hero-title">Fotoğraf Galerisi</h1>
          <p className="gallery-hero-subtitle">
            Umut Yolcuları İnsani Yardım Derneği'nin çalışmalarını, etkinliklerini ve 
            projelerini yansıtan fotoğraf galerimiz
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="gallery-filter-section">
        <div className="gallery-filter-container">
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              className={`gallery-filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid-section">
        <div className="gallery-grid-container">
          {filteredImages.map((image) => (
            <div key={image.id} className="gallery-item" onClick={() => openLightbox(image)}>
              <div className="gallery-image">
                <img src={image.imageUrl} alt={image.title} />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <h3 className="gallery-item-title">{image.title}</h3>
                    <p className="gallery-item-description">{image.description}</p>
                    <div className="gallery-item-category">
                      <span className="gallery-category-badge">
                        {galleryCategories.find(cat => cat.id === image.category)?.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <i className="fas fa-times"></i>
            </button>
            <div className="lightbox-image">
              <img src={selectedImage.imageUrl} alt={selectedImage.title} />
            </div>
            <div className="lightbox-info">
              <h3 className="lightbox-title">{selectedImage.title}</h3>
              <p className="lightbox-description">{selectedImage.description}</p>
              <div className="lightbox-category">
                <span className="lightbox-category-badge">
                  {galleryCategories.find(cat => cat.id === selectedImage.category)?.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="gallery-cta-section">
        <div className="gallery-cta-container">
          <h2 className="gallery-cta-title">Fotoğraflarınızı Paylaşın</h2>
          <p className="gallery-cta-text">
            Derneğimizin çalışmalarına katkıda bulunmak için fotoğraflarınızı bizimle paylaşabilirsiniz
          </p>
          <button className="gallery-cta-btn">
            <i className="fas fa-upload"></i>
            Fotoğraf Gönder
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage; 