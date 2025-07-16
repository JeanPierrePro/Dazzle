// meu favorito.tsx
import React, { useState} from 'react'; // Import useEffect
import styles from '../styles/NoticiasPage.module.css';

// Define a interface para um item de vídeo
interface VideoItem {
  id: string; // Adiciona um ID único para cada vídeo
  title: string;
  imageUrl: string;
  logoUrl: string;
  sport: string; // Adiciona a propriedade 'sport' para associar o vídeo a uma seção
}

// Dados simulados para cada seção
const allVideoData: VideoItem[] = [
  // FUTEBOL
  { id: 'futebol1', title: 'Rodrigo perto do Barcelona', imageUrl: 'https://via.placeholder.com/300x168?text=FUTEBOL+1', logoUrl: 'https://via.placeholder.com/60x30?text=DAZZLE', sport: 'FUTEBOL' },
  { id: 'futebol2', title: 'Grandes Lances do Clássico', imageUrl: 'https://via.placeholder.com/300x168?text=FUTEBOL+2', logoUrl: 'https://via.placeholder.com/60x30?text=DAZZLE', sport: 'FUTEBOL' },
  { id: 'futebol3', title: 'Análise Pós-Jogo', imageUrl: 'https://via.placeholder.com/300x168?text=FUTEBOL+3', logoUrl: 'https://via.placeholder.com/60x30?text=DAZZLE', sport: 'FUTEBOL' },
  { id: 'futebol4', title: 'Gols da Rodada', imageUrl: 'https://via.placeholder.com/300x168?text=FUTEBOL+4', logoUrl: 'https://via.placeholder.com/60x30?text=DAZZLE', sport: 'FUTEBOL' },
  { id: 'futebol5', title: 'História do Campeonato', imageUrl: 'https://via.placeholder.com/300x168?text=FUTEBOL+5', logoUrl: 'https://via.placeholder.com/60x30?text=DAZZLE', sport: 'FUTEBOL' },

  // BASQUETE
  { id: 'basquete1', title: 'Melhores Cestas da Semana', imageUrl: 'https://via.placeholder.com/300x168?text=BASQUETE+1', logoUrl: 'https://via.placeholder.com/60x30?text=DAZZLE', sport: 'BASQUETE' },
  { id: 'basquete2', title: 'Dunk Incrível', imageUrl: 'https://via.placeholder.com/300x168?text=BASQUETE+2', logoUrl: 'https://via.placeholder.com/60x30?text=DAZZLE', sport: 'BASQUETE' },
  { id: 'basquete3', title: 'Playoffs Emoção', imageUrl: 'https://via.placeholder.com/300x168?text=BASQUETE+3', logoUrl: 'https://via.placeholder.com/60x30?text=DAZZLE', sport: 'BASQUETE' },

  // HOQUEI NO GEL
  { id: 'hoquei1', title: 'Golaços no Gelo', imageUrl: 'https://via.placeholder.com/300x168?text=HOQUEI+1', logoUrl: 'https://via.placeholder.com/60x30?text=DAZZLE', sport: 'HOQUEI NO GEL' },
  { id: 'hoquei2', title: 'Jogadas de Mestre', imageUrl: 'https://via.placeholder.com/300x168?text=HOQUEI+2', logoUrl: 'https://via.placeholder.com/60x30?text=DAZZLE', sport: 'HOQUEI NO GEL' },

  // TENIS
  { id: 'tenis1', title: 'Grand Slam Destaques', imageUrl: 'https://via.placeholder.com/300x168?text=TENIS+1', logoUrl: 'https://via.placeholder.com/60x30?text=DAZZLE', sport: 'TENIS' },

  // NFL
  { id: 'nfl1', title: 'Touchdowns Imperdíveis', imageUrl: 'https://via.placeholder.com/300x168?text=NFL+1', logoUrl: 'https://via.placeholder.com/60x30?text=DAZZLE', sport: 'NFL' },
  { id: 'nfl2', title: 'As Melhores Defesas', imageUrl: 'https://via.placeholder.com/300x168?text=NFL+2', logoUrl: 'https://via.placeholder.com/60x30?text=DAZZLE', sport: 'NFL' },

  // MOTORES
  { id: 'motores1', title: 'Fórmula 1 - Última Corrida', imageUrl: 'https://via.placeholder.com/300x168?text=MOTORES+1', logoUrl: 'https://via.placeholder.com/60x30?text=DAZZLE', sport: 'MOTORES' },
  { id: 'motores2', title: 'Rally Extremo', imageUrl: 'https://via.placeholder.com/300x168?text=MOTORES+2', logoUrl: 'https://via.placeholder.com/60x30?text=DAZZLE', sport: 'MOTORES' },
  { id: 'motores3', title: 'Moto GP - Velocidade Máxima', imageUrl: 'https://via.placeholder.com/300x168?text=MOTORES+3', logoUrl: 'https://via.placeholder.com/60x30?text=DAZZLE', sport: 'MOTORES' },
];

const NoticiasPage: React.FC = () => {
  const [activeNavItem, setActiveNavItem] = useState('FAVORITOS');
  const [activeSport, setActiveSport] = useState('FUTEBOL'); // Inicia com FUTEBOL ativo

  const sportsCategories = ['FUTEBOL', 'BASQUETE', 'HOQUEI NO GEL', 'TENIS', 'NFL', 'MOTORES'];

  // Filter videos based on the active navigation item and active sport
  const filteredVideoItems = activeNavItem === 'GLOBAL'
    ? allVideoData // Show all videos when GLOBAL is active
    : allVideoData.filter(item => item.sport === activeSport);

  // When 'GLOBAL' is clicked, ensure no specific sport is highlighted,
  // or decide what default behavior you prefer for the sport buttons.
  // For this solution, when 'GLOBAL' is active, clicking on a sport button
  // will switch back to 'FAVORITOS' view and filter by that sport.
  const handleNavItemClick = (item: string) => {
    setActiveNavItem(item);
    if (item === 'GLOBAL') {
      setActiveSport(''); // Clear active sport when GLOBAL is selected
    } else {
      // When switching back to FAVORITOS, set a default sport if desired
      setActiveSport('FUTEBOL');
    }
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <div className={styles.navItemContainer}>
          <span
            className={`${styles.navItem} ${activeNavItem === 'FAVORITOS' ? styles.active : ''}`}
            onClick={() => handleNavItemClick('FAVORITOS')}
          >
            FAVORITOS
          </span>
          <span
            className={`${styles.navItem} ${activeNavItem === 'GLOBAL' ? styles.active : ''}`}
            onClick={() => handleNavItemClick('GLOBAL')}
          >
            GLOBAL
          </span>
        </div>
      </nav>

      {/* Only display sport categories when 'FAVORITOS' is active */}
      {activeNavItem === 'FAVORITOS' && (
        <div className={styles.sportsNav}>
          {sportsCategories.map((sport) => (
            <button
              key={sport}
              className={`${styles.sportButton} ${activeSport === sport ? styles.activeSport : ''}`}
              onClick={() => setActiveSport(sport)}
            >
              {sport}
            </button>
          ))}
        </div>
      )}

      <div className={styles.videoGrid}>
        {filteredVideoItems.length > 0 ? (
          filteredVideoItems.map((item) => (
            <div key={item.id} className={styles.videoCard}>
              <div className={styles.imageWrapper}>
                <img src={item.imageUrl} alt="Video Thumbnail" className={styles.thumbnail} />
                <img src={item.logoUrl} alt="DAZZLE Logo" className={styles.dazzleLogo} />
              </div>
              <p className={styles.videoTitle}>{item.title}</p>
            </div>
          ))
        ) : (
          <p className={styles.noVideosMessage}>Nenhum vídeo disponível para esta seção.</p>
        )}
      </div>
    </div>
  );
};

export default NoticiasPage;