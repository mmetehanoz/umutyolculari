import React, { useState } from 'react';
import './FAQSection.css';

const faqs = [
  {
    question: 'Neden derneğimize bağış yapmalısınız?',
    answer: 'Bağışlarınız ihtiyaç sahiplerine umut ve destek olur. Her katkı, bir hayatı değiştirebilir ve toplumsal dayanışmayı güçlendirir.'
  },
  {
    question: 'Derneğimizden nasıl haberdar oldunuz?',
    answer: 'Sosyal medya, gönüllülerimiz veya etkinliklerimiz aracılığıyla derneğimizden haberdar olabilirsiniz.'
  },
  {
    question: 'Ne sıklıkla gönüllü olmayı tercih edersiniz?',
    answer: 'Gönüllülük sıklığı tamamen size bağlıdır. Dilerseniz düzenli, dilerseniz etkinlik bazlı destek olabilirsiniz.'
  },
  {
    question: 'Bu etkinliğe katılmaya sizi ne motive etti?',
    answer: 'İnsanlara yardım etme isteği, topluma katkı sağlama arzusu ve dayanışma ruhu en büyük motivasyon kaynaklarımızdır.'
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = idx => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="faq-section">
      <div className="faq-left">
        <div className="faq-bg-img">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Çocuklar" />
        </div>
        <div className="faq-icon">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 55C44.3594 55 55 44.3594 55 30C55 15.6406 44.3594 5 30 5C15.6406 5 5 15.6406 5 30C5 44.3594 15.6406 55 30 55Z" fill="#fff"/>
            <path d="M20 30C20 25.5817 23.5817 22 28 22C32.4183 22 36 25.5817 36 30C36 34.4183 32.4183 38 28 38C23.5817 38 20 34.4183 20 30Z" fill="#ffc107"/>
            <path d="M40 28C41.1046 28 42 28.8954 42 30C42 31.1046 41.1046 32 40 32C38.8954 32 38 31.1046 38 30C38 28.8954 38.8954 28 40 28Z" fill="#1a7c6b"/>
            <path d="M18 28C19.1046 28 20 28.8954 20 30C20 31.1046 19.1046 32 18 32C16.8954 32 16 31.1046 16 30C16 28.8954 16.8954 28 18 28Z" fill="#ff5722"/>
          </svg>
        </div>
        <div className="faq-fg-img">
          <img src="https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=400&q=80" alt="Kız çocuğu" />
        </div>
      </div>
      <div className="faq-right">
        <span className="faq-subtitle">Sıkça Sorulan Sorular</span>
        <h2 className="faq-title">Bize Sormak İstediğiniz Bir Şey Var mı?</h2>
        <div className="faq-accordion">
          {faqs.map((faq, idx) => (
            <div className={`faq-item${openIndex === idx ? ' open' : ''}`} key={idx}>
              <button className="faq-question" onClick={() => toggle(idx)}>
                {faq.question}
                <span className="faq-arrow">{openIndex === idx ? '▲' : '▼'}</span>
              </button>
              <div className="faq-answer" style={{display: openIndex === idx ? 'block' : 'none'}}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 