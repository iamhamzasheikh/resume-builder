import './index.css'
import App from './App.jsx'

import { createRoot } from 'react-dom/client'
import {BrowserRouter, HashRouter} from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
