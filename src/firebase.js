import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDxXNW83RWkcnIHjNPGOh2afnNzhgE5WsM",
  authDomain: "clone2-32839.firebaseapp.com",
  projectId: "clone2-32839",
  storageBucket: "clone2-32839.appspot.com",
  messagingSenderId: "481538568746",
  appId: "1:481538568746:web:dfebc95f2495ae89f5c953"
};

// initialize the firebase config
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initialize the database
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }; // exporting these will allow us to use database and authentatication outside of the file
