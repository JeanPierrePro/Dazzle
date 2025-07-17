// src/components/pages/QualidadeStreamingPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/QualidadeStreamingPage.module.css';

const QualidadeStreamingPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedQuality, setSelectedQuality] = useState('HD'); // Estado para a qualidade selecionada

  const handleGoBack = () => {
    navigate('/profiles'); // Redireciona diretamente para a ProfilePage
  };

  const handleTabClick = (path: string) => {
    navigate(path);
  };

  const handleUpdatePlan = () => {
    alert(`Qualidade do streaming atualizada para: ${selectedQuality}!`);
    // Aqui você pode adicionar lógica para enviar a atualização para o backend
  };

  return (
    <div className={styles.qualidadeStreamingPage}>
      <header className={styles.header}>
        <div className={styles.arrowBack} onClick={handleGoBack}>&larr;</div>
      </header>
      <main className={styles.mainContent}>
        <div className={styles.breadcrumb}>
          A minha conta {'>'} Qualidades do Streaming
        </div>
        <h1 className={styles.pageTitle}>Qualidade do streaming</h1>

        {/* Navigation Tabs */}
        <nav className={styles.tabsContainer}>
          <button className={styles.tabButton} onClick={() => handleTabClick('/subscricao')}>SUBSCRICÃO DAZZLE</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/dispositivos-suportados')}>DISPOSITIVOS SUPORTADOS</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/ofertas')}>AS TUAS OFERTAS</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/sobre-nos')}>SOBRE NÓS</button>
          <button className={`${styles.tabButton} ${styles.active}`} onClick={() => handleTabClick('/qualidade-streaming')}>QUALIDADE DO STREAMING</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/protecao-pin')}>PROT</button>
        </nav>

        <div className={styles.contentSection}>
          <div className={styles.qualityCard}>
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
                Qualidade FHD
              </label>
              <label className={styles.radioOption}>
                <input
                  type="radio"
                  name="quality"
                  value="HD"
                  checked={selectedQuality === 'HD'}
                  onChange={(e) => setSelectedQuality(e.target.value)}
                />
                Qualidade HD
              </label>
              <label className={styles.radioOption}>
                <input
                  type="radio"
                  name="quality"
                  value="Normal"
                  checked={selectedQuality === 'Normal'}
                  onChange={(e) => setSelectedQuality(e.target.value)}
                />
                Qualidade Normal
              </label>
            </div>

            <button className={styles.updateButton} onClick={handleUpdatePlan}>
              Atualizar plano
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QualidadeStreamingPage;
