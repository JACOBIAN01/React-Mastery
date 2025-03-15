import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyEffect from './components/Effect.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyEffect/>
  </StrictMode>,
)
