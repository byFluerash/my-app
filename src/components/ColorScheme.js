import React from 'react';
import photo1 from '../assets/дресс-код девушки.jpg';
import photo2 from '../assets/дресс-код мужчины.jpg';
import photo3 from '../assets/дресс-код девушки 2.jpg';

function ColorScheme() {
  return (
    <section className="color-scheme">
      <div className="container">
        <h2>Дресс-код</h2>
        
        <div className="color-palettes">
          <div className="palette-section">            
            <div className="color-palette">
              <div className="color-item">
                <div className="color-circle" style={{ backgroundColor: '#9fa450' }}></div>
              </div>
              <div className="color-item">
                <div className="color-circle" style={{ backgroundColor: '#fe6a00' }}></div>
              </div>
              <div className="color-item">
                <div className="color-circle" style={{ backgroundColor: '#f1a778' }}></div>
              </div>
              <div className="color-item">
                <div className="color-circle" style={{ backgroundColor: '#fdde52' }}></div>
              </div>
            </div>
          </div>
          <div className="color-description">
            <p>
              Мы будем благодарны, если вы поддержите цветовую гамму нашей свадьбы в своих нарядах 
            </p>
            <p>  
              Для джентельменов - светлые брюки и рубашка в светлых или оттенках цветовой гаммы 
            </p>
            <p>  
              Для дам - любой наряд в этой палитре
            </p>
          </div>  
          <div className="photo-gallery">
            <img src={photo1} alt="Описание фото 1" className="photo-item" />
            <img src={photo2} alt="Описание фото 2" className="photo-item" />
            <img src={photo3} alt="Описание фото 3" className="photo-item" />
          </div>
        </div>        
      </div>
    </section>
  );
}

export default ColorScheme; 