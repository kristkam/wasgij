import { useMutation, useQueryClient } from "@tanstack/react-query";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Puzzle } from "../types/types";

type UpdatePuzzle = { 
  id: string; 
  newData: Partial<Puzzle>;
};

const updatePuzzle = async ({ id, newData }: UpdatePuzzle) => {
  const docRef = doc(db, "wasgij_puzzles", id);
  await updateDoc(docRef, newData);
}

function useUpdatePuzzle() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePuzzle,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["wasgij_puzzles"]}); // Ensure fresh data from Firestore
    },
  });
  
}

export default useUpdatePuzzle;