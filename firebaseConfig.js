import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBYBsdKmqxoDFSqZNnQsjusgvHc8nls06M",
    authDomain: "expo--signin-firebase-1d8e5.firebaseapp.com",
    projectId: "expo--signin-firebase-1d8e5",
    storageBucket: "expo--signin-firebase-1d8e5.appspot.com",
    messagingSenderId: "386461305768",
    appId: "1:386461305768:web:1928dceebf7a7df89dab9d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);