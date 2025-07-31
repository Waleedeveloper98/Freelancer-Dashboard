import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDKXWLKgMZnrNlMg3oerSU0SNrgV7mjHm4",
    authDomain: "dashboardauth-49faa.firebaseapp.com",
    projectId: "dashboardauth-49faa",
    storageBucket: "dashboardauth-49faa.appspot.com",
    messagingSenderId: "419176969951",
    appId: "1:419176969951:web:4e2df5e7dce28d5878db6a",
    measurementId: "G-7NBBJ8F052"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
