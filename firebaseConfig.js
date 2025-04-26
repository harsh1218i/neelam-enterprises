// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZDeh4FAwg5z29TQOF-Q0E2U99AkwZiyw",
    authDomain: "neelam-enterprises-1810.firebaseapp.com",
    projectId: "neelam-enterprises-1810",
    storageBucket: "neelam-enterprises-1810.firebasestorage.app",
    messagingSenderId: "1067330501432",
    appId: "1:1067330501432:web:59400cc6b78e8a0e3d5fcd",
    measurementId: "G-12819PMDEV"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth methods
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();

export { auth, RecaptchaVerifier, signInWithPhoneNumber, googleProvider, facebookProvider, twitterProvider };