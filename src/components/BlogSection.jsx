import React from 'react';
import './BlogSection.css';
import { Link } from 'react-router-dom';

const BilgiSection = () => {
  const bilgiItems = [
    {
      title: 'Zekat Nedir?',
      excerpt: 'İslam\'ın beş şartından biri olan zekat hakkında detaylı bilgi, hesaplama yöntemleri ve önemi.',
      icon: 'fas fa-mosque',
      link: '/bilgi/zekat',
      color: '#667eea'
    },
    {
      title: 'Fitre Nedir?',
      excerpt: 'Ramazan ayında verilen sadaka-i fıtır hakkında bilgi, verilme zamanı ve miktarı.',
      icon: 'fas fa-gift',
      link: '/bilgi/fitre',
      color: '#f093fb'
    },
    {
      title: 'Bağış Yapmanın Önemi',
      excerpt: 'Desteğinizin dünya çapında aileler ve çocuklar üzerindeki gerçek etkisini keşfedin.',
      icon: 'fas fa-heart',
      link: '/donations',
      color: '#48bb78'
    }
  ];

  return (
    <section className="blog-section">
      <h2>Bilgi Merkezi</h2>
      <p className="section-description">
        İslami yardım ve bağış konularında ihtiyacınız olan tüm bilgileri burada bulabilirsiniz.
      </p>
      <div className="blog-cards">
        {bilgiItems.map((item, idx) => (
          <Link to={item.link} key={idx} className="blog-card-link">
            <div className="blog-card" style={{ borderTop: `4px solid ${item.color}` }}>
              <div className="card-icon" style={{ color: item.color }}>
                <i className={item.icon}></i>
              </div>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <div className="card-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BilgiSection; 