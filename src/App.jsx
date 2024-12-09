import React from 'react'
import './App.css'
import Header from './pages/Header/Header'
import Footer from './pages/Footer/Footer'
import Home from './pages/Home/Home'
import Download from './pages/Download/Download'
import Mensal from './pages/Planos/Mensal/Mensal'
import Anual from './pages/Planos/Anual/Anual'
import Suporte from './pages/Suporte/Suporte'
// import Anual from './pages/Planos/Anual'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
  <div className=''>

    <BrowserRouter>
     <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='downloads/' element={<Download/>}/>
        <Route path='mensal/' element={<Mensal/>}/>
        <Route path='anual/' element={<Anual/>}/>
        <Route path='suporte/' element={<Suporte/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  </div>
    </>
  )
}

export default App
