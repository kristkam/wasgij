import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { darkTheme2 } from './defaultTheme.ts';
import { GlobalStyles } from './globalStyles.tsx';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { shouldForwardProp } from './utils.ts';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme2}>
        <GlobalStyles />
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
          <App />
        </StyleSheetManager>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
)
