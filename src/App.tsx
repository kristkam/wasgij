import { ChangeEvent, useMemo } from "react";
import styled from "styled-components";
import { 
  SearchField, 
  LoadingSpinner, 
  PuzzleCategoryList, 
  PuzzleCard,
  Menu,
  ThemeSwitcher,
} from "./components";
import usePuzzlesWithReactQuery from "./hooks/usePuzzlesWithReactQuery";
import { Puzzle, PuzzleCategory } from "./types/types";
import useFilterdPuzzles from "./hooks/useFilteredPuzzles";
import useCustomStore from "./store/useCustomStore";

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
  align-items: center;
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
  align-items: center;
`;

function App() {
  const setSearchTerm = useCustomStore(state => state.setSearchTerm);

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

  const filteredPuzzles = useFilterdPuzzles(puzzlesFromHook);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);
  
  if (isError) {
    return <span>Error: {error.message}</span>
  };
  
  console.log("Firebase Project ID:", import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID);

  return (
    <AppContainer>
      <Title>Wasgij</Title>
      <ThemeSwitcher />

      {/* <Button onClick={uploadFirebaseData}>Upload data to firebase</Button> */}
      {isPending && <LoadingSpinner />}
      
      <Container>
        <TopContainer>
          <PuzzleCategoryList 
            puzzleCategories={puzzleCategories} 
            puzzlesGroupedByCategory={puzzlesGroupedByCategory}
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
