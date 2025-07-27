import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <span className="footer-logo">Umut Yolcuları</span>
      <span>© {new Date().getFullYear()} Umut Yolcuları İnsani Yardım Derneği. Tüm hakları saklıdır.</span>
      <div className="footer-social">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </footer>
);

export default Footer; 