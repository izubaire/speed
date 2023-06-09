import { initializeApp } from "firebase/app"
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage"
import {getFirestore} from "@firebase/firestore"
import { collection, addDoc, onSnapshot, serverTimestamp, query, orderBy, deleteDoc, doc, updateDoc, getDocs  } from "firebase/firestore"; 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)
const db = getFirestore(app)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

export {googleProvider, collection, addDoc, getDocs, db, onSnapshot, serverTimestamp,query,orderBy,updateDoc, storage,ref,uploadBytesResumable,getDownloadURL,deleteDoc, doc, deleteObject, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, signInWithPopup }