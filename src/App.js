import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Products from './Components/Products';

const App = () => {
  return (
    <div className="Container">
      <BrowserRouter>
        <Header />
        <div className="Content">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
