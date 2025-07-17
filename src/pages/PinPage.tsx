// src/components/pages/ProtecaoPinPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/PinPage.module.css';

const PinPage: React.FC = () => {
  const navigate = useNavigate();
  const [pinEnabled, setPinEnabled] = useState(false); // Simula o estado do PIN
  const [pin, setPin] = useState('');

  const handleGoBack = () => {
    navigate('/profiles'); // Redireciona diretamente para a ProfilePage
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
      // Lógica para salvar o PIN (em um sistema real, o PIN seria criptografado e armazenado de forma segura)
    } else if (newPin !== null) {
      alert('PIN inválido. Por favor, insira um PIN de 4 dígitos numéricos.');
    }
  };

  const handleChangePin = () => {
    const currentPin = prompt('Por favor, insira o seu PIN atual para continuar:');
    if (currentPin === pin) { // Em um sistema real, isso validaria com o backend
      const newPin = prompt('Por favor, insira o seu novo PIN de 4 dígitos:');
      if (newPin && newPin.length === 4 && /^\d+$/.test(newPin)) {
        setPin(newPin);
        alert('PIN alterado com sucesso!');
      } else if (newPin !== null) {
        alert('Novo PIN inválido. Por favor, insira um PIN de 4 dígitos numéricos.');
      }
    } else if (currentPin !== null) {
      alert('PIN atual incorreto.');
    }
  };

  const handleDisablePin = () => {
    const confirmPin = prompt('Por favor, insira o seu PIN para desativar a proteção:');
    if (confirmPin === pin) { // Em um sistema real, isso validaria com o backend
      setPinEnabled(false);
      setPin('');
      alert('Proteção de PIN desativada.');
    } else if (confirmPin !== null) {
      alert('PIN incorreto. A proteção não foi desativada.');
    }
  };


  return (
    <div className={styles.protecaoPinPage}>
      <header className={styles.header}>
        <div className={styles.arrowBack} onClick={handleGoBack}>&larr;</div>
      </header>
      <main className={styles.mainContent}>
        <div className={styles.breadcrumb}>
          A minha conta {'>'} Proteção de PIN
        </div>
        <h1 className={styles.pageTitle}>Proteção de PIN</h1>

        {/* Navigation Tabs */}
        <nav className={styles.tabsContainer}>
          <button className={styles.tabButton} onClick={() => handleTabClick('/subscricao')}>SUBSCRICÃO DAZZLE</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/dispositivos-suportados')}>DISPOSITIVOS SUPORTADOS</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/ofertas')}>AS TUAS OFERTAS</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/sobre-nos')}>SOBRE NÓS</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/qualidade-streaming')}>QUALIDADE DO STREAMING</button>
          <button className={`${styles.tabButton} ${styles.active}`} onClick={() => handleTabClick('/protecao-pin')}>PROT</button>
        </nav>

        <div className={styles.contentSection}>
          <div className={styles.pinCard}>
            <p className={styles.pinDescription}>
              Algum conteúdo DAZZLE pode ser classificado como inadequado para públicos mais jovens. O teu PIN permite-te
              controlar quem pode ver este conteúdo.
            </p>

            <h2 className={styles.configPinTitle}>Configura um Código PIN</h2>

            {!pinEnabled ? (
              <div className={styles.pinStatus}>
                <p className={styles.pinText}>A proteção por PIN está desligada</p>
                <p className={styles.pinSubtext}>Para configurar o teu PIN: introduz um PIN de 4 dígitos.</p>
                <button className={styles.pinButton} onClick={handleCreatePin}>Criar PIN</button>
              </div>
            ) : (
              <div className={styles.pinStatus}>
                <p className={styles.pinText}>A proteção por PIN está ativada</p>
                <div className={styles.activePinActions}>
                  <button className={styles.pinButton} onClick={handleChangePin}>Alterar PIN</button>
                  <button className={`${styles.pinButton} ${styles.disablePinButton}`} onClick={handleDisablePin}>Desativar PIN</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PinPage;
