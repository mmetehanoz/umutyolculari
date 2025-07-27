import React, { useState } from 'react';
import './ChildSupportSection.css';
import child01 from '../assets/child01.svg';
import child02 from '../assets/child02.svg';
import child03 from '../assets/child03.svg';
import child04 from '../assets/child04.svg';

const products = [
  {
    key: 'food',
    name: 'Yemek',
    price: 180,
    img: 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png',
    childImg: child02, // yemek
  },
  {
    key: 'toy',
    name: 'Oyuncak',
    price: 150,
    img: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png',
    childImg: child03, // oyuncak
  },
  {
    key: 'stationery',
    name: 'Kırtasiye',
    price: 150,
    img: 'https://cdn-icons-png.flaticon.com/512/2921/2921822.png',
    childImg: child04, // kırtasiye
  },
  {
    key: 'clothes',
    name: 'Giyecek',
    price: 250,
    img: 'https://cdn-icons-png.flaticon.com/512/892/892458.png',
    childImg: child04, // giyecek
  },
];

const defaultChildImg = child01;

const ChildSupportSection = () => {
  const [counts, setCounts] = useState({ food: 0, toy: 0, stationery: 0, clothes: 0 });
  const [lastAdded, setLastAdded] = useState(null);

  const handleChange = (key, delta) => {
    setCounts(prev => {
      const next = { ...prev, [key]: Math.max(0, prev[key] + delta) };
      if (delta > 0) setLastAdded(key);
      if (Object.values(next).every(v => v === 0)) setLastAdded(null);
      return next;
    });
  };

  const total = products.reduce((sum, p) => sum + counts[p.key] * p.price, 0);
  const childImg = lastAdded ? (products.find(p => p.key === lastAdded)?.childImg || defaultChildImg) : defaultChildImg;

  return (
    <section className="child-support-section">
      <h2>Merhaba, <b>benim adım Ahmet!</b></h2>
      <p className="child-support-desc">Dünyada yüz binlerce çocuk zor şartlarda eğitim almaya çalışıyor. Destek olarak bir çocuğu mutlu etmeye ne dersiniz?</p>
      <div className="child-support-grid">
        <div className="child-support-col">
          <div className="child-support-card">
            <img src={products[0].img} alt="Yemek" />
            <div className="child-support-label-row">
              <span className="child-support-label">Yemek</span>
              <span className="child-support-price">180₺</span>
            </div>
            <div className="child-support-qty-row">
              <button onClick={() => handleChange('food', -1)}>-</button>
              <span>{counts.food}</span>
              <button onClick={() => handleChange('food', 1)}>+</button>
            </div>
          </div>
          <div className="child-support-card">
            <img src={products[2].img} alt="Kırtasiye" />
            <div className="child-support-label-row">
              <span className="child-support-label">Kırtasiye</span>
              <span className="child-support-price">150₺</span>
            </div>
            <div className="child-support-qty-row">
              <button onClick={() => handleChange('stationery', -1)}>-</button>
              <span>{counts.stationery}</span>
              <button onClick={() => handleChange('stationery', 1)}>+</button>
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
            <img src={products[1].img} alt="Oyuncak" />
            <div className="child-support-label-row">
              <span className="child-support-label">Oyuncak</span>
              <span className="child-support-price">150₺</span>
            </div>
            <div className="child-support-qty-row">
              <button onClick={() => handleChange('toy', -1)}>-</button>
              <span>{counts.toy}</span>
              <button onClick={() => handleChange('toy', 1)}>+</button>
            </div>
          </div>
          <div className="child-support-card">
            <img src={products[3].img} alt="Giyecek" />
            <div className="child-support-label-row">
              <span className="child-support-label">Giyecek</span>
              <span className="child-support-price">250₺</span>
            </div>
            <div className="child-support-qty-row">
              <button onClick={() => handleChange('clothes', -1)}>-</button>
              <span>{counts.clothes}</span>
              <button onClick={() => handleChange('clothes', 1)}>+</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildSupportSection; 