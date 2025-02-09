import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

type Puzzle = {
  id: string;
  title: string;
  category: string;
  image_url: string;
};

const useFetchFirebaseData = () => {
  const [items, setItems] = useState<Puzzle[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "puzzles"));
      
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        category: doc.data().category,
        image_url: doc.data().image_url,
        ...doc.data(),
      }));
      
      setItems(data);
    };
    
    fetchData();
  }, []);

    return items;
};

export default useFetchFirebaseData;