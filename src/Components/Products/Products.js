import styles from './Products.module.css';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Cart/CartContext';
import Head from '../Head/Head';

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
    <section className={`${styles.products} animeLeft`}>
      <Head title="Desafio | Products" />
      <h1>All Fruits</h1>
      <div className={styles.container}>
        {products.map((product) => (
          <div className={styles.product} key={product.name}>
            <h3 className={styles.name}>{product.name}</h3>
            <Link
              className={styles.buttonInfo}
              to={`fruit/${product.id}`}
              key={product.id}
            >
              most info
            </Link>
            <button className={styles.buttonCart} onClick={add(product)}>
              Cart +
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
