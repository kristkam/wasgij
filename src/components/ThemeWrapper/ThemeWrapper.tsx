import { StyleSheetManager, ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../globalStyles";
import useCustomStore from "../../store/useCustomStore";
import { shouldForwardProp } from "../../utils/shouldForwardProp";
import { DefaultTheme, Themes } from "../../types/types";
import { darkTheme, lightTheme } from "../../defaultTheme";

interface OwnProps {
  children?: React.ReactNode;  
}

const ThemeWrapper = (props: OwnProps) => {
  const { children } = props;
  const theme = useCustomStore.use.theme();

  const themeMap: Record<Themes, DefaultTheme> = {
    light: lightTheme,
    dark: darkTheme,
  };

  return (
    <ThemeProvider theme={themeMap[theme as Themes]}>
      <GlobalStyles />
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        {children}
      </StyleSheetManager>
    </ThemeProvider>
  );
};

export default ThemeWrapper;