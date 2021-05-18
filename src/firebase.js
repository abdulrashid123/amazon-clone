import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDdHvjVuXprPl1_Swhf-_7t_WvTJUayF8",
    authDomain: "challenge-15969.firebaseapp.com",
    projectId: "challenge-15969",
    storageBucket: "challenge-15969.appspot.com",
    messagingSenderId: "210397066706",
    appId: "1:210397066706:web:bc8efaea04f4ba31cfc40b",
    measurementId: "G-S45B33S15T"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };