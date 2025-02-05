import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { darkTheme2 } from "./defaultTheme";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { Button } from "./components";
import { uploadFirebaseData } from "./uploadFirebaseData";
import UseFetchFirebaseData from "./useFetchFirebaseData";

const AppContainer = styled.div`
  min-height: 100%;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 2rem;
  font-weight: bold;
  margin: 20px 0;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 1rem;
  border: 1px solid ${(props) => props.theme.colors.background.surface};
  border-radius: 5px;
  width: 450px;
  text-align: left;
  background-color: ${(props) => props.theme.colors.background.surface};

  @media (max-width: 768px) {
    width: 350px;
  }
`;

const TextBox = styled.div`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 1rem;
  margin: 10px 0;
  text-align: center;
`;

const Image = styled.img`
  width: 200px;
  height: auto;
  margin: 8px;
  cursor: pointer;
  /* object-fit: cover; */
`;

const PuzzleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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

const ChipContainer = styled.div`
  display: flex;
  gap: 8px;
  
  @media (max-width: 768px) {
    justify-content: center;
    gap: 4px;
  }
`;

const Card = styled.div`
  flex: 1 0 400px;
  padding: 16px;
  margin: 16px;
  border: 1px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.background.surface};
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 350px;
    object-fit: cover;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled(motion.div)`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 800px;
  position: relative;
`;

const CloseButton = styled(Button)`
  font-size: 24px;
  cursor: pointer;
`;

const Chip = styled.div`
  background-color: ${(props) => props.theme.colors.background.surface};
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 1rem;
  padding: 8px 16px;
  border-radius: 16px;
  font-weight: 500;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: ${(props) => props.theme.colors.accents.secondary};
    color: ${(props) => props.theme.colors.text.primary};
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

function App() {
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [searchFilter, setSearchFilter] = useState("");

  const puzzlesFromFirebase = UseFetchFirebaseData();

  const puzzleKeys = puzzlesFromFirebase.reduce((result: string[], puzzle) => {
    const { category } = puzzle;

    if (!result.includes(category)) {
      result.push(category);
    }

    return result;
  }, []);


  const filteredPuzzles = puzzlesFromFirebase.filter(
    ({ title, category }) =>
      title.toLocaleLowerCase().includes(searchFilter.toLowerCase()) ||
      category.toLocaleLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <ThemeProvider theme={darkTheme2}>
      <GlobalStyles />
      <AppContainer>
        <Title>Wasgij</Title>

        <Button onClick={uploadFirebaseData}>Upload data to firebase</Button>

        <Container>
          <TopContainer>
            <ChipContainer>
              {puzzleKeys.map((category) => (
                <Chip key={category} style={{ textTransform: "capitalize" }}>{category}</Chip>
              ))}
              </ChipContainer>
            <Input
              type="search"
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Search..."
            />
          </TopContainer>
          <PuzzleContainer>
            {filteredPuzzles.map((puzzle) => (
              <Card key={puzzle.id}>
                <h2 style={{ color: "#FFC107", textTransform: "capitalize" }}>{puzzle.category}</h2>
                <TextBox key={puzzle.title}>{puzzle.title}</TextBox>
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    src={puzzle.image_url}
                    alt={puzzle.title}
                    onClick={() => {
                      setOpen(!open)
                      setImageUrl(puzzle.image_url)
                    }}
                  />
                </motion.div>
                
              </Card>
            ))}
            <AnimatePresence>
              {open && (
                <Overlay 
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ModalContainer
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                  >
                    <CloseButton onClick={() => setOpen(false)}>✕</CloseButton>
                    <img style={{ width: "100%", height: "70vh" }} src={imageUrl} onClick={() => setOpen(false)} />
                  </ModalContainer>
                </Overlay>   
              )}
            </AnimatePresence>

          </PuzzleContainer>
        </Container>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
