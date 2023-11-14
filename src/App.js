import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './shared/navbar';
import Footer from './shared/footer';
import LoadingSpinner from './pages/loader/loader';

import Home from './pages/home';
import Eshop from './pages/eshop';
import Account from './pages/account';
import Infos from './pages/sub-eshop/infos';
import Registration from './pages/sub-account/Registration';
import Dashboard from './pages/sub-account/dashboard';
import PasswordRecovery from './pages/sub-account/recovery';
import NotFound from './pages/notfound';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Routes>
            <Route path="/" exact component={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/e-shop" element={<Eshop />} />
            <Route path="/account" element={<Account />} />
            <Route path="/infos" element={<Infos />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/recovery" element={<PasswordRecovery />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
