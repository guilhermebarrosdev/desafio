import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Product.module.css';

const Product = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduct(json);
      } catch (err) {
        setError('Ocorreu um erro');
      } finally {
        setLoading(false);
      }
    }
    fetchProduct(`https://www.fruityvice.com/api/fruit/${id}`);
  }, [id]);

  if (loading === true) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (product === null) return null;
  return (
    <section className={`${styles.product} animeLeft`}>
      <div className={styles.description}>
        <h2 className={styles.description}>Name: {product.name}</h2>
        <h2 className={styles.description}>Genus: {product.genus}</h2>
        <h2 className={styles.description}>Family: {product.family}</h2>
        <h2 className={styles.description}>Order: {product.order}</h2>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <h3>NUTRITION FACTS</h3>
          </tr>
        </thead>
        <tbody>
          <td>carbohydrates: {product.nutritions.carbohydrates}</td>
        </tbody>
        <tr>
          <td>protein: {product.nutritions.protein}</td>
        </tr>
        <tr>
          <td>fat: {product.nutritions.fat}</td>
        </tr>
        <tr>
          <td>calories: {product.nutritions.calories}</td>
        </tr>
        <tr>
          <td>sugar: {product.nutritions.sugar}</td>
        </tr>
      </table>
    </section>
  );
};

export default Product;
