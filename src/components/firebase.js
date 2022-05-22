
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDGf1ffXxcMGNisGFYiOLhYwA_Xtw_7h-o",
    authDomain: "forfurs-e6cf8.firebaseapp.com",
    projectId: "forfurs-e6cf8",
    storageBucket: "forfurs-e6cf8.appspot.com",
    messagingSenderId: "82673007200",
    appId: "1:82673007200:web:ef661f78c6be9b14bd6105",
    measurementId: "G-K48R0FEQ53"
  };

  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
  
const provider = new GoogleAuthProvider();
export {auth,provider}