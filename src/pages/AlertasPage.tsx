// src/components/pages/AlertasPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/AlertasPage.module.css'; // Importe os estilos para a página de Alertas

// Componente para um item de alerta (jogador, equipe, competição)
interface AlertaItemProps {
  name: string;
  avatarSrc?: string; // URL da imagem do avatar/logo
  type: 'jogador' | 'equipa' | 'competicao';
  email?: string; // Opcional para o alerta de notícias
}

const AlertaItem: React.FC<AlertaItemProps> = ({ name, avatarSrc, email }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [gameAlerts, setGameAlerts] = useState(false);
  const [newsAlerts, setNewsAlerts] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={styles.alertaItemCard}>
      <div className={styles.alertaItemHeader} onClick={toggleOpen}>
        <div className={styles.alertaItemInfo}>
          {avatarSrc && <img src={avatarSrc} alt={name} className={styles.alertaItemAvatar} />}
          <span className={styles.alertaItemName}>{name}</span>
        </div>
        <span className={styles.alertaItemToggleIcon}>{isOpen ? '∧' : '∨'}</span>
      </div>
      {isOpen && (
        <div className={styles.alertaItemOptions}>
          <div className={styles.alertOption}>
            <span>Alertas de jogos</span>
            <div className={styles.toggleSwitch} onClick={() => setGameAlerts(!gameAlerts)}>
              <div className={`${styles.toggleKnob} ${gameAlerts ? styles.toggleOn : ''}`}></div>
            </div>
          </div>
          <div className={styles.alertOption}>
            <span>Noticias</span>
            <div className={styles.toggleSwitch} onClick={() => setNewsAlerts(!newsAlerts)}>
              <div className={`${styles.toggleKnob} ${newsAlerts ? styles.toggleOn : ''}`}></div>
            </div>
          </div>
          {newsAlerts && email && <span className={styles.emailDisplay}>{email}</span>}
        </div>
      )}
    </div>
  );
};

const AlertasPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'geral' | 'equipas' | 'competicoes' | 'jogadores'>('geral');

  const handleGoBack = () => {
    navigate(-1);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'geral':
        return <p className={styles.tabPlaceholder}>Conteúdo geral dos alertas.</p>;
      case 'equipas':
        return (
          <div className={styles.tabContent}>
            <AlertaItem name="SL Benfica" avatarSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/SL_Benfica_logo.svg/1200px-SL_Benfica_logo.svg.png" type="equipa" email="tomasnelo2025@gmail.com" /> {/* cite: 9 */}
            {/* Adicione mais equipes conforme necessário */}
          </div>
        );
      case 'competicoes':
        return (
          <div className={styles.tabContent}>
            <AlertaItem name="Champions League" avatarSrc="https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/UEFA_Champions_League_logo_2.svg/1200px-UEFA_Champions_League_logo_2.svg.png" type="competicao" email="tomasnelo2025@gmail.com" /> {/* cite: 4, 8 */}
            {/* Adicione mais competições conforme necessário */}
          </div>
        );
      case 'jogadores':
        return (
          <div className={styles.tabContent}>
            <AlertaItem name="L. Messi" avatarSrc="https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel_Messi_Copa_Am%C3%A9rica_2024.png" type="jogador" /> {/* cite: 1 */}
            {/* Adicione mais jogadores conforme necessário */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.alertasPage}>
      <div className={styles.sidebar}>
  
        <div className={styles.sidebarItem}>
          <div className={styles.arrowBack} onClick={handleGoBack}>&larr;</div>
          <span>Alertas</span>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.contentHeader}>
          <h2 className={styles.sectionTitle}>A SEGUIR</h2>
          <div className={styles.tabs}>
            <button className={`${styles.tabButton} ${activeTab === 'geral' ? styles.active : ''}`} onClick={() => setActiveTab('geral')}>GERAL</button> {/* cite: 1, 4, 8 */}
            <button className={`${styles.tabButton} ${activeTab === 'equipas' ? styles.active : ''}`} onClick={() => setActiveTab('equipas')}>EQUIPAS</button> {/* cite: 1, 4, 8 */}
            <button className={`${styles.tabButton} ${activeTab === 'competicoes' ? styles.active : ''}`} onClick={() => setActiveTab('competicoes')}>COMPETIÇÕES</button> {/* cite: 1, 4, 8 */}
            <button className={`${styles.tabButton} ${activeTab === 'jogadores' ? styles.active : ''}`} onClick={() => setActiveTab('jogadores')}>JOGADORES</button> {/* cite: 1, 4, 8 */}
          </div>
          <div className={styles.tabsUnderline}></div>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default AlertasPage;