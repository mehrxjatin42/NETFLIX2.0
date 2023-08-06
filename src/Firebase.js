// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjrk02FDulonakwGBnUk9Y8SY7-EAXcls",
  authDomain: "streamvibe-c53cd.firebaseapp.com",
  projectId: "streamvibe-c53cd",
  storageBucket: "streamvibe-c53cd.appspot.com",
  messagingSenderId: "663733365817",
  appId: "1:663733365817:web:a7beb565af19d2d530f1e8",
  measurementId: "G-THBWYBLVQW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
