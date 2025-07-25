// src/components/pages/DispositivosPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/DispositivosPage.module.css';

// --- NOVOS COMPONENTES DE ÍCONE (SVG) ---
const ComputerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
    </svg>
);

const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    </svg>
);


const DispositivosPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/profiles');
  };

  const handleTabClick = (path: string) => {
    navigate(path);
  };

  const handleDeleteDevice = (deviceName: string) => {
    if (window.confirm(`Tem certeza que deseja remover o dispositivo ${deviceName}?`)) {
      alert(`Dispositivo ${deviceName} removido!`);
    }
  };

  const handleTerminateAllSessions = () => {
    if (window.confirm('Tem certeza que deseja terminar a sessão em todos os dispositivos?')) {
      alert('Sessão terminada em todos os dispositivos!');
    }
  };

  return (
    <div className={styles.dispositivosPage}>
      <main className={styles.mainContent}>
        <div className={styles.navigationHeader}>
            <button className={styles.arrowBack} onClick={handleGoBack}>&larr;</button>
            <div className={styles.breadcrumb}>
                A minha conta {'>'} mais sobre a DAZZLE
            </div>
        </div>
        <h1 className={styles.pageTitle}>Dispositivos Suportados</h1>

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
            <h2 className={styles.cardTitle}>DISPOSITIVOS</h2>
            <p className={styles.cardDescription}>
              Os dispositivos em que visualizas a DAZZLE apareceram aqui.
            </p>
          </div>

          <h3 className={styles.sectionTitle}>Também estás ligado a nestes dispositivos</h3>

          <div className={styles.deviceList}>
            <div className={styles.deviceItem}>
              <div className={styles.deviceInfo}>
                <span className={styles.deviceIcon}><ComputerIcon /></span>
                <div>
                  <p className={styles.deviceName}>Ambiente de trabalho - OSX Safari</p>
                  <p className={styles.deviceDetails}>18 de junho de 2025, 11:54 Horário Brasil. Brasil</p>
                </div>
              </div>
              <button className={styles.deleteButton} onClick={() => handleDeleteDevice('Ambiente de trabalho - OSX Safari')}><TrashIcon /></button>
            </div>

            <div className={styles.deviceItem}>
              <div className={styles.deviceInfo}>
                <span className={styles.deviceIcon}><PhoneIcon /></span>
                <div>
                  <p className={styles.deviceName}>Telemóvel - Apple iPhone 11</p>
                  <p className={styles.deviceDetails}>15 de junho de 2025, 11:54 Horário Brasil. Brasil</p>
                </div>
              </div>
              <button className={styles.deleteButton} onClick={() => handleDeleteDevice('Telemóvel - Apple iPhone 11')}><TrashIcon /></button>
            </div>
          </div>

          <div className={styles.terminateAllCard} onClick={handleTerminateAllSessions}>
            <h3 className={styles.terminateAllText}>Terminar sessão em todo lado</h3>
            <p className={styles.terminateAllDescription}>Será desligado da DAZZLE em todos os seus dispositivos.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DispositivosPage;