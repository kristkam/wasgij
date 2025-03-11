import { useMemo } from "react";
import { Puzzle } from "../types/types";
import useCustomStore from "../store/useCustomStore";
import { useShallow } from "zustand/shallow";

enum MenuItem {
  AllPuzzles = "All puzzles",
  CollectedPuzzles = "Collected puzzles",
  ToBePuzzled = "To be puzzled"
}; 

// create custom hook that handles filtering of puzzles by search term and chip selection through quick filtering++
// 1. hook can have useSelector accessing all puzzles from store
// 2. active chip can be selected from store
// 3. searchTerm can be passed as props to hook? // save in localStorage??
// 4. searchTerm should only filter puzzles based on quickFilters
// const filteredPuzzles = useFilteredPuzzles();
const useFilterdPuzzles = (puzzlesFromHook: Array<Puzzle>) => {
  const activeCategory = useCustomStore(useShallow((state) => state.activeChip));
  const searchTerm = useCustomStore(useShallow((state) => state.searchTerm));
  const menuFilter = useCustomStore(useShallow((state) => state.menuFilter));

  return useMemo(() => {
    let filteredPuzzles = [...puzzlesFromHook];

    if (menuFilter === MenuItem.CollectedPuzzles) {
      filteredPuzzles = filteredPuzzles.filter(({ checked }) => checked);      
    } else if (menuFilter === MenuItem.ToBePuzzled) {
      filteredPuzzles = filteredPuzzles.filter(({ checked }) => !checked);
    }

    if (activeCategory) {
      filteredPuzzles = filteredPuzzles.filter(({ category }) => category === activeCategory);
    }

    if (searchTerm) {
      const searchTermInlowerCase = searchTerm.toLowerCase();

      filteredPuzzles = filteredPuzzles.filter(
        ({ title, category }) =>
          title.toLowerCase().includes(searchTermInlowerCase) || 
          category.toLowerCase().includes(searchTermInlowerCase)
      ); 
    }

    return filteredPuzzles;
  }, [puzzlesFromHook, activeCategory, searchTerm, menuFilter]);
};

export default useFilterdPuzzles;