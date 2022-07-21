import firebase from "firebase";
const firebaseConfig = {
    //Put your config file here
    apiKey: "AIzaSyBveq4Q0uoWdHgGyVdiZPig8629a5tS8IY",
    authDomain: "school-7ede0.firebaseapp.com",
    projectId: "school-7ede0",
    storageBucket: "school-7ede0.appspot.com",
    messagingSenderId: "621097007853",
    appId: "1:621097007853:web:bb4b81c9ed31a932722ae4",
    measurementId: "G-5TG3WP62XP"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage,firebase };