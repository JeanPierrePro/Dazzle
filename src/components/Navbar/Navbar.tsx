// src/components/Navbar/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // IMPORTANTE: Importe Link
import styles from './Navbar.module.css'; // Importa os estilos modularizados

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <Link to="/" className={styles.logo}> {/* Use Link para o logo que leva à home */}
          DAZZLE
          {/* Se você tiver uma imagem de logo (ex: src/assets/dazzle-logo.png), pode usar: */}
          {/* <img src="/assets/dazzle-logo.png" alt="DAZZLE Logo" /> */}
        </Link>
        <ul className={styles.navLinks}>
          <li><Link to="/meu-time" className={styles.navItem}>Meu Time</Link></li>
          <li><Link to="/jogos" className={styles.navItem}>Jogos</Link></li>
          <li><Link to="/noticias" className={styles.navItem}>Notícias</Link></li>
          <li><Link to="/favoritos" className={styles.navItem}>Favoritos</Link></li>
        </ul>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Procurar jogos, competições"
            className={styles.searchInput}
          />
        </div>
        <Link to="/profiles" className={styles.tnButtonLink}> {/* Adicionei uma nova classe para estilização específica do link/botão */}
          <button className={styles.tnButton}>
            TN
          </button>
          </Link>
      </div>
    </nav>
  );
};

export default Navbar;