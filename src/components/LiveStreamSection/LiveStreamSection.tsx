// src/components/LiveStreamSection/LiveStreamSection.tsx
import React from 'react';
import VideoCard from '../VideoCard/VideoCard'; // Importa o componente VideoCard

const LiveStreamSection: React.FC = () => {
  // Dados de exemplo para os vídeos (você pode substituir por dados do Firebase depois)
  const liveVideos = [
    { imageUrl: 'https://via.placeholder.com/280x160/222222/FFFFFF?text=Video+1', title: 'Notícias & Sporting CP', description: 'Resumo do Jogo' },
    { imageUrl: 'https://via.placeholder.com/280x160/333333/FFFFFF?text=Video+2', title: 'Notícias & Sporting CP', description: 'Destaques da Luta' },
    { imageUrl: 'https://via.placeholder.com/280x160/444444/FFFFFF?text=Video+3', title: 'Sporting CP', description: 'Melhores Momentos' },
    { imageUrl: 'https://via.placeholder.com/280x160/555555/FFFFFF?text=Video+4', title: 'Treino da Seleção', description: 'Preparação para o Clássico' },
    { imageUrl: 'https://via.placeholder.com/280x160/666666/FFFFFF?text=Video+5', title: 'Entrevista Exclusiva', description: 'Com o Treinador' },
  ];

  return (
    <section style={{ margin: '60px 0' }}>
      <h2 style={{ fontSize: '2.2em', color: 'var(--accent-orange)', marginBottom: '30px', fontWeight: 'bold' }}>
        Emissão em Direto
      </h2>
      <div style={{
        display: 'flex',
        overflowX: 'auto', // Permite rolar horizontalmente se houver muitos cards
        gap: '20px', // Espaçamento entre os cards
        paddingBottom: '20px', // Espaço para a barra de rolagem (se aparecer)
        scrollbarWidth: 'thin', // Para navegadores que suportam
        scrollbarColor: 'var(--accent-orange) var(--input-bg)' // Para navegadores que suportam
      }}>
        {liveVideos.map((video, index) => (
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

export default LiveStreamSection;