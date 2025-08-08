import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <span className="footer-logo">Umut Yolcuları</span>
      <span>© {new Date().getFullYear()} Umut Yolcuları İnsani Yardım Derneği. Tüm hakları saklıdır.</span>
      <div className="footer-actions">
        <Link to="/signup" className="footer-signup-btn">
          <i className="fas fa-user-plus"></i> Üye Ol
        </Link>
      </div>
      <div className="footer-social">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-x-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-tiktok"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </footer>
);

export default Footer; 