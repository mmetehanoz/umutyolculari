import React from 'react';
import './HowToHelpSection.css';

const helps = [
  { icon: 'fa-hand-holding-heart', title: 'Bağış Yap', desc: 'Projelerimize maddi destek olun.' },
  { icon: 'fa-hands-helping', title: 'Gönüllü Ol', desc: 'Ekibimize katılın ve topluma katkı sağlayın.' },
  { icon: 'fa-bullhorn', title: 'Duyur', desc: 'Misyonumuzu paylaşın, daha fazla kişiye ulaşmamıza yardımcı olun.' },
];

const HowToHelpSection = () => (
  <section className="howtohelp-section">
    <h2>Nasıl Yardım Edebilirsin?</h2>
    <div className="help-options">
      {helps.map((help, idx) => (
        <div className="help-card" key={idx}>
          <i className={`fas ${help.icon} help-icon`}></i>
          <h3>{help.title}</h3>
          <p>{help.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowToHelpSection; 