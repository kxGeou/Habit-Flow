import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; 
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCEwRNdfDLqG0SFoVNnc3wSEJyIKxUq6Bk",
    authDomain: "habitflow-82bc6.firebaseapp.com",
    projectId: "habitflow-82bc6",
    storageBucket: "habitflow-82bc6.firebasestorage.app",
    messagingSenderId: "266211017897",
    appId: "1:266211017897:web:0a2662c3f2f23037d155b8",
    measurementId: "G-XL8BQJ6SF4"
  };
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
