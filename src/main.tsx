import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import App from './03/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App  />
  </StrictMode>,
)
