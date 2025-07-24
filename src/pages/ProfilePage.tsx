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
  {/* Card 1: Subscrição */}
  <div className={styles.featureCard}>
    <img src="src/icons/diamante.png" alt="Ícone de subscrição" className={styles.iconImage} />
    <h4>Subscrição DAZZLE</h4>
    <p>Gere a tua subscrição e método de pagamento</p>
    <span className={styles.arrowIconBottom} onClick={goToSubscription}>→</span>
  </div>

  {/* Card 2: Dispositivos */}
  <div className={styles.featureCard}>
    <img src="src/icons/dispositivos.png" alt="Ícone de dispositivos" className={styles.iconImage} />
    <h4>Dispositivos suportados</h4>
    <p>Gere a tua subscrição e método de pagamento</p>
    <span className={styles.arrowIconBottom} onClick={goToDevices}>→</span>
  </div>

  {/* Card 3: Ofertas */}
  <div className={styles.featureCard}>
    <img src="src/icons/ofertas.png" alt="Ícone de ofertas" className={styles.iconImage} />
    <h4>As tuas ofertas</h4>
    <p>Gere a tua subscrição e método de pagamento</p>
    <span className={styles.arrowIconBottom} onClick={goToOffers}>→</span>
  </div>

  {/* Card 4: Sobre nós */}
  <div className={styles.featureCard}>
    <img src="src\icons\about us.png" alt="Ícone sobre nós" className={styles.iconImage} />
    <h4>Sobre nós</h4>
    <p>Gere a tua subscrição e método de pagamento</p>
    <span className={styles.arrowIconBottom} onClick={goToAboutUs}>→</span>
  </div>

  {/* Card 5: Qualidade */}
  <div className={styles.featureCard}>
    <img src="src\icons\streaming.png" alt="Ícone de qualidade de streaming" className={styles.iconImage} />
    <h4>Qualidade do streaming</h4>
    <p>Gere a tua subscrição e método de pagamento</p>
    <span className={styles.arrowIconBottom} onClick={goToStreamingQuality}>→</span>
  </div>

  {/* Card 6: PIN */}
  <div className={styles.featureCard}>
    <img src="src\icons\pin code.png" alt="Ícone de proteção de PIN" className={styles.iconImage} />
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
