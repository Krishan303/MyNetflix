// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzDHtfVcUSaGypNsmLr6l1JO7hYB8eFno",
  authDomain: "netflixgpt-40ffc.firebaseapp.com",
  projectId: "netflixgpt-40ffc",
  storageBucket: "netflixgpt-40ffc.appspot.com",
  messagingSenderId: "909689964746",
  appId: "1:909689964746:web:9bac294189c12bd563cc33",
  measurementId: "G-Y12KKDTL1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);