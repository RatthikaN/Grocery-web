// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBj_lYzBkz8_9P0ojlVPMfn4DBjvkwF_3A",
    authDomain: "farmshed-caf89.firebaseapp.com",
    projectId: "farmshed-caf89",
    storageBucket: "farmshed-caf89.firebasestorage.app",
    messagingSenderId: "553115002415",
    appId: "1:553115002415:web:a9e24cccbd7657e37708da",
    measurementId: "G-R4MQTVFX9F"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
