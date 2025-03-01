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
                <strong>Время:</strong> 13:30
              </p>
              <p>
                <strong>Место сбора:</strong> Станция метро "Площадь Восстания", у памятника Ленину
              </p>
              <p>
                <strong>Куда едем:</strong> Усадьба Кобрино (Ленинградская область, Гатчинский муниципальный округ, деревня Кобрино, 14)
              </p>
            </div>

            <div className="transfer-item">
              <h3>Обратный трансфер</h3>
              <p>
                <strong>Время:</strong> 12:00 следующего дня
              </p>
              <p>
                <strong>Откуда:</strong> Усадьба Кобрино (Ленинградская область, Гатчинский муниципальный округ, деревня Кобрино, 14)
              </p>
              <p>
                <strong>Куда:</strong> Станция метро "Площадь Восстания"
              </p>
            </div>
          </div>
          
          <div className="transfer-note">
            <p>
              Для вашего комфорта мы организовали трансфер от центра города до места проведения торжества и обратно.
              Убедительная просьба быть вовремя в местах сбора.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Transfer; 