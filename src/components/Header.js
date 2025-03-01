import React from 'react';
import backgroundImage from '../assets/header_background.JPG'; // Замените на путь к вашему изображению


function Header() {
  return (
    <header className="header" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container">
        <h1>Elza & Daniil</h1>
        <h2>30 июня 2025</h2>
      </div>
    </header>
  );
}

export default Header; 