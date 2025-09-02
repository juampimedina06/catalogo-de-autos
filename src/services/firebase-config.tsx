import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDiLIaRt358UzWmdSychjqpaCc4pOF5NTc",
  authDomain: "gestion-autos-test.firebaseapp.com",
  projectId: "gestion-autos-test",
  storageBucket: "gestion-autos-test.firebasestorage.app",
  messagingSenderId: "190857001372",
  appId: "1:190857001372:web:ea8eaff5b4790d544db059",
  measurementId: "G-NKC6HX29RN"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);
