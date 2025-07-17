import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import styles from '../styles/LojaPage.module.css'; // Certifique-se de ter este arquivo CSS

const LojaPage: React.FC = () => {
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
        <h1 className={styles.pageTitle}>LOJA OFICIAL</h1>
      </header>
      <main className={styles.mainContent}>
        <p className={styles.message}>Aqui você encontrará os produtos oficiais do seu time!</p>
        {/* Adicione o conteúdo da sua loja aqui */}
        <div className={styles.productGrid}>
          <div className={styles.productCard}>
            <img src="https://placehold.co/150x150/00e676/ffffff?text=Camisa" alt="Camisa Oficial" className={styles.productImage} />
            <h3 className={styles.productName}>Camisa Titular 2025</h3>
            <p className={styles.productPrice}>R$ 299,90</p>
            <button className={styles.buyButton}>Comprar</button>
          </div>
          <div className={styles.productCard}>
            <img src="https://placehold.co/150x150/00e676/ffffff?text=Boné" alt="Boné Oficial" className={styles.productImage} />
            <h3 className={styles.productName}>Boné Time</h3>
            <p className={styles.productPrice}>R$ 79,90</p>
            <button className={styles.buyButton}>Comprar</button>
          </div>
          {/* Adicione mais produtos conforme necessário */}
        </div>
      </main>
    </div>
  );
};

export default LojaPage;