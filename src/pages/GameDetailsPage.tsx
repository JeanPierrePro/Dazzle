// pages/GameDetailsPage.tsx
import React, { useState, useEffect, useRef } from 'react'; // Adicionado useRef
import { useLocation } from 'react-router-dom';
import styles from '../styles/GameDetailsPage.module.css';

// Interface GameDetails (sem alterações)
interface GameDetails {
  id: number;
  homeTeam: string;
  awayTeam: string;
  championship: string;
  image: string;
  homeTeamLogo?: string;
  awayTeamLogo?: string;
}

// NOVO: Interface para uma mensagem de chat
interface ChatMessage {
    id: number;
    user: {
        name: string;
        initial: string;
        avatarColor: string;
    };
    text: string;
}

// NOVO: Dados mockados para o chat
const initialMessages: ChatMessage[] = [
    { id: 1, user: { name: 'Thiago', initial: 'T', avatarColor: '#3498db' }, text: 'Quem vocês acham que leva essa?' },
    { id: 2, user: { name: 'Natália', initial: 'N', avatarColor: '#2ecc71' }, text: 'Acho que o time da casa tá mais forte hoje.' },
    { id: 3, user: { name: 'Neymar', initial: 'N', avatarColor: '#f1c40f' }, text: 'O hexa vem.' },
    { id: 4, user: { name: 'Silvio Santos', initial: 'S', avatarColor: '#e74c3c' }, text: 'maoe' },
    { id: 5, user: { name: 'Luana Romão', initial: 'L', avatarColor: '#e74c3c' }, text: 'Olá chat' },
];

const GameDetailsPage: React.FC = () => {
  const location = useLocation();
  const initialGame = location.state as GameDetails | undefined;

  const [currentGame, setCurrentGame] = useState<GameDetails | null>(initialGame || null);
  const [activeTab, setActiveTab] = useState('CHAT DE BANCADA'); // Aba inicial alterada para o chat

  // --- LÓGICA DO CHAT ---
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const messageListRef = useRef<HTMLDivElement>(null); // Ref para a lista de mensagens

  // Efeito para rolar para a última mensagem
  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);
  
  // Função para enviar uma nova mensagem
  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const myNewMessage: ChatMessage = {
      id: messages.length + 1,
      user: { // Em um app real, isso viria do usuário logado
        name: 'Você',
        initial: 'V',
        avatarColor: '#9b59b6'
      },
      text: newMessage,
    };

    setMessages(prevMessages => [...prevMessages, myNewMessage]);
    setNewMessage(''); // Limpa o input
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleEmojiClick = (emoji: string) => {
    setNewMessage(prevMessage => prevMessage + emoji);
  };
  // --- FIM DA LÓGICA DO CHAT ---

  useEffect(() => {
    if (!initialGame) {
      setCurrentGame({
        id: 0, homeTeam: 'Jogo Padrão', awayTeam: 'Visitante Padrão', championship: 'Liga Amigável', image: '/images/stadium.jpeg',
      });
    }
  }, [initialGame]);

  const recommendedGames: GameDetails[] = [
    { id: 2, homeTeam: 'Corinthians', awayTeam: 'São Paulo', championship: 'Copa do Brasil', image: '/images/corinthians_sp.png' },
    { id: 3, homeTeam: 'Grêmio', awayTeam: 'Internacional', championship: 'Gauchão', image: '/images/gremio_inter.png' },
  ];

  const handleRecommendationClick = (game: GameDetails) => setCurrentGame(game);
  const handleTabClick = (tabName: string) => setActiveTab(tabName);
  
  if (!currentGame) {
    return <div className={styles.loadingMessage}>Carregando...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.featuredSection}>
          <div className={styles.videoPlaceholder}>
            <div className={styles.stadiumBackground} style={{ backgroundImage: `url(${currentGame.image})` }} ></div>
            <div className={styles.videoOverlay}>
              <span className={styles.warningIcon}>!</span>
              <p className={styles.overlayTextMain}>Conteúdo indisponível</p>
              <p className={styles.overlayTextTime}>O jogo começa dentro de 00:45:59</p>
            </div>
          </div>
          <div className={styles.featuredSectionInfo}>
            <h2>{currentGame.homeTeam} x {currentGame.awayTeam}</h2>
            <p className={styles.subtitle}>{currentGame.championship}</p>
            {/* ... (outros detalhes) ... */}
          </div>
        </div>
        <div className={styles.recommendationsSection}>
          <h3>Recomendações</h3>
          <div className={styles.recommendationsList}>
            {recommendedGames.map((game) => (
              <div key={game.id} className={styles.gameRecommendationCard} onClick={() => handleRecommendationClick(game)} >
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
        {['Votação', 'Escalação', 'ODDS CASAS DE APOSTAS', 'CHAT DE BANCADA'].map(tab => (
          <button key={tab} className={`${styles.navTabButton} ${activeTab === tab ? styles.navTabActive : ''}`} onClick={() => handleTabClick(tab)}>
            {tab}
          </button>
        ))}
      </div>

      {/* RENDERIZAÇÃO CONDICIONAL DO CHAT */}
      {activeTab === 'CHAT DE BANCADA' && (
        <div className={styles.chatContainer}>
            <div className={styles.messageList} ref={messageListRef}>
                {messages.map(msg => (
                    <div key={msg.id} className={styles.message}>
                        <div className={styles.userInfo}>
                            <div className={styles.avatar} style={{ backgroundColor: msg.user.avatarColor }}>
                                {msg.user.initial}
                            </div>
                            <span className={styles.userName}>{msg.user.name}</span>
                        </div>
                        <div className={styles.messageContent}>
                            <p>{msg.text}</p>
                        </div>
                    </div>
                ))}
            </div>
    {/* DEPOIS (NOVA ESTRUTURA) */}
    <div className={styles.chatInputArea}>
    {/* Novo container que agrupa o input e o botão */}
    <div className={styles.inputWrapper}>
        <input
            type="text"
            placeholder="Escreve algo..."
            className={styles.chatInput}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleInputKeyPress}
        />
        <button className={styles.sendButton} onClick={handleSendMessage}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    </div>
    
    {/* Os emojis agora ficam do lado de fora do novo container */}
    <div className={styles.emojiBar}>
        <button className={styles.emojiButton} onClick={() => handleEmojiClick('😀')}>😀</button>
        <button className={styles.emojiButton} onClick={() => handleEmojiClick('😎')}>😎</button>
        <button className={styles.emojiButton} onClick={() => handleEmojiClick('😂')}>😂</button>
    </div>
    </div>
        </div>
      )}
      
      {activeTab === 'ODDS CASAS DE APOSTAS' && (
        <div className={styles.oddsSection}>
          {/* ... seu conteúdo de odds ... */}
        </div>
      )}
    </div>
  );
};

export default GameDetailsPage;