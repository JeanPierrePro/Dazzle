// components/GameCard/GameCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assumindo React Router DOM
import styles from '../../styles/JogosPage.module.css'; // Ajuste o caminho se seu css estiver em outro lugar

// ESTA É A INTERFACE CRÍTICA PARA O ERRO
// Ela precisa estar definida aqui, no arquivo do componente GameCard,
// e precisa corresponder EXATAMENTE às props que você passa do JogosPage.
interface GameCardProps {
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  championship: string;
  homeTeamLogo: string; // URL do logo do time da casa (do Firebase, por exemplo)
  awayTeamLogo: string; // URL do logo do time visitante (do Firebase, por exemplo)
  gameId: number; // ID do jogo, passado para a página de detalhes
  gameImage: string; // URL da imagem principal do jogo (para o background do vídeo)
}

const GameCard: React.FC<GameCardProps> = ({
  homeTeam,
  awayTeam,
  date,
  time,
  championship,
  homeTeamLogo,
  awayTeamLogo,
  gameId,
  gameImage,
}) => {
  const navigate = useNavigate();

  const handleWatchClick = () => {
    // Navega para a GameDetailsPage, passando todos os dados do jogo via state
    navigate('/game-details', {
      state: {
        id: gameId,
        homeTeam,
        awayTeam,
        championship,
        image: gameImage, // Passa a imagem para o background principal
      }
    });
  };

  return (
    <div className={styles.gameCard}>
      <div className={styles.gameCardHeader}>
        <p className={styles.gameCardDate}>{date} {time}</p>
        <span className={styles.experienceTag}>EXPERIÊNCIA</span>
      </div>
      <div className={styles.gameCardTeams}>
        <div className={styles.gameCardTeam}>
          <img src={homeTeamLogo} alt={homeTeam} className={styles.gameCardTeamLogo} />
          <span className={styles.gameCardTeamName}>{homeTeam}</span>
        </div>
        <span className={styles.gameCardVs}>x</span>
        <div className={styles.gameCardTeam}>
          <img src={awayTeamLogo} alt={awayTeam} className={styles.gameCardTeamLogo} />
          <span className={styles.gameCardTeamName}>{awayTeam}</span>
        </div>
      </div>
      <p className={styles.gameCardChampionship}>{championship}</p>
      <p className={styles.gameCardDescription}>
        Os maiores clássicos, jogadas geniais e gols históricos. Viva a paixão do futebol aqui!
      </p>
      <button className={styles.gameCardButton} onClick={handleWatchClick}>Assistir</button>
    </div>
  );
};

export default GameCard;