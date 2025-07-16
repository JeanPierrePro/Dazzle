// src/pages/HomePage.tsx
import React from 'react';
import styles from '../styles/HomePage.module.css'; // Importe os estilos modularizados
// Importe todos os novos componentes de seção
import HeroSection from '../components/HeroSection/HeroSection';
import LiveStreamSection from '../components/LiveStreamSection/LiveStreamSection';
import HighlightsSection from '../components/HighlightsSection/HighlightsSection';
import AdCarousel from '../components/AdCarousel/AdCarousel';
import VoteSection from '../components/VoteSection/VoteSection';
import PodcastSection from '../components/PodcastSection/PodcastSection';


const HomePage: React.FC = () => {
  return (
    // Adicione a classe ao div raiz da sua HomePage
    <div className={styles.homePageContainer}>
      {/* As seções da Home Page na ordem do seu design */}
      <HeroSection />
      <LiveStreamSection />
      <HighlightsSection />
      <AdCarousel />
      <VoteSection />
      <PodcastSection />
      {/* Você pode ajustar a ordem conforme sua necessidade */}
    </div>
  );
};

export default HomePage;