// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWTHnoHrrZQCduZs6BZGliYlGCrNyXyvg",
    authDomain: "pa-ago23-feb24-68e71.firebaseapp.com",
    projectId: "pa-ago23-feb24-68e71",
    storageBucket: "pa-ago23-feb24-68e71.appspot.com",
    messagingSenderId: "454550296506",
    appId: "1:454550296506:web:abbd67374982561a4d2f83"
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);