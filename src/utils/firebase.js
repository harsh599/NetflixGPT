// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnXFBaq0vlGYchMI4PoU5vKrkoQDVBGSw",
  authDomain: "netflixgpt-b34aa.firebaseapp.com",
  projectId: "netflixgpt-b34aa",
  storageBucket: "netflixgpt-b34aa.firebasestorage.app",
  messagingSenderId: "356772926905",
  appId: "1:356772926905:web:50359904b8770650479268",
  measurementId: "G-RCDKQ7GPRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
