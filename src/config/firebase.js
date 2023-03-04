import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBQAmAfpKbqk20djYbb-UK8VD4waG37JgY",
  authDomain: "courses-9c3c5.firebaseapp.com",
  projectId: "courses-9c3c5",
  storageBucket: "courses-9c3c5.appspot.com",
  messagingSenderId: "824807561321",
  appId: "1:824807561321:web:62af26b0b3db8abd8feaf8",
  measurementId: "G-8QE1NB9W0Z"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);