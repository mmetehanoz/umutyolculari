import React, { useState, useEffect } from 'react';
import './CartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // localStorage'dan sepet verilerini yükle
  useEffect(() => {
    const savedCart = localStorage.getItem('charityCart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Sepet verilerini localStorage'a kaydet
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('charityCart', JSON.stringify(cartItems));
    } else {
      localStorage.removeItem('charityCart');
    }
    
    // Navbar'daki sepet sayısını güncelle
    window.dispatchEvent(new Event('cartUpdated'));
  }, [cartItems]);

  const [donorInfo, setDonorInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'Türkiye',
    zipCode: '',
    anonymous: false,
    recurring: false,
    frequency: 'monthly'
  });

  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [agreement, setAgreement] = useState(false);

  // Toplam tutarı hesapla
  const totalAmount = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  // Sepetten ürün kaldır
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Ürün miktarını güncelle
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Donor bilgilerini güncelle
  const handleDonorChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDonorInfo(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Ödeme yöntemini güncelle
  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
  };

  // Form gönderimi
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!agreement) {
      alert('Lütfen şartları kabul edin.');
      return;
    }

    // Burada ödeme işlemi yapılacak
    console.log('Ödeme bilgileri:', {
      cartItems,
      donorInfo,
      paymentMethod,
      totalAmount
    });

    alert('Bağışınız için teşekkürler! Ödeme işlemi başlatılıyor...');
  };

  // Sepet boşsa
  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <div className="empty-cart-icon">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <h2>Sepetiniz Boş</h2>
            <p>Henüz sepetinize ürün eklemediniz.</p>
            <a href="/donations" className="continue-shopping-btn">
              Bağış Yapmaya Başla
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1>Bağış Sepeti</h1>
          <p>Sepetinizdeki yardım paketlerini gözden geçirin ve ödeme bilgilerinizi girin</p>
        </div>

        <div className="cart-content">
          {/* Sol taraf - Sepet ürünleri */}
          <div className="cart-items-section">
            <h2>Sepetinizdeki Ürünler ({cartItems.length})</h2>
            
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} onError={(e) => {
                      e.target.src = `https://via.placeholder.com/80x80/1a7c6b/ffffff?text=${item.name.charAt(0)}`;
                    }} />
                  </div>
                  
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="item-category">
                      <span className={`category-badge ${item.category}`}>
                        {item.category === 'education' && 'Eğitim'}
                        {item.category === 'food' && 'Gıda'}
                        {item.category === 'clothing' && 'Kıyafet'}
                      </span>
                    </div>
                  </div>

                  <div className="item-quantity">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="quantity-btn"
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                    <span className="quantity-number">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>

                  <div className="item-price">
                    <span className="price-amount">₺{item.price * item.quantity}</span>
                    <span className="price-unit">₺{item.price} / adet</span>
                  </div>

                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="remove-item-btn"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-row">
                <span>Ara Toplam:</span>
                <span>₺{totalAmount}</span>
              </div>
              <div className="summary-row">
                <span>İşlem Ücreti:</span>
                <span>₺0</span>
              </div>
              <div className="summary-row total">
                <span>Toplam:</span>
                <span>₺{totalAmount}</span>
              </div>
              
              <button 
                onClick={() => {
                  setCartItems([]);
                  alert('Sepet temizlendi!');
                }}
                className="clear-cart-btn"
              >
                <i className="fas fa-trash"></i> Sepeti Temizle
              </button>
            </div>
          </div>

          {/* Sağ taraf - Ödeme formu */}
          <div className="payment-section">
            <h2>Ödeme Bilgileri</h2>
            
            <form onSubmit={handleSubmit} className="payment-form">
              {/* Kişisel Bilgiler */}
              <div className="form-section">
                <h3>Kişisel Bilgiler</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">Ad *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={donorInfo.firstName}
                      onChange={handleDonorChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Soyad *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={donorInfo.lastName}
                      onChange={handleDonorChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">E-posta *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={donorInfo.email}
                      onChange={handleDonorChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={donorInfo.phone}
                      onChange={handleDonorChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="address">Adres</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={donorInfo.address}
                    onChange={handleDonorChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">Şehir</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={donorInfo.city}
                      onChange={handleDonorChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="zipCode">Posta Kodu</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={donorInfo.zipCode}
                      onChange={handleDonorChange}
                    />
                  </div>
                </div>
              </div>

              {/* Bağış Seçenekleri */}
              <div className="form-section">
                <h3>Bağış Seçenekleri</h3>
                
                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="anonymous"
                      checked={donorInfo.anonymous}
                      onChange={handleDonorChange}
                    />
                    <span className="checkmark"></span>
                    Anonim bağış yapmak istiyorum
                  </label>
                </div>

                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="recurring"
                      checked={donorInfo.recurring}
                      onChange={handleDonorChange}
                    />
                    <span className="checkmark"></span>
                    Düzenli bağış yapmak istiyorum
                  </label>
                </div>

                {donorInfo.recurring && (
                  <div className="form-group">
                    <label htmlFor="frequency">Bağış Sıklığı</label>
                    <select
                      id="frequency"
                      name="frequency"
                      value={donorInfo.frequency}
                      onChange={handleDonorChange}
                    >
                      <option value="monthly">Aylık</option>
                      <option value="quarterly">3 Aylık</option>
                      <option value="yearly">Yıllık</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Ödeme Yöntemi */}
              <div className="form-section">
                <h3>Ödeme Yöntemi</h3>
                
                <div className="payment-methods">
                  <label className="payment-method">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credit-card"
                      checked={paymentMethod === 'credit-card'}
                      onChange={() => handlePaymentChange('credit-card')}
                    />
                    <span className="checkmark"></span>
                    <i className="fas fa-credit-card"></i>
                    Kredi Kartı
                  </label>

                  <label className="payment-method">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank-transfer"
                      checked={paymentMethod === 'bank-transfer'}
                      onChange={() => handlePaymentChange('bank-transfer')}
                    />
                    <span className="checkmark"></span>
                    <i className="fas fa-university"></i>
                    Banka Havalesi
                  </label>

                  <label className="payment-method">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={() => handlePaymentChange('paypal')}
                    />
                    <span className="checkmark"></span>
                    <i className="fab fa-paypal"></i>
                    PayPal
                  </label>
                </div>
              </div>

              {/* Şartlar */}
              <div className="form-section">
                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={agreement}
                      onChange={(e) => setAgreement(e.target.checked)}
                      required
                    />
                    <span className="checkmark"></span>
                    <span className="agreement-text">
                      <a href="#" className="underline-link">Üyelik Sözleşmesi</a> ve{' '}
                      <a href="#" className="underline-link">Kişisel Veri Rıza Metni</a>ni okudum ve kabul ediyorum.
                    </span>
                  </label>
                </div>
              </div>

              {/* Ödeme Butonu */}
              <div className="payment-submit">
                <button type="submit" className="pay-now-btn">
                  <i className="fas fa-heart"></i>
                  ₺{totalAmount} Bağış Yap
                </button>
                <p className="secure-payment-note">
                  <i className="fas fa-lock"></i>
                  Ödeme bilgileriniz SSL ile şifrelenerek güvenle korunmaktadır.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
