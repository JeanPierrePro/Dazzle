// src/components/HeroSection/HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section style={{ 
      minHeight: '400px', // Altura mínima para a seção de herói
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start', // Alinha o texto à esquerda
      padding: '40px',
      backgroundColor: 'var(--bg-dark)', // Garante o fundo escuro
      color: 'var(--text-light)', // Garante o texto claro
    }}>
      <h1 style={{ 
        fontSize: '4.5em', // Tamanho grande para "EQUADOR X BRASIL"
        fontWeight: 'bold',
        textTransform: 'uppercase',
        lineHeight: '1.1',
        marginBottom: '20px'
      }}>
        EQUADOR <br />X BRASIL
      </h1>
      {/* Você pode adicionar mais conteúdo ou um background-image aqui depois */}
    </section>
  );
};

export default HeroSection;