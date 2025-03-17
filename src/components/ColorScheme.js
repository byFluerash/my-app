import React from 'react';
import kobrino1 from '../assets/кобрино велком.webp';
import kobrino2 from '../assets/кобрино с высоты.jpg';
import kobrino3 from '../assets/кобрино церемония.jpg';


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
        <div className="photo-gallery" >
            <img src={kobrino3} alt="Описание фото 1" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            <div className="small-photos" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
              <img src={kobrino2} alt="Описание фото 2" style={{ width: '48%', height: 'auto', borderRadius: '8px' }} />
              <img src={kobrino1} alt="Описание фото 3" style={{ width: '48%', height: 'auto', borderRadius: '8px' }} />
            </div>
          </div>
        </div>        
      </div>
      
    </section>
  );
}

export default ColorScheme; 