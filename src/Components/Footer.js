import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        © Developed by{' '}
        <a
          href="http://github.com/guilhermebarrosdev"
          target="_blank"
          rel="noreferrer"
        >
          Guilherme Barros
        </a>
        .
      </footer>
    </div>
  );
};

export default Footer;
