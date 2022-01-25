import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useCart } from './CartContext';

const Header = () => {
  const cart = useCart();
  const itemsCount = Object.keys(cart.cart).length;

  return (
    <div className={styles.header}>
      <nav>
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
  );
};

export default Header;
