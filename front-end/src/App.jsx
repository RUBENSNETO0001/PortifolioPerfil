import { useState } from 'react'
import './assets/css/css-estrutura/header.css'
import './assets/css/css-estrutura/footer.css'
import './assets/css/css-estrutura/cssmain/sobremim.css'
import './assets/css/css-estrutura/cssmain/projetos.css'
import './assets/css/App.css'
import Header from './assets/estrutura/header.jsx'
import Footer from './assets/estrutura/footer.jsx'
//main
import MainSobremim from './assets/estrutura/main/main_sobremim.jsx'
import MainProjetos from './assets/estrutura/main/main_projetos.jsx'
function App() {
  const Main = () => {
    return(
      <>
        <MainSobremim/>
        <MainProjetos/>
      </>
    )
  } 

  return (
    <>
      <Header />
      <Main />
      <Footer/>
    </>
  )
}

export default App
