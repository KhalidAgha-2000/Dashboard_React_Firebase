// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "YOUR_CONFIGURATION",
    authDomain: "YOUR_CONFIGURATION",
    projectId: "YOUR_CONFIGURATION",
    storageBucket: "YOUR_CONFIGURATION",
    messagingSenderId: "YOUR_CONFIGURATION",
    appId: "YOUR_CONFIGURATION",
    measurementId: "YOUR_CONFIGURATION",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()