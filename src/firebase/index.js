import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


const firebaseConfig = {

    apiKey: "AIzaSyA-w4H6-m1J0wNxmPrY-1tPpzU2c3WoLj0",
  
    authDomain: "schnellbank-e363f.firebaseapp.com",
  
    projectId: "schnellbank-e363f",
  
    storageBucket: "schnellbank-e363f.appspot.com",
  
    messagingSenderId: "16150881610",
  
    appId: "1:16150881610:web:dfc4551dd242abfa54cdb3",
  
    measurementId: "G-R3B7SN3NDS"
  
  };
  
  
  

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
 export {auth};
