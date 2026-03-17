// src/lib/firebaseStorage.js
import { getStorage, ref, uploadBytes, getDownloadURL, listAll, deleteObject } from "firebase/storage";
import app from "./firebase";

const storage = getStorage(app);

export { storage, ref, uploadBytes, getDownloadURL, listAll, deleteObject };