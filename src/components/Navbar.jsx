import React, { useState } from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountPopupOpen, setIsAccountPopupOpen] = useState(false);
  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleAccountPopup = () => {
    setIsAccountPopupOpen(!isAccountPopupOpen);
  };

  const toggleSearchPopup = () => {
    setIsSearchPopupOpen(!isSearchPopupOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Arama işlemi burada yapılacak
    console.log('Aranan:', searchTerm);
    setIsSearchPopupOpen(false);
    setSearchTerm('');
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      // Başarılı kopyalama mesajı gösterilebilir
    });
  };

  const copyAllAccountInfo = () => {
    const accountInfo = `Hesap Adı: Umut Yolcuları İnsani Yardım Derneği
Banka Adı: Ziraat Bankası
IBAN: TR33 0001 0002 3456 7890 1234 56`;
    
    copyToClipboard(accountInfo);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-topbar">
        <div className="navbar-logo-area">
          <Link to="/" className="navbar-logo-link">
            <img src={logo} alt="Umut Yolcuları" className="navbar-logo-img" />
          </Link>
        </div>
        <div className="navbar-info-group">
          <div className="navbar-info-box">
            <span className="navbar-info-icon bg-green"><i className="fas fa-map-marker-alt"></i></span>
            <div className="navbar-info-texts">
              <span className="navbar-info-label">Adres:</span>
              <span className="navbar-info-value">İstanbul, Türkiye</span>
            </div>
          </div>
          <div className="navbar-info-divider" />
          <div className="navbar-info-box">
            <span className="navbar-info-icon bg-green"><i className="fas fa-phone-alt"></i></span>
            <div className="navbar-info-texts">
              <span className="navbar-info-label">Telefon:</span>
              <span className="navbar-info-value">+90 599 123 45 67</span>
            </div>
          </div>
          <div className="navbar-info-divider" />
          <div className="navbar-info-box">
            <span className="navbar-info-icon bg-green"><i className="fas fa-envelope"></i></span>
            <div className="navbar-info-texts">
              <span className="navbar-info-label">E-posta:</span>
              <span className="navbar-info-value">info@umutyolculari.com</span>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar-menu-bar">
        <ul className={`navbar-menu-list ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><Link to="/" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>Ana Sayfa <i className="fas fa-chevron-down"></i></Link></li>
          <li><Link to="/about" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>Hakkımızda</Link></li>
          <li className="dropdown-menu">
            <div className="navbar-link-container">
              <Link to="/donations" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>Bağışlar</Link>
              <span className="dropdown-toggle"><i className="fas fa-chevron-down"></i></span>
            </div>
            <div className="dropdown-content">
              <Link to="/donations" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-th-large"></i>
                <span>Tüm Bağışlar</span>
              </Link>
              <Link to="/donations?category=kurban" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-cow"></i>
                <span>Kurban</span>
              </Link>
              <Link to="/donations?category=gida" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-shopping-basket"></i>
                <span>Gıda/Yemek</span>
              </Link>
              <Link to="/donations?category=genel" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-hands-helping"></i>
                <span>Genel Bağış</span>
              </Link>
              <Link to="/donations?category=su" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-tint"></i>
                <span>Su Kuyusu</span>
              </Link>
              <Link to="/donations?category=nakit" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-money-bill-wave"></i>
                <span>Nakit Yardımı</span>
              </Link>
              <Link to="/donations?category=acil" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-first-aid"></i>
                <span>Acil Yardımlar</span>
              </Link>
            </div>
          </li>
          <li className="dropdown-menu">
            <span className="navbar-link">Basın <i className="fas fa-chevron-down"></i></span>
            <div className="dropdown-content">
              <Link to="/press/videos" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-video"></i>
                <span>Videolar</span>
              </Link>
              <Link to="/press/news" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-newspaper"></i>
                <span>Haberler</span>
              </Link>
              <Link to="/press/gallery" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-images"></i>
                <span>Galeri</span>
              </Link>
            </div>
          </li>
          <li>Blog <i className="fas fa-chevron-down"></i></li>
          <li>İletişim</li>
        </ul>
        <div className="navbar-menu-actions">
          <div className="search-popup-container">
            <button className="navbar-menu-btn search" onClick={toggleSearchPopup}>
              <i className="fas fa-search"></i>
            </button>
            {isSearchPopupOpen && (
              <div className="search-popup">
                <div className="search-popup-header">
                  <h3>Site İçinde Ara</h3>
                  <button className="popup-close" onClick={toggleSearchPopup}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                <form className="search-popup-content" onSubmit={handleSearch}>
                  <div className="search-input-group">
                    <input
                      type="text"
                      placeholder="Ne aramıştınız?"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="search-input"
                      autoFocus
                    />
                    <button type="submit" className="search-submit-btn">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                  <div className="search-suggestions">
                    <h4>Popüler Aramalar:</h4>
                    <div className="suggestion-tags">
                      <span className="suggestion-tag" onClick={() => setSearchTerm('Bağış')}>Bağış</span>
                      <span className="suggestion-tag" onClick={() => setSearchTerm('Projeler')}>Projeler</span>
                      <span className="suggestion-tag" onClick={() => setSearchTerm('Yardım')}>Yardım</span>
                      <span className="suggestion-tag" onClick={() => setSearchTerm('Kampanya')}>Kampanya</span>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
          <button className="navbar-menu-btn cart">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">0</span>
          </button>
          <button className="navbar-menu-btn signup" onClick={() => navigate('/signup')}>
            <i className="fas fa-user-plus"></i> <span>Üye Ol</span>
          </button>
          <button className="navbar-menu-btn donate">
            <i className="fas fa-heart"></i> <span>Bağış Yap</span>
          </button>
          <div className="account-popup-container">
            <button className="navbar-menu-btn account" onClick={toggleAccountPopup}>
              <i className="fas fa-university"></i> Hesap Bilgileri
            </button>
            {isAccountPopupOpen && (
              <div className="account-popup">
                <div className="account-popup-header">
                  <h3>Hesap Bilgileri</h3>
                  <button className="popup-close" onClick={toggleAccountPopup}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                <div className="account-popup-content">
                  <div className="account-info-item">
                    <div className="account-info-label">Hesap Adı:</div>
                    <div className="account-info-value">Umut Yolcuları İnsani Yardım Derneği</div>
                    <button 
                      className="copy-btn" 
                      onClick={() => copyToClipboard('Umut Yolcuları İnsani Yardım Derneği')}
                      title="Kopyala"
                    >
                      <i className="fas fa-copy"></i>
                    </button>
                  </div>
                  <div className="account-info-item">
                    <div className="account-info-label">Banka Adı:</div>
                    <div className="account-info-value">Ziraat Bankası</div>
                    <button 
                      className="copy-btn" 
                      onClick={() => copyToClipboard('Ziraat Bankası')}
                      title="Kopyala"
                    >
                      <i className="fas fa-copy"></i>
                    </button>
                  </div>
                  <div className="account-info-item">
                    <div className="account-info-label">IBAN:</div>
                    <div className="account-info-value">TR33 0001 0002 3456 7890 1234 56</div>
                    <button 
                      className="copy-btn" 
                      onClick={() => copyToClipboard('TR33 0001 0002 3456 7890 1234 56')}
                      title="Kopyala"
                    >
                      <i className="fas fa-copy"></i>
                    </button>
                  </div>
                  <div className="account-info-item important-note">
                    <div className="account-info-label">Önemli Not:</div>
                    <div className="account-info-value">Açıklama kısmına, telefon numarası ve bağış türü yazılmalıdır.</div>
                  </div>
                  <button className="copy-all-btn" onClick={copyAllAccountInfo}>
                    <i className="fas fa-copy"></i> Tümünü Kopyala
                  </button>
                </div>
              </div>
            )}
          </div>
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 