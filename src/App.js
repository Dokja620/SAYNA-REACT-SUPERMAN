import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './shared/navbar';
import Footer from './shared/footer';

import Home from './pages/home';
import Eshop from './pages/eshop';
import Account from './pages/account';
import Infos from './pages/sub-eshop/infos';
import Registration from './pages/sub-account/Registration';
import Dashboard from './pages/sub-account/dashboard';
import PasswordRecovery from './pages/sub-account/recovery';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/e-shop" element={<Eshop />} />
          <Route path="/account" element={<Account />} />
          <Route path="/infos" element={<Infos />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/recovery" element={<PasswordRecovery />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
