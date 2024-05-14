

import './App.css' 
  
import Header from './components/Header/Header'
import Curriculo from './components/curriculo/curriculo'
import Footer from './components/Footer/Footer'
import Portfolio from './components/Portfolio/Portfolio'
import Contato from './components/contato/contato'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {


  return (
    <>
    <BrowserRouter>
    <Header></Header>
     <nav>
        
        <Link className='button' to="/">Curriculo</Link>
        <Link className='button' to="/Portfolio">Portfolio</Link>
        <Link className='button' to="/contato">Contato</Link>
      
    </nav>
    
      <Routes>
        
          <Route index element={<Curriculo />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
<Footer></Footer>
   
    </>
  )
}

export default App
