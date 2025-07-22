// pages/GameDetailsPage.tsx
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../styles/GameDetailsPage.module.css';

// --- INTERFACES ---
interface GameDetails {
  id: number;
  homeTeam: string;
  awayTeam: string;
  championship: string;
  image: string;
  homeTeamLogo?: string;
  awayTeamLogo?: string;
}
interface ChatMessage {
    id: number;
    user: { name: string; initial: string; avatarColor: string; };
    text: string;
}
interface Player {
    id: number;
    name: string;
    team: 'Palmeiras' | 'Flamengo';
    imageUrl: string;
}
interface TeamLineup {
    players: { id: number; name: string }[];
    coach: { name: string };
}

// --- DADOS MOCKADOS ---
const initialMessages: ChatMessage[] = [
    { id: 1, user: { name: 'Thiago', initial: 'T', avatarColor: '#3498db' }, text: 'Quem vocês acham que leva essa?' },
    { id: 2, user: { name: 'Natália', initial: 'N', avatarColor: '#2ecc71' }, text: 'Acho que o time da casa tá mais forte hoje.' },
];
const votablePlayers: Player[] = [
    { id: 10, name: 'Rony', team: 'Palmeiras', imageUrl: '/images/player_rony.png' },
    { id: 11, name: 'Dudu', team: 'Palmeiras', imageUrl: '/images/player_dudu.png' },
    { id: 20, name: 'Gabigol', team: 'Flamengo', imageUrl: '/images/player_gabigol.png' },
    { id: 21, name: 'Arrascaeta', team: 'Flamengo', imageUrl: '/images/player_arrascaeta.png' },
];
const lineups: { [key: string]: TeamLineup } = {
    Palmeiras: {
        players: [
            { id: 101, name: 'WEVERTON' }, { id: 102, name: 'M. ROCHA' }, { id: 103, name: 'G. GÓMEZ' },
            { id: 104, name: 'MURILO' }, { id: 105, name: 'PIQUEREZ' }, { id: 106, name: 'ZÉ RAFAEL' },
            { id: 107, name: 'G. MENINO' }, { id: 108, name: 'R. VEIGA' }, { id: 109, name: 'DUDU' },
            { id: 110, name: 'ARTUR' }, { id: 111, name: 'RONY' },
        ],
        coach: { name: 'ABEL FERREIRA' }
    },
    Flamengo: {
        players: [
            { id: 201, name: 'A. ROSSI' }, { id: 202, name: 'WESLEY' }, { id: 203, name: 'F. BRUNO' },
            { id: 204, name: 'L. PEREIRA' }, { id: 205, name: 'A. LUCAS' }, { id: 206, name: 'E. PULGAR' },
            { id: 207, name: 'GERSON' }, { id: 208, name: 'ARRASCAETA' }, { id: 209, name: 'E. RIBEIRO' },
            { id: 210, name: 'GABIGOL' }, { id: 211, name: 'PEDRO' },
        ],
        coach: { name: 'TITE' }
    }
};
const recommendedGames: GameDetails[] = [
  { id: 2, homeTeam: 'Corinthians', awayTeam: 'São Paulo', championship: 'Copa do Brasil', image: '/images/corinthians_sp.png' },
  { id: 3, homeTeam: 'Grêmio', awayTeam: 'Internacional', championship: 'Gauchão', image: '/images/gremio_inter.png' },
];
const oddsData = [
    { id: 1, houseName: 'Betano', logoUrl: '/images/betano_logo.png', oddsValues: { homeWin: '2.30', draw: '3.10', awayWin: '2.95' } },
    { id: 2, houseName: 'Bet365', logoUrl: '/images/bet365_logo.png', oddsValues: { homeWin: '2.25', draw: '3.20', awayWin: '3.00' } },
];

const GameDetailsPage: React.FC = () => {
  // --- HOOKS ---
  const location = useLocation();
  const initialGame = location.state as GameDetails | undefined;
  const [currentGame, setCurrentGame] = useState<GameDetails | null>(initialGame || null);
  const [activeTab, setActiveTab] = useState('ONZE INICIAL');
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const messageListRef = useRef<HTMLDivElement>(null);
  const [selectedPlayerId, setSelectedPlayerId] = useState<number | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<'Palmeiras' | 'Flamengo' | 'Todos'>('Todos');
  const votingOptions = ['MELHOR EM CAMPO', 'GOL MAIS BONITO', 'REVELAÇÃO DA PARTIDA'];
  const [activeVotingOption, setActiveVotingOption] = useState(votingOptions[0]);
  const [isVotingDropdownOpen, setIsVotingDropdownOpen] = useState(false);

  // --- EFFECTS ---
  useEffect(() => {
    if (activeTab === 'CHAT DE BANCADA' && messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages, activeTab]);
  useEffect(() => {
    if (!initialGame) {
      setCurrentGame({ id: 0, homeTeam: 'Jogo Padrão', awayTeam: 'Visitante Padrão', championship: 'Liga Amigável', image: '/images/stadium.jpeg' });
    }
  }, [initialGame]);

  // --- DADOS DERIVADOS ---
  const filteredPlayers = selectedTeam === 'Todos' ? votablePlayers : votablePlayers.filter(p => p.team === selectedTeam);

  // --- HANDLERS ---
  const handleRecommendationClick = (game: GameDetails) => setCurrentGame(game);
  const handleTabClick = (tabName: string) => setActiveTab(tabName);
  const handleSendMessage = () => { if (newMessage.trim() === '') return; const msg = { id: Date.now(), user: { name: 'Você', initial: 'V', avatarColor: '#9b59b6' }, text: newMessage }; setMessages(prev => [...prev, msg]); setNewMessage(''); };
  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => { if (e.key === 'Enter') handleSendMessage(); };
  const handleEmojiClick = (emoji: string) => { setNewMessage(prev => prev + emoji); };
  const handlePlayerVote = (playerId: number) => { setSelectedPlayerId(prev => (prev === playerId ? null : playerId)); };
  const handleTeamSelect = (teamName: 'Palmeiras' | 'Flamengo') => { setSelectedTeam(prev => (prev === teamName ? 'Todos' : teamName)); setSelectedPlayerId(null); };
  const handleVotingOptionSelect = (option: string) => { setActiveVotingOption(option); setIsVotingDropdownOpen(false); };
  
  // --- RENDERIZAÇÃO ---
  if (!currentGame) {
    return <div className={styles.loadingMessage}>Carregando...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.featuredSection}>
          <div className={styles.videoPlaceholder}>
            <div className={styles.stadiumBackground} style={{ backgroundImage: `url(${currentGame.image})` }} />
            <div className={styles.videoOverlay}>
              <span className={styles.warningIcon}>!</span>
              <p className={styles.overlayTextMain}>Conteúdo indisponível</p>
              <p className={styles.overlayTextTime}>O jogo começa dentro de 00:45:59</p>
            </div>
          </div>
          <div className={styles.featuredSectionInfo}>
            <h2>{currentGame.homeTeam} x {currentGame.awayTeam}</h2>
            <p className={styles.subtitle}>{currentGame.championship}</p>
          </div>
        </div>
        <div className={styles.recommendationsSection}>
          <h3>Recomendações</h3>
          <div className={styles.recommendationsList}>
            {recommendedGames.map((game) => (
              <div key={game.id} className={styles.gameRecommendationCard} onClick={() => handleRecommendationClick(game)}>
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
        {['Votação', 'ONZE INICIAL', 'ODDS CASAS DE APOSTAS', 'CHAT DE BANCADA'].map(tab => (
          <button key={tab} className={`${styles.navTabButton} ${activeTab === tab ? styles.navTabActive : ''}`} onClick={() => handleTabClick(tab)}>
            {tab}
          </button>
        ))}
      </div>
      
      {activeTab === 'Votação' && (
        <div className={styles.votingContainer}>
          <div className={styles.votingHeader}>
            <div className={styles.votingDropdown}>
              <button className={styles.votingTitleButton} onClick={() => setIsVotingDropdownOpen(!isVotingDropdownOpen)}>
                <span>{activeVotingOption}</span>
                <svg className={`${styles.dropdownArrow} ${isVotingDropdownOpen ? styles.dropdownArrowOpen : ''}`} width="20" height="20" viewBox="0 0 24 24"><path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              {isVotingDropdownOpen && (
                <div className={styles.dropdownMenuList}>
                  {votingOptions.map(option => (<div key={option} className={styles.dropdownMenuItem} onClick={() => handleVotingOptionSelect(option)}>{option}</div>))}
                </div>
              )}
            </div>
            <div className={styles.teamLogos}>
              <img src="/images/palmeiras_logo.png" alt="Palmeiras" className={`${styles.teamLogo} ${selectedTeam === 'Palmeiras' || selectedTeam === 'Todos' ? styles.activeTeamLogo : ''}`} onClick={() => handleTeamSelect('Palmeiras')} />
              <img src="/images/flamengo_logo.png" alt="Flamengo" className={`${styles.teamLogo} ${selectedTeam === 'Flamengo' || selectedTeam === 'Todos' ? styles.activeTeamLogo : ''}`} onClick={() => handleTeamSelect('Flamengo')} />
            </div>
          </div>
          <div className={styles.playerGrid}>
            {Array.from({ length: 21 }).map((_, index) => {
              const player = filteredPlayers[index];
              return (
                <div key={index} className={styles.playerSlot}>
                  <div className={`${styles.playerCircle} ${player ? styles.votable : ''} ${selectedPlayerId === player?.id ? styles.selectedPlayer : ''}`} onClick={() => player && handlePlayerVote(player.id)}>
                    {player && <img src={player.imageUrl} alt={player.name} className={styles.playerImage} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {activeTab === 'ONZE INICIAL' && (
        <div className={styles.lineupContainer}>
          <div className={styles.lineupHeader}>
            <div className={`${styles.headerTeam} ${styles.palmeiras}`}><img src="/images/palmeiras_logo.png" alt="Palmeiras"/></div>
            <div className={`${styles.headerTeam} ${styles.flamengo}`}><img src="/images/flamengo_logo.png" alt="Flamengo"/></div>
          </div>
          <div className={styles.lineupBody}>
            <div className={styles.teamColumn}>
              <h3 className={styles.teamName}>Palmeiras</h3>
              <ul className={styles.playerList}>
                {lineups.Palmeiras.players.map((p, i) => (<li key={p.id}><span className={styles.playerNumber}>{i + 1}.</span><span className={styles.playerName}>{p.name}</span></li>))}
              </ul>
              <hr className={styles.lineupDivider} />
              <div className={styles.coachSection}>
                <p className={styles.coachLabel}>TREINADOR</p><p className={styles.coachName}>{lineups.Palmeiras.coach.name}</p>
              </div>
            </div>
            <div className={styles.teamColumn}>
              <h3 className={styles.teamName}>Flamengo</h3>
              <ul className={styles.playerList}>
                {lineups.Flamengo.players.map((p, i) => (<li key={p.id}><span className={styles.playerNumber}>{i + 1}.</span><span className={styles.playerName}>{p.name}</span></li>))}
              </ul>
              <hr className={styles.lineupDivider} />
              <div className={styles.coachSection}>
                <p className={styles.coachLabel}>TREINADOR</p><p className={styles.coachName}>{lineups.Flamengo.coach.name}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'CHAT DE BANCADA' && (
        <div className={styles.chatContainer}>
          <div className={styles.messageList} ref={messageListRef}>
            {messages.map(msg => (<div key={msg.id} className={styles.message}><div className={styles.userInfo}><div className={styles.avatar} style={{ backgroundColor: msg.user.avatarColor }}>{msg.user.initial}</div><span className={styles.userName}>{msg.user.name}</span></div><div className={styles.messageContent}><p>{msg.text}</p></div></div>))}
          </div>
          <div className={styles.chatInputArea}>
            <div className={styles.inputWrapper}><input type="text" placeholder="Escreve algo..." className={styles.chatInput} value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyDown={handleInputKeyPress} /><button className={styles.sendButton} onClick={handleSendMessage}><svg width="24" height="24" viewBox="0 0 24 24"><path d="M22 2L11 13" stroke="#888" strokeWidth="2"/><path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="#888" strokeWidth="2"/></svg></button></div>
            <div className={styles.emojiBar}><button className={styles.emojiButton} onClick={() => handleEmojiClick('😀')}>😀</button><button className={styles.emojiButton} onClick={() => handleEmojiClick('😎')}>😎</button><button className={styles.emojiButton} onClick={() => handleEmojiClick('😂')}>😂</button></div>
          </div>
        </div>
      )}
      
      {activeTab === 'ODDS CASAS DE APOSTAS' && (
        <div className={styles.oddsSection}>
          {oddsData.map((card) => (
            <div key={card.id} className={styles.oddsCard}>
              <div className={styles.betanoLogo}><img src={card.logoUrl} alt={card.houseName} /></div>
              <div className={styles.odds}>
                <div className={styles.oddItem}><span className={styles.oddLabel}>1x</span><span className={styles.oddValue}>{card.oddsValues.homeWin}</span></div>
                <div className={styles.oddItem}><span className={styles.oddLabel}>X</span><span className={styles.oddValue}>{card.oddsValues.draw}</span></div>
                <div className={styles.oddItem}><span className={styles.oddLabel}>2x</span><span className={styles.oddValue}>{card.oddsValues.awayWin}</span></div>
              </div>
              <button className={styles.betButton}>Apostar</button>
            </div>
          ))}
        </div>
      )}
    </div> // AQUI TERMINA O .container
  );
};

export default GameDetailsPage;