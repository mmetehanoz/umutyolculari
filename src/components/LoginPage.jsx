import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [showAgreementPopup, setShowAgreementPopup] = useState(false);
  const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);
  
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [signupFormData, setSignupFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    passwordConfirm: '',
    agreementAccepted: false,
    notifications: false
  });

  const [errors, setErrors] = useState({});

    const handleLoginInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginFormData(prev => ({
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

  const handleSignupInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSignupFormData(prev => ({
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

  const validateLoginForm = () => {
    const newErrors = {};

    if (!loginFormData.email.trim()) {
      newErrors.email = 'E-posta zorunludur';
    } else if (!/\S+@\S+\.\S+/.test(loginFormData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz';
    }

    if (!loginFormData.password) {
      newErrors.password = 'Şifre zorunludur';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateSignupForm = () => {
    const newErrors = {};

    if (!signupFormData.fullName.trim()) {
      newErrors.fullName = 'Ad soyad zorunludur';
    }

    if (!signupFormData.phone.trim()) {
      newErrors.phone = 'Cep telefonu zorunludur';
    }

    if (!signupFormData.email.trim()) {
      newErrors.email = 'E-posta zorunludur';
    } else if (!/\S+@\S+\.\S+/.test(signupFormData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz';
    }

    if (!signupFormData.password) {
      newErrors.password = 'Şifre zorunludur';
    } else if (signupFormData.password.length < 6) {
      newErrors.password = 'Şifre en az 6 karakter olmalıdır';
    }

    if (!signupFormData.passwordConfirm) {
      newErrors.passwordConfirm = 'Şifre tekrarı zorunludur';
    } else if (signupFormData.password !== signupFormData.passwordConfirm) {
      newErrors.passwordConfirm = 'Şifreler eşleşmiyor';
    }

    if (!signupFormData.agreementAccepted) {
      newErrors.agreementAccepted = 'Üyelik sözleşmesi ve kişisel veri rıza metnini kabul etmelisiniz';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    if (validateLoginForm()) {
      // Giriş işlemi burada yapılacak
      console.log('Login data:', loginFormData);
      alert('Başarıyla giriş yapıldı!');
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    
    if (validateSignupForm()) {
      // Kayıt işlemi burada yapılacak
      console.log('Signup data:', signupFormData);
      alert('Başarıyla üye olundu!');
    }
  };

  const handleForgotPassword = () => {
    // Şifremi unuttum işlemi burada yapılacak
    alert('Şifre sıfırlama linki e-posta adresinize gönderildi.');
  };

  const toggleAgreementPopup = () => {
    setShowAgreementPopup(!showAgreementPopup);
  };

  const togglePrivacyPopup = () => {
    setShowPrivacyPopup(!showPrivacyPopup);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="tab-container">
          <div className="tab-buttons">
            <button 
              className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
              onClick={() => setActiveTab('login')}
            >
              Giriş Yap
            </button>
            <button 
              className={`tab-button ${activeTab === 'signup' ? 'active' : ''}`}
              onClick={() => setActiveTab('signup')}
            >
              Üye Ol
            </button>
          </div>

          {activeTab === 'login' && (
            <form className="login-form" onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label htmlFor="email">E-posta *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={loginFormData.email}
                  onChange={handleLoginInputChange}
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
                  value={loginFormData.password}
                  onChange={handleLoginInputChange}
                  className={errors.password ? 'error' : ''}
                  placeholder="Şifrenizi girin"
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={loginFormData.rememberMe}
                    onChange={handleLoginInputChange}
                  />
                  <span className="checkmark"></span>
                  Beni hatırla
                </label>
                
                <button 
                  type="button" 
                  className="forgot-password-btn"
                  onClick={handleForgotPassword}
                >
                  Şifremi unuttum
                </button>
              </div>

              <button type="submit" className="login-button">
                Giriş Yap
              </button>
            </form>
          )}

          {activeTab === 'signup' && (
            <form className="signup-form" onSubmit={handleSignupSubmit}>
              <div className="signup-header">
                <h2>Bağış sistemine katıl, iyiliğe ortak ol.</h2>
              </div>

              <div className="form-group">
                <label htmlFor="fullName">Ad Soyad *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={signupFormData.fullName}
                  onChange={handleSignupInputChange}
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
                  value={signupFormData.phone}
                  onChange={handleSignupInputChange}
                  className={errors.phone ? 'error' : ''}
                  placeholder="05XX XXX XX XX"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="signupEmail">E-posta *</label>
                <input
                  type="email"
                  id="signupEmail"
                  name="email"
                  value={signupFormData.email}
                  onChange={handleSignupInputChange}
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
                  value={signupFormData.password}
                  onChange={handleSignupInputChange}
                  className={errors.password ? 'error' : ''}
                  placeholder="En az 6 karakter"
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="passwordConfirm">Şifre Tekrar *</label>
                <input
                  type="password"
                  id="passwordConfirm"
                  name="passwordConfirm"
                  value={signupFormData.passwordConfirm}
                  onChange={handleSignupInputChange}
                  className={errors.passwordConfirm ? 'error' : ''}
                  placeholder="Şifrenizi tekrar girin"
                />
                {errors.passwordConfirm && <span className="error-message">{errors.passwordConfirm}</span>}
              </div>

              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="agreementAccepted"
                    checked={signupFormData.agreementAccepted}
                    onChange={handleSignupInputChange}
                  />
                  <span className="checkmark"></span>
                  <span className="agreement-text">
                    <span className="underline-link" onClick={toggleAgreementPopup}>Üyelik Sözleşmesi şartlarını</span> ve <span className="underline-link" onClick={togglePrivacyPopup}>Kişisel Veri Rıza Metnini</span> okudum ve kabul ediyorum *
                  </span>
                </label>
                {errors.agreementAccepted && <span className="error-message">{errors.agreementAccepted}</span>}
              </div>

              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="notifications"
                    checked={signupFormData.notifications}
                    onChange={handleSignupInputChange}
                  />
                  <span className="checkmark"></span>
                  Duyuruları kaçırmamak için bilgilendirme mesajı almak istiyorum
                </label>
              </div>

              <button type="submit" className="signup-button">
                Üye Ol
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Üyelik Sözleşmesi Pop-up */}
      {showAgreementPopup && (
        <div className="popup-overlay" onClick={toggleAgreementPopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h3>ÜYELİK SÖZLEŞMESİ</h3>
              <button className="popup-close" onClick={toggleAgreementPopup}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="popup-body">
              <div className="agreement-content">
                <h4>1. Taraflar</h4>
                <p><strong>a)</strong> umutyolculari.org.tr internet sitesinin faaliyetlerini yürüten, Yamanevler, Alemdağ Cd No:145/Kat:5 Ümraniye - İstanbul / TÜRKİYE adresinde mukim Umut Yolcuları İnsani Yardım Derneği (Bundan böyle Umut Yolcuları olarak anılacaktır).</p>
                <p><strong>b)</strong> umutyolculari.org.tr internet sitesine üye olan internet kullanıcısı (Üye).</p>

                <h4>2. Sözleşmenin Konusu</h4>
                <p>İşbu Sözleşme'nin konusu, Umut Yolcuları'nın sahip olduğu internet sitesi umutyolculari.org.tr'den üyenin faydalanma şartlarının belirlenmesidir.</p>

                <h4>3. Tarafların Hak ve Yükümlülükleri</h4>
                <p><strong>3.1.</strong> Üye, siteye üye olurken verdiği kişisel ve diğer bilgilerin doğru olduğunu; aksi halde Umut Yolcuları'nın uğrayacağı zararları tazmin edeceğini kabul eder.</p>
                <p><strong>3.2.</strong> Üye, kendisine verilen şifreyi başka kişi veya kurumlara veremez. Şifre kullanma hakkı yalnızca üyeye aittir. İzinsiz kullanım sebebiyle doğacak tüm hukuki ve mali sorumluluk üyeye aittir.</p>
                <p><strong>3.3.</strong> Üye, siteyi kullanırken yasal mevzuata uymayı kabul eder; aksi halde tüm sorumluluk kendisine aittir.</p>
                <p><strong>3.4.</strong> Üye, siteyi kamu düzenini bozacak, genel ahlaka aykırı, taciz edici, yasalara aykırı veya başkalarının fikri/telif haklarını ihlal edecek şekilde kullanamaz; spam, virüs, truva atı vb. faaliyetlerde bulunamaz.</p>
                <p><strong>3.5.</strong> Sitede üyeler tarafından paylaşılan fikirler yalnızca paylaşan kişiyi bağlar. Umut Yolcuları bu görüşlerden dolayı sorumlu değildir.</p>
                <p><strong>3.6.</strong> Umut Yolcuları, üye verilerinin yetkisiz kişilerce okunmasından veya zarara uğramasından sorumlu tutulamaz. Üye, site kullanımı nedeniyle doğabilecek zararlardan dolayı tazminat talep etmeyeceğini kabul eder.</p>
                <p><strong>3.7.</strong> Üye, diğer kullanıcıların yazılımlarına ve verilerine izinsiz erişmemeyi kabul eder; aksi halde doğacak sorumluluk kendisine aittir.</p>
                <p><strong>3.8.</strong> Sözleşmedeki maddeleri ihlal eden üye, tüm hukuki ve cezai sorumluluğu üstlenir ve Umut Yolcuları'nı bu sonuçlardan muaf tutar.</p>
                <p><strong>3.9.</strong> Umut Yolcuları, üyeliği ve üyeye ait bilgi/dosyaları tek taraflı olarak silebilir. Bu durumda hiçbir sorumluluk kabul etmez.</p>
                <p><strong>3.10.</strong> Site yazılım ve tasarımı Edim Bilgisayar Yazılım ve Ürünleri Ltd. Şti.'ne aittir, Umut Yolcuları tarafından kiralanmıştır. İçerikler Umut Yolcuları'na aittir ve izinsiz kullanılamaz.</p>
                <p><strong>3.11.</strong> Siteye erişim bilgileri (IP adresi, erişim tarihi, ziyaret edilen sayfalar vb.) iyileştirme veya yasal zorunluluklar için toplanabilir.</p>
                <p><strong>3.12.</strong> Umut Yolcuları, yasal gereklilik halinde veya haklarını korumak amacıyla üyeye ait bilgileri açıklayabilir.</p>
                <p><strong>3.13.</strong> Sitenin zararlı yazılımlardan arındırılması için tedbir alınmıştır ancak nihai güvenlik kullanıcıya aittir. Üye, olası yazılım/işletim sistemi hatalarından sorumlu olduğunu kabul eder.</p>
                <p><strong>3.14.</strong> Umut Yolcuları, site içeriğini veya hizmetleri değiştirme, sonlandırma ve kayıtlı bilgileri silme hakkını saklı tutar.</p>
                <p><strong>3.15.</strong> Umut Yolcuları, sözleşme koşullarını önceden bildirim yapmadan değiştirebilir. Değişiklikler yayınlandığı tarihte yürürlüğe girer.</p>
                <p><strong>3.16.</strong> Taraflar, Umut Yolcuları'nın ait bilgisayar kayıtlarının HUMK 287. maddeye göre tek delil olduğunu kabul eder.</p>
                <p><strong>3.17.</strong> Üye, bu sözleşmeyi onaylayarak Umut Yolcuları'nın e-posta veya SMS ile bilgilendirme göndermesini kabul etmiş sayılır.</p>

                <h4>4. Sözleşmenin Feshi</h4>
                <p>Sözleşme, üyenin üyeliğini iptal etmesi veya Umut Yolcuları tarafından iptal edilmesine kadar geçerlidir. Umut Yolcuları, sözleşme ihlali halinde üyeliği tek taraflı feshedebilir.</p>

                <h4>5. İhtilafların Halli</h4>
                <p>İşbu sözleşmeye ilişkin ihtilaflarda İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.</p>

                <h4>6. Yürürlük</h4>
                <p>Üyenin üyelik kaydı yapması, sözleşmedeki tüm maddeleri okuduğu ve kabul ettiği anlamına gelir. Sözleşme, üyenin üye olması anında yürürlüğe girer.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Kişisel Veri Rıza Metni Pop-up */}
      {showPrivacyPopup && (
        <div className="popup-overlay" onClick={togglePrivacyPopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h3>KİŞİSEL VERİ RIZA METNİ</h3>
              <button className="popup-close" onClick={togglePrivacyPopup}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="popup-body">
              <div className="agreement-content">
                <h4>Umut Yolcuları İnsani Yardım Derneği Kişisel Verilerin Korunması Aydınlatma Metni</h4>
                <p>İnsani yardım alanında faaliyetlerini yürüten Umut Yolcuları İnsani Yardım Derneği ("Umut Yolcuları"), kişisel verilerin güvenliğine büyük önem verir. Bağışçılarının, faydalanıcılarının ve ilgili üçüncü kişilerin kişisel verilerini; 6698 sayılı Kişisel Verilerin Korunması Kanunu ("Kanun"), ilgili yönetmelik, tebliğ ve Kurul kararlarına uygun olarak işler, muhafaza eder ve siler. Umut Yolcuları, Kanun'da tanımlı "Veri Sorumlusu" sıfatıyla, kişisel verilerinizi aşağıda belirtilen şekilde işler.</p>

                <h4>1. Veri Sorumlusuna İlişkin Bilgiler</h4>
                <p>Kanun uyarınca 34-241/198 kütük numarasıyla kayıtlı, "[ADRES]" adresinde mukim Umut Yolcuları İnsani Yardım Derneği veri sorumlusudur.</p>

                <h4>2. Kişisel Verilerin İşlenme Amaçları</h4>
                <p>Kişisel verileriniz, mevzuattan doğan yükümlülükler, bağışçı ilişkilerinin yönetimi, dernek faaliyetlerinin planlanması, dernek amacına ulaşmak için yürütülen çalışmalar, işyeri güvenliği, finansal yükümlülüklerin yerine getirilmesi ve dernek faaliyetlerinin geliştirilmesine yönelik meşru gerekçeler çerçevesinde; hukuka, dürüstlük kurallarına uygun, bağlantılı, sınırlı ve ölçülü olarak işlenir.</p>

                <h4>3. Kişisel Verilerin Aktarılması</h4>
                <p>Kişisel verileriniz; yukarıda belirtilen amaçlarla, Kanun'un 8. ve 9. maddelerine uygun olarak:</p>
                <ul>
                  <li>Umut Yolcuları'nın ilgili birimlerine,</li>
                  <li>Bağlı bulunduğu kurum ve kuruluşlara,</li>
                  <li>Yetkili kamu kurumlarına, adli ve idari mercilere, kolluk kuvvetlerine,</li>
                  <li>Yasal izin kapsamında gerçek ve tüzel kişilere,</li>
                </ul>
                <p>aktarılabilir.</p>
                <p>Yurtdışı faaliyetleri veya yurtdışından alınan hizmetler nedeniyle gerekli olması halinde veriler yurtdışına da aktarılabilir.</p>

                <h4>4. Kişisel Verilerin Toplanma Yöntemleri ve Hukuki Sebepleri</h4>
                <p>Kişisel verileriniz, otomatik veya otomatik olmayan yollarla; sözlü, yazılı veya elektronik ortamda toplanır.</p>
                <p>Toplanan veriler: ad-soyad, T.C. kimlik numarası, uyruk, ana-baba adı, doğum yeri ve tarihi, ikamet adresi, imza, banka hesap bilgileri, e-posta adresi, kamera kayıtları, güvenlik kayıtları, telefon görüşme kayıtları vb.</p>
                <p>Bu veriler, Kanun'un 5. maddesinin 2/a-c-ç-e-f bentleri ve 6. maddesinin 3. fıkrasına uygun olarak, temel hak ve özgürlüklerinize zarar vermemek kaydıyla ve Umut Yolcuları'nın meşru menfaatleri doğrultusunda işlenir.</p>

                <h4>5. Veri Sahiplerinin Kanun Kapsamındaki Hakları</h4>
                <p>Kişisel veri sahibi olarak Umut Yolcuları'na başvurarak:</p>
                <ul>
                  <li>Verilerinizin işlenip işlenmediğini öğrenebilir,</li>
                  <li>İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını sorgulayabilir,</li>
                  <li>Yurt içi ve yurt dışındaki üçüncü kişilerle paylaşım durumunu öğrenebilir,</li>
                  <li>Eksik veya hatalı işlenmiş verilerin düzeltilmesini talep edebilir,</li>
                  <li>Verilerinizin silinmesini veya yok edilmesini isteyebilir,</li>
                  <li>Bu işlemlerin aktarıldığı üçüncü kişilere bildirilmesini talep edebilir,</li>
                  <li>Otomatik sistemlerle analiz sonucu aleyhinize bir durum ortaya çıkmasına itiraz edebilir,</li>
                  <li>Kanuna aykırı kayıt veya kullanım nedeniyle zarara uğramışsanız tazminat talep edebilirsiniz.</li>
                </ul>
                <p>Başvurularınız en geç 30 gün içinde sonuçlandırılır.</p>

                <h4>Başvuru Yöntemleri</h4>
                <p>Başvurularınızı Türkçe olarak:</p>
                <ul>
                  <li>Elden veya noter aracılığıyla [ADRES] adresine,</li>
                  <li>Ekli başvuru formunu doldurup imzalayarak,</li>
                </ul>
                <p>iletebilirsiniz.</p>
                <p>Başvurunuzda: ad-soyad, imza, T.C. kimlik numarası, adres, telefon/faks numarası ve talep konusunun bulunması zorunludur. Bu bilgileri içermeyen başvurular reddedilir.</p>

                <div className="download-section">
                  <p><strong>📄 Başvuru Formunu indirmek için tıklayınız</strong></p>
                </div>

                <div className="footer-note">
                  <p><em>Not: Umut Yolcuları, mevzuat değişikliklerine bağlı olarak aydınlatma metninde değişiklik yapma hakkını saklı tutar. Güncel metin, tebliğ edildiği tarihten itibaren geçerlidir.</em></p>
                </div>

                <div className="organization-info">
                  <p><strong>Umut Yolcuları İnsani Yardım Derneği</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
