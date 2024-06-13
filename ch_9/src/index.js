import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyCBP-8GyIea30rWAXOhXY7P-v09DuO5t9A",
  authDomain: "firstreactapp-63955.firebaseapp.com",
  projectId: "firstreactapp-63955",
  storageBucket: "firstreactapp-63955.appspot.com",
  messagingSenderId: "767317008418",
  appId: "1:767317008418:web:4e65af7b34904ca2d3aa7b",
  measurementId: "G-F59CVESSM5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
