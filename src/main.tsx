import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { darkTheme2 } from './defaultTheme.ts';
import { GlobalStyles } from './globalStyles.tsx';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { shouldForwardProp } from './utils.ts';
import Login from './components/Login.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme2}>
        <GlobalStyles />
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
          <Login />
        </StyleSheetManager>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
)
