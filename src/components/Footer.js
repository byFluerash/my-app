import React from 'react';

function Footer({label = "По всем вопросам телеграмм канал" }) {
  const telegramUrl = `https://t.me/+ohvrwnhqV4EwYmIy`;
  return (
    <footer className="footer">
      <div className="container">
        <p> 
          Просим вас расслабиться и погрузиться в атмосферу праздника. Все детали мероприятия уже продуманы. Ваша задача - наслаждаться!
        </p>
        <p>С любовью, Даниил и Эльза</p><a 
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