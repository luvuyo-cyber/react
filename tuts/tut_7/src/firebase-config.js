// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPL10_PDqIasE7sAm8AHWAqB1TtGn2ICI",
    authDomain: "blogproject-33225.firebaseapp.com",
    projectId: "blogproject-33225",
    storageBucket: "blogproject-33225.appspot.com",
    messagingSenderId: "801749435677",
    appId: "1:801749435677:web:6f079f97dcd2def4224df4",
    measurementId: "G-XGMV37PEE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();