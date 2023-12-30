// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "boli-mern.firebaseapp.com",
  projectId: "boli-mern",
  storageBucket: "boli-mern.appspot.com",
  messagingSenderId: "109253050576",
  appId: "1:109253050576:web:541b2a5c52694fd8e0ded5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
