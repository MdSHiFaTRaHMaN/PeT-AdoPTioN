import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyBSOAuGNT0bIiGxIeNVfG0AiAezQ3a7dU0",
  authDomain: "react-dragon-news-c41a0.firebaseapp.com",
  projectId: "react-dragon-news-c41a0",
  storageBucket: "react-dragon-news-c41a0.appspot.com",
  messagingSenderId: "862115893567",
  appId: "1:862115893567:web:03107cb7788da3a00ac38a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;