import React from  'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Repositorio from './pages/Repositorio/Repositorio'

function Router(){
 
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/'  element={<Home/>}/>
            <Route path='/repos/:repos'  element={<Repositorio/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Router