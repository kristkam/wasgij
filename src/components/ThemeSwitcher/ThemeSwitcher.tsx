import { memo } from "react";
import { Button } from "..";
import { Moon, Sun } from "../../svg";
import useStore from "../../store/useCustomStore";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 3px;
  right: 0;
  margin: 10px 0;
  padding: 2px 8px;
`;

const ThemeSwitcher = () => {
  const theme = useStore.use.theme();
  const { setTheme } = useStore.use.actions();

  const isDarkmode = theme === "dark";

  const handleThemeSwitch = () => {
    localStorage.setItem("theme", isDarkmode ? "light" : "dark");
    setTheme(isDarkmode ? "light" : "dark");
  };

  return (
    <Container>
      <Button onClick={handleThemeSwitch}>
        {isDarkmode ? <Moon /> : <Sun />}
      </Button>
    </Container>
  )
};

export default memo(ThemeSwitcher);