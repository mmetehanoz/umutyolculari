import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserDashboard.css';

const UserDashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('hesap-ozeti');

  // Mock user data
  const userData = {
    name: 'Metehan Öztürk',
    role: 'Hesabınızı Yönetin',
    totalDonations: 11798.00,
    groupDonations: 0.00,
    corporateDonations: 0.00,
    smsDonations: 4,
    sacrificeShares: 0,
    katarakt: 0,
    yetim: 0,
    iydDonations: 0.00,
    duzenliDonations: 0
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
    
    // Navbar'ı güncelle
    window.dispatchEvent(new Event('loginStatusChanged'));
    
    alert('Başarıyla çıkış yapıldı!');
    navigate('/');
  };

  const recentDonations = [
    { id: 1, name: 'Ormanlarımızı Birlikte Yeşertelim', date: '12.08.2025', amount: 70.00 },
    { id: 2, name: 'İftar Yemeği', date: '26.03.2025', amount: 360.00 },
    { id: 3, name: 'Fitre', date: '26.03.2025', amount: 360.00 },
    { id: 4, name: 'Yetim (Mevcut Sponsorluk)', date: '04.01.2024', amount: 400.00 },
    { id: 5, name: 'Gazze İftar Projesi', date: '27.11.2023', amount: 100.00 }
  ];

  const menuItems = [
    { key: 'hesap-ozeti', icon: 'fas fa-chart-pie', label: 'Hesap Özeti' },
    { key: 'bireysel-bagislarim', icon: 'fas fa-heart', label: 'Bireysel Bağışlarım' },
    { key: 'kurumsal-bagislarim', icon: 'fas fa-building', label: 'Kurumsal Bağışlarım' },
    { key: 'grup-bagislarim', icon: 'fas fa-users', label: 'Grup Bağışlarım' },
    { key: 'duzenli-bagislarim', icon: 'fas fa-calendar-alt', label: 'Düzenli Bağışlarım' },
    { key: 'kurban-hisselerim', icon: 'fas fa-moon', label: 'Kurban Hisselerim' },
    { key: 'katarakt-bagislarim', icon: 'fas fa-eye', label: 'Katarakt Bağışlarım' },
    { key: 'egitim-sponsorluklarim', icon: 'fas fa-graduation-cap', label: 'Eğitim Sponsorluklarım' },
    { key: 'sms-bagislarim', icon: 'fas fa-sms', label: 'SMS Bağışlarım' },
    { key: 'partner-iyd-bagislarim', icon: 'fas fa-handshake', label: 'Partner / IYD Bağışlarım' },
    { key: 'yetimlerim', icon: 'fas fa-child', label: 'Yetimlerim' },
    { key: 'gonullu-hesabi', icon: 'fas fa-hands-helping', label: 'Gönüllü Hesabı' },
    { key: 'insan-kaynaklari', icon: 'fas fa-user-tie', label: 'İnsan Kaynakları' },
    { key: 'hesap-ayarlari', icon: 'fas fa-cog', label: 'Hesap Ayarları' }
  ];

  const renderMainContent = () => {
    if (activeSection === 'hesap-ozeti') {
      return (
        <div className="dashboard-main-content">
          <div className="user-welcome">
            <div className="user-avatar">
              <span>MÖ</span>
            </div>
            <div className="user-info">
              <h2>{userData.name}</h2>
              <p>{userData.role}</p>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card primary">
              <h3>BİREYSEL BAĞIŞLARIM</h3>
              <div className="stat-amount">₺{userData.totalDonations.toLocaleString()}</div>
            </div>
            <div className="stat-card">
              <h3>GRUP BAĞIŞLARIM</h3>
              <div className="stat-amount">₺{userData.groupDonations.toFixed(2)}</div>
            </div>
            <div className="stat-card">
              <h3>KURUMSAL BAĞIŞLARIM</h3>
              <div className="stat-amount">₺{userData.corporateDonations.toFixed(2)}</div>
            </div>
          </div>

          <div className="stats-grid secondary">
            <div className="stat-card small">
              <div className="stat-icon">
                <i className="fas fa-sms"></i>
              </div>
              <h4>SMS BAĞIŞLARIM</h4>
              <div className="stat-number">{userData.smsDonations} Adet</div>
            </div>
            <div className="stat-card small">
              <div className="stat-icon">
                <i className="fas fa-moon"></i>
              </div>
              <h4>KURBAN HİSSELERİM</h4>
              <div className="stat-number">{userData.sacrificeShares} Hisse</div>
            </div>
            <div className="stat-card small">
              <div className="stat-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h4>IYD BAĞIŞLARIM</h4>
              <div className="stat-number">₺{userData.iydDonations.toFixed(2)}</div>
            </div>
          </div>

          <div className="stats-grid secondary">
            <div className="stat-card small">
              <div className="stat-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h4>KATARAKT</h4>
              <div className="stat-number">{userData.katarakt} Tedavi</div>
            </div>
            <div className="stat-card small">
              <div className="stat-icon">
                <i className="fas fa-smile"></i>
              </div>
              <h4>YETİM</h4>
              <div className="stat-number">{userData.yetim} Yetim</div>
            </div>
            <div className="stat-card small">
              <div className="stat-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <h4>DÜZENLİ BAĞIŞ</h4>
              <div className="stat-number">{userData.duzenliDonations} Talimat</div>
            </div>
          </div>

          <div className="recent-donations">
            <div className="section-header">
              <h3><i className="fas fa-history"></i> Son Bağışlarım</h3>
            </div>
            <div className="donations-table">
              {recentDonations.map(donation => (
                <div key={donation.id} className="donation-row">
                  <div className="donation-name">{donation.name}</div>
                  <div className="donation-date">{donation.date}</div>
                  <div className="donation-amount">₺{donation.amount.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="dashboard-main-content">
        <div className="coming-soon">
          <i className="fas fa-tools"></i>
          <h3>{menuItems.find(item => item.key === activeSection)?.label}</h3>
          <p>Bu bölüm yakında aktif olacak.</p>
        </div>
      </div>
    );
  };

  return (
    <div className="user-dashboard">
      <div className="dashboard-container">
        <div className="dashboard-sidebar">
          <div className="sidebar-menu">
            {menuItems.map(item => (
              <div
                key={item.key}
                className={`menu-item ${activeSection === item.key ? 'active' : ''}`}
                onClick={() => setActiveSection(item.key)}
              >
                <i className={item.icon}></i>
                <span>{item.label}</span>
                {activeSection === item.key && <i className="fas fa-chevron-right"></i>}
              </div>
            ))}
          </div>
          <div className="sidebar-footer">
            <div className="logout-btn" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i>
              <span>ÇIKIŞ YAP</span>
            </div>
          </div>
        </div>

        <div className="dashboard-main">
          {renderMainContent()}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
