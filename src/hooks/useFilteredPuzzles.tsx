import { useMemo } from "react";
import { Puzzle } from "../types/types";
import useCustomStore from "../store/useCustomStore";
import { useShallow } from "zustand/shallow";

// create custom hook that handles filtering of puzzles by search term and chip selection through quick filtering++
// 1. hook can have useSelector accessing all puzzles from store
// 2. active chip can be selected from store
// 3. searchTerm can be passed as props to hook? // save in localStorage??
// 4. searchTerm should only filter puzzles based on quickFilters
// const filteredPuzzles = useFilteredPuzzles();
const useFilterdPuzzles = (puzzlesFromHook: Array<Puzzle>) => {
  const activeCategory = useCustomStore(useShallow((state) => state.activeChip));
  const searchTerm = useCustomStore(useShallow((state) => state.searchTerm));

  return useMemo(() => {
    const filteredPuzzles = puzzlesFromHook;
    
    if (activeCategory && searchTerm) {
      return filteredPuzzles.filter(({ category, title }) =>
        category === activeCategory && title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  
    if (activeCategory && !searchTerm) {
      return filteredPuzzles.filter(({ category }) => 
        category === activeCategory
      );
    }
  
    if (!activeCategory && searchTerm) {
      return filteredPuzzles.filter(({ title, category }) =>
        title.toLowerCase().includes(searchTerm.toLowerCase()) || category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredPuzzles;
  }, [puzzlesFromHook, activeCategory, searchTerm]);
};

export default useFilterdPuzzles;