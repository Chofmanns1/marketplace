import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtZJUBMvaNbxY6TFpxMYdjZHqpP9kJtyw",
  authDomain: "marketplace-65901.firebaseapp.com",
  projectId: "marketplace-65901",
  storageBucket: "marketplace-65901.appspot.com",
  messagingSenderId: "1030579294243",
  appId: "1:1030579294243:web:1a44031ed3b8ed0e2fe196",
  measurementId: "G-380HDLYMTD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };