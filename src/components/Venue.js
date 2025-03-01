import React from 'react';

function Venue() {
  return (
    <section className="venue">
      <div className="container">
        <h2>Место проведения</h2>
        <div className="venue-content">
          <div className="venue-items">
            <div className="venue-item">
              <h3>Церемония бракосочетания</h3>
              <p>
                <strong>Время:</strong> 10:30
              </p>
              <p>
                <strong>Место:</strong> Дворец бракосочетания №1
              </p>
              <p>
                <strong>Адрес:</strong> Английская набережная, 28
              </p>
            </div>

            <div className="venue-item">
              <h3>Праздничный банкет</h3>
              <p>
                <strong>Время:</strong> 15:00
              </p>
              <p>
                <strong>Место:</strong> Загородный клуб "Дача"
              </p>
              <p>
                <strong>Адрес:</strong> Приозерский район, вблизи посёлка Соловьёвка
              </p>
              <p className="venue-features">
                На территории клуба есть:
              </p>
              <ul>
                <li>Просторный банкетный зал</li>
                <li>Уютная веранда</li>
                <li>Живописная территория для фотосессии</li>
                <li>Комфортабельные домики для проживания</li>
              </ul>
            </div>
          </div>

          <div className="venue-note">
            <p>
              Для вашего комфорта будет организовано проживание в уютных домиках на территории клуба.
              Утром вас будет ждать вкусный завтрак и продолжение празднования.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Venue; 