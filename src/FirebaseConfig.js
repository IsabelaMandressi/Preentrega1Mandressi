// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmRJdDpcIHjy9joHGDIfTdPzppa6EXlVQ",
    authDomain: "proyecto-final-reactjs-185f1.firebaseapp.com",
    projectId: "proyecto-final-reactjs-185f1",
    storageBucket: "proyecto-final-reactjs-185f1.appspot.com",
    messagingSenderId: "589453351389",
    appId: "1:589453351389:web:f39834b51aec1248effe34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)