// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZPXRfy95yV4chklEgUBO7y7JfVwD_7oc",
    authDomain: "online-tutor-dba75.firebaseapp.com",
    projectId: "online-tutor-dba75",
    storageBucket: "online-tutor-dba75.appspot.com",
    messagingSenderId: "651215661860",
    appId: "1:651215661860:web:294680decc2b34266121b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;