import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

const UseFetchFirebaseData = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [items, setItems] = useState<{ id: string; [key: string]: any }[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "items"));
      
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      
      setItems(data);
    };
    
    fetchData();
  }, []);

    return items;
};

export default UseFetchFirebaseData;