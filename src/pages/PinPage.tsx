// src/components/pages/ProtecaoPinPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/PinPage.module.css'; // Mudei para um nome mais consistente

const PinPage: React.FC = () => {
  const navigate = useNavigate();
  const [pinEnabled, setPinEnabled] = useState(false);
  const [pin, setPin] = useState('');

  const handleGoBack = () => {
    navigate('/profiles');
  };

  const handleTabClick = (path: string) => {
    navigate(path);
  };

  const handleCreatePin = () => {
    const newPin = prompt('Por favor, insira o seu novo PIN de 4 dígitos:');
    if (newPin && newPin.length === 4 && /^\d+$/.test(newPin)) {
      setPin(newPin);
      setPinEnabled(true);
      alert('PIN criado com sucesso!');
    } else if (newPin !== null) {
      alert('PIN inválido. Por favor, insira um PIN de 4 dígitos numéricos.');
    }
  };

  const handleChangePin = () => {/* ... sua lógica existente ... */};
  const handleDisablePin = () => {/* ... sua lógica existente ... */};

  return (
    <div className={styles.protecaoPinPage}>
      <main className={styles.mainContent}>
        <div className={styles.navigationHeader}>
          <button className={styles.arrowBack} onClick={handleGoBack}>&larr;</button>
          <div className={styles.breadcrumb}>
            A minha conta {'>'} Proteção de PIN
          </div>
        </div>
        <h1 className={styles.pageTitle}>PROTEÇÃO DE PIN</h1>

        <nav className={styles.tabsContainer}>
            {/* Lembre-se de ajustar os nomes dos botões se necessário */}
            <button className={styles.tabButton} onClick={() => handleTabClick('/subscricao')}>SUBSCRICÃO DAZZLE</button>
            <button className={styles.tabButton} onClick={() => handleTabClick('/dispositivos-suportados')}>DISPOSITIVOS SUPORTADOS</button>
            <button className={styles.tabButton} onClick={() => handleTabClick('/ofertas')}>AS TUAS OFERTAS</button>
            <button className={styles.tabButton} onClick={() => handleTabClick('/sobre-nos')}>SOBRE NÓS</button>
            <button className={styles.tabButton} onClick={() => handleTabClick('/qualidade-streaming')}>QUALIDADE DO STREAMING</button>
            <button className={`${styles.tabButton} ${styles.active}`} onClick={() => handleTabClick('/protecao-pin')}>PROTEÇÃO DE PIN</button>
        </nav>

        <div className={styles.contentSection}>
          <p className={styles.description}>
            Algum conteúdo DAZZLE pode ser classificado como inadequado para públicos mais jovens. O teu PIN permite-te controlar quem pode ver este conteúdo.
          </p>

          {/* Lógica para mostrar se o PIN está ativo ou não */}
          {!pinEnabled ? (
            <div className={styles.pinActionContainer}>
              <div className={styles.pinInfo}>
                <p className={styles.pinInfoLabel}>CONFIGURA UM CÓDIGO PIN</p>
                <p className={styles.pinInfoStatus}>A proteção por PIN está desligada</p>
                <p className={styles.pinInfoSubtitle}>Para configurar o teu PIN, introduz um PIN de 4 dígitos.</p>
              </div>
              <div className={styles.pinAction}>
                <button className={styles.pinButton} onClick={handleCreatePin}>Criar PIN</button>
              </div>
            </div>
          ) : (
            <div className={styles.pinActionContainer}>
               <div className={styles.pinInfo}>
                <p className={styles.pinInfoLabel}>CONFIGURAÇÕES DO PIN</p>
                <p className={styles.pinInfoStatus}>A proteção por PIN está ligada</p>
              </div>
              <div className={styles.pinAction}>
                <button className={styles.pinButton} onClick={handleChangePin}>Alterar PIN</button>
                <button className={`${styles.pinButton} ${styles.pinButtonSecondary}`} onClick={handleDisablePin}>Desativar</button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default PinPage;