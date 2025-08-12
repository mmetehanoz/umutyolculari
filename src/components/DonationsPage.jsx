import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './DonationsPage.css';
import child01 from '../assets/child01.svg';
import child02 from '../assets/child02.svg';
import child03 from '../assets/child03.svg';
import child04 from '../assets/child04.svg';

const categories = [
  { id: 'all', name: 'TÜMÜ', icon: 'fas fa-th-large' },
  { id: 'kurban', name: 'KURBAN', icon: 'fas fa-cow' },
  { id: 'gida', name: 'GIDA/YEMEK', icon: 'fas fa-shopping-basket' },
  { id: 'genel', name: 'GENEL BAĞIŞ', icon: 'fas fa-hands-helping' },
  { id: 'su', name: 'SU KUYUSU', icon: 'fas fa-tint' },
  { id: 'nakit', name: 'NAKİT YARDIMI', icon: 'fas fa-money-bill-wave' },
  { id: 'acil', name: 'ACİL YARDIMLAR', icon: 'fas fa-first-aid' },
];

const donationTypes = [
  'akika', 'adak', 'sadaka', 'şükür', 'şifa', 'nafile', 'hayır', 'Allah rızası için'
];

const countries = [
  'Afrika', 'Tanzanya', 'Afganistan', 'Somali'
];

const donations = [
  // KURBAN KATEGORİSİ
  {
    id: 1,
    title: 'Kurban Bağışı Kampanyası',
    desc: 'İhtiyaç sahiplerine kurban eti dağıtımı için bağış',
    img: child01,
    percent: 82.89,
    raised: 41444,
    goal: 50000,
    category: 'kurban',
    price: 4000,
  },
  {
    id: 2,
    title: 'Adak Kurbanı Projesi',
    desc: 'Adak kurbanları için özel bağış kampanyası',
    img: child02,
    percent: 65.45,
    raised: 32725,
    goal: 50000,
    category: 'kurban',
    price: 4000,
  },
  {
    id: 3,
    title: 'Akika Kurbanı Kampanyası',
    desc: 'Yeni doğan çocuklar için akika kurbanı bağışı',
    img: child03,
    percent: 91.23,
    raised: 45615,
    goal: 50000,
    category: 'kurban',
    price: 4000,
  },
  
  // GIDA KATEGORİSİ
  {
    id: 4,
    title: 'Gıda Yardımı Kampanyası',
    desc: 'Açlıkla mücadele eden ailelere gıda yardımı',
    img: child04,
    percent: 77.28,
    raised: 16120,
    goal: 60000,
    category: 'gida',
    price: 4000,
  },
  {
    id: 5,
    title: 'Ramazan Gıda Paketi',
    desc: 'Ramazan ayında ihtiyaç sahiplerine gıda paketi dağıtımı',
    img: child01,
    percent: 88.56,
    raised: 44280,
    goal: 50000,
    category: 'gida',
    price: 4000,
  },
  {
    id: 6,
    title: 'Sıcak Yemek Projesi',
    desc: 'Günlük sıcak yemek dağıtımı için bağış kampanyası',
    img: child02,
    percent: 73.42,
    raised: 36710,
    goal: 50000,
    category: 'gida',
    price: 4000,
  },
  
  // GENEL BAĞIŞ KATEGORİSİ
  {
    id: 7,
    title: 'Genel Bağış Kampanyası',
    desc: 'Genel ihtiyaçlar için bağış kampanyası',
    img: child03,
    percent: 100,
    raised: 151342,
    goal: 60000,
    category: 'genel',
    price: 4000,
  },
  {
    id: 8,
    title: 'Sadaka Kampanyası',
    desc: 'Sadaka vermek isteyenler için özel kampanya',
    img: child04,
    percent: 85.67,
    raised: 42835,
    goal: 50000,
    category: 'genel',
    price: 4000,
  },
  {
    id: 9,
    title: 'Hayır Kampanyası',
    desc: 'Genel hayır işleri için bağış kampanyası',
    img: child01,
    percent: 92.34,
    raised: 46170,
    goal: 50000,
    category: 'genel',
    price: 4000,
  },
  
  // SU KUYUSU KATEGORİSİ
  {
    id: 10,
    title: 'Su Kuyusu Projesi',
    desc: 'Su sıkıntısı yaşayan bölgelere su kuyusu açma projesi',
    img: child02,
    percent: 72.65,
    raised: 13340,
    goal: 60000,
    category: 'su',
    price: 4000,
  },
  {
    id: 11,
    title: 'Afrika Su Kuyusu',
    desc: 'Afrika\'da su sıkıntısı yaşayan bölgelere su kuyusu',
    img: child03,
    percent: 78.91,
    raised: 39455,
    goal: 50000,
    category: 'su',
    price: 4000,
  },
  {
    id: 12,
    title: 'Asya Su Projesi',
    desc: 'Asya\'da temiz su ihtiyacı olan bölgelere yardım',
    img: child04,
    percent: 81.23,
    raised: 40615,
    goal: 50000,
    category: 'su',
    price: 4000,
  },
  
  // NAKİT YARDIM KATEGORİSİ
  {
    id: 13,
    title: 'Nakit Yardım Kampanyası',
    desc: 'Acil nakit ihtiyacı olan ailelere yardım',
    img: child01,
    percent: 100,
    raised: 86410,
    goal: 60000,
    category: 'nakit',
    price: 4000,
  },
  {
    id: 14,
    title: 'Acil Nakit Yardımı',
    desc: 'Acil durumlarda nakit yardımı ihtiyacı olanlara destek',
    img: child02,
    percent: 87.45,
    raised: 43725,
    goal: 50000,
    category: 'nakit',
    price: 4000,
  },
  {
    id: 15,
    title: 'Aile Destek Projesi',
    desc: 'Maddi sıkıntı yaşayan ailelere nakit yardımı',
    img: child03,
    percent: 94.67,
    raised: 47335,
    goal: 50000,
    category: 'nakit',
    price: 4000,
  },
  
  // ACİL YARDIM KATEGORİSİ
  {
    id: 16,
    title: 'Acil Tıbbi Yardım',
    desc: 'Acil tıbbi müdahale gerektiren durumlar için bağış',
    img: child04,
    percent: 100,
    raised: 70683,
    goal: 60000,
    category: 'acil',
    price: 4000,
  },
  {
    id: 17,
    title: 'Hastane Tedavi Kampanyası',
    desc: 'Hastane tedavisi gerektiren hastalar için bağış',
    img: child01,
    percent: 89.34,
    raised: 44670,
    goal: 50000,
    category: 'acil',
    price: 4000,
  },
  {
    id: 18,
    title: 'İlaç Yardımı Projesi',
    desc: 'İlaç ihtiyacı olan hastalar için bağış kampanyası',
    img: child02,
    percent: 76.89,
    raised: 38445,
    goal: 50000,
    category: 'acil',
    price: 4000,
  },
];

const DonationsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('all');
  const [donationForms, setDonationForms] = useState(() => {
    const defaultForms = {};
    donations.forEach(donation => {
      defaultForms[donation.id] = {
        type: donationTypes[0],
        country: countries[0],
        quantity: 1
      };
    });
    return defaultForms;
  });

  // URL'den kategori parametresini oku
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl && categories.find(cat => cat.id === categoryFromUrl)) {
      setActiveCategory(categoryFromUrl);
    }
  }, [searchParams]);

  // Kategori değiştiğinde URL'yi güncelle
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    if (categoryId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  const filteredDonations = activeCategory === 'all' 
    ? donations 
    : donations.filter(donation => donation.category === activeCategory);

  const handleFormChange = (donationId, field, value) => {
    setDonationForms(prev => ({
      ...prev,
      [donationId]: {
        ...prev[donationId],
        [field]: value
      }
    }));
  };

  const calculateTotal = (donationId) => {
    const form = donationForms[donationId];
    if (!form || !form.quantity) return 0;
    const donation = donations.find(d => d.id === donationId);
    return form.quantity * donation.price;
  };

  // Sepete ekleme fonksiyonu
  const addToCart = (donation) => {
    const formData = donationForms[donation.id];
    if (!formData || !formData.type || !formData.country || !formData.quantity) {
      alert('Lütfen tüm alanları doldurun.');
      return;
    }

    // Sepet verilerini localStorage'a kaydet
    const cartItem = {
      id: donation.id,
      name: donation.title,
      description: donation.desc,
      price: donation.price,
      quantity: formData.quantity,
      type: formData.type,
      country: formData.country,
      image: donation.img,
      category: donation.category
    };

    const existingCart = JSON.parse(localStorage.getItem('charityCart') || '[]');
    const existingItemIndex = existingCart.findIndex(item => item.id === donation.id);
    
    if (existingItemIndex > -1) {
      existingCart[existingItemIndex].quantity += formData.quantity;
    } else {
      existingCart.push(cartItem);
    }

    localStorage.setItem('charityCart', JSON.stringify(existingCart));
    
    // Navbar'daki sepet sayısını güncelle
    window.dispatchEvent(new Event('cartUpdated'));
    
    // Form'u temizle
    setDonationForms(prev => ({
      ...prev,
      [donation.id]: { type: donationTypes[0], country: countries[0], quantity: 1 }
    }));

    alert('Ürün sepete eklendi! Sepetinizi görmek için üst menüdeki sepet ikonuna tıklayın.');
  };

  return (
    <section className="donations-page-section">
      <div className="donations-page-header">
        <span className="donations-page-subtitle"><i className="far fa-heart"></i> Bağış Yapmaya Başlayalım</span>
        <h2>Etkinizi Görün: Şeffaf<br/>Bağış Kampanyaları</h2>
      </div>
      
      <div className="donations-categories">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-filter-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category.id)}
          >
            <i className={category.icon}></i>
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      <div className="donations-page-grid">
        {filteredDonations.map((don) => (
          <div className="donations-page-card" key={don.id}>
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
                <span>Toplanan <b>₺{don.raised.toLocaleString()}</b></span>
                <span>Hedef <b>₺{don.goal.toLocaleString()}</b></span>
              </div>
              
              {/* Bağış Formu */}
              <div className="donation-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Bağış Türü:</label>
                    <div className="select-wrapper">
                      <select 
                        value={donationForms[don.id]?.type || donationTypes[0]}
                        onChange={(e) => handleFormChange(don.id, 'type', e.target.value)}
                      >
                        {donationTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      <i className="fas fa-chevron-down select-arrow"></i>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Ülke:</label>
                    <div className="select-wrapper">
                      <select 
                        value={donationForms[don.id]?.country || countries[0]}
                        onChange={(e) => handleFormChange(don.id, 'country', e.target.value)}
                      >
                        {countries.map(country => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                      <i className="fas fa-chevron-down select-arrow"></i>
                    </div>
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Adet:</label>
                    <input 
                      type="number" 
                      min="1"
                      value={donationForms[don.id]?.quantity || 1}
                      onChange={(e) => handleFormChange(don.id, 'quantity', parseInt(e.target.value) || 1)}
                      placeholder="1"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Fiyat:</label>
                    <div className="price-display">
                      <span className="price-value">₺{don.price.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                <div className="total-section">
                  <span className="total-label">Toplam:</span>
                  <span className="total-value">₺{calculateTotal(don.id).toLocaleString()}</span>
                </div>
                
                <button className="donations-page-btn" onClick={() => addToCart(don)}>
                  <i className="fas fa-shopping-cart"></i> Sepete Ekle
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DonationsPage; 