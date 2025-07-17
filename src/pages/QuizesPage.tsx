import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import styles from '../styles/QuizesPage.module.css'; // Certifique-se de ter este arquivo CSS

const QuizesPage: React.FC = () => {
  const navigate = useNavigate(); // Inicializa o hook de navegação

  // Função para lidar com o clique na seta de voltar
  const handleGoBack = () => {
    navigate(-1); // Volta para a entrada anterior no histórico
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {/* Seta para voltar */}
        <div className={styles.arrowBack} onClick={handleGoBack}>&larr;</div>
        <h1 className={styles.pageTitle}>QUIZES DO TIME</h1>
      </header>
      <main className={styles.mainContent}>
        <p className={styles.message}>Teste seus conhecimentos sobre o Palmeiras!</p>
        {/* Adicione o conteúdo dos seus quizes aqui */}
        <div className={styles.quizGrid}>
          <div className={styles.quizCard}>
            <h3 className={styles.quizTitle}>Quiz: História do Palmeiras</h3>
            <p className={styles.quizDescription}>Quantos títulos o Palmeiras tem na história?</p>
            <button className={styles.startButton}>Iniciar Quiz</button>
          </div>
          <div className={styles.quizCard}>
            <h3 className={styles.quizTitle}>Quiz: Ídolos Alviverdes</h3>
            <p className={styles.quizDescription}>Quem é o maior artilheiro da história do clube?</p>
            <button className={styles.startButton}>Iniciar Quiz</button>
          </div>
          {/* Adicione mais quizes conforme necessário */}
        </div>
      </main>
    </div>
  );
};

export default QuizesPage;