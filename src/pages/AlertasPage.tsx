// src/components/pages/AlertasPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate
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

// --- Componente AlertaItem (sem alterações) ---
interface AlertaItemProps {
  name: string;
  avatarSrc?: string;
  email: string;
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
            subtitle={email}
            isToggled={newsAlerts}
            onToggle={() => setNewsAlerts(!newsAlerts)}
          />
        </div>
      )}
    </div>
  );
};


// --- PÁGINA PRINCIPAL ATUALIZADA ---
const AlertasPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'geral' | 'equipas' | 'competicoes' | 'jogadores'>('competicoes');
  const navigate = useNavigate(); // Hook de navegação

  // NOVO: Função para navegar para a página de perfil
  const goToProfile = () => {
    navigate('/profiles'); // Certifique-se que '/profile' é a rota correta
  };

  const renderContent = () => {
    // ... (lógica do renderContent permanece a mesma)
    switch (activeTab) {
        case 'competicoes':
          return (
            <div className={styles.tabContent}>
              <AlertaItem 
                name="Champions League" 
                avatarSrc="https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/UEFA_Champions_League_logo_2.svg/1200px-UEFA_Champions_League_logo_2.svg.png"
                email="tomasnelo2025@gmail.com" 
              />
            </div>
          );
        case 'equipas':
          return <div className={styles.tabPlaceholder}>Nenhuma equipa selecionada para alertas.</div>;
        case 'jogadores':
          return <div className={styles.tabPlaceholder}>Nenhum jogador selecionado para alertas.</div>;
        default:
          return <div className={styles.tabPlaceholder}>Configurações gerais de alertas.</div>;
      }
  };

  return (
    <div className={styles.alertasPage}>
      {/* Coluna da Esquerda */}
      <div className={styles.sidebar}>
        {/* ALTERADO: Adicionado container com botão de voltar e título */}
        <div className={styles.sidebarHeader}>
          <button className={styles.backButton} onClick={goToProfile}>←</button>
          <h1 className={styles.sidebarTitle}>Alertas</h1>
        </div>
      </div>

      {/* Linha Vertical */}
      <div className={styles.verticalSeparator}></div>

      {/* Conteúdo Principal da Direita */}
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