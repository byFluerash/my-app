import React from 'react';
import sochi from '../assets/фото подарки.jpg';

function Gifts() {
  return (
    <section className="gifts">
      <div className="container">
        <h2>О подарках</h2>
        <div className="gifts-content">
          <div className="gifts-description">
            <p>
              Дорогие гости, для нас самый главный подарок - это ваше присутствие на нашем празднике!
            </p>
            <p>
              Если вы хотите сделать нам подарок, мы будем рады вашему вкладу в наше свадебное путешествие.
            </p>
            <p> 
             Пожалуйста, не обременяйте себя покупкой красивого букета, вы можете сделать выбор в пользу одного цветка или вовсе прийти без цветов 🧡🧡🧡
           </p>
          </div>

          {/* <div className="photo-gallery" >
            <img src={sochi} alt="Описание фото 1" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
           
          </div> */}
          
          <div className="gift-background" style={{
                backgroundImage: `url(${sochi})`,
                maxWidth: '500px',  // Максимальная ширина
                margin: '0 auto',   // Центрирование
                width: '90%'   ,     // Адаптивная ширина
            }}>
          <div className="gifts-note">
            <p>
                Просим вас расслабиться и погрузиться в атмосферу праздника. Все детали мероприятия уже продуманы. Ваша задача - наслаждаться!         
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gifts; 