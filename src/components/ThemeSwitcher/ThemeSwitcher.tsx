import { useState } from "react";
import { Button } from "..";
import { Moon, Sun } from "../../svg";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 3px;
  right: 0;
  margin: 10px 0;
  padding: 2px 8px;
`;

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Container>
      <Button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? <Moon /> : <Sun />}
      </Button>
    </Container>
  )
};

export default ThemeSwitcher