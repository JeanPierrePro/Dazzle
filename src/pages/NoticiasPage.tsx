// pages/NoticiasPage.tsx
import React, { useState, useMemo } from 'react';
import styles from '../styles/NoticiasPage.module.css';

// --- INTERFACES E TIPOS ---
interface VideoItem {
  id: string;
  title: string;
  imageUrl: string;
  logoUrl: string;
  sport: string;
}

type NavItem = 'FAVORITOS' | 'GLOBAL';

// --- COMPONENTE DO CARD DE VÍDEO ---
// Extrair o card para seu próprio componente deixa o código principal mais limpo
const VideoCard: React.FC<{ item: VideoItem }> = ({ item }) => (
  <div key={item.id} className={styles.videoCard}>
    <div className={styles.imageWrapper}>
      <img src={item.imageUrl} alt="Video Thumbnail" className={styles.thumbnail} />
      {/* O logo "DAZZLE" não estava no seu CSS, então removi do JSX. Se precisar, basta adicionar a classe. */}
    </div>
    <p className={styles.videoTitle}>{item.title}</p>
  </div>
);


// --- DADOS MOCKADOS ---
const allVideoData: VideoItem[] = [
  // FUTEBOL
  { id: 'futebol1', title: 'Rodrigo perto do Barcelona', imageUrl: 'https://placehold.co/600x400/000000/FFFFFF/png?text=Futebol', logoUrl: '...', sport: 'FUTEBOL' },
  { id: 'futebol2', title: 'Grandes Lances do Clássico', imageUrl: 'https://placehold.co/600x400/000000/FFFFFF/png?text=Futebol', logoUrl: '...', sport: 'FUTEBOL' },
  { id: 'futebol3', title: 'Análise Pós-Jogo', imageUrl: 'https://placehold.co/600x400/000000/FFFFFF/png?text=Futebol', logoUrl: '...', sport: 'FUTEBOL' },
  // BASQUETE
  { id: 'basquete1', title: 'Melhores Cestas da Semana', imageUrl: 'https://placehold.co/600x400/1a1a1a/FFFFFF/png?text=Basquete', logoUrl: '...', sport: 'BASQUETE' },
  { id: 'basquete2', title: 'Dunk Incrível', imageUrl: 'https://placehold.co/600x400/1a1a1a/FFFFFF/png?text=Basquete', logoUrl: '...', sport: 'BASQUETE' },
  // HOQUEI NO GELO
  { id: 'hoquei1', title: 'Golaços no Gelo', imageUrl: 'https://placehold.co/600x400/333333/FFFFFF/png?text=Hoquei', logoUrl: '...', sport: 'HOQUEI NO GEL' },
  // TENIS
  { id: 'tenis1', title: 'Grand Slam Destaques', imageUrl: 'https://placehold.co/600x400/555555/FFFFFF/png?text=Tenis', logoUrl: '...', sport: 'TENIS' },
  // NFL
  { id: 'nfl1', title: 'Touchdowns Imperdíveis', imageUrl: 'https://placehold.co/600x400/777777/FFFFFF/png?text=NFL', logoUrl: '...', sport: 'NFL' },
  // MOTORES
  { id: 'motores1', title: 'Fórmula 1 - Última Corrida', imageUrl: 'https://placehold.co/600x400/999999/FFFFFF/png?text=Motores', logoUrl: '...', sport: 'MOTORES' },
];

const sportsCategories = ['FUTEBOL', 'BASQUETE', 'HOQUEI NO GEL', 'TENIS', 'NFL', 'MOTORES'];


const NoticiasPage: React.FC = () => {
  // --- ESTADOS ---
  const [activeNavItem, setActiveNavItem] = useState<NavItem>('FAVORITOS');
  const [activeSport, setActiveSport] = useState('FUTEBOL');

  // --- LÓGICA DERIVADA ---
  // useMemo otimiza a performance, evitando que o filtro seja refeito a cada renderização.
  const filteredVideoItems = useMemo(() => {
    if (activeNavItem === 'GLOBAL') {
      return allVideoData; // Mostra todos os vídeos
    }
    // Filtra pelo esporte ativo apenas na aba 'FAVORITOS'
    return allVideoData.filter(item => item.sport === activeSport);
  }, [activeNavItem, activeSport]);

  // --- HANDLERS (Funções de clique) ---
  const handleNavItemClick = (item: NavItem) => {
    setActiveNavItem(item);
  };
  
  const handleSportClick = (sport: string) => {
    setActiveSport(sport);
  };

  // --- RENDERIZAÇÃO ---
  return (
    <div className={styles.container}>
      {/* O header com o título foi removido para simplificar, mas você pode adicioná-lo de volta se quiser */}
      <nav className={styles.navigation}>
        <div className={styles.navItemContainer}>
          <div
            className={`${styles.navItem} ${activeNavItem === 'FAVORITOS' ? styles.active : ''}`}
            onClick={() => handleNavItemClick('FAVORITOS')}
          >
            FAVORITOS
          </div>
          <div
            className={`${styles.navItem} ${activeNavItem === 'GLOBAL' ? styles.active : ''}`}
            onClick={() => handleNavItemClick('GLOBAL')}
          >
            GLOBAL
          </div>
        </div>
      </nav>

      {/* Barra de esportes só aparece quando 'FAVORITOS' está ativo */}
      {activeNavItem === 'FAVORITOS' && (
        <nav className={styles.sportsNav}>
          {sportsCategories.map((sport) => (
            <div
              key={sport}
              className={`${styles.sportNavItem} ${activeSport === sport ? styles.activeSport : ''}`}
              onClick={() => handleSportClick(sport)}
            >
              {sport}
            </div>
          ))}
        </nav>
      )}

      <main className={styles.videoGrid}>
        {filteredVideoItems.length > 0 ? (
          filteredVideoItems.map((item) => <VideoCard key={item.id} item={item} />)
        ) : (
          <p className={styles.noVideosMessage}>Nenhum vídeo disponível para esta seção.</p>
        )}
      </main>
    </div>
  );
};

export default NoticiasPage;