import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebaseConfig";

type Puzzle = {
  id: string;
  title: string;
  category: string;
  image_url: string;
  checked: boolean;
};

const usePuzzles = () => {
  const [puzzles, setPuzzles] = useState<Puzzle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for real-time updates
    const unsubscribe = onSnapshot(collection(db, "puzzles"), (querySnapshot) => {
      console.log("querysnapshot", (querySnapshot.docs));
      setPuzzles(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          category: doc.data().category,
          image_url: doc.data().image_url,
          checked: doc.data().checked,
          ...doc.data(),
        }))
      );

      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  return { puzzles, loading };
};

export default usePuzzles;
