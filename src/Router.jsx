import React from  'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './pages/Header/Header'
import Home from './pages/Home/Home'
import Repositorio from './pages/Repositorio/Repositorio'

function Router(){
 
    return(
        <>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route exact path='/'  element={<Home/>}/>
            <Route exact path='/repos/:repos'  element={<Repositorio/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Router