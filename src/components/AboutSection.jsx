import React from 'react';
import './AboutSection.css';

const AboutSection = () => (
  <section className="about-section">
    <div className="about-content">
      <h2>Hakkımızda</h2>
      <p>
        Dünyayı daha iyi bir yer yapmak için ihtiyaç sahiplerine destek oluyoruz. Misyonumuz; yiyecek, barınak ve umut sağlamak.
      </p>
    </div>
    <div className="about-image">
      <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="Hakkımızda" />
    </div>
  </section>
);

export default AboutSection; 