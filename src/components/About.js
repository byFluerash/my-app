import React from 'react';
import kobrino1 from '../assets/кобрино велком.webp';
import kobrino2 from '../assets/кобрино с высоты.jpg';
import kobrino3 from '../assets/кобрино церемония.jpg';

function About() {
  return (
    <section className="about" >
      <div className="container">
        <h2 className="h2guest">Дорогие гости!</h2>
        <div className="couple-story-unic">
          <p className="couple-story-unic">
           Мы счастливы пригласить вас на нашу свадебную вечеринку!       
           </p>
           <p>
          Мы понимаем, что это большое путешествие, и поэтому хотим сделать его максимально комфортным.          
          </p>
          <p>
            У нас будет организован трансфер из центра Санкт-Петербурга на мероприятие и обратно на следующий день.        
          </p>
          <p>
            Так же мы подготовили проживание для гостей  в 2 домах на территории площадки.
          </p>
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

export default About; 