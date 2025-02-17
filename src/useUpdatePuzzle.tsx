import { useMutation, useQueryClient } from "@tanstack/react-query";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

type UpdatePuzzle = { 
  id: string; 
  newData: { 
    title: string; 
    category: string; 
    image_url: string;
    checked: boolean;
  }; 
};

const updatePuzzle = async ({ id, newData }: UpdatePuzzle) => {
  const docRef = doc(db, "puzzles", id);
  await updateDoc(docRef, newData);
}

function useUpdatePuzzle() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePuzzle,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["puzzles"]}); // Ensure fresh data from Firestore
    },
  });
  
}

export default useUpdatePuzzle;