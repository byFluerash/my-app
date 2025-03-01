// lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

// Конфигурация Firebase (замените значения на свои)
const firebaseConfig = {
    apiKey: "AIzaSyCRplyZOZyYX4z566RB8l6cz1MZrdzBdZ8",
    authDomain: "my-wedding-site-be084.firebaseapp.com",
    projectId: "my-wedding-site-be084",
    storageBucket: "my-wedding-site-be084.firebasestorage.app",
    messagingSenderId: "1047492062098",
    appId: "1:1047492062098:web:8b6260b14def499fdeef4b",
    measurementId: "G-NW0TCYMQSC"
};

// Инициализация Firebase приложения
const app = initializeApp(firebaseConfig);

// Инициализация Analytics
const analytics = getAnalytics(app);

// Инициализация Firestore
const db = getFirestore(app);

export { db };