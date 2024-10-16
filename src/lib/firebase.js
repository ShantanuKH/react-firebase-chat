
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatapp-b3a59.firebaseapp.com",
  projectId: "reactchatapp-b3a59",
  storageBucket: "reactchatapp-b3a59.appspot.com",
  messagingSenderId: "237439814938",
  appId: "1:237439814938:web:7fcf12b17b9b53daf4b0a3",
  measurementId: "G-LN9KWGW1YK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()