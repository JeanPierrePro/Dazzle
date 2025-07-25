// src/components/pages/SubscricaoPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/SubscricaoPage.module.css';

// ... (definição dos seus dados de logos e features permanece a mesma) ...
const commonLeagues = [
    { src: "https://i.imgur.com/L1h2K4B.png", alt: "Champions League" },
    { src: "https://i.imgur.com/Vvq1t2a.png", alt: "4" },
    { src: "https://i.imgur.com/vHq7JcW.png", alt: "Canal 11" },
    { src: "https://i.imgur.com/b5wH6X4.png", alt: "DAZN" },
    { src: "https://i.imgur.com/rJz8aJ0.png", alt: "La Liga" },
    { src: "https://i.imgur.com/wY2wZ4c.png", alt: "Ligue 1" },
    { src: "https://i.imgur.com/3qY4j8s.png", alt: "NBA" },
    { src: "https://i.imgur.com/P0C5c6s.png", alt: "Premier League" },
];

const motorsports = [
    { src: "https://i.imgur.com/sX3aL8K.png", alt: "Formula 1" },
    { src: "https://i.imgur.com/KTRzL5L.png", alt: "F8" },
    // ...
];

const totalFeatures = [
    "Vê todos os jogos do FIFA Mundial Clubes",
    "Vê todos os jogos do FIFA Mundial Clubes",
    "Vê todos os jogos do FIFA Mundial Clubes",
    "Vê todos os jogos do FIFA Mundial Clubes",
];
const motorFeatures = [
    "Vê todos os jogos do FIFA Mundial Clubes",
    "Vê todos os jogos do FIFA Mundial Clubes",
    "Vê todos os jogos do FIFA Mundial Clubes",
    "Vê todos os jogos do FIFA Mundial Clubes",
];

const SubscricaoPage: React.FC = () => {
    const navigate = useNavigate();

    // ... (funções handleGoBack e handleTabClick permanecem as mesmas) ...
    const handleGoBack = () => navigate('/profiles');
    const handleTabClick = (path: string) => navigate(path);

    return (
        <div className={styles.subscricaoPage}>
            <main className={styles.mainContent}>
                {/* ... (cabeçalho e abas permanecem os mesmos) ... */}
                 <div className={styles.navigationHeader}>
                    <button className={styles.arrowBack} onClick={handleGoBack}>&larr;</button>
                    <div className={styles.breadcrumb}>
                        A minha conta {'>'} mais sobre a DAZZLE
                    </div>
                </div>
                <h1 className={styles.pageTitle}>Subscrição DAZZLE</h1>
        <nav className={styles.tabsContainer}>
          <button className={`${styles.tabButton} ${styles.active}`} onClick={() => handleTabClick('/subscricao')}>SUBSCRICÃO DAZZLE</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/dispositivos-suportados')}>DISPOSITIVOS SUPORTADOS</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/ofertas')}>AS TUAS OFERTAS</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/sobre-nos')}>SOBRE NÓS</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/qualidade-streaming')}>QUALIDADE DO STREAMING</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/protecao-pin')}>PROT</button>
        </nav>

                <div className={styles.contentSection}>
                    {/* Plano Atual */}
                    <div className={styles.currentPlanCard}>
                         {/* ... conteúdo do plano atual ... */}
                         <div className={styles.currentPlanInfo}>
                            <p className={styles.currentPlanTitle}>O teu plano atual: Base</p>
                            <p className={styles.currentPlanDescription}>
                                Com o Passe Total, tens acesso completo ao catálogo, em FHD, com Multiscreen e tecnologia Wirrels para máxima estabilidade – tudo sem limites.
                            </p>
                        </div>
                        <div className={styles.currentPlanBadgeWrapper}>
                            <span className={styles.activeBadge}>ATIVO</span>
                        </div>
                    </div>

                    {/* Plano Total - ESTRUTURA ATUALIZADA */}
                    <div className={styles.planCard}>
                        {/* NOVO: Container para posicionar os logos */}
                        <div className={styles.logoContainerTopRight}>
                            <div className={styles.logosGrid}>
                                {commonLeagues.map((logo, index) => (
                                    <div key={index} className={styles.logoBox}>
                                        <img src={logo.src} alt={logo.alt} className={styles.logoImage} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* O conteúdo de texto agora flui normalmente abaixo */}
                        <h2 className={styles.planTitle}>Total</h2>
                        <p className={styles.planDescription}>
                            Com o Passe Total, tens acesso completo ao catálogo, em FHD, com Multiscreen e tecnologia Wirrels para máxima estabilidade – tudo sem limites.
                        </p>
                        <p className={styles.planPrice}>90 $/mês</p>
                        <ul className={styles.featuresList}>
                            {totalFeatures.map((feature, index) => (
                                <li key={`total-feat-${index}`}><span className={styles.starIcon}>★</span> {feature}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Plano Motores */}
                    <div className={styles.planCard}>
                        {/* Usando o mesmo container de posicionamento do card Total */}
                        <div className={styles.logoContainerTopRight}>
                            <div className={styles.logoRow}>
                                {motorsports.map((logo, index) => (
                                    <div key={index} className={styles.logoBox}>
                                        <img src={logo.src} alt={logo.alt} className={styles.logoImage} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Conteúdo de texto */}
                        <h2 className={styles.planTitle}>Motores</h2>
                        <p className={styles.planDescription}>
                            Com o Passe Total, tens acesso completo ao catálogo, em FHD, com Multiscreen e tecnologia Wirrels para máxima estabilidade – tudo sem limites.
                        </p>
                        <p className={styles.planPrice}>30 $/mês</p>
                        <ul className={`${styles.featuresList} ${styles.singleColumnList}`}>
                            {motorFeatures.map((feature, index) => (
                                <li key={`motor-feat-${index}`}><span className={styles.starIcon}>★</span> {feature}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SubscricaoPage;