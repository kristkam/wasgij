import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
// import useCustomStore from "../store/useCustomStore";

async function fetchPuzzles() {
  const querySnapshot = await getDocs(collection(db, "wasgij_puzzles"));
  return querySnapshot.docs.map((doc) => ({ 
    id: doc.id,
    title: doc.data().title,
    category: doc.data().category,
    image: doc.data().image,
    preview_image: doc.data().preview_image,
    checked: doc.data().checked,
    ...doc.data() 
  }));
};


// server state
function usePuzzlesWithReactQuery() {
  // const { filters } = useCustomStore();
  // const setPuzzlesInStore = usePuzzleStore(state => state.setPuzzlesInStore);

  return useQuery({
    // queryKey: ["puzzles", filters],
    queryKey: ["wasgij_puzzles"],
    queryFn: fetchPuzzles,
    staleTime: 1000 * 60 * 5, // ⏳ Cache data for 5 minutes
    refetchOnWindowFocus: false, // 🚀 Avoid re-fetching on tab switch
    refetchOnMount: false, // ✅ Only fetch once unless manually invalidated
  });
};


export default usePuzzlesWithReactQuery;
