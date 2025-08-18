import React from 'react';
import './ZekatPage.css';

const ZekatPage = () => {
  return (
    <div className="zekat-page">
      <div className="zekat-hero">
        <div className="zekat-hero-content">
          <h1>Zekat Nedir?</h1>
          <p>İslam'ın beş şartından biri olan zekat hakkında detaylı bilgi</p>
        </div>
      </div>
      
      <div className="zekat-content">
        <div className="container">
          <div className="zekat-section">
            <h2>Zekatın Tanımı</h2>
            <p>
              Zekat, İslam dininde belirli bir mal varlığına sahip olan Müslümanların, 
              bu varlığın belirli bir oranını (genellikle %2.5) yılda bir kez ihtiyaç 
              sahiplerine vermekle yükümlü oldukları bir ibadettir.
            </p>
          </div>

          <div className="zekat-section">
            <h2>Zekatın Farz Olma Şartları</h2>
            <div className="requirements-grid">
              <div className="requirement-item">
                <div className="requirement-icon">
                  <i className="fas fa-user"></i>
                </div>
                <h3>Müslüman Olmak</h3>
                <p>Zekat vermekle yükümlü olmak için Müslüman olmak gerekir.</p>
              </div>
              
              <div className="requirement-item">
                <div className="requirement-icon">
                  <i className="fas fa-brain"></i>
                </div>
                <h3>Akıllı ve Baliğ Olmak</h3>
                <p>Akıl sağlığı yerinde ve ergenlik çağına ulaşmış olmak gerekir.</p>
              </div>
              
              <div className="requirement-item">
                <div className="requirement-icon">
                  <i className="fas fa-coins"></i>
                </div>
                <h3>Nisap Miktarı Mal</h3>
                <p>Zekat verilecek malın nisap miktarında olması gerekir.</p>
              </div>
              
              <div className="requirement-item">
                <div className="requirement-icon">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <h3>Üzerinden Bir Yıl Geçmesi</h3>
                <p>Malın üzerinden bir kameri yıl geçmiş olması gerekir.</p>
              </div>
            </div>
          </div>

          <div className="zekat-section">
            <h2>Zekat Verilecek Mallar</h2>
            <div className="assets-list">
              <div className="asset-item">
                <i className="fas fa-coins"></i>
                <span>Altın, Gümüş ve Para</span>
              </div>
              <div className="asset-item">
                <i className="fas fa-store"></i>
                <span>Ticaret Malları</span>
              </div>
              <div className="asset-item">
                <i className="fas fa-cow"></i>
                <span>Hayvanlar (Sığır, Koyun, Keçi)</span>
              </div>
              <div className="asset-item">
                <i className="fas fa-seedling"></i>
                <span>Toprak Ürünleri</span>
              </div>
            </div>
          </div>

          <div className="zekat-section">
            <h2>Zekat Verilecek Kişiler</h2>
            <div className="recipients-grid">
              <div className="recipient-item">
                <h3>Fakirler</h3>
                <p>Hiçbir şeyi olmayan veya ihtiyacını karşılayamayan kişiler</p>
              </div>
              <div className="recipient-item">
                <h3>Miskinler</h3>
                <p>Çok az şeyi olan, ancak ihtiyacını karşılayamayan kişiler</p>
              </div>
              <div className="recipient-item">
                <h3>Zekat Memurları</h3>
                <p>Zekat toplama ve dağıtım işlerinde çalışan kişiler</p>
              </div>
              <div className="recipient-item">
                <h3>Müellefe-i Kulub</h3>
                <p>Kalpleri İslam'a ısındırılmak istenen kişiler</p>
              </div>
              <div className="recipient-item">
                <h3>Köleler</h3>
                <p>Kölelikten kurtulmak isteyen kişiler</p>
              </div>
              <div className="recipient-item">
                <h3>Borçlular</h3>
                <p>Borçlarını ödeyemeyen kişiler</p>
              </div>
              <div className="recipient-item">
                <h3>Allah Yolunda</h3>
                <p>Allah rızası için çalışan kişiler</p>
              </div>
              <div className="recipient-item">
                <h3>Yolcular</h3>
                <p>Memleketinde parası olmayan yolcular</p>
              </div>
            </div>
          </div>

          <div className="zekat-section">
            <h2>Zekatın Önemi</h2>
            <div className="importance-content">
              <div className="importance-text">
                <p>
                  Zekat, İslam toplumunda sosyal adaleti sağlayan, zengin ile fakir arasındaki 
                  uçurumu kapatmaya yardımcı olan önemli bir ibadettir. Zekat sayesinde:
                </p>
                <ul>
                  <li>Toplumda yardımlaşma ve dayanışma artar</li>
                  <li>Fakirlerin ihtiyaçları karşılanır</li>
                  <li>Zenginlerde cimrilik duygusu azalır</li>
                  <li>Malın bereketi artar</li>
                  <li>Toplumsal barış ve huzur sağlanır</li>
                </ul>
              </div>
              <div className="importance-image">
                <i className="fas fa-hands-helping"></i>
              </div>
            </div>
          </div>

          <div className="zekat-section">
            <h2>Zekat Hesaplama</h2>
            <div className="calculator-info">
              <p>
                Zekat hesaplaması için malınızın değerini belirleyip %2.5 oranında hesaplama yapabilirsiniz. 
                Detaylı hesaplama için derneğimizle iletişime geçebilir veya online hesaplama araçlarımızı kullanabilirsiniz.
              </p>
              <div className="calculator-example">
                <h4>Örnek Hesaplama:</h4>
                <p>100.000 TL mal varlığınız varsa: 100.000 × 0.025 = 2.500 TL zekat vermeniz gerekir.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZekatPage;
