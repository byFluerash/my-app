import React from 'react';

function Footer({label = "По всем вопросам телеграмм канал" }) {
  const telegramUrl = `https://t.me/+ohvrwnhqV4EwYmIy`;
  return (
    <footer className="footer">
      <div className="container">
        <p>С любовью, Эльза и Даниил</p><a 
      href={telegramUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="telegram-link"
    >
      {label}
    </a> 
        
      </div>
    </footer>
  );
}

export default Footer; 