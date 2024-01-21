// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtrUrgxlPkcZafeexXSJnceGZcI2ZF1Iw",
  authDomain: "expense-tracker-3c1ea.firebaseapp.com",
  projectId: "expense-tracker-3c1ea",
  storageBucket: "expense-tracker-3c1ea.appspot.com",
  messagingSenderId: "750670077979",
  appId: "1:750670077979:web:c26b1fd3e3179d917718be",
  measurementId: "G-73LTKQGFY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

//firebase login
//firebase init
//firebase deploy
