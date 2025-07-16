// src/components/VideoCard/VideoCard.tsx
import React from 'react';

// Definindo os tipos (props) que este componente vai receber
interface VideoCardProps {
  imageUrl: string;
  title: string;
  description: string;
  // Opcional: url para onde o card leva (se for clicável)
  // url?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ imageUrl, title, description }) => {
  return (
    <div style={{
      width: '280px', // Largura do card (ajuste conforme o design)
      backgroundColor: 'var(--input-bg)', // Fundo escuro levemente diferente do geral
      borderRadius: '8px',
      overflow: 'hidden', // Esconde partes da imagem que excedam o border-radius
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
      border: '1px solid var(--border-color)', // Borda sutil
    }}>
      <img
        src={imageUrl}
        alt={title}
        style={{
          width: '100%',
          height: '160px', // Altura fixa para a imagem do thumbnail
          objectFit: 'cover', // Corta a imagem para preencher o espaço
          borderBottom: '2px solid var(--accent-orange)' // Linha laranja na base da imagem
        }}
      />
      <div style={{ padding: '15px' }}>
        <h3 style={{ 
          fontSize: '1em',
          fontWeight: 'bold',
          marginBottom: '5px',
          color: 'var(--text-light)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis' // Adiciona "..." se o título for muito longo
        }}>
          {title}
        </h3>
        <p style={{ 
          fontSize: '0.85em',
          color: 'var(--search-placeholder-color)', // Um cinza mais suave para a descrição
          lineHeight: '1.4',
          height: '38px', // Altura fixa para 2 linhas de texto
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;