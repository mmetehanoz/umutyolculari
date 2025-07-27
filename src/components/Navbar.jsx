import React from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar-header">
      <div className="navbar-topbar">
        <div className="navbar-logo-area">
          <img src={logo} alt="Umut Yolcuları" className="navbar-logo-img" />
          <span className="navbar-logo-text">Umut Yolcuları</span>
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
        <ul className="navbar-menu-list">
          <li>Ana Sayfa <i className="fas fa-chevron-down"></i></li>
          <li>Hakkımızda</li>
          <li><Link to="/donations" className="navbar-link">Bağışlar <i className="fas fa-chevron-down"></i></Link></li>
          <li>Sayfalar <i className="fas fa-chevron-down"></i></li>
          <li>Blog <i className="fas fa-chevron-down"></i></li>
          <li>İletişim</li>
        </ul>
        <div className="navbar-menu-actions">
          <button className="navbar-menu-btn search"><i className="fas fa-search"></i></button>
          <button className="navbar-menu-btn cart">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">0</span>
          </button>
          <button className="navbar-menu-btn donate">
            <i className="fas fa-heart"></i> Bağış Yap
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 