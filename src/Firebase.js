import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzVypgR2pa9tHW3P1TDyiXzN0W8ZLHrzI",
  authDomain: "clone-reactredux.firebaseapp.com",
  projectId: "clone-reactredux",
  storageBucket: "clone-reactredux.appspot.com",
  messagingSenderId: "263983995135",
  appId: "1:263983995135:web:aa1fe4f72ef99a0d3c54ca",
  measurementId: "G-7D88C7NDZ4"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth=firebase.auth()

export  {db,auth};
