import { useDeferredValue, useMemo } from "react";
import { 
  SearchField, 
  LoadingSpinner, 
  PuzzleCategoryList,
  PuzzleCardList,
  Menu,
  ThemeSwitcher,
  ErrorMessage,
} from "./components";
import usePuzzlesWithReactQuery from "./hooks/usePuzzlesWithReactQuery";
import useFilterdPuzzles from "./hooks/useFilteredPuzzles";
import { getKeys } from "./utils/getKeys";
import styled from "styled-components";
import { createMap } from "./utils/createMap";
// import { uploadFirebaseData } from "./utils/uploadFirebaseData";

const AppContainer = styled.div`
  min-height: 100%;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 2rem;
  font-weight: bold;
  margin: 20px 0;
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
  const defferedFilteredPuzzles = useDeferredValue(filteredPuzzles);
  const loadingData = (isPending || isLoading);

  if (process.env.NODE_ENV === "development") {
    console.log("Firebase Project ID:", import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID);
  };

  if (isError) {
    return <span>Error: {error.message}</span>
  };

  return (
    <AppContainer>
      <Title>Wasgij</Title>
      <ThemeSwitcher />

      {/* <Button onClick={() => uploadFirebaseData("wasgij_puzzles")}>Upload data to firebase</Button> */}
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

        <PuzzleCardList puzzleList={defferedFilteredPuzzles} />
      </Container>
    </AppContainer>
  );
}

export default App;
