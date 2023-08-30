// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwSnAZ2AxHiTK-aLpvNatJJuXYbFfLh0w",
  authDomain: "melocap.firebaseapp.com",
  projectId: "melocap",
  storageBucket: "melocap.appspot.com",
  messagingSenderId: "220968013508",
  appId: "1:220968013508:web:43c0961c6bb22739658391"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)