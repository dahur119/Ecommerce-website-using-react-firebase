import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "@firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAxU6nxe6GPO__2YqKiM2aTO7KwBwMJ8Rw",
  authDomain: "betterbuy-170e7.firebaseapp.com",
  projectId: "betterbuy-170e7",
  storageBucket: "betterbuy-170e7.appspot.com",
  messagingSenderId: "399549109231",
  appId: "1:399549109231:web:29a9ec473e7922af10dc1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
export  const storage = getStorage(app)

export default app