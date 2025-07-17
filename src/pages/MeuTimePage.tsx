import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import styles from '../styles/MeuTimePage.module.css';

// --- Interfaces ---

// Interface para um item de transferência
interface Transfer {
  id: string;
  status: string;
  date: string;
  playerName: string;
  playerRole: string;
  fromClub: string;
  toClub: string;
  transferFee: string;
  playerImageUrl: string;
  clubLogoUrl: string;
}

// Interface para a próxima partida
interface Match {
  id: string;
  homeTeamName: string;
  homeTeamLogo: string;
  awayTeamName: string;
  awayTeamLogo: string;
  leagueLogo: string;
  leagueName: string;
  date: string;
  time: string;
}

// Interface para um resultado de jogo
interface GameResult {
  id: string;
  date: string;
  time: string;
  homeTeamName: string;
  homeTeamLogo: string;
  homeScore: number;
  awayTeamName: string;
  awayTeamLogo: string;
  awayScore: number;
  result: 'V' | 'D' | 'E';
}

// Interface para informações do time
interface TeamInfo {
  id: string;
  trainer: string;
  president: string;
  foundationYear: number;
  stadium: string;
}

// Interface para um jogador no plantel
interface Player {
  id: string;
  name: string;
  role: 'Guarda-Redes' | 'Defesas' | 'Médios' | 'Avançados';
  imageUrl: string;
  clubLogoUrl: string; // Para o logo do Palmeiras ao lado do número
  number: number; // O número exibido no card
}

// Interface para um treinador no plantel
interface Coach {
  id: string;
  name: string;
  role: 'Treinadores';
  imageUrl: string;
}

// Interface para um Troféu
interface Trophy {
  id: string;
  name: string;
  count: number;
  imageUrl: string;
}

// --- Dummy Data ---
const dummyTransfers: Transfer[] = [
  {
    id: 'transfer-1',
    status: 'NEGÓCIO FECHADO',
    date: '30/05/2025',
    playerName: 'Ángel Di Maria',
    playerRole: 'Meia-campista',
    fromClub: 'Benfica',
    toClub: 'Palmeiras',
    transferFee: '10 000 000 €',
    playerImageUrl: 'https://placehold.co/60x60/00e676/ffffff?text=Player',
    clubLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sociedade_Esportiva_Palmeiras_logo.svg/1200px-Sociedade_Esportiva_Palmeiras_logo.svg.png',
  },
  {
    id: 'transfer-2',
    status: 'NEGÓCIO FECHADO',
    date: '30/05/2025',
    playerName: 'Ángel Di Maria',
    playerRole: 'Meia-campista',
    fromClub: 'Benfica',
    toClub: 'Palmeiras',
    transferFee: '10 000 000 €',
    playerImageUrl: 'https://placehold.co/60x60/00e676/ffffff?text=Player',
    clubLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sociedade_Esportiva_Palmeiras_logo.svg/1200px-Sociedade_Esportiva_Palmeiras_logo.svg.png',
  },
  {
    id: 'transfer-3',
    status: 'NEGÓCIO FECHADO',
    date: '30/05/2025',
    playerName: 'Ángel Di Maria',
    playerRole: 'Meia-campista',
    fromClub: 'Benfica',
    toClub: 'Palmeiras',
    transferFee: '10 000 000 €',
    playerImageUrl: 'https://placehold.co/60x60/00e676/ffffff?text=Player',
    clubLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sociedade_Esportiva_Palmeiras_logo.svg/1200px-Sociedade_Esportiva_Palmeiras_logo.svg.png',
  },
];

const dummyNextMatch: Match = {
  id: 'match-1',
  homeTeamName: 'Palmeiras',
  homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sociedade_Esportiva_Palmeiras_logo.svg/1200px-Sociedade_Esportiva_Palmeiras_logo.svg.png',
  awayTeamName: 'Flamengo',
  awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_logo.svg/1200px-Flamengo_logo.svg.png',
  leagueLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Brasileir%C3%A3o_Serie_A_logo.svg/1200px-Brasileir%C3%A3o_Serie_A_logo.svg.png',
  leagueName: 'Brasileirão Série A',
  date: '26 de junho',
  time: '20:00',
};

const dummyLatestGames: GameResult[] = [
  {
    id: 'game-1',
    date: '1-06',
    time: '23:30',
    homeTeamName: 'Cruzeiro',
    homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Cruzeiro_Esporte_Clube_logo.svg/1200px-Cruzeiro_Esporte_Clube_logo.svg.png',
    homeScore: 2,
    awayTeamName: 'Palmeiras',
    awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sociedade_Esportiva_Palmeiras_logo.svg/1200px-Sociedade_Esportiva_Palmeiras_logo.svg.png',
    awayScore: 1,
    result: 'D',
  },
  {
    id: 'game-2',
    date: '29-05',
    time: '23:30',
    homeTeamName: 'Palmeiras',
    homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sociedade_Esportiva_Palmeiras_logo.svg/1200px-Sociedade_Esportiva_Palmeiras_logo.svg.png',
    homeScore: 6,
    awayTeamName: 'Sporting Cristal',
    awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Sporting_Cristal_logo.svg/1200px-Sporting_Cristal_logo.svg.png',
    awayScore: 0,
    result: 'V',
  },
  {
    id: 'game-3',
    date: '29-05',
    time: '23:30',
    homeTeamName: 'Palmeiras',
    homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sociedade_Esportiva_Palmeiras_logo.svg/1200px-Sociedade_Esportiva_Palmeiras_logo.svg.png',
    homeScore: 6,
    awayTeamName: 'Sporting Cristal',
    awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Sporting_Cristal_logo.svg/1200px-Sporting_Cristal_logo.svg.png',
    awayScore: 0,
    result: 'V',
  },
  {
    id: 'game-4',
    date: '29-05',
    time: '23:30',
    homeTeamName: 'Palmeiras',
    homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sociedade_Esportiva_Palmeiras_logo.svg/1200px-Sociedade_Esportiva_Palmeiras_logo.svg.png',
    homeScore: 6,
    awayTeamName: 'Sporting Cristal',
    awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Sporting_Cristal_logo.svg/1200px-Sporting_Cristal_logo.svg.png',
    awayScore: 0,
    result: 'V',
  },
  {
    id: 'game-5',
    date: '29-05',
    time: '23:30',
    homeTeamName: 'Palmeiras',
    homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sociedade_Esportiva_Palmeiras_logo.svg/1200px-Sociedade_Esportiva_Palmeiras_logo.svg.png',
    homeScore: 6,
    awayTeamName: 'Sporting Cristal',
    awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Sporting_Cristal_logo.svg/1200px-Sporting_Cristal_logo.svg.png',
    awayScore: 0,
    result: 'V',
  },
];

const dummyTeamInfo: TeamInfo = {
  id: 'team-info-palmeiras',
  trainer: 'ABEL FERREIRA',
  president: 'LEILA PEREIRA',
  foundationYear: 1914,
  stadium: 'ALLIANZ PARQUE',
};

const dummyPlayers: Player[] = [
  {
    id: 'player-1',
    name: 'Luis Benedetti',
    role: 'Defesas',
    imageUrl: 'https://placehold.co/60x60/00e676/ffffff?text=LB',
    clubLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sociedade_Esportiva_Palmeiras_logo.svg/1200px-Sociedade_Esportiva_Palmeiras_logo.svg.png',
    number: 43,
  },
  {
    id: 'player-2',
    name: 'Luis Benedetti',
    role: 'Defesas',
    imageUrl: 'https://placehold.co/60x60/00e676/ffffff?text=LB',
    clubLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sociedade_Esportiva_Palmeiras_logo.svg/1200px-Sociedade_Esportiva_Palmeiras_logo.svg.png',
    number: 43,
  },
  {
    id: 'player-3',
    name: 'Luis Benedetti',
    role: 'Defesas',
    imageUrl: 'https://placehold.co/60x60/00e676/ffffff?text=LB',
    clubLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sociedade_Esportiva_Palmeiras_logo.svg/1200px-Sociedade_Esportiva_Palmeiras_logo.svg.png',
    number: 43,
  },
  {
    id: 'player-4',
    name: 'Luis Benedetti',
    role: 'Médios',
    imageUrl: 'https://placehold.co/60x60/00e676/ffffff?text=LB',
    clubLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sociedade_Esportiva_Palmeiras_logo.svg/1200px-Sociedade_Esportiva_Palmeiras_logo.svg.png',
    number: 43,
  },
  {
    id: 'player-5',
    name: 'Luis Benedetti',
    role: 'Médios',
    imageUrl: 'https://placehold.co/60x60/00e676/ffffff?text=LB',
    clubLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sociedade_Esportiva_Palmeiras_logo.svg/1200px-Sociedade_Esportiva_Palmeiras_logo.svg.png',
    number: 43,
  },
  {
    id: 'player-6',
    name: 'Luis Benedetti',
    role: 'Avançados',
    imageUrl: 'https://placehold.co/60x60/00e676/ffffff?text=LB',
    clubLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sociedade_Esportiva_Palmeiras_logo.svg/1200px-Sociedade_Esportiva_Palmeiras_logo.svg.png',
    number: 43,
  },
  {
    id: 'player-7',
    name: 'Luis Benedetti',
    role: 'Guarda-Redes',
    imageUrl: 'https://placehold.co/60x60/00e676/ffffff?text=LB',
    clubLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sociedade_Esportiva_Palmeiras_logo.svg/1200px-Sociedade_Esportiva_Palmeiras_logo.svg.png',
    number: 43,
  },
  {
    id: 'player-8',
    name: 'Luis Benedetti',
    role: 'Avançados',
    imageUrl: 'https://placehold.co/60x60/00e676/ffffff?text=LB',
    clubLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sociedade_Esportiva_Palmeiras_logo.svg/1200px-Sociedade_Esportiva_Palmeiras_logo.svg.png',
    number: 43,
  },
  {
    id: 'player-9',
    name: 'Luis Benedetti',
    role: 'Guarda-Redes',
    imageUrl: 'https://placehold.co/60x60/00e676/ffffff?text=LB',
    clubLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sociedade_Esportiva_Palmeiras_logo.svg/1200px-Sociedade_Esportiva_Palmeiras_logo.svg.png',
    number: 43,
  },
  {
    id: 'player-10',
    name: 'Luis Benedetti',
    role: 'Defesas',
    imageUrl: 'https://placehold.co/60x60/00e676/ffffff?text=LB',
    clubLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sociedade_Esportiva_Palmeiras_logo.svg/1200px-Sociedade_Esportiva_Palmeiras_logo.svg.png',
    number: 43,
  },
];

const dummyCoaches: Coach[] = [
  {
    id: 'coach-1',
    name: 'Abel Ferreira',
    role: 'Treinadores',
    imageUrl: 'https://placehold.co/60x60/00e676/ffffff?text=AF',
  },
  {
    id: 'coach-2',
    name: 'João Martins',
    role: 'Treinadores',
    imageUrl: 'https://placehold.co/60x60/00e676/ffffff?text=JM',
  },
];

// NOVOS DADOS FICTÍCIOS: Troféus
const dummyTrophies: Trophy[] = [
  { id: 't1', name: 'Copa Libertadores', count: 3, imageUrl: 'https://placehold.co/80x80/2a2a2a/ffffff?text=Libertadores' },
  { id: 't9', name: 'Copa Mercosul', count: 1, imageUrl: 'https://placehold.co/80x80/2a2a2a/ffffff?text=Mercosul' },
  { id: 't2', name: 'Campeonato Brasileiro', count: 12, imageUrl: 'https://placehold.co/80x80/2a2a2a/ffffff?text=Brasileiro' },
  { id: 't6', name: 'Recopa Sul-Americana', count: 9, imageUrl: 'https://placehold.co/80x80/2a2a2a/ffffff?text=Recopa' },
  { id: 't3', name: 'Copa do Brasil', count: 4, imageUrl: 'https://placehold.co/80x80/2a2a2a/ffffff?text=CopaBR' },
  { id: 't7', name: 'Supercopa do Brasil', count: 1, imageUrl: 'https://placehold.co/80x80/2a2a2a/ffffff?text=Supercopa' },
  { id: 't4', name: 'Copa dos Campeões', count: 1, imageUrl: 'https://placehold.co/80x80/2a2a2a/ffffff?text=Campeoes' },
  { id: 't8', name: 'Torneio Rio-São Paulo', count: 5, imageUrl: 'https://placehold.co/80x80/2a2a2a/ffffff?text=RioSP' },
  { id: 't5', name: 'Campeonato Paulista', count: 1, imageUrl: 'https://placehold.co/80x80/2a2a2a/ffffff?text=Paulista' },
];


const MeuTimePage: React.FC = () => {
  // Inicializa o hook de navegação do react-router-dom
  const navigate = useNavigate();

  // State para controlar a aba principal ativa
  const [activeTab, setActiveTab] = useState('GERAL');
  // State para controlar a sub-aba ativa dentro de "PLANTEL"
  const [activeSubTabPlatel, setActiveSubTabPlatel] = useState<'Guarda-Redes' | 'Defesas' | 'Médios' | 'Avançados' | 'Treinadores'>('Defesas');

  // Usando dados fictícios diretamente
  const transfers = dummyTransfers;
  const nextMatch = dummyNextMatch;
  const latestGames = dummyLatestGames;
  const teamInfo = dummyTeamInfo;
  const trophies = dummyTrophies;

  // Filtra jogadores e treinadores com base na sub-aba ativa
  const filteredPlayers = dummyPlayers.filter(player => player.role === activeSubTabPlatel);
  const filteredCoaches = dummyCoaches.filter(coach => coach.role === activeSubTabPlatel);

  // Função para lidar com o clique na seta de voltar
  const handleGoBack = () => {
    navigate(-1); // Volta para a entrada anterior no histórico
  };

  // Funções para redirecionar para outras páginas
  const goToLoja = () => {
    navigate('/loja'); // Redireciona para a rota /loja
  };

  const goToQuizes = () => {
    navigate('/quizes'); // Redireciona para a rota /quizes
  };


  return (
    <div className={styles.container}>
      {/* Seção do Cabeçalho */}
      <header className={styles.header}>
        {/* Adiciona onClick para a seta de voltar */}
        <div className={styles.arrowBack} onClick={handleGoBack}>&larr;</div> {/* Seta para voltar */}
        <div className={styles.palmeirasLogoContainer}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sociedade_Esportiva_Palmeiras_logo.svg/1200px-Sociedade_Esportiva_Palmeiras_logo.svg.png"
            alt="Palmeiras Logo"
            className={styles.palmeirasLogo}
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/100x100/004d40/ffffff?text=Logo'; }}
          />
          <h1 className={styles.palmeirasTitle}>SE PALMEIRAS</h1>
        </div>
        <nav className={styles.mainNav}>
          {/* Adiciona onClick para os botões de navegação */}
          <button className={styles.navButton} onClick={goToLoja}>LOJA</button>
          <button className={styles.navButton} onClick={goToQuizes}>QUIZES</button>
        </nav>
      </header>

      {/* Navegação do Sub-Menu Principal */}
      <nav className={styles.subMenu}>
        <button
          className={`${styles.subMenuItem} ${activeTab === 'GERAL' ? styles.activeSubMenuItem : ''}`}
          onClick={() => setActiveTab('GERAL')}
        >
          GERAL
        </button>
        <button
          className={`${styles.subMenuItem} ${activeTab === 'PLANTEL' ? styles.activeSubMenuItem : ''}`}
          onClick={() => setActiveTab('PLANTEL')}
        >
          PLANTEL
        </button>
        <button
          className={`${styles.subMenuItem} ${activeTab === 'PALMARÉS' ? styles.activeSubMenuItem : ''}`}
          onClick={() => setActiveTab('PALMARÉS')}
        >
          PALMARÉS
        </button>
        <button
          className={`${styles.subMenuItem} ${activeTab === 'CLASSIFICAÇÕES' ? styles.activeSubMenuItem : ''}`}
          onClick={() => setActiveTab('CLASSIFICAÇÕES')}
        >
          CLASSIFICAÇÕES
        </button>
        <button
          className={`${styles.subMenuItem} ${activeTab === 'TRANSFERÊNCIAS' ? styles.activeSubMenuItem : ''}`}
          onClick={() => setActiveTab('TRANSFERÊNCIAS')}
        >
          TRANSFERÊNCIAS
        </button>
      </nav>

      {/* Conteúdo baseado na aba principal ativa */}
      {activeTab === 'GERAL' && (
        <section className={styles.generalSection}>
          {/* Seção Próxima Partida */}
          <h2 className={styles.sectionTitle}>Próximo partida:</h2>
          {nextMatch ? (
            <div className={styles.nextMatchCard}>
              <div className={styles.clubLogos}>
                <img
                  src={nextMatch.homeTeamLogo}
                  alt={nextMatch.homeTeamName}
                  className={styles.clubLogoMatch}
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/80x80/004d40/ffffff?text=Home'; }}
                />
                <img
                  src={nextMatch.leagueLogo}
                  alt={nextMatch.leagueName}
                  className={styles.leagueLogo}
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/60x60/004d40/ffffff?text=League'; }}
                />
                <img
                  src={nextMatch.awayTeamLogo}
                  alt={nextMatch.awayTeamName}
                  className={styles.clubLogoMatch}
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/80x80/004d40/ffffff?text=Away'; }}
                />
              </div>
              <div className={styles.matchDetails}>
                <p className={styles.matchDate}>{nextMatch.date} {nextMatch.time}</p>
              </div>
            </div>
          ) : (
            <p className={styles.noDataMessage}>Nenhuma próxima partida encontrada.</p>
          )}

          {/* Seção Últimos Jogos */}
          <h2 className={styles.sectionTitle}>Últimos jogos</h2>
          <div className={styles.latestGamesSection}>
            {latestGames.length > 0 ? (
              latestGames.map((game) => (
                <div key={game.id} className={styles.gameResultCard}>
                  <div className={styles.gameDate}>
                    <span>{game.date}</span>
                    <span>{game.time}</span>
                  </div>
                  <div className={styles.gameTeams}>
                    <img
                      src={game.homeTeamLogo}
                      alt={game.homeTeamName}
                      className={styles.teamLogoSmall}
                      onError={(e) => { e.currentTarget.src = 'https://placehold.co/30x30/004d40/ffffff?text=H'; }}
                    />
                    <span>{game.homeTeamName}</span>
                    <span className={styles.gameScore}>{game.homeScore}</span>
                  </div>
                  <div className={styles.gameTeams}>
                    <img
                      src={game.awayTeamLogo}
                      alt={game.awayTeamName}
                      className={styles.teamLogoSmall}
                      onError={(e) => { e.currentTarget.src = 'https://placehold.co/30x30/004d40/ffffff?text=A'; }}
                    />
                    <span>{game.awayTeamName}</span>
                    <span className={styles.gameScore}>{game.awayScore}</span>
                  </div>
                  <div className={`${styles.resultIndicator} ${styles[game.result]}`}>
                    {game.result}
                  </div>
                </div>
              ))
            ) : (
              <p className={styles.noDataMessage}>Nenhum jogo recente encontrado.</p>
            )}
          </div>

          {/* Seção Informação do Time */}
          <h2 className={styles.sectionTitle}>Informação do Time</h2>
          {teamInfo ? (
            <div className={styles.infoCard}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Treinador</span>
                <span className={styles.infoValue}>{teamInfo.trainer}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Presidente</span>
                <span className={styles.infoValue}>{teamInfo.president}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Ano de fundação</span>
                <span className={styles.infoValue}>{teamInfo.foundationYear}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Estádio</span>
                <span className={styles.infoValue}>{teamInfo.stadium}</span>
              </div>
            </div>
          ) : (
            <p className={styles.noDataMessage}>Informações do time não disponíveis.</p>
          )}
        </section>
      )}

      {activeTab === 'PLANTEL' && (
        <section className={styles.plantelSection}>
          {/* Sub-menu para Plantel */}
          <nav className={styles.plantelSubMenu}>
            <button
              className={`${styles.plantelSubMenuItem} ${activeSubTabPlatel === 'Guarda-Redes' ? styles.activePlantelSubMenuItem : ''}`}
              onClick={() => setActiveSubTabPlatel('Guarda-Redes')}
            >
              GUARDA-REDES
            </button>
            <button
              className={`${styles.plantelSubMenuItem} ${activeSubTabPlatel === 'Defesas' ? styles.activePlantelSubMenuItem : ''}`}
              onClick={() => setActiveSubTabPlatel('Defesas')}
            >
              DEFESAS
            </button>
            <button
              className={`${styles.plantelSubMenuItem} ${activeSubTabPlatel === 'Médios' ? styles.activePlantelSubMenuItem : ''}`}
              onClick={() => setActiveSubTabPlatel('Médios')}
            >
              MÉDIOS
            </button>
            <button
              className={`${styles.plantelSubMenuItem} ${activeSubTabPlatel === 'Avançados' ? styles.activePlantelSubMenuItem : ''}`}
              onClick={() => setActiveSubTabPlatel('Avançados')}
            >
              AVANÇADOS
            </button>
            <button
              className={`${styles.plantelSubMenuItem} ${activeSubTabPlatel === 'Treinadores' ? styles.activePlantelSubMenuItem : ''}`}
              onClick={() => setActiveSubTabPlatel('Treinadores')}
            >
              TREINADORES
            </button>
          </nav>

          {/* Grid de Jogadores/Treinadores baseado na sub-aba ativa */}
          <div className={styles.playerGrid}>
            {activeSubTabPlatel !== 'Treinadores' ? (
              filteredPlayers.length > 0 ? (
                filteredPlayers.map((player) => (
                  <div key={player.id} className={styles.playerCard}>
                    <img
                      src={player.imageUrl}
                      alt={player.name}
                      className={styles.playerImageSmall}
                      onError={(e) => { e.currentTarget.src = 'https://placehold.co/60x60/00e676/ffffff?text=P'; }}
                    />
                    <span className={styles.playerNameSmall}>{player.name}</span>
                    <img
                      src={player.clubLogoUrl}
                      alt="Palmeiras Logo"
                      className={styles.playerClubLogo}
                      onError={(e) => { e.currentTarget.src = 'https://placehold.co/40x40/004d40/ffffff?text=C'; }}
                    />
                    <span className={styles.playerNumber}>{player.number}</span>
                  </div>
                ))
              ) : (
                <p className={styles.noDataMessage}>Nenhum jogador encontrado para esta posição.</p>
              )
            ) : (
              filteredCoaches.length > 0 ? (
                filteredCoaches.map((coach) => (
                  <div key={coach.id} className={styles.playerCard}> {/* Reutilizando estilo playerCard para treinadores */}
                    <img
                      src={coach.imageUrl}
                      alt={coach.name}
                      className={styles.playerImageSmall}
                      onError={(e) => { e.currentTarget.src = 'https://placehold.co/60x60/00e676/ffffff?text=C'; }}
                    />
                    <span className={styles.playerNameSmall}>{coach.name}</span>
                    {/* Não há logo do clube ou número para treinadores na imagem */}
                  </div>
                ))
              ) : (
                <p className={styles.noDataMessage}>Nenhum treinador encontrado.</p>
              )
            )}
          </div>
        </section>
      )}

      {/* Seção: Palmarés */}
      {activeTab === 'PALMARÉS' && (
        <section className={styles.palmaresSection}>
          <h2 className={styles.sectionTitle}>Títulos Conquistados</h2>
          <div className={styles.trophyGrid}>
            {trophies.length > 0 ? (
              trophies.map((trophy) => (
                <div key={trophy.id} className={styles.trophyCard}>
                  <img
                    src={trophy.imageUrl}
                    alt={trophy.name}
                    className={styles.trophyImage}
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/80x80/2a2a2a/ffffff?text=🏆'; }}
                  />
                  <div className={styles.trophyDetails}>
                    <p className={styles.trophyName}>{trophy.name}</p>
                    <span className={styles.trophyCount}>{trophy.count}</span>
                  </div>
                </div>
              ))
            ) : (
              <p className={styles.noDataMessage}>Nenhum troféu encontrado.</p>
            )}
          </div>
        </section>
      )}

      {activeTab === 'CLASSIFICAÇÕES' && (
        <section className={styles.generalSection}>
          <p className={styles.noDataMessage}>Conteúdo de Classificações em construção.</p>
        </section>
      )}

      {activeTab === 'TRANSFERÊNCIAS' && (
        <section className={styles.transfersSection}>
          <h2 className={styles.sectionTitle}>Últimas transferências</h2>
          <div className={styles.transfersGrid}>
            {transfers.length > 0 ? (
              transfers.map((transfer) => (
                <div key={transfer.id} className={styles.transferCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.transferStatus}>{transfer.status}</span>
                    <span className={styles.transferDate}>{transfer.date}</span>
                  </div>
                  <div className={styles.playerInfo}>
                    <img
                      src={transfer.playerImageUrl}
                      alt={transfer.playerName}
                      className={styles.playerImage}
                      onError={(e) => { e.currentTarget.src = 'https://placehold.co/60x60/00e676/ffffff?text=Player'; }}
                    />
                    <div className={styles.playerDetails}>
                      <p className={styles.playerName}>{transfer.playerName}</p>
                      <p className={styles.playerRole}>{transfer.playerRole}</p>
                    </div>
                    <img
                      src={transfer.clubLogoUrl}
                      alt="Palmeiras Club Logo"
                      className={styles.clubLogoSmall}
                      onError={(e) => { e.currentTarget.src = 'https://placehold.co/35x35/004d40/ffffff?text=Club'; }}
                    />
                  </div>
                  <div className={styles.transferDetails}>
                    <p className={styles.clubTransferText}>
                      {transfer.fromClub} <span className={styles.arrow}>&rarr;</span> {transfer.toClub}
                    </p>
                    <p className={styles.transferFee}>{transfer.transferFee}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className={styles.noDataMessage}>Nenhuma transferência encontrada.</p>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default MeuTimePage;
