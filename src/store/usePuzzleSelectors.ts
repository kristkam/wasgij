import { shallow } from "zustand/shallow";
import usePuzzleStore from "./usePuzzleStore";
import { useShallow } from "zustand/shallow";

const usePuzzleSelectors = () => ({
  getPuzzleById: (id: string) => 
    usePuzzleStore(
      useShallow(state => 
        state.puzzlesInStore.find(p => p.id === id)
      )
    ),
  getCategories: () => 
    usePuzzleStore(
      useShallow(state => 
        [...new Set(state.puzzlesInStore.map(p => p.category))]
      )
    )
});

export default usePuzzleSelectors;