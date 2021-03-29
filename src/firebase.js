import { initializeApp } from "firebase/app"
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage"
import {getFirestore} from "@firebase/firestore"
import { collection, addDoc, onSnapshot, serverTimestamp, query, orderBy, deleteDoc, doc  } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
  measurementId: REACT_APP_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)
const db = getFirestore(app)
export {collection, addDoc, db, onSnapshot, serverTimestamp,query,orderBy, storage,ref,uploadBytesResumable,getDownloadURL,deleteDoc, doc, deleteObject}