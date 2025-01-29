import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'
// import { ThemeProvider } from 'styled-components'
// import { lightTheme, darkTheme } from './defaultTheme.ts'
// import { GlobalStyles } from './globalStyles.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
