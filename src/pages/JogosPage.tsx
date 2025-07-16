// pages/JogosPage.tsx
import React, { useState, useEffect } from 'react';
import styles from '../styles/JogosPage.module.css';
import GameCard from '../components/GameCard/GameCard';

// Dados para os esportes de navegação principal
const mainSports = [
  'FUTEBOL',
  'BASQUETE',
  'HOQUEI NO GELOU',
  'TENIS',
  'MOTORES',
  'FUT.AM',
  'ARTES MARCIAIS',
];

// Dados para os países/regiões de navegação secundária
const secondaryCountries = [
  'BRASIL',
  'INTERNACIONAIS',
  'PORTUGAL',
  'INGLATERRA',
  'ESPANHA',
  'ITÁLIA',
];

// --- Exemplo de Dados de Jogo ---
// ATENÇÃO: As URLs das imagens aqui são placeholders.
// No seu aplicativo real, elas seriam URLs completas do Firebase Storage
// Ex: "https://firebasestorage.googleapis.com/v0/b/seu-projeto.appspot.com/o/images%2Fpalmeiras_logo.png?alt=media..."
const allGames = [
  {
    id: 1,
    sport: 'FUTEBOL',
    country: 'BRASIL',
    homeTeam: 'Palmeiras',
    awayTeam: 'Flamengo',
    date: '19 JUN',
    time: '23:00',
    championship: 'Campeonato Brasileiro',
    // ESTAS SÃO AS IMAGENS QUE VIRIAM DO FIREBASE!
    homeTeamLogo: '/images/palmeiras_logo.png', // <--- Substitua por URL do Firebase
    awayTeamLogo: '/images/flamengo_logo.png',   // <--- Substitua por URL do Firebase
    gameImage: '/images/stadium.jpeg',         // <--- Substitua por URL do Firebase
  },
  {
    id: 2,
    sport: 'FUTEBOL',
    country: 'BRASIL',
    homeTeam: 'Corinthians',
    awayTeam: 'São Paulo',
    date: '20 JUN',
    time: '20:00',
    championship: 'Copa do Brasil',
    homeTeamLogo: '/images/corinthians_logo.png', // <--- Substitua por URL do Firebase
    awayTeamLogo: '/images/saopaulo_logo.png',    // <--- Substitua por URL do Firebase
    gameImage: '/images/arena.jpeg',             // <--- Substitua por URL do Firebase
  },
  {
    id: 3,
    sport: 'FUTEBOL',
    country: 'BRASIL',
    homeTeam: 'Grêmio',
    awayTeam: 'Internacional',
    date: '21 JUN',
    time: '18:00',
    championship: 'Gauchão',
    homeTeamLogo: '/images/gremio_logo.png',      // <--- Substitua por URL do Firebase
    awayTeamLogo: '/images/internacional_logo.png',// <--- Substitua por URL do Firebase
    gameImage: '/images/classic_stadium.jpeg',   // <--- Substitua por URL do Firebase
  },
  // Adicione mais jogos aqui, com suas respectivas URLs de imagem do Firebase
];

const JogosPage: React.FC = () => {
  const [activeSport, setActiveSport] = useState<string>('FUTEBOL');
  const [activeCountry, setActiveCountry] = useState<string>('BRASIL');
  const [filteredGames, setFilteredGames] = useState<typeof allGames>([]);

  useEffect(() => {
    // Nesta seção, você faria a integração real com o Firebase.
    // Exemplo: fetchGamesFromFirebase(activeSport, activeCountry).then(data => setFilteredGames(data));
    // Por enquanto, usamos os dados mockados
    const games = allGames.filter(
      (game) => game.sport === activeSport && game.country === activeCountry
    );
    setFilteredGames(games);
  }, [activeSport, activeCountry]);

  const handleSportClick = (sport: string) => {
    setActiveSport(sport);
    setActiveCountry('BRASIL'); // Resetar país ao mudar de esporte
  };

  const handleCountryClick = (country: string) => {
    setActiveCountry(country);
  };

  return (
    <div className={styles.jogosContainer}>
      <header className={styles.jogosHeader}>
        <nav className={styles.mainNav}>
          <ul>
            {mainSports.map((sport) => (
              <li
                key={sport}
                className={activeSport === sport ? styles.mainNavLiActive : ''}
                onClick={() => handleSportClick(sport)}
              >
                {sport}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className={styles.secondaryNav}>
        <ul>
          {secondaryCountries.map((country) => (
            <li
              key={country}
              className={activeCountry === country ? styles.secondaryNavLiActive : ''}
              onClick={() => handleCountryClick(country)}
            >
              {country}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.dateNavigation}>
        <span className={styles.dateNavigationArrow}>‹</span>
        <span className={styles.dateNavigationDateDisplay}>
          HOJE <br /> DIA 26-JUN
        </span>
        <span className={styles.dateNavigationArrow}>›</span>
      </div>

      {filteredGames.length > 0 ? (
        <div className={styles.gameCardsGrid}>
          {filteredGames.map((game) => (
            <GameCard
              key={game.id}
              gameId={game.id}
              homeTeam={game.homeTeam}
              awayTeam={game.awayTeam}
              date={game.date}
              time={game.time}
              championship={game.championship}
              homeTeamLogo={game.homeTeamLogo} // Será a URL do Firebase
              awayTeamLogo={game.awayTeamLogo} // Será a URL do Firebase
              gameImage={game.gameImage}     // Será a URL do Firebase
            />
          ))}
        </div>
      ) : (
        <div className={styles.noGamesMessage}>
          <div className={styles.noGamesMessageInfoIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.noGamesMessageInfoIcon}
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </div>
          <p>Não foram encontrados jogos</p>
          <p>
            Esporte selecionado: <strong>{activeSport}</strong>
          </p>
          <p>
            País/Região selecionada: <strong>{activeCountry}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default JogosPage;