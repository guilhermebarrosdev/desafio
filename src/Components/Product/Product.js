import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Head from '../Head/Head';
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
      <Head title={`Desafio | ${product.name} `} />
      <div className={styles.description}>
        <h2 className={styles.text}>Name: {product.name}</h2>
        <hr />
        <h2 className={styles.text}>Genus: {product.genus}</h2>
        <hr />
        <h2 className={styles.text}>Family: {product.family}</h2>
        <hr />
        <h2 className={styles.text}>Order: {product.order}</h2>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>NUTRITION FACTS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>carbohydrates: {product.nutritions.carbohydrates}</td>
          </tr>
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
        </tbody>
      </table>
      <div>
        <Link className={styles.buttonBack} to="/" key={product.id}>
          Back
        </Link>
      </div>
    </section>
  );
};

export default Product;
