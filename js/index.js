// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsoNNKSofv7sG5L0jKDzl98hdf6kmOjoQ",
  authDomain: "heaven-sent-7-web.firebaseapp.com",
  projectId: "heaven-sent-7-web",
  storageBucket: "heaven-sent-7-web.firebasestorage.app",
  messagingSenderId: "289232920080",
  appId: "1:289232920080:web:27244e258614b2ac62f495",
  measurementId: "G-XH26WXVRTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);