// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // ✅ add this

const firebaseConfig = {
  apiKey: "AIzaSyBsf_4fy1clt6mi9FvWbPoUvixxnJGwzAM",
  authDomain: "designbynaraharidashboard.firebaseapp.com",
  projectId: "designbynaraharidashboard",
  storageBucket: "designbynaraharidashboard.appspot.com",
  messagingSenderId: "420481023275",
  appId: "1:420481023275:web:0f9a0de7335b77c749d96e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); 

export { db, auth }; 