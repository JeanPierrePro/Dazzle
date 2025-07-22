// pages/JogosPage.tsx
import React, { useState, useEffect } from 'react';
import styles from '../styles/JogosPage.module.css';
import GameCard from '../components/GameCard/GameCard';

// Dados de navegação (sem alterações)
const mainSports = ['FUTEBOL', 'BASQUETE', 'HOQUEI NO GELOU', 'TENIS', 'MOTORES', 'FUT.AM', 'ARTES MARCIAIS'];
const secondaryCountries = ['BRASIL', 'INTERNACIONAIS', 'PORTUGAL', 'INGLATERRA', 'ESPANHA', 'ITÁLIA'];

// Exemplo de Dados de Jogo (sem alterações)
const allGames = [
  { id: 1, sport: 'FUTEBOL', country: 'BRASIL', homeTeam: 'Palmeiras', awayTeam: 'Flamengo', date: '19 JUN', time: '23:00', championship: 'Campeonato Brasileiro', homeTeamLogo: '/images/palmeiras_logo.png', awayTeamLogo: '/images/flamengo_logo.png', gameImage: '/images/stadium.jpeg' },
  { id: 2, sport: 'FUTEBOL', country: 'BRASIL', homeTeam: 'Corinthians', awayTeam: 'São Paulo', date: '20 JUN', time: '20:00', championship: 'Copa do Brasil', homeTeamLogo: '/images/corinthians_logo.png', awayTeamLogo: '/images/saopaulo_logo.png', gameImage: '/images/arena.jpeg' },
  { id: 3, sport: 'FUTEBOL', country: 'BRASIL', homeTeam: 'Grêmio', awayTeam: 'Internacional', date: '21 JUN', time: '18:00', championship: 'Gauchão', homeTeamLogo: '/images/gremio_logo.png', awayTeamLogo: '/images/internacional_logo.png', gameImage: '/images/classic_stadium.jpeg' },
];

const JogosPage: React.FC = () => {
  const [activeSport, setActiveSport] = useState<string>('FUTEBOL');
  const [activeCountry, setActiveCountry] = useState<string>('BRASIL');
  
  // NOVO: Estado para controlar a data atual
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const [filteredGames, setFilteredGames] = useState<typeof allGames>([]);

  useEffect(() => {
    // A lógica de filtro agora pode incluir a data, se os dados tivessem uma data completa.
    // Por enquanto, o filtro continua o mesmo.
    const games = allGames.filter(
      (game) => game.sport === activeSport && game.country === activeCountry
    );
    setFilteredGames(games);
  }, [activeSport, activeCountry, currentDate]); // Adicionado currentDate às dependências

  const handleSportClick = (sport: string) => {
    setActiveSport(sport);
    setActiveCountry('BRASIL');
  };

  const handleCountryClick = (country: string) => {
    setActiveCountry(country);
  };

  // NOVO: Funções para navegar entre os dias
  const handlePreviousDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  // NOVO: Função para formatar a data para exibição
  const formatDate = (date: Date): { dayLabel: string; dateLabel: string } => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    let dayLabel = '';
    if (date.toDateString() === today.toDateString()) {
      dayLabel = 'HOJE';
    } else if (date.toDateString() === yesterday.toDateString()) {
      dayLabel = 'ONTEM';
    }

    const dateLabel = date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short'
    }).toUpperCase().replace('.', '');

    return { dayLabel, dateLabel };
  };

  const { dayLabel, dateLabel } = formatDate(currentDate);

  return (
    <div className={styles.jogosContainer}>
      <header className={styles.jogosHeader}>
        <nav className={styles.mainNav}>
          <ul>
            {mainSports.map((sport) => (
              <li key={sport} className={activeSport === sport ? styles.mainNavLiActive : ''} onClick={() => handleSportClick(sport)}>
                {sport} 
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className={styles.secondaryNav}>
        <ul>
          {secondaryCountries.map((country) => (
            <li key={country} className={activeCountry === country ? styles.secondaryNavLiActive : ''} onClick={() => handleCountryClick(country)}>
              {country}
            </li>
          ))}
        </ul>
      </div>

      {/* ATUALIZADO: Navegação de data agora é dinâmica */}
      <div className={styles.dateNavigation}>
        <span className={styles.dateNavigationArrow} onClick={handlePreviousDay}>‹</span>
        <span className={styles.dateNavigationDateDisplay}>
          {dayLabel && <>{dayLabel} <br /></>}
          DIA {dateLabel}
        </span>
        <span className={styles.dateNavigationArrow} onClick={handleNextDay}>›</span>
      </div>

      {filteredGames.length > 0 ? (
        <div className={styles.gameCardsGrid}>
          {filteredGames.map((game) => (
            <GameCard key={game.id} gameId={game.id} {...game} />
          ))}
        </div>
      ) : (
        <div className={styles.noGamesMessage}>
          <div className={styles.noGamesMessageInfoIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </div>
          <p>Não foram encontrados jogos</p>
        </div>
      )}
    </div>
  );
};

export default JogosPage;