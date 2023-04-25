import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhhJRaXiLzVadLAcB1dx07zPfmvj-XuEA",
  authDomain: "chat-85452.firebaseapp.com",
  projectId: "chat-85452",
  storageBucket: "chat-85452.appspot.com",
  messagingSenderId: "4237755012",
  appId: "1:4237755012:web:b1838fee7b4edb9124b8d1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()