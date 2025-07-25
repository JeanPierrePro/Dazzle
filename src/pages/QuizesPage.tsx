// src/components/pages/QuizesPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/QuizesPage.module.css';

const QuizesPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Volta para a página anterior no histórico de navegação
  };

  return (
    <div className={styles.pageWrapper}>
      <main className={styles.mainContent}>
        {/* NOVO: Navegação com seta e breadcrumb */}
        <div className={styles.navigationHeader}>
          <button className={styles.arrowBack} onClick={handleGoBack}>&larr;</button>
          <div className={styles.breadcrumb}>
            A minha conta {'>'} os teus quizzes
          </div>
        </div>

        <h1 className={styles.pageTitle}>QUIZZES</h1>
        <p className={styles.pageSubtitle}>Aqui podes acompanhar o progresso dos teus quizzes.</p>
           <hr className={styles.horizontalSeparator} />
        <div className={styles.quizBanner}>
          <img
            src="https://i.imgur.com/8aV4t4b.png" // URL de uma imagem mais parecida
            alt="Capa Quiz"
            className={styles.quizBannerImage}
          />
        </div>

        {/* ESTRUTURA DO CARD DE RESUMO TOTALMENTE REFEITA */}
        <div className={styles.statsCard}>
          {/* Seção da Esquerda: Mês Atual */}
          <div className={styles.monthlySection}>
            {/* NOVO CONTAINER ADICIONADO AQUI */}
            <div className={styles.monthlyContentWrapper}>
              <h3 className={styles.cardTitle}>Mês atual</h3>
              <p className={styles.cardDescription}>Acompanha o teu desempenho nos quizzes deste mês.</p>
              <div className={styles.progressTracker}>
                <div className={styles.progressCircle}>
                  <span className={styles.progressText}>2/5</span>
                </div>
                <div className={styles.daysRemaining}>
                  <span>Termina dentro de 13 dias</span>
                </div>
              </div>
            </div> {/* Fim do novo container */}
          </div>

          {/* Linha Vertical Divisória */}
          <div className={styles.verticalSeparator}></div>
          
          {/* Seção da Direita: Total */}
          <div className={styles.totalSection}>
            <h3 className={styles.cardTitle}>Total de quizzes:</h3>
            <div className={styles.totalStats}>
              <div className={styles.topStats}>
                <div className={styles.statBlock}>
                  <span className={styles.statLabel}>Acertas-te</span>
                  <span className={styles.statValue}>2</span>
                </div>
                <div className={styles.statBlock}>
                  <span className={styles.statLabel}>Perdeste</span>
                  <span className={styles.statValue}>0</span>
                </div>
              </div>
              <div className={styles.bottomStats}>
                <div className={styles.summaryRow}>
                  <span>Taxa de acerto: 100%</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Média de pontos: 7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuizesPage;