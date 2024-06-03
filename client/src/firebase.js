// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "authication-ca6ad.firebaseapp.com",
  projectId: "authication-ca6ad",
  storageBucket: "authication-ca6ad.appspot.com",
  messagingSenderId: "300215362696",
  appId: "1:300215362696:web:c6c4e5e135229917ce2b3d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
