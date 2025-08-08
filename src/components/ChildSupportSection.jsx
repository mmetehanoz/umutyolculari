import React, { useState } from 'react';
import './ChildSupportSection.css';
import child00 from '../assets/child-support-section/child/child-00.png';
import childEat from '../assets/child-support-section/child/child-eat.png';
import childToy from '../assets/child-support-section/child/child-toy.png';
import childBag from '../assets/child-support-section/child/child-bag.png';
import childEatToy from '../assets/child-support-section/child/chil-eat-toy.png';
import childToyBag from '../assets/child-support-section/child/child-toy-bag.png';
import childToyEatBag from '../assets/child-support-section/child/child-toy-eat-bag.png';
import foodIcon from '../assets/child-support-section/elements/food.png';
import toyIcon from '../assets/child-support-section/elements/toy.png';
import bagIcon from '../assets/child-support-section/elements/bag.png';
import clothesIcon from '../assets/child-support-section/elements/clothes .png';

const products = [
  {
    key: 'food',
    name: 'Yemek',
    price: 180,
    img: foodIcon,
    childImg: childEat, // yemek
  },
  {
    key: 'toy',
    name: 'Oyuncak',
    price: 150,
    img: toyIcon,
    childImg: childToy, // oyuncak
  },
  {
    key: 'stationery',
    name: 'Kırtasiye',
    price: 150,
    img: bagIcon,
    childImg: childBag, // kırtasiye
  },
  {
    key: 'clothes',
    name: 'Giyecek',
    price: 250,
    img: clothesIcon,
    childImg: child00, // giyecek (varsayılan)
  },
];

const defaultChildImg = child00;

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
  
  // Çocuk görselini seçilen ürünlere göre belirle
  const getChildImage = () => {
    const selectedProducts = Object.keys(counts).filter(key => counts[key] > 0);
    
    if (selectedProducts.length === 0) {
      return defaultChildImg;
    }
    
    if (selectedProducts.length === 1) {
      const product = products.find(p => p.key === selectedProducts[0]);
      return product?.childImg || defaultChildImg;
    }
    
    // Birden fazla ürün seçildiğinde kombinasyon görsellerini kullan
    if (selectedProducts.includes('food') && selectedProducts.includes('toy') && selectedProducts.includes('stationery')) {
      return childToyEatBag;
    } else if (selectedProducts.includes('toy') && selectedProducts.includes('stationery')) {
      return childToyBag;
    } else if (selectedProducts.includes('food') && selectedProducts.includes('toy')) {
      return childEatToy;
    } else {
      // İlk seçilen ürünün görselini göster
      const firstProduct = products.find(p => p.key === selectedProducts[0]);
      return firstProduct?.childImg || defaultChildImg;
    }
  };
  
  const childImg = getChildImage();

  return (
    <section className="child-support-section">
      <h2>Merhaba, <b>benim adım Ahmet!</b></h2>
      <p className="child-support-desc">Dünyada yüz binlerce çocuk zor şartlarda eğitim almaya çalışıyor. Destek olarak bir çocuğu mutlu etmeye ne dersiniz?</p>
      <div className="child-support-grid">
        <div className="child-support-col">
          <div className="child-support-card">
            <img src={products[0].img} alt="Yemek" />
            <div className="child-support-card-content">
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
          </div>
          <div className="child-support-card">
            <img src={products[2].img} alt="Kırtasiye" />
            <div className="child-support-card-content">
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
        </div>
        <div className="child-support-center">
          <img className="child-support-main-img" src={childImg} alt="Çocuk" />
          <div className="child-support-total">Toplam <b>{total}₺</b></div>
          <button className="child-support-cart-btn">Sepete Ekle</button>
        </div>
        <div className="child-support-col">
          <div className="child-support-card">
            <img src={products[1].img} alt="Oyuncak" />
            <div className="child-support-card-content">
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
          </div>
          <div className="child-support-card">
            <img src={products[3].img} alt="Giyecek" />
            <div className="child-support-card-content">
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
      </div>
    </section>
  );
};

export default ChildSupportSection; 