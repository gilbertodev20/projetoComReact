import React from 'react'

import api from './api'

import './App.css'


import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Curriculo from './components/curriculo/curriculo'
import Portfolio from './components/Portfolio/Portfolio'
import Contato from './components/contato/contato'
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import BarraDeNavegacao from './components/barraDeNavegacao/barraDeNavegacao'



function App() {
  const [informacoes, setInformacoes] = React.useState({});
  const [curriculo, setCurriculo] = React.useState({});
  const [portfolio, setPortfolio] = React.useState([]);

  const fetchDados = async () => {
    try {
      const informacao = await api.get(`/informacoes/1`);
      setInformacoes({
        foto: informacao.data.foto,
        nome: informacao.data.nome,
        cargo: informacao.data.cargo
      })


      const experienciaAcademica = await api.get(`/experiencias?tipo=academico`)
      const experienciaProfissionais = await api.get(`/experiencias?tipo=profissional`)

      setCurriculo({
        resumo: informacao.data.resumo,
        experienciaAcademica: experienciaAcademica.data,
        experienciaProfissionais: experienciaProfissionais.data
      })
      
      const portfolio = await api.get(`/portfolio`)
      setPortfolio(portfolio.data)

    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
    }
  }

  React.useEffect(() => {
    fetchDados()
  }, [])

  return (
    <>
      <Header informacoes={informacoes}></Header>
      <BrowserRouter>
        <BarraDeNavegacao></BarraDeNavegacao>
        <Routes>
          <Route index element={<Curriculo curriculo={curriculo} />} />
          <Route path="portfolio" element={<Portfolio portfolio={portfolio} />} />
          <Route path="contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>


      <Footer></Footer>
    </>
  )
}

export default App
