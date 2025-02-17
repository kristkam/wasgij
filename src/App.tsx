import { ChangeEvent, useMemo, useState } from "react";
import styled from "styled-components";
import { 
  SearchField, 
  LoadingSpinner, 
  PuzzleCategoryList, 
  PuzzleCard,
  Menu
} from "./components";
import usePuzzlesWithReactQuery from "./usePuzzlesWithReactQuery";

const AppContainer = styled.div`
  min-height: 100%;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 2rem;
  font-weight: bold;
  margin: 20px 0;
`;

const PuzzleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* overflow: scroll; // here */
`;

const Container = styled.div`
  padding: 16px;
  margin: 16px;

  @media (max-width: 768px) {
    padding: 4px;
    margin: 4px;
  }
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: 0 15px 0 15px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    gap: 8px;
    margin: 0 15px 15px 15px;
    align-items: center;
    padding: 2px;
  }
`;

const MenuSearchFieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

type PuzzleCategory = "original" | "mystery" | "christmas" | "destiny";

type Puzzle = {
  id: string;
  title: string;
  category: PuzzleCategory;
  image_url: string;
  checked: boolean;
};

function App() {
  const [searchFilter, setSearchFilter] = useState("");
  
  const {
    data: puzzlesFromHook = [], 
    isPending, 
    isError, 
    error,
  } = usePuzzlesWithReactQuery();

const puzzleCategories = useMemo(() => puzzlesFromHook.reduce((result: PuzzleCategory[], puzzle) => {
  const { category } = puzzle;

  if (!result.includes(category)) {
    result.push(category);
  }

  return result;
}, []), [puzzlesFromHook]);

const puzzlesGroupedByCategory: Record<PuzzleCategory, Puzzle[]> = puzzlesFromHook.reduce((result: Record<PuzzleCategory, Puzzle[]>, puzzle) => {
  const { category } = puzzle as Puzzle;

  if (!result[category]) {
    result[category] = [];
  }
  result[category].push(puzzle);

  return result;
}, {} as Record<PuzzleCategory, Puzzle[]>);

// function getKeys<T extends object>(obj: T): Array<keyof T> {
//   return Object.keys(obj) as Array<keyof T>;
// };

// create custom hook that handles filtering of puzzles by search term and chip selection through quick filtering++
// 1. hook can have useSelector accessing all puzzles from store
// 2. active chip can be selected from store
// 3. searchTerm can be passed as props to hook? // save in localStorage??
// 4. searchTerm should only filter puzzles based on quickFilters
// const filteredPuzzles = useFilteredPuzzles();

const filteredPuzzles = useMemo(() => puzzlesFromHook.filter(
  ({ title, category }) =>
    title.toLocaleLowerCase().includes(searchFilter.toLowerCase()) ||
    category.toLocaleLowerCase().includes(searchFilter.toLowerCase())
), [puzzlesFromHook, searchFilter]);

  console.log("Firebase Project ID:", import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID);
  
  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearchFilter(e.target.value);

  
  if (isError) {
    return <span>Error: {error.message}</span>
  };

  return (
    <AppContainer>
      <Title>Wasgij</Title>

      {/* <Button onClick={uploadFirebaseData}>Upload data to firebase</Button> */}
      {isPending && <LoadingSpinner />}
      
      <Container>
        <TopContainer>
          <PuzzleCategoryList 
            puzzleCategories={puzzleCategories} 
            puzzlesGroupedByCategory={puzzlesGroupedByCategory} 
            totalPuzzles={puzzlesFromHook.length}
          />
          
          <MenuSearchFieldContainer>
            <Menu />
            <SearchField onChange={onSearchChange} />
          </MenuSearchFieldContainer>
        </TopContainer>
        <PuzzleContainer>
          {filteredPuzzles.map((puzzle) => (
            <PuzzleCard 
              key={puzzle.id} 
              puzzle={puzzle} 
            />
          ))}
        </PuzzleContainer>
      </Container>
    </AppContainer>
  );
}

export default App;
