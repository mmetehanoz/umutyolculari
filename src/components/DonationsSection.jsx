import React from 'react';
import './DonationsSection.css';

const donations = [
  {
    title: 'Çocukları Doyur',
    desc: 'İhtiyaç sahibi çocuklara besleyici yemekler ulaştırmamıza yardım edin.',
    img: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Temiz Su Projesi',
    desc: 'Uzak köylere temiz su ulaştırma misyonumuzu destekleyin.',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Herkes İçin Eğitim',
    desc: 'Çocuklara öğrenme ve gelişme fırsatı verin.',
    img: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=400&q=80',
  },
];

const DonationsSection = () => (
  <section className="donations-section">
    <h2>Bağış Kampanyalarımız</h2>
    <div className="donation-cards">
      {donations.map((don, idx) => (
        <div className="donation-card" key={idx}>
          <img src={don.img} alt={don.title} />
          <h3>{don.title}</h3>
          <p>{don.desc}</p>
          <button>Bağış Yap</button>
        </div>
      ))}
    </div>
  </section>
);

export default DonationsSection; 