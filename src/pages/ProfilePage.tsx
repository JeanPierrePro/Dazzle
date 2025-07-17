// src/components/pages/ProfilePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/ProfilePage.module.css';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

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

  // NOVA: Função para redirecionar para a página "Proteção do PIN"
  const goToPinProtection = () => {
    navigate('/protecao-pin'); // Rota para a página "Proteção do PIN"
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
            <button className={styles.editProfileButton} onClick={goToEditProfile}>
              Editar o teu perfil
            </button>
            <p className={styles.editEmailPassword}>
              Edita o teu endereço e-mail e palavra passe
            </p>
          </div>

          <div className={styles.profileOptionsCardGroup}>
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
          <div className={styles.featureCard} onClick={goToSubscription}>
            <span className={styles.icon}>💎</span>
            <h4>Subscrição DAZZLE</h4>
            <p>Gere a tua subscrição e método de pagamento</p>
            <span className={styles.arrowIconBottom}>→</span>
          </div>
          <div className={styles.featureCard} onClick={goToDevices}>
            <span className={styles.icon}>📱</span>
            <h4>Dispositivos suportados</h4>
            <p>Gere a tua subscrição e método de pagamento</p>
            <span className={styles.arrowIconBottom}>→</span>
          </div>
          <div className={styles.featureCard} onClick={goToOffers}>
            <span className={styles.icon}>🎁</span>
            <h4>As tuas ofertas</h4>
            <p>Gere a tua subscrição e método de pagamento</p>
            <span className={styles.arrowIconBottom}>→</span>
          </div>
          <div className={styles.featureCard} onClick={goToAboutUs}>
            <span className={styles.icon}>ℹ️</span>
            <h4>Sobre nós</h4>
            <p>Gere a tua subscrição e método de pagamento</p>
            <span className={styles.arrowIconBottom}>→</span>
          </div>
          <div className={styles.featureCard} onClick={goToStreamingQuality}>
            <span className={styles.icon}>🌟</span>
            <h4>Qualidade do streaming</h4>
            <p>Gere a tua subscrição e método de pagamento</p>
            <span className={styles.arrowIconBottom}>→</span>
          </div>
          {/* Adicione onClick para redirecionar para Proteção do PIN */}
          <div className={styles.featureCard} onClick={goToPinProtection}>
            <span className={styles.icon}>🔒</span>
            <h4>Proteção do PIN</h4>
            <p>Gere a tua subscrição e método de pagamento</p>
            <span className={styles.arrowIconBottom}>→</span>
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