import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDKi23jmNHjBx9ve0gizQK3zbrBFCixph0",
    authDomain: "tpilabiii.firebaseapp.com",
    projectId: "tpilabiii",
    storageBucket: "tpilabiii.appspot.com",
    messagingSenderId: "509620298103",
    appId: "1:509620298103:web:a5badb4fd794e072210172",
    measurementId: "G-P4EYR5JCGE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}
export const db = getFirestore(app);