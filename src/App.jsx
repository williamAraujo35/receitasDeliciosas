import React from 'react';
import './App.css';
import Header from './components/Header';
import Routes from './nav/Routes';
import { HashRouter } from 'react-router-dom';

function App() {
  return(
    <main className='App'>
      <HashRouter>
        <Header />
        <Routes />
      </HashRouter>
    </main>
  );
}

export default App;
