import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCt5Z9GSrChuUJocOt1ZDGNEkW_YOwgGUM",
  authDomain: "facebookclone-81c0a.firebaseapp.com",
  databaseURL: "https://facebookclone-81c0a-default-rtdb.firebaseio.com",
  projectId: "facebookclone-81c0a",
  storageBucket: "facebookclone-81c0a.appspot.com",
  messagingSenderId: "1044822344254",
  appId: "1:1044822344254:web:c7ef40ba7834c6eac7476f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const provider = new GoogleAuthProvider();

export { provider }
export default db