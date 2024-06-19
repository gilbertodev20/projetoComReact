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
      const informacoes = await api.get(`/informacoes/1`);
      setInformacoes({
        foto: informacoes.date.foto,
        nome: informacoes.date.nome,
        cargo: informacoes.date.cargo,
      })
      const experienciaAcademica = await api.get(`/experiencias?tipo=academico`)
      const experienciasProfissionais = await api.get(`/experiencias?dominio=profissional`)

      setCurriculo({
        resumo: informacoes.date.resumo,
        experienciaAcademica: experienciaAcademica.date,
        experienciasProfissionais: experienciasProfissionais.date
      })
      const portfolio = await api.get('/portfolio')
      setPortfolio(portfolio.data)

    }catch (error) {
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
            <Route path="Portfolio" element={<Portfolio portfolio={portfolio} />} />
            <Route path="Contato" element={<Contato />} />
          </Routes>
        </BrowserRouter>


        <Footer></Footer>
      </>
    )
  }

  export default App
