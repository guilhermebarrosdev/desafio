import './Styles/GlobalStyle.css';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './Components/Cart/CartContext';

ReactDOM.render(
  // <React.StrictMode>
  <CartProvider>
    <App />
  </CartProvider>,
  /* </React.StrictMode>, */
  document.getElementById('root')
);
