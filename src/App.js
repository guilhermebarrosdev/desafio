import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
import Products from './Components/Products/Products';

const App = () => {
  return (
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
  );
};

export default App;
