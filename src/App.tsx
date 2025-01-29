import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { puzzles }  from "./puzzles";
import { darkTheme } from "./defaultTheme";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100%;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary.purple};
  font-size: 2rem;
  font-weight: bold;
  margin: 20px 0;
`;

const Input = styled.input`
  margin: 20px 0;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid ${(props) => props.theme.colors.neutral.lightGray};
  border-radius: 5px;
  width: 200px;
`;

const TextBox = styled.div`
  color: ${(props) => props.theme.colors.neutral.charcoalGray};
  font-size: 1rem;
  margin: 10px 0;
  text-align: center;
`;

const Image = styled.img`
  width: 200px;
  height: auto;
  margin: 10px;
`;

function App() {

  const [searchFilter, setSearchFilter] = useState("");

  const filteredPuzzles = puzzles.filter((puzzle) => {
    return puzzle.title.toLocaleLowerCase().includes(searchFilter.toLowerCase())
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <AppContainer>
        <Title>Wasgij</Title>
          <Input type="search" onChange={(e) => setSearchFilter(e.target.value)} placeholder="Search..." />
          {filteredPuzzles.map((puzzle) => (
            <div>
              <TextBox key={puzzle.title}>{puzzle.title}</TextBox>
              <Image src={puzzle.image_url} alt={puzzle.title} />
            </div>
          ))}
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
