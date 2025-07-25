// src/components/pages/QualidadeStreamingPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/QualidadeStreamingPage.module.css';

const QualidadeStreamingPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedQuality, setSelectedQuality] = useState('HD');

  const handleGoBack = () => {
    navigate('/profiles');
  };

  const handleTabClick = (path: string) => {
    navigate(path);
  };

  const handleUpdatePlan = () => {
    alert(`Qualidade do streaming atualizada para: ${selectedQuality}!`);
  };

  return (
    <div className={styles.qualidadeStreamingPage}>
      <main className={styles.mainContent}>
        <div className={styles.navigationHeader}>
            <button className={styles.arrowBack} onClick={handleGoBack}>&larr;</button>
            <div className={styles.breadcrumb}>
                A minha conta {'>'} Qualidades do Streaming
            </div>
        </div>
        <h1 className={styles.pageTitle}>Qualidade do streaming</h1>

        <nav className={styles.tabsContainer}>
          <button className={styles.tabButton} onClick={() => handleTabClick('/subscricao')}>SUBSCRICÃO DAZZLE</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/dispositivos-suportados')}>DISPOSITIVOS SUPORTADOS</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/ofertas')}>AS TUAS OFERTAS</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/sobre-nos')}>SOBRE NÓS</button>
          <button className={`${styles.tabButton} ${styles.active}`} onClick={() => handleTabClick('/qualidade-streaming')}>QUALIDADE DO STREAMING</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/protecao-pin')}>PROT</button>
        </nav>

        <div className={styles.contentSection}>
            <p className={styles.descriptionText}>
              Bem-vindo ao DAZZLE, a plataforma global de streaming de esportes que transcende fronteiras e redefine a forma como os fãs
              vivenciam seus esportes favoritos. Com disponibilidade em mais de 200 territórios, o DAZN garante que os entusiastas do esporte
              em todo o mundo possam mergulhar na emoção do conteúdo ao vivo e sob demanda, em qualquer dispositivo, com o toque de um
              botão.
            </p>

<div className={styles.qualityOptions}>
  <label className={styles.radioOption}>
    <input
      type="radio"
      name="quality"
      value="FHD"
      checked={selectedQuality === 'FHD'}
      onChange={(e) => setSelectedQuality(e.target.value)}
    />
    {/* O texto agora está dentro de um span extra */}
    <span className={styles.radioLabel}>
        <span className={styles.labelText}>Qualidade FHD</span>
    </span>
  </label>
  <label className={styles.radioOption}>
    <input
      type="radio"
      name="quality"
      value="HD"
      checked={selectedQuality === 'HD'}
      onChange={(e) => setSelectedQuality(e.target.value)}
    />
    {/* O texto agora está dentro de um span extra */}
    <span className={styles.radioLabel}>
        <span className={styles.labelText}>Qualidade HD</span>
    </span>
  </label>
  <label className={styles.radioOption}>
    <input
      type="radio"
      name="quality"
      value="Normal"
      checked={selectedQuality === 'Normal'}
      onChange={(e) => setSelectedQuality(e.target.value)}
    />
    {/* O texto agora está dentro de um span extra */}
    <span className={styles.radioLabel}>
        <span className={styles.labelText}>Qualidade Normal</span>
    </span>
  </label>
</div>

            <button className={styles.updateButton} onClick={handleUpdatePlan}>
              Atualizar plano
            </button>
        </div>
      </main>
    </div>
  );
};

export default QualidadeStreamingPage;