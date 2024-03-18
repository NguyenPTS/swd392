// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-PKobKdPk1vZ5afia4d5RhFN1dlY6sKY",
  authDomain: "react-auth-9e124.firebaseapp.com",
  projectId: "react-auth-9e124",
  storageBucket: "react-auth-9e124.appspot.com",
  messagingSenderId: "177661497450",
  appId: "1:177661497450:web:30bb0fcbb0ae679959fa13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;