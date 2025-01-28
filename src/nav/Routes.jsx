import React from 'react';
import { Routes, Route} from 'react-router-dom';


/*IMPORTANDO AS PÁGINAS DE NAVEGAÇÃO DO BLOG*/
import Blog from './Blog';
import Galeria from './Galeria';
import Sobre from './Sobre';
import Feijoada from './descritivoReceitas/Feijoada';
import ArrozAgrega from './descritivoReceitas/ArrozAgrega';
import Bobo from './descritivoReceitas/BoboCamarao';
import Moqueca from './descritivoReceitas/Moqueca';
import Panqueca from './descritivoReceitas/PanquecaCarne';
import VacaAtolada from './descritivoReceitas/VacaAtolada';

export default props =>
    <main className='body'>
        <Routes>
            <Route exact path='/' element={<Blog />}/>
            <Route path='/about' element={<Sobre />}/>
            <Route path='/pictures' element={<Galeria />}/>
            <Route path='*' element={<Blog />}/>
            <Route path='feijoada' element={<Feijoada/>}/>
            <Route path='arroz agrega' element={<ArrozAgrega/>}/>
            <Route path='bobó de camarão' element={<Bobo/>}/>
            <Route path='moqueca Capixaba' element={<Moqueca/>}/>
            <Route path='panqueca de carne' element={<Panqueca/>}/>
            <Route path='vaca atolada' element={<VacaAtolada/>}/>
        </Routes>
    </main>

