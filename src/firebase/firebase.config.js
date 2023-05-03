// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkdhIgBGWeWQQ1fY-rZJl_NyZpvszN8Q0",
  authDomain: "chef-s-palette-auth.firebaseapp.com",
  projectId: "chef-s-palette-auth",
  storageBucket: "chef-s-palette-auth.appspot.com",
  messagingSenderId: "997003278226",
  appId: "1:997003278226:web:e04afc42507a568090f34b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;