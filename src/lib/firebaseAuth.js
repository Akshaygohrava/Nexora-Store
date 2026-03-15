// src/lib/firebaseAuth.js
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from "./firebase";

const auth = getAuth(app);

export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const logout = () => signOut(auth);
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);
export { auth };
