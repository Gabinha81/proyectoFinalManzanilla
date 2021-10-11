import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyACrttyvMgBkhBdG16Mn9Wgb2bmmfXp6j4",
  authDomain: "manzanilla-db88b.firebaseapp.com",
  projectId: "manzanilla-db88b",
  storageBucket: "manzanilla-db88b.appspot.com",
  messagingSenderId: "380061311342",
  appId: "1:380061311342:web:24a401d04c94a6dc0d617f"
};


const app = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore(app)
