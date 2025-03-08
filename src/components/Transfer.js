import React from 'react';

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
                <strong>Время:</strong> Предварительно! 13:30 по местному времени
              </p>
              <p>
                <strong>Место сбора:</strong> Предварительно! станция метро "Площадь Восстания", у памятника Ленину
              </p>
              <p>
                <strong>Куда едем:</strong> Усадьба Кобрино (Ленинградская область, Гатчинский муниципальный округ, деревня Кобрино, 14)
              </p>
            </div>

            <div className="transfer-item">
              <h3>Обратный трансфер</h3>
              <p>
                <strong>Время:</strong> 12:00 следующего дня по местному времени
              </p>
              <p>
                <strong>Откуда:</strong> Усадьба Кобрино (Ленинградская область, Гатчинский муниципальный округ, деревня Кобрино, 14)
              </p>
              <p>
                <strong>Куда:</strong>Предварительно! станция метро "Площадь Восстания"
              </p>
            </div>
          </div>
          
          <div className="transfer-note">
            <p>
              Точное место и время отправления на площадку будет согласовано позже, в зависимости от места проживания гостей.        
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Transfer; 