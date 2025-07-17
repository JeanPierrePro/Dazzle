import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/QuizesPage.module.css';

const QuizesPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Volta para a página anterior no histórico de navegação
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.arrowBack} onClick={handleGoBack}>&larr;</div>
        <h1 className={styles.pageTitle}>QUIZZES</h1> {/* Ajustado o espaçamento via CSS */}
      </header>

      <main className={styles.mainContent}>
        {/* A mensagem foi movida para acima do banner, conforme solicitado */}
        <p className={styles.message}>Aqui podes acompanhar o progresso dos teus quizzes.</p>

        {/* Banner "CAPA QUIZZ" */}
        <div className={styles.quizBanner}>
          <img
            src="https://placehold.co/800x200/4CAF50/ffffff?text=CAPA+QUIZZ" // Placeholder para a imagem do banner
            alt="Capa Quiz"
            className={styles.quizBannerImage}
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x200/4CAF50/ffffff?text=CAPA+QUIZZ'; }}
          />
        </div>

        {/* NOVO: Container combinado para "Mês atual" e "Total de quizzes" */}
        <div className={styles.quizSummaryCombinedCard}>
          {/* Seção "Mês atual" */}
          <div className={styles.quizProgressSection}>
            <h3 className={styles.cardTitle}>Mês atual</h3>
            <p className={styles.cardDescription}>Acompanha o teu desempenho nos quizzes deste mês.</p>
            <div className={styles.progressCircle}>
              <span className={styles.progressText}>2/5</span>
            </div>
            <p className={styles.daysRemaining}>Termina dentro de 13 dias</p>
          </div>

          {/* Seção "Total de quizzes" */}
          <div className={styles.quizTotalSummarySection}>
            <h3 className={styles.cardTitle}>Total de quizzes:</h3>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Acertas-te:</span>
              <span className={styles.summaryValue}>2</span>
            </div>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Perdeste:</span>
              <span className={styles.summaryValue}>0</span>
            </div>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Taxa de acerto:</span>
              <span className={styles.summaryValue}>100%</span>
            </div>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Média de pontos:</span>
              <span className={styles.summaryValue}>7</span>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default QuizesPage;
