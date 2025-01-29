import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./defaultTheme";
import { GlobalStyles } from "./globalStyles";
import { Button } from './components'

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

function App() {
  const [count, setCount] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const text = isDarkTheme ? "DarkTheme" : "LightTheme";
  
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AppContainer>
        <Title>Wasgij</Title>
        <Button onClick={() => setCount(count => count + 1)}>count is {count}</Button>

          <Input type="search" placeholder="Search..." />
          
        <Button onClick={() => setIsDarkTheme(!isDarkTheme)}>{text}</Button>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
