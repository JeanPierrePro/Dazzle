// src/components/pages/ProfilePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/ProfilePage.module.css';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  // Funções de navegação permanecem as mesmas
  const goToQuizzes = () => {
    navigate('/quizes');
  };

  const goToAlerts = () => {
    navigate('/alertas');
  };

  const goToCatalog = () => {
    navigate('/catalogo');
  };

  const goToEditProfile = () => {
    navigate('/editar-perfil');
  };

  const goToSubscription = () => {
    navigate('/subscricao');
  };

  const goToDevices = () => {
    navigate('/dispositivos-suportados');
  };

  const goToOffers = () => {
    navigate('/ofertas');
  };

  const goToAboutUs = () => {
    navigate('/sobre-nos');
  };

  const goToStreamingQuality = () => {
    navigate('/qualidade-streaming');
  };

  const goToPinProtection = () => {
    navigate('/protecao-pin');
  };

  return (
    <div className={styles.profilePage}>
      {/* <Header /> */}
      <div className={styles.profileContentWrapper}>

        <div className={styles.profileTopSection}>
          <div className={styles.profileHeaderCard}>
            <div className={styles.userInfo}>
              <div className={styles.tnAvatar}>TN</div>
              <div className={styles.welcomeMessage}>
                <span className={styles.boldText}>BEM-VINDO</span>
                <span className={styles.userName}>Tomás Nelo</span>
              </div>
            </div>
            {/* O botão 'Editar o teu perfil' já possui seu próprio onClick */}
            <button className={styles.editProfileButton} onClick={goToEditProfile}>
              Editar o teu perfil
            </button>
            <p className={styles.editEmailPassword}>
              Edita o teu endereço e-mail e palavra passe
            </p>
          </div>

          <div className={styles.profileOptionsCardGroup}>
            {/* Clicável em qualquer parte do card, onClick no div do card */}
            <div className={styles.optionCard} onClick={goToQuizzes}>
              Acompanha os teus Quizzes <span className={styles.arrowIconRight}>›</span>
            </div>
            <div className={styles.optionCard} onClick={goToAlerts}>
              Alertas <span className={styles.arrowIconRight}>›</span>
            </div>
            <div className={styles.optionCard} onClick={goToCatalog}>
              Catálogo <span className={styles.arrowIconRight}>›</span>
            </div>
          </div>
        </div>

        <div className={styles.featureCardsGrid}>
          {/* Estes permanecem clicáveis apenas na seta */}
          <div className={styles.featureCard}>
            <span className={styles.icon}>💎</span>
            <h4>Subscrição DAZZLE</h4>
            <p>Gere a tua subscrição e método de pagamento</p>
            <span className={styles.arrowIconBottom} onClick={goToSubscription}>→</span>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.icon}>📱</span>
            <h4>Dispositivos suportados</h4>
            <p>Gere a tua subscrição e método de pagamento</p>
            <span className={styles.arrowIconBottom} onClick={goToDevices}>→</span>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.icon}>🎁</span>
            <h4>As tuas ofertas</h4>
            <p>Gere a tua subscrição e método de pagamento</p>
            <span className={styles.arrowIconBottom} onClick={goToOffers}>→</span>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.icon}>ℹ️</span>
            <h4>Sobre nós</h4>
            <p>Gere a tua subscrição e método de pagamento</p>
            <span className={styles.arrowIconBottom} onClick={goToAboutUs}>→</span>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.icon}>🌟</span>
            <h4>Qualidade do streaming</h4>
            <p>Gere a tua subscrição e método de pagamento</p>
            <span className={styles.arrowIconBottom} onClick={goToStreamingQuality}>→</span>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.icon}>🔒</span>
            <h4>Proteção do PIN</h4>
            <p>Gere a tua subscrição e método de pagamento</p>
            <span className={styles.arrowIconBottom} onClick={goToPinProtection}>→</span>
          </div>
        </div>

        <div className={styles.dazzleLogoFooterProfile}>
          DAZZLE
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
