import React from 'react';

function Venue() {
  return (
    <section className="venue">
      <div className="container">
        <h2 className='h2title'>Место проведения</h2>
        <div className="venue-content">
          <div className="venue-items">
             <div className="venue-item">
              <h3>Праздничный вечер</h3>
              <p>
                <strong>Время начала церемонии:</strong> 16:00
              </p>
              <p>
                <strong>Место:</strong> Усадьба Кобрино
              </p>
              <p>
                <strong>Адрес:</strong> Ленинградская область, Гатчинский муниципальный округ, деревня Кобрино, 14
              </p>
              <p className="venue-features">
                На территории усадьбы есть:
              </p>
              <ul>
                <li>Уютная беседка</li>
                <li>Живописная территория для фотосессии</li>
                <li>Комфортабельные домики для проживания</li>
              </ul>
            </div>            
          </div>          
        </div>
      </div>
    </section>
  );
}

export default Venue; 