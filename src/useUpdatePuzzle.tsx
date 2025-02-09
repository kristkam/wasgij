import { useMutation, useQueryClient } from "@tanstack/react-query";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

type UpdatePuzzle = { 
  id: string; 
  newData: { 
    title: string; 
    category: string; 
    image_url: string; 
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

    // onMutate: async ({ id, newData }) => {
    //   await queryClient.cancelQueries(["puzzles"]);

    //   const previousPuzzles = queryClient.getQueryData(["puzzles"]);

    //   // Optimistically update UI instantly
    //   queryClient.setQueryData(["puzzles"], (oldPuzzles) =>
    //     oldPuzzles?.map((p) => (p.id === id ? { ...p, ...newData } : p))
    //   );

    //   return { previousPuzzles }; // Save rollback data
    // },

    // onError: (err, variables, context) => {
    //   // Roll back if Firestore fails
    //   queryClient.setQueryData(["puzzles"], context.previousPuzzles);
    // },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["puzzles"] }); // Ensure fresh data from Firestore
    },
  });
  
}

export default useUpdatePuzzle;