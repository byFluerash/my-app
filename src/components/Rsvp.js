// components/Rsvp.js
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../lib/firebase'; // Подключение к Firebase

// Выносим GuestForm в отдельный компонент
const GuestForm = ({ data, onChange, isCompanion = false, alcoholOptions }) => {
  return (
    <div className={`guest-form ${isCompanion ? 'companion' : 'main-guest'}`}>
      <div className="form-section">
        <div className="form-section-title">Личные данные</div>
        <div className="form-row">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={data.name || ''}
              onChange={onChange}
              placeholder="Имя"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="surname"
              value={data.surname || ''}
              onChange={onChange}
              placeholder="Фамилия"
              required
              className="form-input"
            />
          </div>
        </div>
      </div>

      {!isCompanion && (
        <div className="form-section">
          <div className="form-row">            
            <div className="form-group">
              <label>Присутствие на банкете</label>
              <select name="attendBanquet" value={data.attendBanquet} onChange={onChange} className="form-select">
                <option value="no">Нет</option>
                <option value="yes">Да</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Останетесь ли с ночевкой?</label>
            <select name="stayOvernight" value={data.stayOvernight} onChange={onChange} className="form-select">
              <option value="no">Нет</option>
              <option value="yes">Да</option>
            </select>
          </div>
        </div>
      )}

      <div className="form-section">
        <div className="form-section-title">Предпочтения</div>
        <div className="form-group">
          <label>Предпочтения по алкоголю</label>
          <div className="checkbox-group">
            {alcoholOptions.map((option) => (
              <label key={option} className="checkbox-label">
                <input
                  type="checkbox"
                  name="alcoholPreferences"
                  value={option}
                  checked={data.alcoholPreferences.includes(option)}
                  onChange={onChange}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Есть ли ограничения в питании?</label>
          <select
            name="hasDietaryRestrictions"
            value={data.hasDietaryRestrictions}
            onChange={onChange}
            className="form-select"
          >
            <option value="no">Нет</option>
            <option value="yes">Да</option>
          </select>
        </div>

        {data.hasDietaryRestrictions === 'yes' && (
          <div className="form-group">
            <textarea
              name="dietaryDetails"
              value={data.dietaryDetails}
              onChange={onChange}
              placeholder="Опишите ваши ограничения в питании"
              className="form-textarea"
            />
          </div>
        )}
      </div>
    </div>
  );
};

function Rsvp() {
  const [mainGuest, setMainGuest] = useState({
    name: '',
    surname: '',
    attendZags: 'no',
    attendBanquet: 'no',
    stayOvernight: 'no',
    alcoholPreferences: [],
    hasDietaryRestrictions: 'no',
    dietaryDetails: '',
  });

  const [companions, setCompanions] = useState([]);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const alcoholOptions = [
    'Красное сухое',
    'Белое сухое',
    'Красное полусладкое',
    'Белое полусладкое',
    'Коньяк'
  ];

  const addCompanion = () => {
    setCompanions([...companions, {
      name: '',
      surname: '',
      alcoholPreferences: [],
      hasDietaryRestrictions: 'no',
      dietaryDetails: '',
    }]);
  };

  const removeCompanion = (index) => {
    setCompanions(companions.filter((_, i) => i !== index));
  };

  const handleMainGuestChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      let updatedPreferences = [...mainGuest.alcoholPreferences];
      if (checked) {
        updatedPreferences.push(value);
      } else {
        updatedPreferences = updatedPreferences.filter(pref => pref !== value);
      }
      setMainGuest({ ...mainGuest, alcoholPreferences: updatedPreferences });
    } else {
      // Обновляем значение соответствующего поля
      setMainGuest(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleCompanionChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const updatedCompanions = [...companions];
    
    if (type === 'checkbox') {
      let preferences = [...(updatedCompanions[index].alcoholPreferences || [])];
      if (checked) {
        preferences.push(value);
      } else {
        preferences = preferences.filter(pref => pref !== value);
      }
      updatedCompanions[index] = {
        ...updatedCompanions[index],
        alcoholPreferences: preferences
      };
    } else {
      // Обновляем значение соответствующего поля
      updatedCompanions[index] = {
        ...updatedCompanions[index],
        [name]: value
      };
    }
    
    setCompanions(updatedCompanions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const rsvpsRef = collection(db, 'rsvps');
      await addDoc(rsvpsRef, {
        mainGuest,
        companions,
        message,
        timestamp: new Date().toISOString(),
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Произошла ошибка при отправке формы');
    }
  };

  if (submitted) {
    return (
      <section className="rsvp">
        <div className="container">
          <div className="success-message">
            <h3>Спасибо за ваш ответ!</h3>
            <p>Мы очень рады, что вы разделите с нами этот особенный день!</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="rsvp">
      <div className="container">
        <form onSubmit={handleSubmit} className="rsvp-form">
          <h2>Подтвердите ваше присутствие</h2>
          
          <GuestForm 
            data={mainGuest} 
            onChange={handleMainGuestChange} 
            alcoholOptions={alcoholOptions}
          />

          <div className="companions-section">
            <h3>Добавьте всех с кем вы приедете</h3>            
            {companions.map((companion, index) => (
              <div key={index} className="companion-wrapper">
                <div className="companion-header">
                  <h4>Гость {index + 1}</h4>
                  <button 
                    type="button" 
                    className="remove-companion-btn"
                    onClick={() => removeCompanion(index)}
                  >
                    Удалить
                  </button>
                </div>
                <GuestForm 
                  data={companion}
                  onChange={(e) => handleCompanionChange(index, e)}
                  isCompanion={true}
                  alcoholOptions={alcoholOptions}
                />
              </div>
            ))}

            <button 
              type="button" 
              className="add-companion-btn"
              onClick={addCompanion}
            >
              + Добавить гостя
            </button>
          </div>

          <div className="form-group">
            <label>Ваши пожелания или комментарии</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Необязательно"
              className="form-textarea"
            />
          </div>

          <button type="submit" className="submit-button">
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
}

export default Rsvp;