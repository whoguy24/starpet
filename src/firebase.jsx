// Import Modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Authentication and Configuragion
const firebaseConfig = {
  apiKey: "AIzaSyBgyc3r9cqOcNx6gmd4hhd67seJehsFq80",
  authDomain: "starpet-50dcd.firebaseapp.com",
  projectId: "starpet-50dcd",
  storageBucket: "starpet-50dcd.firebasestorage.app",
  messagingSenderId: "774811944915",
  appId: "1:774811944915:web:1718987a11ed75051ed126"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);