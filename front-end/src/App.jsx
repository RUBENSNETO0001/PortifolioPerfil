import { useState } from 'react'
import './assets/css/css-estrutura/header.css'
import './assets/css/css-estrutura/footer.css'
import './assets/css/css-estrutura/cssmain/sobremim.css'
import './assets/css/css-estrutura/cssmain/projeto.css'
import './assets/css/css-estrutura/cssmain/contato.css'

import Header from './assets/estrutura/Header.jsx'
import Footer from './assets/estrutura/Footer.jsx'
//main
import MainSobremim from './assets/estrutura/main/MainSobremim.jsx'
import MainProjetos from './assets/estrutura/main/MainProjeto.jsx'
import MainContato from './assets/estrutura/main/MainContato.jsx'

function App() {
  const Main = () => {
    return (
      <>
        <MainSobremim />
        <MainProjetos />
        <MainContato />
      </>
    )
  }

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
