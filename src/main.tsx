import { scan } from 'react-scan';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { darkTheme } from './defaultTheme.ts';
import { GlobalStyles } from './globalStyles.tsx';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { shouldForwardProp } from './utils/utils.ts';
import { Login } from './components/';

if (process.env.NODE_ENV === 'development') {
  scan({ enabled: true });
}

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
          <Login />
        </StyleSheetManager>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
)
