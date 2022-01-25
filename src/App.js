import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Product from './Components/Product';
import Products from './Components/Products';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="fruit/:id" element={<Product />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
