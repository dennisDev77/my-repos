import React from 'react'
import './App.css'
import Header from './pages/Header/Header'
import Footer from './pages/Footer/Footer'
import Home from './pages/Home/Home'
import Download from './pages/Download/Download'
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
      </Routes>

      <Footer/>
    </BrowserRouter>
  </div>
    </>
  )
}

export default App
