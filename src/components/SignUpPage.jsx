import React, { useState } from 'react';
import './SignUpPage.css';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
    membershipAccepted: false,
    privacyAccepted: false,
    notificationsAccepted: false
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Ad Soyad zorunludur';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Cep telefonu zorunludur';
    } else if (!/^[0-9]{10,11}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Geçerli bir telefon numarası giriniz';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-posta zorunludur';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz';
    }

    if (!formData.password) {
      newErrors.password = 'Şifre zorunludur';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Şifre en az 6 karakter olmalıdır';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Şifre tekrarı zorunludur';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Şifreler eşleşmiyor';
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'Kullanım koşullarını kabul etmelisiniz';
    }

    if (!formData.membershipAccepted) {
      newErrors.membershipAccepted = 'Üyelik sözleşmesini kabul etmelisiniz';
    }

    if (!formData.privacyAccepted) {
      newErrors.privacyAccepted = 'Kişisel veri rıza metnini kabul etmelisiniz';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Form gönderme işlemi burada yapılacak
      console.log('Form data:', formData);
      alert('Üyeliğiniz başarıyla oluşturuldu!');
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-header">
          <h1>Hesap Oluştur</h1>
          <p>Bağış sistemine katıl, iyiliğe ortak ol.</p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Ad Soyad *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className={errors.fullName ? 'error' : ''}
              placeholder="Adınız ve soyadınız"
            />
            {errors.fullName && <span className="error-message">{errors.fullName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Cep Telefonu *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={errors.phone ? 'error' : ''}
              placeholder="05XX XXX XX XX"
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">E-posta *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? 'error' : ''}
              placeholder="ornek@email.com"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Şifre *</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={errors.password ? 'error' : ''}
              placeholder="En az 6 karakter"
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Şifre Tekrar *</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={errors.confirmPassword ? 'error' : ''}
              placeholder="Şifrenizi tekrar girin"
            />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
          </div>

          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleInputChange}
              />
              <span className="checkmark"></span>
              Kullanım koşullarını ve gizlilik politikasını kabul ediyorum *
            </label>
            {errors.termsAccepted && <span className="error-message">{errors.termsAccepted}</span>}
          </div>

          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="membershipAccepted"
                checked={formData.membershipAccepted}
                onChange={handleInputChange}
              />
              <span className="checkmark"></span>
              Üyelik Sözleşmesi şartlarını okudum ve kabul ediyorum *
            </label>
            {errors.membershipAccepted && <span className="error-message">{errors.membershipAccepted}</span>}
          </div>

          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="privacyAccepted"
                checked={formData.privacyAccepted}
                onChange={handleInputChange}
              />
              <span className="checkmark"></span>
              Kişisel Veri Rıza Metnini okudum ve kabul ediyorum *
            </label>
            {errors.privacyAccepted && <span className="error-message">{errors.privacyAccepted}</span>}
          </div>

          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="notificationsAccepted"
                checked={formData.notificationsAccepted}
                onChange={handleInputChange}
              />
              <span className="checkmark"></span>
              Duyuruları kaçırmamak için bilgilendirme mesajı almak istiyorum
            </label>
          </div>

          <button type="submit" className="signup-button">
            Üye Ol
          </button>
        </form>

        <div className="signup-footer">
          <p>Zaten bir hesabın var mı? <a href="/giris">Giriş yap</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage; 