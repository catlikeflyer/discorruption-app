import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu6bBPwmhjCwfwP_reRZUknzHpzCUOxiA",
  authDomain: "discorrupti.firebaseapp.com",
  projectId: "discorrupti",
  storageBucket: "discorrupti.appspot.com",
  messagingSenderId: "35496517381",
  appId: "1:35496517381:web:7f58efe661df0247de216c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const pStorage = firebase.storage();
const pFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { pStorage, pFirestore, timestamp };
