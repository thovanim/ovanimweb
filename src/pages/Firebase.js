import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDMRbxnb04O-Rf52tVTOBk8JA0K1yibHA4",
    authDomain: "ovanim-newsletter.firebaseapp.com",
    projectId: "ovanim-newsletter",
    storageBucket: "ovanim-newsletter.appspot.com",
    messagingSenderId: "376463624548",
    appId: "1:376463624548:web:2a24291117f9e9b0ad9271",
    measurementId: "G-3YMKYLMEZX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;
  