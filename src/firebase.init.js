// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbUG-8_b7GDphBqANbN6uzAChglod2O8s",
    authDomain: "image-gallery-rahib.firebaseapp.com",
    projectId: "image-gallery-rahib",
    storageBucket: "image-gallery-rahib.appspot.com",
    messagingSenderId: "912866858429",
    appId: "1:912866858429:web:e5cb202744f7095dd22ed4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;