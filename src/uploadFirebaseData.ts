import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { puzzles } from "./puzzles";

export const uploadFirebaseData = async () => {
  try {
    const collectionName = "puzzles";
    
    for (const key in puzzles) {
      const puzzle = { 
        ...puzzles[key], 
        checked: false 
      };

      await addDoc(collection(db, collectionName), puzzle);
    }

    console.log("Data uploaded successfully!");
  } catch (error) {
    console.log('error saving data', error)
  }
};