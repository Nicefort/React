import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import App02 from './02/App02.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App02  />
  </StrictMode>,
)
