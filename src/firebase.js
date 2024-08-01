import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNqyka_uMw_XzJTzB3l9qFCZffXWIxNS0",
  authDomain: "clonebybp.firebaseapp.com",
  projectId: "clonebybp",
  storageBucket: "clonebybp.appspot.com",
  messagingSenderId: "663114288334",
  appId: "1:663114288334:web:e6ff11df88c4000132149f",
  measurementId: "G-WZNEXGJYBR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authorization = getAuth();
export const database = getFirestore(app);
export const provider = new GoogleAuthProvider();
