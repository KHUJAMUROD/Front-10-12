import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyC1ueALFDe-mUZ0j7rgiDHAMXmDGSuxteQ",
    authDomain: "todo17773.firebaseapp.com",
    databaseURL: "https://todo17773-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todo17773",
    storageBucket: "todo17773.firebasestorage.app",
    messagingSenderId: "392683178421",
    appId: "1:392683178421:web:dbebf96db7f623b1c8b1fc",
    measurementId: "G-7ZHG8SJ1YS"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
};
