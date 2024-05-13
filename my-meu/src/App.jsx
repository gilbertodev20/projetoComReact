import { useState } from 'react'

import './App.css' 
  
import Header from './components/Header/Header'
import Curriculo from './components/curriculo/curriculo'
import Footer from './components/Footer/Footer'
import Portfolio from './components/Portfolio/Portfolio'
  


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Curriculo></Curriculo>
    <Portfolio></Portfolio>
    <Footer></Footer> 
    </>
  )
}

export default App
