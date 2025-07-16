// src/components/VoteSection/VoteSection.tsx
import React from 'react';
import VideoCard from '../VideoCard/VideoCard'; // Pode reutilizar VideoCard ou criar um VotingItemCard

const VoteSection: React.FC = () => {
  const votingItems = [
    { imageUrl: 'https://via.placeholder.com/280x160/333333/FFFFFF?text=Time+A', title: 'TIM TIM', description: 'Melhor Jogador' },
    { imageUrl: 'https://via.placeholder.com/280x160/444444/FFFFFF?text=Time+B', title: 'TIM TIM', description: 'Melhor Gol' },
    { imageUrl: 'https://via.placeholder.com/280x160/555555/FFFFFF?text=Time+C', title: 'TIM TIM', description: 'Melhor Torcida' },
    { imageUrl: 'https://via.placeholder.com/280x160/666666/FFFFFF?text=Time+D', title: 'TIM TIM', description: 'Momento Inesquecível' },
  ];

  return (
    <section style={{ margin: '60px 0' }}>
      <h2 style={{ fontSize: '2.2em', marginBottom: '30px', fontWeight: 'bold', textAlign: 'center' }}>
        AGORA PODES VOTAR
      </h2>
      <div style={{
        display: 'flex',
        overflowX: 'auto',
        justifyContent: 'center', // Centraliza se houver espaço
        gap: '20px',
        paddingBottom: '20px',
        scrollbarWidth: 'thin',
        scrollbarColor: 'var(--accent-orange) var(--input-bg)'
      }}>
        {votingItems.map((item, index) => (
          <VideoCard // Reutilizando o VideoCard. Se o voto for mais complexo, crie VotingItemCard
            key={index}
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default VoteSection;