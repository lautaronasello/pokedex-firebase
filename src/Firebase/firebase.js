// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useEffect } from 'react';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const apiKey = process.env.REACT_APP_FIREBASE_KEY;
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: 'pokemon-firebase-248e6.firebaseapp.com',
  projectId: 'pokemon-firebase-248e6',
  storageBucket: 'pokemon-firebase-248e6.appspot.com',
  messagingSenderId: '695344906356',
  appId: '1:695344906356:web:63651a459210725418d121',
  measurementId: 'G-X50TB0656M',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Use these for db & auth
const db = app.firestore();
const auth = getAuth();

export { firebase, db, auth };
