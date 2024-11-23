// Firebase/Config.js
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'; 
import { getAuth } from 'firebase/auth';  
import { getStorage } from 'firebase/storage'
// import {getMessaging, getToken, onMessage} from 'firebase/messaging'


const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_DATABASE_URL,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app); 
const auth = getAuth(app); 
const storage = getStorage(app);


export { app, db, auth, storage}; 