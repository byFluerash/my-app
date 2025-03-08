import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('header');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'about', label: 'О свадьбе' },
    { id: 'venue', label: 'Место' },
    { id: 'transfer', label: 'Трансфер' },
    { id: 'color-scheme', label: 'Дресс-код' },
    { id: 'gifts', label: 'Подарки' },
    { id: 'rsvp', label: 'Подтвердить присутствие' }
  ];

  return (
    <nav className={`navigation ${activeSection === 'header' ? 'header-visible' : ''}`}>
      <ul>
        {navItems.map(item => (
          <li key={item.id}>
            <button 
              onClick={() => scrollToSection(item.id)}
              className={activeSection === item.id ? 'active' : ''}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation; 