import React, { useState, useEffect } from 'react';
import '../styles/components.css';

function Timer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const eventDate = new Date('2025-06-30T16:00:00'); // Замените на вашу дату
        
        const timer = setInterval(() => {
            const now = new Date();
            const difference = eventDate - now;
            
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);
            
            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="timer-container">
            <div className="timer-background" style={{backgroundImage: `url(${require('../assets/header_background.JPG')})`}}>
                <div className="timer-overlay">
                    <h2>До начала осталось:</h2>
                    <div className="timer-digits">
                        <div className="timer-block">
                            <span>{timeLeft.days}</span>
                            <p>дней</p>
                        </div>
                        <div className="timer-block">
                            <span>{timeLeft.hours}</span>
                            <p>часов</p>
                        </div>
                        <div className="timer-block">
                            <span>{timeLeft.minutes}</span>
                            <p>минут</p>
                        </div>
                        <div className="timer-block">
                            <span>{timeLeft.seconds}</span>
                            <p>секунд</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timer; 