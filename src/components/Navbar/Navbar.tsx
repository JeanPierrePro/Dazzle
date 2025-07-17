// src/components/Navbar/Navbar.tsx
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <Link to="/" className={styles.logo}>
          DA<span className={styles.logoOrange}>ZZ</span>LE
        </Link>

        {/* Botão Hambúrguer para Mobile */}
        <button className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu} aria-label="Abrir menu de navegação">
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* Links de navegação e Barra de Pesquisa para Mobile */}
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
          {/* Barra de Pesquisa dentro do menu mobile, visível apenas no mobile */}

          <li>
            <NavLink
              to="/meu-time"
              className={({ isActive }) => isActive ? `${styles.navItem} ${styles.activeNavItem}` : styles.navItem}
              onClick={() => setIsMenuOpen(false)}
            >
              Meu Time
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/jogos"
              className={({ isActive }) => isActive ? `${styles.navItem} ${styles.activeNavItem}` : styles.navItem}
              onClick={() => setIsMenuOpen(false)}
            >
              Jogos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/noticias"
              className={({ isActive }) => isActive ? `${styles.navItem} ${styles.activeNavItem}` : styles.navItem}
              onClick={() => setIsMenuOpen(false)}
            >
              Notícias
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favoritos"
              className={({ isActive }) => isActive ? `${styles.navItem} ${styles.activeNavItem}` : styles.navItem}
              onClick={() => setIsMenuOpen(false)}
            >
              Favoritos
            </NavLink>
          </li>
        </ul>
      </div>

      <div className={styles.rightSection}>
        {/* Barra de Pesquisa para Desktop (visível apenas no desktop) */}
        <div className={styles.searchBarDesktop}>
          <input
            type="text"
            placeholder="Procurar jogos, competições"
            className={styles.searchInput}
          />
        </div>
        <Link to="/profiles" className={styles.tnButtonLink}>
          <button className={styles.tnButton}>
            TN
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
