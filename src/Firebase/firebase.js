// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
