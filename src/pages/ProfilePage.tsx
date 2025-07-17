// src/components/pages/ProfilePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate
import styles from '../styles/ProfilePage.module.css'; // Importe os estilos modularizados

const ProfilePage: React.FC = () => {
  const navigate = useNavigate(); // Inicialize o hook de navegação

  // Função para redirecionar para a página de quizzes
  const goToQuizzes = () => {
    navigate('/quizes'); // Redireciona para a rota '/quizes'
  };

  // Função para redirecionar para a página de alertas
  const goToAlerts = () => {
    navigate('/alertas'); // Redireciona para a rota '/alertas'
  };

  // NOVA: Função para redirecionar para a página de catálogo
  const goToCatalog = () => {
    navigate('/catalogo'); // Redireciona para a rota '/catalogo'
  };

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
            <div className={styles.optionCard} onClick={goToQuizzes}>
              Acompanha os teus Quizzes <span className={styles.arrowIconRight}>›</span>
            </div>
            <div className={styles.optionCard} onClick={goToAlerts}>
              Alertas <span className={styles.arrowIconRight}>›</span>
            </div>
            {/* Adicione onClick para redirecionar para o Catálogo */}
            <div className={styles.optionCard} onClick={goToCatalog}>
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