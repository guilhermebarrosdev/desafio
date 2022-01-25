import { useCart } from './CartContext';
import styles from './Cart.module.css';

const Cart = () => {
  const cart = useCart();
  const remove = (id) => () => {
    cart.removeFromCart(id);
  };

  const clear = (id) => () => {
    cart.clearCart(id);
  };

  const changeQuantity = (id) => (event) => {
    cart.changeQuantity(id, Number(event.target.value));
  };

  const totalItems = Object.keys(cart.cart).reduce((prev, curr) => {
    return prev + cart.cart[curr].quantity;
  }, 0);

  return (
    <div className={`${styles.div} animeLeft`}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <th>Product</th>
          <th>Quantity</th>
        </thead>
        {Object.keys(cart.cart).map((key) => {
          const { product, quantity } = cart.cart[key];
          return (
            <tr className={styles.tr} key={key}>
              <td className={styles.td}>{product.name}</td>
              <td className={styles.td}>
                <input
                  className={styles.input}
                  type="number"
                  defaultValue={quantity}
                  onBlur={changeQuantity(key)}
                />
                <button onClick={remove(key)}>Remove item</button>
              </td>
            </tr>
          );
        })}
        <th>Total items</th>
        <td className={styles.tdTotal}>
          {totalItems} <button onClick={clear()}>Clear cart</button>
        </td>
      </table>
    </div>
  );
};

export default Cart;
