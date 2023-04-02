import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATJYNGWLukdi3amO40mQKOWkEOMfdvMkU",
  authDomain: "react-1e4f8.firebaseapp.com",
  databaseURL: "https://react-1e4f8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-1e4f8",
  storageBucket: "react-1e4f8.appspot.com",
  messagingSenderId: "801874282318",
  appId: "1:801874282318:web:79be6112f8cb24c197801f",
  measurementId: "G-549ZR3GERV"
};
  
// Initialize Firebase

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);