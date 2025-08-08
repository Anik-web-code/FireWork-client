// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9pWU-bojSxM1qC6lgrOvBtkMj-Ge0Tbs",
  authDomain: "assignment-10-b8035.firebaseapp.com",
  projectId: "assignment-10-b8035",
  storageBucket: "assignment-10-b8035.firebasestorage.app",
  messagingSenderId: "1072009765136",
  appId: "1:1072009765136:web:3fbf9b723aa83a2e428595",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
