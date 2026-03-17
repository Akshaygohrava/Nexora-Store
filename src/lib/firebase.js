// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBDYVvMPlq54psQpCOCKB6qLSj1w42Bnek",
  authDomain: "nexora-store-8719d.firebaseapp.com",
  projectId: "nexora-store-8719d",
  storageBucket: "nexora-store-8719d.appspot.com",
  messagingSenderId: "201513517736",
  appId: "1:201513517736:web:d4d80666285bde2751f89d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export default app;
export { db, storage };
