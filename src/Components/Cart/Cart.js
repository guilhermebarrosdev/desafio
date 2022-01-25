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
    <section className={`${styles.div} animeLeft`}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
          </tr>
        </thead>
        {Object.keys(cart.cart).map((key) => {
          const { product, quantity } = cart.cart[key];
          return (
            <tr key={key}>
              <td className={styles.nameProduct}>{product.name}</td>
              <td>
                <input
                  className={styles.input}
                  type="number"
                  defaultValue={quantity}
                  onBlur={changeQuantity(key)}
                />
                <button
                  className={styles.buttonRemoveItem}
                  onClick={remove(key)}
                >
                  Remove item
                </button>
              </td>
            </tr>
          );
        })}
        <th>Total items</th>
        <td>
          <strong>{totalItems} </strong>
          <button className={styles.clearCart} onClick={clear()}>
            Clear cart
          </button>
        </td>
      </table>
    </section>
  );
};

export default Cart;
