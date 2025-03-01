import React from 'react';

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
              Если вы хотите сделать нам подарок, мы будем благодарны за вклад в наше свадебное путешествие.
            </p>
          </div>
          
          <div className="gifts-note">
            <p>
              Пожалуйста, никаких цветов! Вместо этого мы будем рады, если вы поддержите цветовую гамму праздника в своих нарядах 🧡
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gifts; 