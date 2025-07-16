// pages/GameDetailsPage.tsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Assumindo que você está usando React Router DOM
import styles from '../styles/GameDetailsPage.module.css';

// Define a interface para os detalhes do jogo AQUI, FORA DO COMPONENTE
interface GameDetails {
  id: number;
  homeTeam: string;
  awayTeam: string;
  championship: string;
  // A URL da imagem principal para o background do player de vídeo (ex: estádio)
  image: string;
  // URLs para os logos dos times (opcional, se for usar no cabeçalho ou em outro lugar)
  homeTeamLogo?: string;
  awayTeamLogo?: string;
  // Outros dados que virão do Firebase, como streamUrl, startTime, etc.
  // streamUrl: string;
  // startTime: string;
}

const GameDetailsPage: React.FC = () => {
  const location = useLocation();
  const initialGame = location.state as GameDetails | undefined;

  const [currentGame, setCurrentGame] = useState<GameDetails | null>(initialGame || null);
  const [activeTab, setActiveTab] = useState('ODDS CASAS DE APOSTAS');

  // Simulação de como você lidaria com dados do Firebase
  useEffect(() => {
    if (!initialGame) {
      // CENÁRIO: A página foi acessada diretamente ou a navegação não passou dados.
      // Aqui você faria uma chamada ao Firebase para buscar os dados do jogo
      // Usaria, por exemplo, o ID do jogo da URL (se você tiver uma rota tipo /game-details/:id)
      // fetchGameDataFromFirebase(gameIdFromUrl).then(data => setCurrentGame(data));

      // Por agora, um fallback para um jogo padrão
      setCurrentGame({
        id: 0,
        homeTeam: 'Jogo Padrão',
        awayTeam: 'Visitante Padrão',
        championship: 'Liga Amigável',
        image: '/images/stadium.jpeg', // Imagem de fallback
        homeTeamLogo: '/images/default_home_logo.png', // Logo de fallback
        awayTeamLogo: '/images/default_away_logo.png', // Logo de fallback
      });
    }
  }, [initialGame]); // Depende apenas de initialGame para evitar loops

  // Dados mockados para a seção de recomendações.
  // No mundo real, viriam de uma busca no Firebase por "jogos recomendados"
  const recommendedGames: GameDetails[] = [
    {
      id: 2,
      homeTeam: 'Corinthians',
      awayTeam: 'São Paulo',
      championship: 'Copa do Brasil',
      image: '/images/corinthians_sp.png', // Placeholder - substituir por URL do Firebase
    },
    {
      id: 3,
      homeTeam: 'Grêmio',
      awayTeam: 'Internacional',
      championship: 'Gauchão',
      image: '/images/gremio_inter.png', // Placeholder - substituir por URL do Firebase
    },
    {
      id: 4,
      homeTeam: 'Cruzeiro',
      awayTeam: 'Atlético-MG',
      championship: 'Campeonato Mineiro',
      image: '/images/cruzeiro_atletico.png', // Placeholder - substituir por URL do Firebase
    },
    // Adicione mais jogos ou busque do Firebase
  ];

  const handleRecommendationClick = (game: GameDetails) => {
    setCurrentGame(game);
    setActiveTab('ODDS CASAS DE APOSTAS');
    console.log('Viewing game:', game.homeTeam, 'x', game.awayTeam);
  };

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    console.log('Clicked tab:', tabName);
  };

  if (!currentGame) {
    return <div className={styles.loadingMessage}>Carregando detalhes do jogo...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.featuredSection}>
          <div className={styles.videoPlaceholder}>
            {/* A URL da imagem do Firebase viria em currentGame.image */}
            <div
              className={styles.stadiumBackground}
              style={{ backgroundImage: `url(${currentGame.image})` }}
            ></div>
            <div className={styles.videoOverlay}>
              <span className={styles.warningIcon}>!</span>
              <p className={styles.overlayTextMain}>Conteúdo temporariamente indisponível</p>
              <p className={styles.overlayTextTime}>O jogo começa dentro de 00:45:59</p>
            </div>
            {/* Aqui você embedaria o player de vídeo, possivelmente usando currentGame.streamUrl */}
          </div>

          <div className={styles.featuredSectionInfo}>
            <h2>{currentGame.homeTeam} x {currentGame.awayTeam}</h2>
            <p className={styles.subtitle}>{currentGame.championship}</p>
            <p className={styles.description}>
              Entre na ação e não perca os melhores momentos. Subscreva para teres a experiência completa.
            </p>
            <div className={styles.qualityButtons}>
              <button className={`${styles.qualityButton} ${styles.qualityButtonActive}`}>QUALIDADE FHD</button>
              <button className={styles.qualityButton}>HD</button>
              <button className={styles.qualityButton}>NORMAL</button>
            </div>
          </div>
        </div>

        <div className={styles.recommendationsSection}>
          <h3>Recomendações</h3>
          <div className={styles.recommendationsList}>
            {recommendedGames.map((game) => (
              <div
                key={game.id}
                className={styles.gameRecommendationCard}
                onClick={() => handleRecommendationClick(game)}
              >
                {/* A URL da imagem do Firebase viria em game.image */}
                <img src={game.image} alt={`${game.homeTeam} vs ${game.awayTeam}`} className={styles.cardImage} />
                <div className={styles.cardInfo}>
                  <p className={styles.cardTitle}>{game.homeTeam} x {game.awayTeam}</p>
                  <p className={styles.cardDescription}>{game.championship}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.navigationTabs}>
        <button
          className={`${styles.navTabButton} ${activeTab === 'Votação' ? styles.navTabActive : ''}`}
          onClick={() => handleTabClick('Votação')}
        >
          Votação
        </button>
        <button
          className={`${styles.navTabButton} ${activeTab === 'Escalação' ? styles.navTabActive : ''}`}
          onClick={() => handleTabClick('Escalação')}
        >
          Escalação
        </button>
        <button
          className={`${styles.navTabButton} ${activeTab === 'ODDS CASAS DE APOSTAS' ? styles.navTabActive : ''}`}
          onClick={() => handleTabClick('ODDS CASAS DE APOSTAS')}
        >
          ODDS CASAS DE APOSTAS
        </button>
        <button
          className={`${styles.navTabButton} ${activeTab === 'CHAT DE BANCADA' ? styles.navTabActive : ''}`}
          onClick={() => handleTabClick('CHAT DE BANCADA')}
        >
          CHAT DE BANCADA
        </button>
      </div>

      {activeTab === 'ODDS CASAS DE APOSTAS' && (
        <div className={styles.oddsSection}>
          <div className={styles.oddsCard}>
            <div className={styles.betanoLogo}>
              {/* O logo da Betano (ou de outras casas de apostas) também pode vir do Firebase */}
              <img src="/images/betano_logo.png" alt="Betano" />
            </div>
            <div className={styles.odds}>
              <div className={styles.oddItem}>
                <span className={styles.oddLabel}>1x</span>
                <span className={styles.oddValue}>2.30</span>
              </div>
              <div className={styles.oddItem}>
                <span className={styles.oddLabel}>X</span>
                <span className={styles.oddValue}>2.30</span>
              </div>
              <div className={styles.oddItem}>
                <span className={styles.oddLabel}>2x</span>
                <span className={styles.oddValue}>2.30</span>
              </div>
            </div>
            <button className={styles.betButton}>Apostar</button>
          </div>
          <div className={styles.oddsCard}>
            <div className={styles.betanoLogo}>
              <img src="/images/betano_logo.png" alt="Betano" />
            </div>
            <div className={styles.odds}>
              <div className={styles.oddItem}>
                <span className={styles.oddLabel}>1x</span>
                <span className={styles.oddValue}>2.30</span>
              </div>
              <div className={styles.oddItem}>
                <span className={styles.oddLabel}>X</span>
                <span className={styles.oddValue}>2.30</span>
              </div>
              <div className={styles.oddItem}>
                <span className={styles.oddLabel}>2x</span>
                <span className={styles.oddValue}>2.30</span>
              </div>
            </div>
            <button className={styles.betButton}>Apostar</button>
          </div>
          <div className={styles.oddsCard}>
            <div className={styles.betanoLogo}>
              <img src="/images/betano_logo.png" alt="Betano" />
            </div>
            <div className={styles.odds}>
              <div className={styles.oddItem}>
                <span className={styles.oddLabel}>1x</span>
                <span className={styles.oddValue}>2.30</span>
              </div>
              <div className={styles.oddItem}>
                <span className={styles.oddLabel}>X</span>
                <span className={styles.oddValue}>2.30</span>
              </div>
              <div className={styles.oddItem}>
                <span className={styles.oddLabel}>2x</span>
                <span className={styles.oddValue}>2.30</span>
              </div>
            </div>
            <button className={styles.betButton}>Apostar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameDetailsPage;