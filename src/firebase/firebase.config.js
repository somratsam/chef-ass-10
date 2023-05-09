// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC6DRn_pp9-5xZnHCK4L2GJYLpRYq7C_o",
  authDomain: "the-endless-meal.firebaseapp.com",
  projectId: "the-endless-meal",
  storageBucket: "the-endless-meal.appspot.com",
  messagingSenderId: "286495456289",
  appId: "1:286495456289:web:6b05bc889c227b30a3b760"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;