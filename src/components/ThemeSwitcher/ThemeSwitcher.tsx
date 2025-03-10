import { memo } from "react";
import { Button } from "..";
import { Moon, Sun } from "../../svg";
import styled from "styled-components";
import useCustomStore from "../../store/useCustomStore";

const Container = styled.div`
  position: absolute;
  top: 3px;
  right: 0;
  margin: 10px 0;
  padding: 2px 8px;
`;

const ThemeSwitcher = () => {
  const theme = useCustomStore((state) => state.theme);
  const switchTheme = useCustomStore((state) => state.setTheme);

  const isDarkmode = theme === "dark";

  const handleThemeSwitch = () => {
    localStorage.setItem("theme", isDarkmode ? "light" : "dark");
    switchTheme(isDarkmode ? "light" : "dark");
  }

  return (
    <Container>
      <Button onClick={handleThemeSwitch}>
        {isDarkmode ? <Moon /> : <Sun />}
      </Button>
    </Container>
  )
};

export default memo(ThemeSwitcher);