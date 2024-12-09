// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa-nfkvXVFGVhrd_p5DK7fjTr1l8WiupU",
  authDomain: "loom-trust.firebaseapp.com",
  projectId: "loom-trust",
  storageBucket: "loom-trust.firebasestorage.app",
  messagingSenderId: "949980215294",
  appId: "1:949980215294:web:7b866177ddee6aae3e72af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
