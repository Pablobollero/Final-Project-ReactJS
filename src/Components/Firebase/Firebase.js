import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBYDv_kT74wbxMI2MVXl6GT80IB2TiycB8",
    authDomain: "proyecto-final-react-74248.firebaseapp.com",
    projectId: "proyecto-final-react-74248",
    storageBucket: "proyecto-final-react-74248.appspot.com",
    messagingSenderId: "201020294240",
    appId: "1:201020294240:web:89e28477aaac41114f2f05"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)