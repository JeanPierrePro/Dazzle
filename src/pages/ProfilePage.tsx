// src/components/pages/ProfilePage.tsx
import React from 'react';
// import Header from '../common/Header'; // Você fará o import da Navbar e etc.
import styles from '../styles/ProfilePage.module.css'; // Importe os estilos modularizados

const ProfilePage: React.FC = () => {
  return (
    <div className={styles.profilePage}>
      {/* <Header /> */}
      <div className={styles.profileContentWrapper}>

        {/* Seção superior do perfil: Avatar, Boas-vindas, Editar Perfil e Opções */}
        <div className={styles.profileTopSection}>
          <div className={styles.profileHeaderCard}>
            <div className={styles.userInfo}>
              <div className={styles.tnAvatar}>TN</div>
              <div className={styles.welcomeMessage}>
                <span className={styles.boldText}>BEM-VINDO</span>
                <span className={styles.userName}>Tomás Nelo</span>
              </div>
            </div>
            <button className={styles.editProfileButton}>
              Editar o teu perfil
            </button>
            <p className={styles.editEmailPassword}>
              Edita o teu endereço e-mail e palavra passe
            </p>
          </div>

          <div className={styles.profileOptionsCardGroup}>
            {/* Remova a lógica 'borderTop: none' aqui, o CSS fará isso com :not(:first-child) */}
            <div className={styles.optionCard}>
              Acompanha os teus Quizzes <span className={styles.arrowIconRight}>›</span>
            </div>
            <div className={styles.optionCard}>
              Alertas <span className={styles.arrowIconRight}>›</span>
            </div>
            <div className={styles.optionCard}>
              Catálogo <span className={styles.arrowIconRight}>›</span>
            </div>
          </div>
        </div>

        {/* Seção de funcionalidades: Subscrição, Dispositivos, Ofertas, etc. */}
        <div className={styles.featureCardsGrid}>
          <div className={styles.featureCard}>
            <span className={styles.icon}>💎</span>
            <h4 /* Não precisa de styles.h4 aqui */>Subscrição DAZZLE</h4>
            <p /* Não precisa de styles.p aqui */>Gere a tua subscrição e método de pagamento</p>
            <span className={styles.arrowIconBottom}>→</span>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.icon}>📱</span>
            <h4 /* Não precisa de styles.h4 aqui */>Dispositivos suportados</h4>
            <p /* Não precisa de styles.p aqui */>Gere a tua subscrição e método de pagamento</p>
            <span className={styles.arrowIconBottom}>→</span>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.icon}>🎁</span>
            <h4 /* Não precisa de styles.h4 aqui */>As tuas ofertas</h4>
            <p /* Não precisa de styles.p aqui */>Gere a tua subscrição e método de pagamento</p>
            <span className={styles.arrowIconBottom}>→</span>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.icon}>ℹ️</span>
            <h4 /* Não precisa de styles.h4 aqui */>Sobre nós</h4>
            <p /* Não precisa de styles.p aqui */>Gere a tua subscrição e método de pagamento</p>
            <span className={styles.arrowIconBottom}>→</span>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.icon}>🌟</span>
            <h4 /* Não precisa de styles.h4 aqui */>Qualidade do streaming</h4>
            <p /* Não precisa de styles.p aqui */>Gere a tua subscrição e método de pagamento</p>
            <span className={styles.arrowIconBottom}>→</span>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.icon}>🔒</span>
            <h4 /* Não precisa de styles.h4 aqui */>Proteção do PIN</h4>
            <p /* Não precisa de styles.p aqui */>Gere a tua subscrição e método de pagamento</p>
            <span className={styles.arrowIconBottom}>→</span>
          </div>
        </div>

        {/* Footer com logo DAZZLE */}
        <div className={styles.dazzleLogoFooterProfile}>
          DAZZLE
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;