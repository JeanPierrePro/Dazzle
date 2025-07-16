// src/components/HighlightsSection/HighlightsSection.tsx
import React from 'react';
import VideoCard from '../VideoCard/VideoCard'; // Reutiliza o VideoCard

const HighlightsSection: React.FC = () => {
  const highlightVideos = [
    { imageUrl: 'https://via.placeholder.com/280x160/888888/FFFFFF?text=Destaque+1', title: 'Destaque da Semana', description: 'Melhores Lances' },
    { imageUrl: 'https://via.placeholder.com/280x160/999999/FFFFFF?text=Destaque+2', title: 'Jogo Histórico', description: 'Gols Inesquecíveis' },
    { imageUrl: 'https://via.placeholder.com/280x160/AAAAAA/FFFFFF?text=Destaque+3', title: 'Surpresa da Rodada', description: 'Análise Completa' },
    { imageUrl: 'https://via.placeholder.com/280x160/BBBBBB/FFFFFF?text=Destaque+4', title: 'Reações dos Fãs', description: 'Pós-Jogo' },
    { imageUrl: 'https://via.placeholder.com/280x160/CCCCCC/FFFFFF?text=Destaque+5', title: 'Treinamento Intensivo', description: 'Preparação Física' },
  ];

  return (
    <section style={{ margin: '60px 0' }}>
      <h2 style={{ fontSize: '2.2em', marginBottom: '30px', fontWeight: 'bold' }}>
        Destaques da Semana
      </h2>
      <div style={{
        display: 'flex',
        overflowX: 'auto',
        gap: '20px',
        paddingBottom: '20px',
        scrollbarWidth: 'thin',
        scrollbarColor: 'var(--accent-orange) var(--input-bg)'
      }}>
        {highlightVideos.map((video, index) => (
          <VideoCard
            key={index}
            imageUrl={video.imageUrl}
            title={video.title}
            description={video.description}
          />
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;