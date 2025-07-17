// src/components/pages/DispositivosPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/DispositivosPage.module.css';

const DispositivosPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/profiles'); // Redireciona diretamente para a ProfilePage
  };

  const handleTabClick = (path: string) => {
    navigate(path);
  };

  const handleDeleteDevice = (deviceName: string) => {
    if (window.confirm(`Tem certeza que deseja remover o dispositivo ${deviceName}?`)) {
      alert(`Dispositivo ${deviceName} removido! (Funcionalidade de remoção real seria implementada aqui)`);
      // Lógica para remover o dispositivo do estado ou backend
    }
  };

  const handleTerminateAllSessions = () => {
    if (window.confirm('Tem certeza que deseja terminar a sessão em todos os dispositivos?')) {
      alert('Sessão terminada em todos os dispositivos! (Funcionalidade real seria implementada aqui)');
      // Lógica para terminar todas as sessões
    }
  };

  return (
    <div className={styles.dispositivosPage}>
      <header className={styles.header}>
        <div className={styles.arrowBack} onClick={handleGoBack}>&larr;</div>
      </header>
      <main className={styles.mainContent}>
        <div className={styles.breadcrumb}>
          A minha conta {'>'} mais sobre a DAZZLE
        </div>
        <h1 className={styles.pageTitle}>Dispositivos suportados</h1>

        {/* Navigation Tabs */}
        <nav className={styles.tabsContainer}>
          <button className={styles.tabButton} onClick={() => handleTabClick('/subscricao')}>SUBSCRICÃO DAZZLE</button>
          <button className={`${styles.tabButton} ${styles.active}`} onClick={() => handleTabClick('/dispositivos-suportados')}>DISPOSITIVOS SUPORTADOS</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/ofertas')}>AS TUAS OFERTAS</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/sobre-nos')}>SOBRE NÓS</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/qualidade-streaming')}>QUALIDADE DO STREAMING</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/protecao-pin')}>PROT</button>
        </nav>

        <div className={styles.contentSection}>
          <div className={styles.infoCard}>
            <h2 className={styles.cardTitle}>Dispositivos</h2>
            <p className={styles.cardDescription}>
              Os dispositivos em que visualizas a DAZZLE apareceram aqui.
            </p>
          </div>

          <h3 className={styles.sectionTitle}>Também estás ligado a nestes dispositivos</h3>

          <div className={styles.deviceList}>
            <div className={styles.deviceItem}>
              <div className={styles.deviceInfo}>
                <span className={styles.deviceIcon}>💻</span>
                <div>
                  <p className={styles.deviceName}>Ambiente de trabalho - OSX Safari</p>
                  <p className={styles.deviceDetails}>18 de junho de 2025, 11:54 Horário Brasil. Brasil</p>
                </div>
              </div>
              <button className={styles.deleteButton} onClick={() => handleDeleteDevice('Ambiente de trabalho - OSX Safari')}>🗑️</button>
            </div>

            <div className={styles.deviceItem}>
              <div className={styles.deviceInfo}>
                <span className={styles.deviceIcon}>📱</span>
                <div>
                  <p className={styles.deviceName}>Telemóvel - Apple iPhone 11</p>
                  <p className={styles.deviceDetails}>15 de junho de 2025, 11:54 Horário Brasil. Brasil</p>
                </div>
              </div>
              <button className={styles.deleteButton} onClick={() => handleDeleteDevice('Telemóvel - Apple iPhone 11')}>🗑️</button>
            </div>
          </div>

          <div className={styles.terminateAllCard} onClick={handleTerminateAllSessions}>
            <p className={styles.terminateAllText}>Terminar sessão em todo lado</p>
            <p className={styles.terminateAllDescription}>Será desligado da DAZZLE em todos os seus dispositivos.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DispositivosPage;
