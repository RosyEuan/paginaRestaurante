import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import { Dashboard } from './components/dashboard.tsx'
import Router from './Router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Dashboard></Dashboard>
    <App/> */}
    <Router/>
  </StrictMode>,
)
