import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import Navbar from './shared/navbar'
import Footer from './shared/footer'

import Home from './pages/home';
import Eshop from './pages/eshop';
import Account from './pages/account';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path='home' element={<Home/>}/>
            <Route path='e-shop' element={<Eshop/>}/>
            <Route path='account' element={<Account/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
