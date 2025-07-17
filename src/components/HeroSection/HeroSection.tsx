// src/components/HeroSection/HeroSection.tsx
import React from 'react';
import styles from './HeroSection.module.css'; // Importe os estilos modularizados

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.heroTitle}>
        EQUADOR <br />X BRASIL
      </h1>
      {/* Você pode adicionar mais conteúdo ou um background-image aqui depois */}
    </section>
  );
};

export default HeroSection;
