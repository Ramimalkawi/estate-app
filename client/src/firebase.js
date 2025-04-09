// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiqGHud4jqKETat0LO-33pVD2BP6j-IFE",
  //   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-app-react.firebaseapp.com",
  projectId: "estate-app-react",
  storageBucket: "estate-app-react.firebasestorage.app",
  messagingSenderId: "787712901374",
  appId: "1:787712901374:web:14340d8315018cf0f425af",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
