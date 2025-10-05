import { scan } from 'react-scan';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { darkTheme, lightTheme } from './defaultTheme.ts';
import { GlobalStyles } from './globalStyles.tsx';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { shouldForwardProp } from './utils/shouldForwardProp.ts';
// import { Login } from './components/';
import { DefaultTheme, Themes } from './types/types.ts';
import App from './App.tsx';

if (process.env.NODE_ENV === 'development') {
  scan({ enabled: true });
}

const queryClient = new QueryClient();

const themeMap: Record<Themes, DefaultTheme> = {
  light: lightTheme,
  dark: darkTheme,
};

// this will not work as of now as of now since main component is not updated when theme is changed
// therefore we would need to pass the ThemeProvider down to children
const currentTheme = (localStorage.getItem('theme') as Themes) || "dark";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themeMap[currentTheme]}>
        <GlobalStyles />
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
          {/* <Login /> */}
          <App /> 
        </StyleSheetManager>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
)
