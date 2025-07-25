// src/components/pages/OfertasPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/OfertasPage.module.css';

const OfertasPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/profile'); 
  };

  const handleTabClick = (path: string) => {
    navigate(path);
  };

  const handleAdherir = (offerName: string) => {
    alert(`Você clicou em aderir para: ${offerName}!`);
  };

  return (
    <div className={styles.ofertasPage}>
      <main className={styles.mainContent}>
        <div className={styles.navigationHeader}>
            <button className={styles.arrowBack} onClick={handleGoBack}>&larr;</button>
            <div className={styles.breadcrumb}>
                A minha conta {'>'} mais sobre a DAZZLE
            </div>
        </div>
        <h1 className={styles.pageTitle}>As tuas ofertas</h1>

        <nav className={styles.tabsContainer}>
          <button className={styles.tabButton} onClick={() => handleTabClick('/subscricao')}>SUBSCRICÃO DAZZLE</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/dispositivos-suportados')}>DISPOSITIVOS SUPORTADOS</button>
          <button className={`${styles.tabButton} ${styles.active}`} onClick={() => handleTabClick('/ofertas')}>AS TUAS OFERTAS</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/sobre-nos')}>SOBRE NÓS</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/qualidade-streaming')}>QUALIDADE DO STREAMING</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/protecao-pin')}>PROT</button>
        </nav>

        <div className={styles.contentSection}>
          {/* Oferta Betano - ESTRUTURA CORRIGIDA */}
          <div className={styles.offerCard}>
            <div className={styles.offerLogo} style={{ backgroundColor: '#D73F0C' }}>
              <img src="https://i.imgur.com/r62n1i8.png" alt="Betano Logo" className={styles.logoImage} />
            </div>
            <div className={styles.offerDetails}>
              <button className={styles.adherirButton} onClick={() => handleAdherir('200 FREE Spins na slot-stake')}>ADERIR</button>
              <h2 className={styles.offerTitle}>200 FREE Spins na slot-stake</h2>
              <p className={styles.offerDescription}>
                Com o Passe Total, tens acesso completo ao catálogo, em FHD, com Multiscreen e tecnologia Wirrels para máxima estabilidade – tudo sem limites.
              </p>
            </div>
          </div>

          {/* Oferta Domino's - ESTRUTURA CORRIGIDA */}
          <div className={styles.offerCard}>
            <div className={styles.offerLogo} style={{ backgroundColor: '#006491' }}>
              <img src="https://i.imgur.com/8Q9S4EA.png" alt="Dominos Logo" className={styles.logoImage} />
            </div>
            <div className={styles.offerDetails}>
              <button className={styles.adherirButton} onClick={() => handleAdherir('1 Pizza Grátis por mês')}>ADERIR</button>
              <h2 className={styles.offerTitle}>1 Pizza Grátis por mês</h2>
              <p className={styles.offerDescription}>
                Com o Passe Total, tens acesso completo ao catálogo, em FHD, com Multiscreen e tecnologia Wirrels para máxima estabilidade – tudo sem limites.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OfertasPage;