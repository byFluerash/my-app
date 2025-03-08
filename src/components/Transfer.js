import React from 'react';
import QR from '../assets/qr.png';

function Transfer() {

  return (
    <section className="transfer">
      <div className="container">
        <h2>Трансфер</h2>
        <div className="transfer-content">
          <div className="transfer-info">
            <div className="transfer-item">
              <h3>Отправление на банкет</h3>
              <p>
                <strong>Время отправления:</strong> Предварительно! 13:30 по местному времени
              </p>
              <p>
                <strong>Место сбора:</strong> Предварительно! станция метро "Площадь Восстания", у памятника Ленину
              </p>
            </div>

            <div className="transfer-item">
              <h3>Обратный трансфер</h3>
              <p>
                <strong>Время:</strong> 12:00 следующего дня по местному времени
              </p>
              <p>
                <strong>Куда:</strong> Предварительно! станция метро "Площадь Ленина"
              </p>
            </div>
          </div>
          
          <div className="transfer-note">
            <p>
              Точное место и время отправления на площадку будет согласовано позже, в зависимости от места проживания гостей. 
              Вся информация будет в нашем  
            </p>
            <img 
        src={QR} 
        alt="Описание изображения" 
        className="custom-image"
      />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Transfer; 