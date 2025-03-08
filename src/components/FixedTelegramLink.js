import React from 'react';
import { FaTelegram } from 'react-icons/fa'; // Используем иконку из react-icons
import './FixedTelegramLink.css'; // Подключаем CSS для стилизации

function FixedTelegramLink() {
  return (
    <a 
      href="https://t.me/+ohvrwnhqV4EwYmIy" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed-telegram-link"
    >
      <FaTelegram size={32} color="#fff" />
    </a>
  );
}

export default FixedTelegramLink;