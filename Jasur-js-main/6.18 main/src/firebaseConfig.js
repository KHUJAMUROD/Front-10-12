import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js'
const firebaseConfig = {
  apiKey: "AIzaSyAUxxWSNqB_RgSEO-_WKoEvBLNhdAE4bQQ",
  authDomain: "todo-170326.firebaseapp.com",
  databaseURL: "https://todo-170326-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todo-170326",
  storageBucket: "todo-170326.firebasestorage.app",
  messagingSenderId: "849647142161",
  appId: "1:849647142161:web:348490edec1533d8c978b0",
  measurementId: "G-G5PJR660S7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app)


export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
}