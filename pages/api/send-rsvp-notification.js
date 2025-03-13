import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Метод не разрешен' });
  }

  const { mainGuest, companions } = req.body;

  // Создаем транспорт для отправки почты
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.NOTIFICATION_EMAIL,
    subject: 'Новый RSVP на свадьбу',
    html: `
      <h2>Получен новый ответ на приглашение</h2>
      <h3>Основной гость:</h3>
      <p>Имя: ${mainGuest.name} ${mainGuest.surname}</p>
      <p>Присутствие на банкете: ${mainGuest.attendBanquet === 'yes' ? 'Да' : 'Нет'}</p>
      <p>Ночевка: ${mainGuest.stayOvernight === 'yes' ? 'Да' : 'Нет'}</p>
      
      ${companions.length > 0 ? `
        <h3>Сопровождающие (${companions.length}):</h3>
        ${companions.map(companion => `
          <p>- ${companion.name} ${companion.surname}</p>
        `).join('')}
      ` : ''}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Уведомление отправлено' });
  } catch (error) {
    console.error('Ошибка отправки email:', error);
    res.status(500).json({ message: 'Ошибка отправки уведомления' });
  }
} 