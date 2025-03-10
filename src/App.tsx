import { useMemo } from "react";
import { 
  SearchField, 
  LoadingSpinner, 
  PuzzleCategoryList, 
  PuzzleCard,
  Menu,
  ThemeSwitcher,
  ErrorMessage,
} from "./components";
import usePuzzlesWithReactQuery from "./hooks/usePuzzlesWithReactQuery";
import useFilterdPuzzles from "./hooks/useFilteredPuzzles";
import { getKeys } from "./utils/getKeys";
import styled from "styled-components";
import { createMap } from "./utils/createMap";
import useWindowResize from "./hooks/useWindowResize";

const AppContainer = styled.div`
  min-height: 100%;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 2rem;
  font-weight: bold;
  margin: 20px 0;
`;

const PuzzleContainer = styled.div<{ containerHeight: number }>`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
  height: ${(props) => `${props.containerHeight}px`};
  overflow-y: auto;
  border: 1px solid ${(props) => props.theme.colors.background.surface};
  border-radius: 6px;
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
  const {
    data: puzzleData = [],
    isPending, 
    isLoading,
    isError, 
    error,
  } = usePuzzlesWithReactQuery();

  const puzzleMap = useMemo(() => 
    createMap(puzzleData, "category"),[puzzleData]);

  const puzzleCategories = useMemo(() => 
    getKeys(puzzleMap),[puzzleMap]);

  const filteredPuzzles = useFilterdPuzzles(puzzleData);
  const containerHeight = useWindowResize();

  const memoizedContainerHeight = useMemo(() => containerHeight - 200 , [containerHeight]);

  const loadingData = (isPending || isLoading);

  if (isError) {
    return <span>Error: {error.message}</span>
  };

  if (process.env.NODE_ENV === "development") {
    console.log("Firebase Project ID:", import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID);
  };

  return (
    <AppContainer>
      <Title>Wasgij</Title>
      <ThemeSwitcher />

      {/* <Button onClick={uploadFirebaseData}>Upload data to firebase</Button> */}
      {!isError && <ErrorMessage isError={isError} error={error} />}
      {loadingData && <LoadingSpinner />}
      
      <Container>
        <TopContainer>
          <PuzzleCategoryList 
            puzzleCategories={puzzleCategories} 
            puzzlesGroupedByCategory={puzzleMap}
          />
          <MenuSearchFieldContainer>
            <Menu />
            <SearchField />
          </MenuSearchFieldContainer>
        </TopContainer>

        <PuzzleContainer containerHeight={memoizedContainerHeight}>
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
