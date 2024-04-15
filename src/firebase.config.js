// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDECUFhdiaY1AilqiszkPvFju5ppGmgxVI",
  authDomain: "make-my-biodata.firebaseapp.com",
  projectId: "make-my-biodata",
  storageBucket: "make-my-biodata.appspot.com",
  messagingSenderId: "659085919187",
  appId: "1:659085919187:web:133a311ad9586b112d6526",
  measurementId: "G-JQFD5PVC7J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
