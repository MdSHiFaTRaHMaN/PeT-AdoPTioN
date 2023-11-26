// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo6KcHhzqDk9eKLWirYBSmOQ0SPMuurGA",
  authDomain: "pet-adoption-4cc2a.firebaseapp.com",
  projectId: "pet-adoption-4cc2a",
  storageBucket: "pet-adoption-4cc2a.appspot.com",
  messagingSenderId: "852947137923",
  appId: "1:852947137923:web:a609bf9723122d066032b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;