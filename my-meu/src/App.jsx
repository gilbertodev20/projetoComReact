

import './App.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Curriculo from './components/curriculo/curriculo'
import Portfolio from './components/Portfolio/Portfolio'
import Contato from './components/contato/contato'
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import BarraDeNavegacao from './components/barraDeNavegacao/barraDeNavegacao'


function App() {


  return (
    <>
      <Header></Header>
      <BrowserRouter>
       <BarraDeNavegacao></BarraDeNavegacao>
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
