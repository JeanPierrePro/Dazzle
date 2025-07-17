import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import styles from '../styles/CatalogoPage.module.css';

// Dados simulados para os logos das ligas/competições
const commonLeagues = [
  { src: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/UEFA_Champions_League_logo_2.svg/1200px-UEFA_Champions_League_logo_2.svg.png", alt: "Champions League" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/LaLiga_Santander_logo_%28stacked%29.svg/1200px-LaLiga_Santander_logo_%28stacked%29.svg.png", alt: "La Liga" },
  { src: "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Bundesliga_logo.svg/1200px-Bundesliga_logo.svg.png", alt: "Bundesliga" },
  { src: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png", alt: "Premier League" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Serie_A_logo.svg/1200px-Serie_A_logo.svg.png", alt: "Serie A" },
  { src: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Ligue_1_logo.svg/1200px-Ligue_1_logo.svg.png", alt: "Ligue 1" },
];

const motorsports = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/F1_logo.svg/1200px-F1_logo.svg.png", alt: "Formula 1" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/MotoGP_Logo.svg/1200px-MotoGP_Logo.svg.png", alt: "MotoGP" },
  { src: "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/IndyCar_Series_logo.svg/1200px-IndyCar_Series_logo.svg.png", alt: "IndyCar" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Nascar_logo_2017.svg/1200px-Nascar_logo_2017.svg.png", alt: "NASCAR" },
  { src: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/WEC_logo.svg/1200px-WEC_logo.svg.png", alt: "WEC" },
  { src: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/FIA_Formula_E_logo.svg/1200px-FIA_Formula_E_logo.svg.png", alt: "Formula E" },
];

const CatalogoPage: React.FC = () => {
  const navigate = useNavigate(); // Inicializa o hook de navegação

  const handleGoBack = () => {
    navigate(-1); // Volta para a página anterior no histórico de navegação
  };

  return (
    <div className={styles.catalogoPage}>
      <header className={styles.header}>
        {/* Seta para voltar */}
        <div className={styles.arrowBack} onClick={handleGoBack}>&larr;</div>
        {/* O logo DAZZLE foi removido do header */}
      </header>

      <main className={styles.mainContent}>
        <h1 className={styles.mainTitle}>Escolhe o teu passe</h1>

        <div className={styles.plansGrid}>
          {/* Plano Total */}
          <div className={styles.planCard}>
            <h2 className={styles.planTitle}>Total</h2>
            <p className={styles.planDescription}>
              Com o Passe Total, tens acesso completo ao catálogo, em FHD, com Multiscreen e tecnologia Wirrels para máxima estabilidade – tudo sem limites.
            </p>
            <p className={styles.planPrice}>90 $/mês</p>
            <button className={styles.subscribeButton}>Aderir Total</button>
            <div className={styles.logosGrid}>
              {commonLeagues.map((logo, index) => (
                <img key={index} src={logo.src} alt={logo.alt} className={styles.logoImage} onError={(e) => { e.currentTarget.src = 'https://placehold.co/40x40/000/fff?text=Logo'; }} />
              ))}
              {motorsports.map((logo, index) => (
                <img key={`motor-${index}`} src={logo.src} alt={logo.alt} className={styles.logoImage} onError={(e) => { e.currentTarget.src = 'https://placehold.co/40x40/000/fff?text=Logo'; }} />
              ))}
            </div>
            <ul className={styles.featuresList}>
              <li><span className={styles.starIcon}>★</span> Vê todos os jogos do FIFA Mundial Clubes</li>
              <li><span className={styles.starIcon}>★</span> Vê todos os jogos do FIFA Mundial Clubes</li>
              <li><span className={styles.starIcon}>★</span> Vê todos os jogos do FIFA Mundial Clubes</li>
              <li><span className={styles.starIcon}>★</span> Vê todos os jogos do FIFA Mundial Clubes</li>
              <li><span className={styles.starIcon}>★</span> Vê todos os jogos do FIFA Mundial Clubes</li>
              <li><span className={styles.starIcon}>★</span> Vê todos os jogos do FIFA Mundial Clubes</li>
            </ul>
          </div>

          {/* Plano Base - Melhor experiência */}
          <div className={`${styles.planCard} ${styles.highlightedPlan}`}>
            <span className={styles.bestExperienceBadge}>Melhor experiência</span>
            <h2 className={styles.planTitle}>Base</h2>
            <p className={styles.planDescription}>
              Com o Passe Total, tens acesso completo ao catálogo, em FHD, com Multiscreen e tecnologia Wirrels para máxima estabilidade – tudo sem limites.
            </p>
            <p className={styles.planPrice}>60 $/mês</p>
            <button className={`${styles.subscribeButton} ${styles.highlightedButton}`}>Aderir Total</button>
            <div className={styles.logosGrid}>
              {commonLeagues.map((logo, index) => (
                <img key={index} src={logo.src} alt={logo.alt} className={styles.logoImage} onError={(e) => { e.currentTarget.src = 'https://placehold.co/40x40/000/fff?text=Logo'; }} />
              ))}
            </div>
            <ul className={styles.featuresList}>
              <li><span className={styles.starIcon}>★</span> Vê todos os jogos do FIFA Mundial Clubes</li>
              <li><span className={styles.starIcon}>★</span> Vê todos os jogos do FIFA Mundial Clubes</li>
              <li><span className={styles.starIcon}>★</span> Vê todos os jogos do FIFA Mundial Clubes</li>
              <li><span className={styles.starIcon}>★</span> Vê todos os jogos do FIFA Mundial Clubes</li>
              <li><span className={styles.starIcon}>★</span> Vê todos os jogos do FIFA Mundial Clubes</li>
              <li><span className={styles.starIcon}>★</span> Vê todos os jogos do FIFA Mundial Clubes</li>
            </ul>
          </div>

          {/* Plano Motores */}
          <div className={styles.planCard}>
            <h2 className={styles.planTitle}>Motores</h2>
            <p className={styles.planDescription}>
              Com o Passe Total, tens acesso completo ao catálogo, em FHD, com Multiscreen e tecnologia Wirrels para máxima estabilidade – tudo sem limites.
            </p>
            <p className={styles.planPrice}>30 $/mês</p>
            <button className={styles.subscribeButton}>Aderir Total</button>
            <div className={styles.logosGrid}>
              {motorsports.map((logo, index) => (
                <img key={index} src={logo.src} alt={logo.alt} className={styles.logoImage} onError={(e) => { e.currentTarget.src = 'https://placehold.co/40x40/000/fff?text=Logo'; }} />
              ))}
            </div>
            <ul className={styles.featuresList}>
              <li><span className={styles.starIcon}>★</span> Vê todos os jogos do FIFA Mundial Clubes</li>
              <li><span className={styles.starIcon}>★</span> Vê todos os jogos do FIFA Mundial Clubes</li>
              <li><span className={styles.starIcon}>★</span> Vê todos os jogos do FIFA Mundial Clubes</li>
              <li><span className={styles.starIcon}>★</span> Vê todos os jogos do FIFA Mundial Clubes</li>
              <li><span className={styles.starIcon}>★</span> Vê todos os jogos do FIFA Mundial Clubes</li>
              <li><span className={styles.starIcon}>★</span> Vê todos os jogos do FIFA Mundial Clubes</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CatalogoPage;
