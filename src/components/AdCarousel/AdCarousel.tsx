// src/components/AdCarousel/AdCarousel.tsx
import React from 'react';

// Você pode passar os logos como props, ou carregá-los internamente
// Para simplificar, vou usar placeholders e estilos básicos aqui.
const AdCarousel: React.FC = () => {
  const ads = [
    { name: 'Betano', logoUrl: 'https://via.placeholder.com/200x100/FF5722/FFFFFF?text=Betano' },
    { name: 'Telepizza', logoUrl: 'https://via.placeholder.com/200x100/DC143C/FFFFFF?text=Telepizza' },
    { name: 'Nike', logoUrl: 'https://via.placeholder.com/200x100/FFFFFF/000000?text=Nike' },
  ];

  return (
    <section style={{ margin: '60px 0', textAlign: 'center' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center', // Centraliza os logos
        alignItems: 'center',
        gap: '40px', // Espaço entre os logos
        flexWrap: 'wrap', // Permite quebrar linha em telas menores
      }}>
        {ads.map((ad, index) => (
          <div key={index} style={{
            backgroundColor: ad.name === 'Nike' ? '#F0F0F0' : ad.name === 'Telepizza' ? '#DC143C' : '#FF5722', // Cores de fundo dos quadrados
            width: '220px', // Tamanho dos quadrados
            height: '120px',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          }}>
            <img src={ad.logoUrl} alt={ad.name} style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdCarousel;