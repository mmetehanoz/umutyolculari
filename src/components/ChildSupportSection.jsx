import React, { useState } from 'react';
import './ChildSupportSection.css';

// Import all child combination images
import child00 from '../assets/child-support-section/child/child-00.png';
import childQuran from '../assets/child-support-section/child/child-quran.png';
import childEnvelope from '../assets/child-support-section/child/child-envelope.png';
import childClothes from '../assets/child-support-section/child/child-clothes.png';
import childFood from '../assets/child-support-section/child/child-food.png';
import childQuranEnvelope from '../assets/child-support-section/child/child-quran-envelope.png';
import childQuranClothes from '../assets/child-support-section/child/child-quran-clothes.png';
import childQuranFood from '../assets/child-support-section/child/child-quran-food.png';
import childEnvelopeClothes from '../assets/child-support-section/child/child-envelope-clothes.png';
import childEnvelopeFood from '../assets/child-support-section/child/child-envelope-food.png';
import childClothesFood from '../assets/child-support-section/child/child-clothes-food.png';
import childQuranEnvelopeClothes from '../assets/child-support-section/child/child-quran-envelope-clothes.png';
import childQuranEnvelopeFood from '../assets/child-support-section/child/child-quran-envelope-food.png';
import childQuranClothesFood from '../assets/child-support-section/child/child-quran-clothes-food.png';
import childEnvelopeClothesFood from '../assets/child-support-section/child/child-envelope-clothes-food.png';
import childQuranEnvelopeClothesFood from '../assets/child-support-section/child/child-quran-envelope-clothes-food.png';

// Import element icons
import quranIcon from '../assets/child-support-section/elements/quran.png';
import envelopeIcon from '../assets/child-support-section/elements/envelope.png';
import clothesIcon from '../assets/child-support-section/elements/clothes.png';
import foodIcon from '../assets/child-support-section/elements/food.png';

const products = [
  {
    key: 'quran',
    name: 'Kuran-ı Kerim',
    price: 200,
    img: quranIcon,
  },
  {
    key: 'envelope',
    name: 'Zarf (Yardım Zarfı)',
    price: 150,
    img: envelopeIcon,
  },
  {
    key: 'clothes',
    name: 'Kıyafet',
    price: 250,
    img: clothesIcon,
  },
  {
    key: 'food',
    name: 'Yemek Tabağı',
    price: 180,
    img: foodIcon,
  },
];

const defaultChildImg = child00;

const ChildSupportSection = () => {
  const [counts, setCounts] = useState({ quran: 0, envelope: 0, clothes: 0, food: 0 });

  const handleChange = (key, delta) => {
    setCounts(prev => {
      const next = { ...prev, [key]: Math.max(0, prev[key] + delta) };
      return next;
    });
  };

  const total = products.reduce((sum, p) => sum + counts[p.key] * p.price, 0);
  
  // Çocuk görselini seçilen ürünlere göre belirle
  const getChildImage = () => {
    const selectedProducts = Object.keys(counts).filter(key => counts[key] > 0);
    
    if (selectedProducts.length === 0) {
      return defaultChildImg;
    }
    
    if (selectedProducts.length === 1) {
      const productKey = selectedProducts[0];
      switch (productKey) {
        case 'quran': return childQuran;
        case 'envelope': return childEnvelope;
        case 'clothes': return childClothes;
        case 'food': return childFood;
        default: return defaultChildImg;
      }
    }
    
    if (selectedProducts.length === 2) {
      // Özel sıralama: quran, envelope, clothes, food sırasında
      const sortOrder = { quran: 0, envelope: 1, clothes: 2, food: 3 };
      const sortedProducts = selectedProducts.sort((a, b) => sortOrder[a] - sortOrder[b]);
      const combination = sortedProducts.join('-');
      
      switch (combination) {
        case 'quran-envelope': return childQuranEnvelope;
        case 'quran-clothes': return childQuranClothes;
        case 'quran-food': return childQuranFood;
        case 'envelope-clothes': return childEnvelopeClothes;
        case 'envelope-food': return childEnvelopeFood;
        case 'clothes-food': return childClothesFood;
        default: return defaultChildImg;
      }
    }
    
    if (selectedProducts.length === 3) {
      // Özel sıralama: quran, envelope, clothes, food sırasında
      const sortOrder = { quran: 0, envelope: 1, clothes: 2, food: 3 };
      const sortedProducts = selectedProducts.sort((a, b) => sortOrder[a] - sortOrder[b]);
      const combination = sortedProducts.join('-');
      
      switch (combination) {
        case 'quran-envelope-clothes': return childQuranEnvelopeClothes;
        case 'quran-envelope-food': return childQuranEnvelopeFood;
        case 'quran-clothes-food': return childQuranClothesFood;
        case 'envelope-clothes-food': return childEnvelopeClothesFood;
        default: return defaultChildImg;
      }
    }
    
    if (selectedProducts.length === 4) {
      return childQuranEnvelopeClothesFood;
    }
    
    return defaultChildImg;
  };
  
  const childImg = getChildImage();

  return (
    <section className="child-support-section">
      <h2>Merhaba, <b>benim adım Ahmet!</b></h2>
      <p className="child-support-desc">Dünyada yüz binlerce çocuk zor şartlarda eğitim almaya çalışıyor. Destek olarak bir çocuğu mutlu etmeye ne dersiniz?</p>
      
      <div className="child-support-grid">
        <div className="child-support-col">
          <div className="child-support-card">
            <img src={products[0].img} alt="Kuran-ı Kerim" />
            <div className="child-support-card-content">
              <div className="child-support-label-row">
                <span className="child-support-label">{products[0].name}</span>
                <span className="child-support-price">{products[0].price}₺</span>
              </div>
              <div className="child-support-qty-row">
                <button onClick={() => handleChange('quran', -1)}>-</button>
                <span>{counts.quran}</span>
                <button onClick={() => handleChange('quran', 1)}>+</button>
              </div>
            </div>
          </div>
          
          <div className="child-support-card">
            <img src={products[1].img} alt="Zarf" />
            <div className="child-support-card-content">
              <div className="child-support-label-row">
                <span className="child-support-label">{products[1].name}</span>
                <span className="child-support-price">{products[1].price}₺</span>
              </div>
              <div className="child-support-qty-row">
                <button onClick={() => handleChange('envelope', -1)}>-</button>
                <span>{counts.envelope}</span>
                <button onClick={() => handleChange('envelope', 1)}>+</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="child-support-center">
          <img className="child-support-main-img" src={childImg} alt="Çocuk" />
          <div className="child-support-total">Toplam <b>{total}₺</b></div>
          <button className="child-support-cart-btn">Sepete Ekle</button>
        </div>
        
        <div className="child-support-col">
          <div className="child-support-card">
            <img src={products[2].img} alt="Kıyafet" />
            <div className="child-support-card-content">
              <div className="child-support-label-row">
                <span className="child-support-label">{products[2].name}</span>
                <span className="child-support-price">{products[2].price}₺</span>
              </div>
              <div className="child-support-qty-row">
                <button onClick={() => handleChange('clothes', -1)}>-</button>
                <span>{counts.clothes}</span>
                <button onClick={() => handleChange('clothes', 1)}>+</button>
              </div>
            </div>
          </div>
          
          <div className="child-support-card">
            <img src={products[3].img} alt="Yemek" />
            <div className="child-support-card-content">
              <div className="child-support-label-row">
                <span className="child-support-label">{products[3].name}</span>
                <span className="child-support-price">{products[3].price}₺</span>
              </div>
              <div className="child-support-qty-row">
                <button onClick={() => handleChange('food', -1)}>-</button>
                <span>{counts.food}</span>
                <button onClick={() => handleChange('food', 1)}>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildSupportSection; 