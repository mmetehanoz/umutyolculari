import React from 'react';
import './DonationsPage.css';

const donations = [
  {
    title: 'Your Little Help Can Heal Their Helps',
    desc: 'Join our fundraising campaigns to raise awareness and funds',
    img: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=400&q=80',
    percent: 82.89,
    raised: 41444,
    goal: 50000,
  },
  {
    title: 'Help Children poor Insurance & Medical',
    desc: 'Join our fundraising campaigns to raise awareness and funds',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    percent: 77.28,
    raised: 16120,
    goal: 60000,
  },
  {
    title: 'Help us touch their lives of these youths',
    desc: 'Join our fundraising campaigns to raise awareness and funds',
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80',
    percent: 100,
    raised: 151342,
    goal: 60000,
  },
  {
    title: 'Raise Fund for Clean & Healthy Water',
    desc: 'Join our fundraising campaigns to raise awareness and funds',
    img: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=400&q=80',
    percent: 72.65,
    raised: 13340,
    goal: 60000,
  },
  {
    title: 'Be hungry no more & Leave no one behinds',
    desc: 'Join our fundraising campaigns to raise awareness and funds',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    percent: 100,
    raised: 86410,
    goal: 60000,
  },
  {
    title: 'Medical Health or People React Acuter',
    desc: 'Join our fundraising campaigns to raise awareness and funds',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    percent: 100,
    raised: 70683,
    goal: 60000,
  },
];

const DonationsPage = () => (
  <section className="donations-page-section">
    <div className="donations-page-header">
      <span className="donations-page-subtitle"><i className="far fa-heart"></i> Let’s Start Donating</span>
      <h2>See Your Impact: Transparent<br/>Donation Causes</h2>
    </div>
    <div className="donations-page-grid">
      {donations.map((don, idx) => (
        <div className="donations-page-card" key={idx}>
          <div className="donations-page-img-wrap">
            <img src={don.img} alt={don.title} />
            <span className="donations-page-badge" style={{background: don.percent === 100 ? '#1a7c6b' : don.percent > 80 ? '#ffc107' : '#ff5722'}}>
              {don.percent}%
            </span>
          </div>
          <div className="donations-page-content">
            <h3>{don.title}</h3>
            <p>{don.desc}</p>
            <div className="donations-page-progress-bar">
              <div className="donations-page-progress" style={{width: `${don.percent}%`, background: '#ffc107'}}></div>
            </div>
            <div className="donations-page-stats">
              <span>Raised <b>${don.raised.toLocaleString()}</b></span>
              <span>Goal <b>${don.goal.toLocaleString()}</b></span>
            </div>
            <button className="donations-page-btn">Donate Now <i className="fas fa-arrow-right"></i></button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default DonationsPage; 