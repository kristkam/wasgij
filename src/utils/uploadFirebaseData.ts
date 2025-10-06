import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { wasgij_puzzles_final } from "./wasgij_puzzle_final";

export const uploadFirebaseData = async (collectionName: string) => {
  try {
    for (const key in wasgij_puzzles_final) {
      const puzzle = { 
        ...wasgij_puzzles_final[key], 
        checked: false 
      };

      await addDoc(collection(db, collectionName), puzzle);
    }

    console.log("Data uploaded successfully!");
  } catch (error) {
    console.log('error saving data', error)
  }
};