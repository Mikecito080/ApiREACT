import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './home'
import Mapa from './mapa'
import Informativa from './informativa'
import Favoritos from './favoritos'
import Detalle from './detalle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>

        <nav className="c-menu">
          <Link to="/home">Home</Link>
          <Link to="/informativa">Informativa</Link>
          <Link to="/mapa">Mapa</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="/detalle">Detalle</Link>
        </nav>


      <Routes>
          <Route path="/home" element={<Home /> } />
          <Route path="/informativa" element={<Informativa /> } />
          <Route path="/mapa" element={<Mapa /> } />
          <Route path="/favoritos" element={<Favoritos /> } />
          <Route path="/detalle/:depto/:municipio" element={<Detalle /> } />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
