import React from 'react';
import './FitrePage.css';

const FitrePage = () => {
  return (
    <div className="fitre-page">
      <div className="fitre-hero">
        <div className="fitre-hero-content">
          <h1>Fitre Nedir?</h1>
          <p>Ramazan ayında verilen sadaka-i fıtır hakkında detaylı bilgi</p>
        </div>
      </div>
      
      <div className="fitre-content">
        <div className="container">
          <div className="fitre-section">
            <h2>Fitrenin Tanımı</h2>
            <p>
              Fitre (Sadaka-i Fıtır), Ramazan ayının sonunda, bayram namazından önce 
              verilmesi gereken bir sadaka türüdür. Bu sadaka, kişinin kendisi ve bakmakla 
              yükümlü olduğu kimseler için verilir.
            </p>
          </div>

          <div className="fitre-section">
            <h2>Fitrenin Hükmü</h2>
            <div className="ruling-content">
              <div className="ruling-text">
                <p>
                  Fitre, Hanefi mezhebine göre vacip, diğer mezheplere göre ise farzdır. 
                  Ramazan ayında oruç tutan veya tutamayan her Müslüman için verilmesi gerekir.
                </p>
                <div className="ruling-details">
                  <div className="ruling-item">
                    <h4>Hanefi Mezhebi</h4>
                    <p>Vacip (verilmesi gerekli)</p>
                  </div>
                  <div className="ruling-item">
                    <h4>Şafi, Maliki, Hanbeli</h4>
                    <p>Farz (kesinlikle gerekli)</p>
                  </div>
                </div>
              </div>
              <div className="ruling-image">
                <i className="fas fa-balance-scale"></i>
              </div>
            </div>
          </div>

          <div className="fitre-section">
            <h2>Fitre Vermekle Yükümlü Olanlar</h2>
            <div className="obligation-grid">
              <div className="obligation-item">
                <div className="obligation-icon">
                  <i className="fas fa-user-check"></i>
                </div>
                <h3>Müslüman Olmak</h3>
                <p>Fitre vermek için Müslüman olmak gerekir.</p>
              </div>
              
              <div className="obligation-item">
                <div className="obligation-icon">
                  <i className="fas fa-brain"></i>
                </div>
                <h3>Akıllı ve Baliğ Olmak</h3>
                <p>Akıl sağlığı yerinde ve ergenlik çağına ulaşmış olmak gerekir.</p>
              </div>
              
              <div className="obligation-item">
                <div className="obligation-icon">
                  <i className="fas fa-coins"></i>
                </div>
                <h3>Nisap Miktarı Mal</h3>
                <p>Fitre verecek kadar mal varlığına sahip olmak gerekir.</p>
              </div>
              
              <div className="obligation-item">
                <div className="obligation-icon">
                  <i className="fas fa-home"></i>
                </div>
                <h3>Hür Olmak</h3>
                <p>Köle olmamak, özgür olmak gerekir.</p>
              </div>
            </div>
          </div>

          <div className="fitre-section">
            <h2>Fitre Miktarı</h2>
            <div className="amount-info">
              <div className="amount-text">
                <p>
                  Fitre miktarı, kişi başına bir günlük yemek parası kadardır. 
                  Bu miktar, bulunulan yerdeki yaygın gıda maddelerinden birinin 
                  günlük tüketim miktarına göre hesaplanır.
                </p>
                <div className="amount-examples">
                  <h4>Örnek Fitre Miktarları (2024):</h4>
                  <div className="amount-grid">
                    <div className="amount-item">
                      <span className="amount-label">Buğday:</span>
                      <span className="amount-value">~45 TL</span>
                    </div>
                    <div className="amount-item">
                      <span className="amount-label">Arpa:</span>
                      <span className="amount-value">~35 TL</span>
                    </div>
                    <div className="amount-item">
                      <span className="amount-label">Kuru Üzüm:</span>
                      <span className="amount-value">~55 TL</span>
                    </div>
                    <div className="amount-item">
                      <span className="amount-label">Hurma:</span>
                      <span className="amount-value">~65 TL</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="amount-image">
                <i className="fas fa-calculator"></i>
              </div>
            </div>
          </div>

          <div className="fitre-section">
            <h2>Fitre Verilecek Kişiler</h2>
            <div className="recipients-list">
              <div className="recipient-category">
                <h3>Birincil Öncelik</h3>
                <div className="recipient-items">
                  <div className="recipient-item">
                    <i className="fas fa-user-friends"></i>
                    <span>Fakir akrabalar</span>
                  </div>
                  <div className="recipient-item">
                    <i className="fas fa-home"></i>
                    <span>Komşular</span>
                  </div>
                  <div className="recipient-item">
                    <i className="fas fa-mosque"></i>
                    <span>Camii cemaati</span>
                  </div>
                </div>
              </div>
              
              <div className="recipient-category">
                <h3>Genel Yardım</h3>
                <div className="recipient-items">
                  <div className="recipient-item">
                    <i className="fas fa-hands-helping"></i>
                    <span>Fakir Müslümanlar</span>
                  </div>
                  <div className="recipient-item">
                    <i className="fas fa-graduation-cap"></i>
                    <span>Öğrenciler</span>
                  </div>
                  <div className="recipient-item">
                    <i className="fas fa-heart"></i>
                    <span>İhtiyaç sahipleri</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fitre-section">
            <h2>Fitrenin Verilme Zamanı</h2>
            <div className="timing-info">
              <div className="timing-options">
                <div className="timing-option">
                  <h4>En İyi Zaman</h4>
                  <p>Ramazan ayının son günleri</p>
                  <div className="timing-icon">
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                
                <div className="timing-option">
                  <h4>Mübah Zaman</h4>
                  <p>Ramazan ayının başından itibaren</p>
                  <div className="timing-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                </div>
                
                <div className="timing-option">
                  <h4>Son Tarih</h4>
                  <p>Bayram namazından önce</p>
                  <div className="timing-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fitre-section">
            <h2>Fitrenin Önemi ve Faydaları</h2>
            <div className="benefits-content">
              <div className="benefits-text">
                <p>
                  Fitre, Ramazan ayının manevi atmosferini tamamlayan, toplumsal 
                  dayanışmayı güçlendiren önemli bir ibadettir:
                </p>
                <ul>
                  <li>Ramazan orucunun kabul olmasına yardımcı olur</li>
                  <li>Fakirlerin bayram sevincine ortak olmasını sağlar</li>
                  <li>Toplumsal yardımlaşmayı artırır</li>
                  <li>Kişinin manevi gelişimine katkıda bulunur</li>
                  <li>Allah'ın rızasını kazanmaya vesile olur</li>
                </ul>
              </div>
              <div className="benefits-image">
                <i className="fas fa-heart"></i>
              </div>
            </div>
          </div>

          <div className="fitre-section">
            <h2>Fitre Hesaplama ve Verme</h2>
            <div className="calculation-info">
              <p>
                Fitre miktarını hesaplamak için derneğimizle iletişime geçebilir veya 
                online hesaplama araçlarımızı kullanabilirsiniz. Fitre, nakit para olarak 
                verilebileceği gibi, gıda maddesi olarak da verilebilir.
              </p>
              <div className="calculation-tips">
                <h4>Önemli Notlar:</h4>
                <ul>
                  <li>Fitre, kişi başına hesaplanır</li>
                  <li>Bakmakla yükümlü olunan kişiler için de verilir</li>
                  <li>En az bir günlük yemek parası kadar olmalıdır</li>
                  <li>Bayram namazından sonra verilirse kaza edilmesi gerekir</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitrePage;
