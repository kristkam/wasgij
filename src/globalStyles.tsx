import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-align: center;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: ${(props) => props.theme.typography.fontFamily};
    background-color: ${(props) => props.theme.colors.background.primary};
  }
`;