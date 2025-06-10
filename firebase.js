// frontend/src/utils/api.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIHyPHYYtuAj19v1waUwueHH9pwXEmA-4",
  authDomain: "omniconnect-b5odj.firebaseapp.com",
  projectId: "omniconnect-b5odj",
  storageBucket: "omniconnect-b5odj.firebasestorage.app",
  messagingSenderId: "236714116751",
  appId: "1:236714116751:web:ec66c4e264bba1be9992fa"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const login = (email, pass) => signInWithEmailAndPassword(auth, email, pass);
export const signup = (email, pass) => createUserWithEmailAndPassword(auth, email, pass);