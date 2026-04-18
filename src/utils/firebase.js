// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIxZz56bjXFRV_SNvVtMMgW4qS0tz2kf4",
  authDomain: "videostreaming-12d64.firebaseapp.com",
  projectId: "videostreaming-12d64",
  storageBucket: "videostreaming-12d64.firebasestorage.app",
  messagingSenderId: "686452928608",
  appId: "1:686452928608:web:e4490e70377ef04d15d305",
  measurementId: "G-W9YSTHGPMY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
