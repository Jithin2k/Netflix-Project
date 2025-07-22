// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkSAnfFG1kiTucvB5tjWfBIAFI7p9Sgh8",
  authDomain: "netflix-app-1f8e1.firebaseapp.com",
  projectId: "netflix-app-1f8e1",
  storageBucket: "netflix-app-1f8e1.firebasestorage.app",
  messagingSenderId: "135743562984",
  appId: "1:135743562984:web:2607a9a45c52d7ebe7555d",
  measurementId: "G-CLXFQKW9M4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();