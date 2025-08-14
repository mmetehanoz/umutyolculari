import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QuickDonationSection.css';

const QuickDonationSection = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('gazze-acil');
  const [donationAmount, setDonationAmount] = useState('');

  const donationCategories = [
    { value: 'genel', label: 'Genel Bağış' },
    { value: 'gazze-acil', label: 'Gazze Acil Yardım' },
    { value: 'gazze-sadaka', label: 'Gazze Sadaka Bağışı' },
    { value: 'gazze-zekat', label: 'Gazze Zekat Bağışı' }
  ];

  const addToCart = () => {
    if (!donationAmount || donationAmount <= 0) {
      alert('Lütfen geçerli bir bağış miktarı giriniz.');
      return;
    }

    // Seçilen kategoriyi bul
    const selectedCategoryData = donationCategories.find(cat => cat.value === selectedCategory);
    
    // Cart item oluştur
    const cartItem = {
      id: `quick-${selectedCategory}-${Date.now()}`,
      name: selectedCategoryData.label,
      price: parseFloat(donationAmount),
      quantity: 1,
      type: 'Hızlı Bağış',
      country: 'Türkiye',
      image: '/src/assets/logo.png', // Default image
      source: 'quick-donation'
    };

    // Mevcut sepeti al
    const existingCart = JSON.parse(localStorage.getItem('charityCart') || '[]');
    
    // Yeni item'ı ekle
    const updatedCart = [...existingCart, cartItem];
    
    // LocalStorage'a kaydet
    localStorage.setItem('charityCart', JSON.stringify(updatedCart));
    
    // Custom event dispatch et (navbar güncellemesi için)
    window.dispatchEvent(new Event('cartUpdated'));
    
    // Form temizle
    setDonationAmount('');
    setSelectedCategory('gazze-acil');
    
    // Başarı mesajı ve sepete yönlendirme
    alert('Bağışınız sepete eklendi!');
    navigate('/cart');
  };

  return (
    <section className="quick-donation-section">
      {/* Desktop Layout */}
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
            onClick={addToCart}
          >
            <i className="fas fa-heart"></i>
            <span>SEPETE EKLE</span>
          </button>
        </div>
      </div>

      {/* Mobile Cards Layout */}
      <div className="quick-donation-mobile-cards">
        <div className="quick-donation-mobile-card">
          <div className="mobile-card-logo">
            <i className="fas fa-bolt"></i>
          </div>
          <h3 className="mobile-card-title">HIZLI BAĞIŞ</h3>
          <p className="mobile-card-description">
            Yardımların gerçek ihtiyaç sahiplerine ulaşması için çalışıyoruz.
          </p>
          
          <div className="mobile-card-form">
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="mobile-card-select"
            >
              {donationCategories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
            
            <div className="mobile-card-amount-container">
              <input
                type="number"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                placeholder="Bağış miktarını giriniz"
                className="mobile-card-amount-input"
                min="0"
                step="0.01"
              />
              <span className="mobile-card-currency">₺</span>
            </div>
          </div>
          
          <button 
            className="mobile-card-donate-btn"
            onClick={addToCart}
          >
            <i className="fas fa-shopping-cart"></i>
            <span>SEPETE EKLE</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuickDonationSection;
