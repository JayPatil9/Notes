import { initializeApp } from "firebase/app";
import { getFirestore,collection } from "firebase/firestore";



const firebaseConfig = {
  // Replace with your api key
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");