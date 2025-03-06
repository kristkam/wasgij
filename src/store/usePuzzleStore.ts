import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Puzzle } from "../types/types";

type PuzzleStore = {
  puzzlesInStore: Array<Puzzle>;
  setPuzzlesInStore: (allPuzzles: Array<Puzzle>) => void;
  addPuzzleToStore: (newPuzzle: Puzzle) => void;
  mutatePuzzle: (id: string, value: Partial<Puzzle>) => void;
}

const usePuzzleStore = create<PuzzleStore>()(
  devtools((set) => ({
    puzzlesInStore: [],
    setPuzzlesInStore: (puzzlesInStore) => set({ puzzlesInStore }),
    addPuzzleToStore: (newPuzzle) => set((state) => ({ 
      puzzlesInStore: [...state.puzzlesInStore, newPuzzle] 
    })),
    mutatePuzzle: (id, value) => set((state) => ({
      puzzlesInStore: state.puzzlesInStore.map((puzzle) => puzzle.id === id ? { ...puzzle, ...value } : puzzle)  })),
  }))
);



export default usePuzzleStore;