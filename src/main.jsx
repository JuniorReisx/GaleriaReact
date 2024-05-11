import React from 'react'
import ReactDOM from 'react-dom/client'
import {Header} from './Header.jsx'
import {Footer} from './Footer.jsx'
import './index.css'
import { Galeria } from './Galeria.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Galeria />
    <Footer />
  </React.StrictMode>,
)
