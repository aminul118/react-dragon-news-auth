// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYoLAhS3uM5ZGCbcmxTilnynf00comR_U",
  authDomain: "dragon-news-auth-75284.firebaseapp.com",
  projectId: "dragon-news-auth-75284",
  storageBucket: "dragon-news-auth-75284.firebasestorage.app",
  messagingSenderId: "250851320586",
  appId: "1:250851320586:web:8bdd32c7c1e5b0f6be50f3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
