// src/components/pages/OfertasPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/OfertasPage.module.css';

const OfertasPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/profiles'); // Redireciona diretamente para a ProfilePage
  };

  const handleTabClick = (path: string) => {
    navigate(path);
  };

  const handleAdherir = (offerName: string) => {
    alert(`Você clicou em aderir para: ${offerName}! (Lógica de adesão real seria implementada aqui)`);
    // Aqui você pode adicionar lógica para, por exemplo, redirecionar para uma página de detalhes da oferta ou mostrar um modal.
  };

  return (
    <div className={styles.ofertasPage}>
      <header className={styles.header}>
        <div className={styles.arrowBack} onClick={handleGoBack}>&larr;</div>
      </header>
      <main className={styles.mainContent}>
        <div className={styles.breadcrumb}>
          A minha conta {'>'} mais sobre a DAZZLE
        </div>
        <h1 className={styles.pageTitle}>As tuas ofertas</h1>

        {/* Navigation Tabs */}
        <nav className={styles.tabsContainer}>
          <button className={styles.tabButton} onClick={() => handleTabClick('/subscricao')}>SUBSCRICÃO DAZZLE</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/dispositivos-suportados')}>DISPOSITIVOS SUPORTADOS</button>
          <button className={`${styles.tabButton} ${styles.active}`} onClick={() => handleTabClick('/ofertas')}>AS TUAS OFERTAS</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/sobre-nos')}>SOBRE NÓS</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/qualidade-streaming')}>QUALIDADE DO STREAMING</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/protecao-pin')}>PROT</button>
        </nav>

        <div className={styles.contentSection}>
          {/* Oferta Betano */}
          <div className={styles.offerCard}>
            <div className={styles.offerLogo}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Betano_Logo_SVG.svg" alt="Betano Logo" className={styles.logoImage} onError={(e) => { e.currentTarget.src = 'https://placehold.co/80x80/FF6600/fff?text=Betano'; }} />
            </div>
            <div className={styles.offerDetails}>
              <button className={styles.adherirButton} onClick={() => handleAdherir('200 FREE Spins na slot-stake')}>ADERIR</button>
              <h2 className={styles.offerTitle}>200 FREE Spins na slot-stake</h2>
              <p className={styles.offerDescription}>
                Com o Passe Total, tens acesso completo ao catálogo, em FHD, com Multiscreen e tecnologia Wirrels para máxima estabilidade – tudo sem limites.
              </p>
            </div>
          </div>

          {/* Oferta Domino's */}
          <div className={styles.offerCard}>
            <div className={styles.offerLogo}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Dominos_pizza_logo.svg/1200px-Dominos_pizza_logo.svg.png" alt="Dominos Logo" className={styles.logoImage} onError={(e) => { e.currentTarget.src = 'https://placehold.co/80x80/004B8D/fff?text=Dominos'; }} />
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
