import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Home from './componentes/home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Home/>
  </BrowserRouter>
)


