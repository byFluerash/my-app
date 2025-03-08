import React from 'react';

function ColorScheme() {
  return (
    <section className="color-scheme">
      <div className="container">
        <h2>Дресс-код</h2>
        <div className="color-description">
          <p>
            Мы будем благодарны, если вы поддержите цветовую гамму нашей свадьбы в своих нарядах
          </p>
        </div>
        <div className="color-palettes">
          <div className="palette-section">
            <h3 style={{ textAlign: 'center', marginBottom: '50px', marginTop: '50px' }}>Для девушек</h3>
            <div className="color-palette">
              <div className="color-item">
                <div className="color-circle" style={{ backgroundColor: '#9fa450' }}></div>
                <span>Оливково-желтый</span>
              </div>
              <div className="color-item">
                <div className="color-circle" style={{ backgroundColor: '#fe6a00' }}></div>
                <span>Яркий оранжевый</span>
              </div>
              <div className="color-item">
                <div className="color-circle" style={{ backgroundColor: '#f1a778' }}></div>
                <span>Маленького мандарина</span>
              </div>
              <div className="color-item">
                <div className="color-circle" style={{ backgroundColor: '#fdde52' }}></div>
                <span>Горчичный</span>
              </div>
            </div>
          </div>
          
          <div className="palette-section">
            <h3 style={{ textAlign: 'center', marginBottom: '50px', marginTop: '50px' }}>Для мужчин</h3>
            <div className="color-palette">
              <div className="color-item">
                <div className="color-circle" style={{ backgroundColor: '#f5f5f5' }}></div>
                <span>Светло-серый</span>
              </div>
              <div className="color-item">
                <div className="color-circle" style={{ backgroundColor: '#e8e6d9' }}></div>
                <span>Бежевый</span>
              </div>
              <div className="color-item">
                <div className="color-circle" style={{ backgroundColor: '#d3d3c7' }}></div>
                <span>Светло-оливковый</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ColorScheme; 