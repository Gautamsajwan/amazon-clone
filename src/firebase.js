import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDCVk-484zHGetLu7wP4tFeqMNRIofF8zw",
    authDomain: "challenge-25608.firebaseapp.com",
    projectId: "challenge-25608",
    storageBucket: "challenge-25608.appspot.com",
    messagingSenderId: "943303587826",
    appId: "1:943303587826:web:83463a8347eb246d48dd6b"
  };

  // initialize the firebase config
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // initialize the database
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth }; // exporting these will allow us to use database and authentatication outside of the file
