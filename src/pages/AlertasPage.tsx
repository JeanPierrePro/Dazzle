// src/components/pages/AlertasPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/AlertasPage.module.css';

// --- Componente AlertOption (sem alterações) ---
interface AlertOptionProps {
  title: string;
  subtitle: string;
  isToggled: boolean;
  onToggle: () => void;
}

const AlertOption: React.FC<AlertOptionProps> = ({ title, subtitle, isToggled, onToggle }) => (
  <div className={styles.alertOption}>
    <div className={styles.alertOptionText}>
      <span className={styles.optionTitle}>{title}</span>
      <span className={styles.optionSubtitle}>{subtitle}</span>
    </div>
    <div 
      className={`${styles.toggleSwitch} ${isToggled ? styles.toggleOn : ''}`}
      onClick={onToggle}
    >
      <div className={styles.toggleKnob}></div>
    </div>
  </div>
);

// --- COMPONENTE DE ITEM DE ALERTA (SEM ALTERAÇÕES) ---
interface AlertaItemProps {
  name: string;
  avatarSrc?: string;
  email?: string;
  subtitleForNews?: string;
}

const AlertaItem: React.FC<AlertaItemProps> = ({ name, avatarSrc, email, subtitleForNews }) => {
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
        <span className={`${styles.alertaItemToggleIcon} ${isOpen ? styles.open : ''}`}>›</span>
      </div>
      {isOpen && (
        <div className={styles.alertaItemOptions}>
          <AlertOption
            title="Alertas de jogos"
            subtitle="Enviar notificações"
            isToggled={gameAlerts}
            onToggle={() => setGameAlerts(!gameAlerts)}
          />
          <AlertOption
            title="Noticias"
            subtitle={subtitleForNews || email || "Enviar notificações"}
            isToggled={newsAlerts}
            onToggle={() => setNewsAlerts(!newsAlerts)}
          />
        </div>
      )}
    </div>
  );
};


// --- PÁGINA PRINCIPAL ATUALIZADA ---

// NOVO: Interface unificada para todos os tipos de alertas
interface Alerta {
  id: string;
  name: string;
  avatarSrc: string;
  email?: string; // Propriedade opcional
  subtitleForNews?: string; // Propriedade opcional
}

const AlertasPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'geral' | 'equipas' | 'competicoes' | 'jogadores'>('geral');
  const navigate = useNavigate();

  // --- DADOS MOCK COM A NOVA TIPAGEM ---
  const competicoesData: Alerta[] = [
    { 
      id: 'cl',
      name: "Champions League", 
      avatarSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/UEFA_Champions_League_logo_2.svg/1200px-UEFA_Champions_League_logo_2.svg.png",
      email: "tomasnelo2025@gmail.com"
    }
  ];

  const equipasData: Alerta[] = [
    {
      id: 'slb',
      name: "SL Benfica",
      avatarSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/SL_Benfica_logo.svg/1200px-SL_Benfica_logo.svg.png",
      email: "tomasnelo2025@gmail.com"
    }
  ];

  const jogadoresData: Alerta[] = [
    {
      id: 'messi',
      name: "L. Messi",
      avatarSrc: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel_Messi_Copa_Am%C3%A9rica_2024.png",
      subtitleForNews: "Enviar notificações"
    }
  ];
  
  const todosOsAlertas: Alerta[] = [...competicoesData, ...equipasData, ...jogadoresData];


  const goToProfile = () => {
    navigate('/profiles');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'geral':
        return (
          <div className={`${styles.tabContent} ${styles.geralTabContent}`}>
            {todosOsAlertas.length > 0 ? (
              // Agora o TypeScript não reclama mais aqui
              todosOsAlertas.map(item => (
                <AlertaItem 
                  key={item.id}
                  name={item.name} 
                  avatarSrc={item.avatarSrc}
                  email={item.email}
                  subtitleForNews={item.subtitleForNews}
                />
              ))
            ) : (
              <div className={styles.tabPlaceholder}>Nenhum alerta ativo.</div>
            )}
          </div>
        );

      case 'equipas':
        return (
          <div className={styles.tabContent}>
            {equipasData.map(item => (
              <AlertaItem key={item.id} {...item} />
            ))}
          </div>
        );

      case 'competicoes':
        return (
          <div className={styles.tabContent}>
            {competicoesData.map(item => (
              <AlertaItem key={item.id} {...item} />
            ))}
          </div>
        );

      case 'jogadores':
        return (
          <div className={styles.tabContent}>
            {jogadoresData.map(item => (
              <AlertaItem key={item.id} {...item} />
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.alertasPage}>
      {/* O resto do JSX permanece igual */}
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <button className={styles.backButton} onClick={goToProfile}>←</button>
          <h1 className={styles.sidebarTitle}>Alertas</h1>
        </div>
      </div>
      <div className={styles.verticalSeparator}></div>
      <div className={styles.mainContent}>
        <div className={styles.contentHeader}>
          <h2 className={styles.sectionTitle}>A SEGUIR</h2>
          <div className={styles.tabs}>
            <button className={`${styles.tabButton} ${activeTab === 'geral' ? styles.active : ''}`} onClick={() => setActiveTab('geral')}>GERAL</button>
            <button className={`${styles.tabButton} ${activeTab === 'equipas' ? styles.active : ''}`} onClick={() => setActiveTab('equipas')}>EQUIPAS</button>
            <button className={`${styles.tabButton} ${activeTab === 'competicoes' ? styles.active : ''}`} onClick={() => setActiveTab('competicoes')}>COMPETIÇÕES</button>
            <button className={`${styles.tabButton} ${activeTab === 'jogadores' ? styles.active : ''}`} onClick={() => setActiveTab('jogadores')}>JOGADORES</button>
          </div>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default AlertasPage;