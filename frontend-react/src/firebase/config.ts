// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSEgx0whaQDzWeQOpEExb91XA2HtlkE8E",
  authDomain: "domino-65915.firebaseapp.com",
  projectId: "domino-65915",
  storageBucket: "domino-65915.appspot.com",
  messagingSenderId: "712409683949",
  appId: "1:712409683949:web:953952fa1f5bdc84ec79e4",
  measurementId: "G-KE2VT5VFSQ"
};


// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);