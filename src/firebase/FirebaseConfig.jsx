// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBa1C8Ib8rETHUFyzx5j-o5hGuXlFZSZJQ",
  authDomain: "ecom-eafe2.firebaseapp.com",
  projectId: "ecom-eafe2",
  storageBucket: "ecom-eafe2.appspot.com",
  messagingSenderId: "223207507822",
  appId: "1:223207507822:web:f52668535dfd765747a37f",
  measurementId: "G-Z0HH4YBBYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB,auth} 