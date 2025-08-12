import React, { useState } from 'react';
import './QuickDonationSection.css';

const QuickDonationSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('gazze-acil');
  const [donationAmount, setDonationAmount] = useState('');

  const donationCategories = [
    { value: 'genel', label: 'Genel Bağış' },
    { value: 'gazze-acil', label: 'Gazze Acil Yardım' },
    { value: 'gazze-sadaka', label: 'Gazze Sadaka Bağışı' },
    { value: 'gazze-zekat', label: 'Gazze Zekat Bağışı' }
  ];

  const handleDonation = () => {
    if (!donationAmount || donationAmount <= 0) {
      alert('Lütfen geçerli bir bağış miktarı giriniz.');
      return;
    }
    
    // Burada bağış işlemi yapılacak
    console.log('Bağış yapılıyor:', {
      category: selectedCategory,
      amount: donationAmount
    });
    
    // Başarılı bağış sonrası form temizleme
    setDonationAmount('');
    alert('Bağışınız için teşekkür ederiz!');
  };

  return (
    <section className="quick-donation-section">
      <div className="quick-donation-container">
        <div className="quick-donation-left">
          <div className="quick-donation-logo">
            <div className="heart-logo">
              <div className="heart-path"></div>
            </div>
          </div>
          <div className="quick-donation-text">
            <h2>HIZLI BAĞIŞ</h2>
            <p>Yardımların gerçek ihtiyaç sahiplerine ulaşması için çalışıyoruz.</p>
          </div>
        </div>
        
        <div className="quick-donation-middle">
          <div className="donation-inputs">
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="category-select"
            >
              {donationCategories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
            
            <div className="amount-input-container">
              <input
                type="number"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                placeholder="0"
                className="amount-input"
                min="0"
                step="0.01"
              />
              <span className="currency-symbol">₺</span>
            </div>
          </div>
        </div>
        
        <div className="quick-donation-right">
          <button 
            className="donate-button"
            onClick={handleDonation}
          >
            <i className="fas fa-heart"></i>
            <span>ŞİMDİ DESTEK OL!</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuickDonationSection;
