import styles from './Products.module.css';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const Products = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const cart = useContext(CartContext);
  const add = (product) => () => {
    cart.addToCart(product);
  };

  useEffect(() => {
    async function fetchProduct(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProducts(json);
      } catch (err) {
        setError('Ocorreu um erro');
      } finally {
        setLoading(false);
      }
    }
    fetchProduct(`https://www.fruityvice.com/api/fruit/all`);
  }, []);

  if (error) return <p>{error}</p>;
  if (loading === true) return <div className="loading"></div>;
  if (products === null) return null;
  return (
    <div className={`${styles.products} animeLeft`}>
      {products.map((product) => (
        <div className={styles.product}>
          <h1 key={product.name}>{product.name}</h1>
          <Link
            className={styles.name}
            to={`fruit/${product.id}`}
            key={product.id}
          >
            most infos
          </Link>
          <button className={styles.button} onClick={add(product)}>
            Cart +
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
