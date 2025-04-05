// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMTjQLrIra4YLYOsVaPSX-aNUTsLIVfoo",
  authDomain: "auth-6c617.firebaseapp.com",
  projectId: "auth-6c617",
  storageBucket: "auth-6c617.firebasestorage.app",
  messagingSenderId: "641651065083",
  appId: "1:641651065083:web:7c1dcc7c6908d64f97f05e",
  measurementId: "G-KC2QX06V5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);


export {auth,app};