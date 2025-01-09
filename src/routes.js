import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Filme from './pages/Home/Filme'
import Header from './components/Header'
import Erro from './pages/Home/Erro'
import Favoritos from './pages/Home/Favoritos'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/filme/:id' element={ <Filme/> } />
                <Route path='/favoritos' element={ <Favoritos/> } />

                <Route path='*' element={ <Erro/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp