import React from 'react';

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
        </div>  
        </div>
      </div>
    </section>
  );
}

export default ColorScheme; 