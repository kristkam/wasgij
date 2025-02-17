import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

async function fetchPuzzles() {
  const querySnapshot = await getDocs(collection(db, "puzzles"));

  // const puzzleArray = querySnapshot.docs.map((doc) => ({ 
  //   id: doc.id,
  //   title: doc.data().title,
  //   category: doc.data().category,
  //   image_url: doc.data().image_url,
  //   checked: doc.data().checked,
  //   ...doc.data() 
  // }));

  // const puzzleRecord = puzzleArray.reduce((result: Record<typeof puzzle.category, typeof puzzle[]>, puzzle) => {
  //   const { category } = puzzle;

  //   if (!result[category]) {
  //     result[category] = [];
  //   }
  //   result[category].push(puzzle);

  //   return result;
  // },{});

  // const puzzleCategories = Object.keys(puzzleRecord);

  // return { 
  //   puzzleArray,
  //   puzzleRecord, 
  //   puzzleCategories, 
  // };

  return querySnapshot.docs.map((doc) => ({ 
    id: doc.id,
    title: doc.data().title,
    category: doc.data().category,
    image_url: doc.data().image_url,
    checked: doc.data().checked,
    ...doc.data() 
  }));
};

function usePuzzlesWithReactQuery() {
  return useQuery({
    queryKey: ["puzzles"],
    queryFn: fetchPuzzles,
    staleTime: 1000 * 60 * 5, // ⏳ Cache data for 5 minutes
    refetchOnWindowFocus: false, // 🚀 Avoid re-fetching on tab switch
    refetchOnMount: false, // ✅ Only fetch once unless manually invalidated
  });
};


export default usePuzzlesWithReactQuery;
