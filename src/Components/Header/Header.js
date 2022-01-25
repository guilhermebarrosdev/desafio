import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useCart } from '../Cart/CartContext';

const Header = () => {
  const cart = useCart();
  const itemsCount = Object.keys(cart.cart).length;

  return (
    <header className={styles.headerBackground}>
      <div className={styles.header}>
        <nav className={styles.headerNav}>
          <ul>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  background: isActive ? '#ddd' : '#eee',
                })}
                className={styles.link}
                to="/"
                end
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  background: isActive ? '#ddd' : '#eee',
                })}
                className={styles.link}
                to="cart"
              >
                Cart {itemsCount > 0 && <span>({itemsCount})</span>}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
