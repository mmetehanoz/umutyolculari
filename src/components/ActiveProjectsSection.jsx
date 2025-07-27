import React from 'react';
import './ActiveProjectsSection.css';

const projects = [
  {
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    percent: 100,
    percentColor: '#1a7c6b',
    title: 'GAZZE ACİL YARDIM',
    raised: 86410,
    goal: 60000,
    barColor: '#1a7c6b',
    goalColor: '#1a7c6b',
    btnColor: '#1a7c6b',
  },
  {
    img: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80',
    percent: 100,
    percentColor: '#ff5722',
    title: 'Sağlık Hizmeti veya Acil Müdahale',
    raised: 70583,
    goal: 60000,
    barColor: '#ff5722',
    goalColor: '#ff5722',
    btnColor: '#ff5722',
  },
  {
    img: 'https://images.unsplash.com/photo-1682686580224-cd46ea1a6950?q=80&w=2940&',
    percent: 82.89,
    percentColor: '#ffc107',
    title: 'Küçük Bir Yardım, Büyük Bir Umut',
    raised: 41444,
    goal: 50000,
    barColor: '#ffc107',
    goalColor: '#ffc107',
    btnColor: '#ffc107',
  },
];

const formatMoney = n => n.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY', minimumFractionDigits: 2 });

const ActiveProjectsSection = () => (
  <section className="active-projects-section">
    <div className="active-projects-header">
      <span className="active-projects-subtitle">Haydi Bağışa Başla</span>
      <h2>Etkini Gör: Şeffaf Bağış Projeleri</h2>
    </div>
    <div className="active-projects-cards">
      {projects.map((p, i) => (
        <div className="active-project-card" key={i}>
          <div className="active-project-img-wrap">
            <img src={p.img} alt={p.title} />
            <span className="active-project-badge" style={{background:p.percentColor}}>
              {p.percent}%
            </span>
          </div>
          <div className="active-project-content">
            <h3>{p.title}</h3>
            <div className="active-project-progress-bar">
              <div className="active-project-progress" style={{width:`${p.percent}%`,background:p.barColor}}></div>
            </div>
            <div className="active-project-stats">
              Toplanan - <span>{formatMoney(p.raised)}</span> Hedef - <span style={{color:p.goalColor}}>{formatMoney(p.goal)}</span>
            </div>
            <button className="active-project-btn" style={{background:p.btnColor}}>
              Bağış Yap <span style={{marginLeft:4}}>&#8594;</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ActiveProjectsSection; 