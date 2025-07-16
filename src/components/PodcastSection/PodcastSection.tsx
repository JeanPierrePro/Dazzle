// src/components/PodcastSection/PodcastSection.tsx
import React from 'react';
import VideoCard from '../VideoCard/VideoCard'; // Reutiliza o VideoCard (pode ser ajustado para PodcastCard depois)

const PodcastSection: React.FC = () => {
  const podcasts = [
    { imageUrl: 'https://via.placeholder.com/280x160/FAB005/FFFFFF?text=PODPAH', title: 'PODPAH Especial', description: 'Entrevista com o Craque' },
    { imageUrl: 'https://via.placeholder.com/280x160/555555/FFFFFF?text=Podcast+2', title: 'Debate Esportivo', description: 'Análise Tática' },
    { imageUrl: 'https://via.placeholder.com/280x160/777777/FFFFFF?text=Podcast+3', title: 'Histórias do Futebol', description: 'Lendas do Passado' },
    { imageUrl: 'https://via.placeholder.com/280x160/999999/FFFFFF?text=Podcast+4', title: 'Bastidores do Clube', description: 'Conteúdo Exclusivo' },
  ];

  return (
    <section style={{ margin: '60px 0' }}>
      <h2 style={{ fontSize: '2.2em', marginBottom: '30px', fontWeight: 'bold' }}>
        Podcast
      </h2>
      <div style={{
        display: 'flex',
        overflowX: 'auto',
        gap: '20px',
        paddingBottom: '20px',
        scrollbarWidth: 'thin',
        scrollbarColor: 'var(--accent-orange) var(--input-bg)'
      }}>
        {podcasts.map((podcast, index) => (
          <VideoCard
            key={index}
            imageUrl={podcast.imageUrl}
            title={podcast.title}
            description={podcast.description}
          />
        ))}
      </div>
    </section>
  );
};

export default PodcastSection;