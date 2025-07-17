import React, { useState } from 'react';
import styles from '../styles/FavoritosPage.module.css';

// Definindo interfaces para os tipos de dados
interface Item {
  id: string;
  name: string;
  type: 'team' | 'competition' | 'player';
  icon?: string;
  isFavorite?: boolean;
}

// ====================================================================
// Componente Modal de Seleção (Simulado)
interface SelectionModalProps {
  title: string;
  items: Item[];
  selectedItems: string[];
  onToggleItem: (id: string) => void;
  onClose: () => void;
  maxSelections?: number;
}

const SelectionModal: React.FC<SelectionModalProps> = ({
  title,
  items,
  selectedItems,
  onToggleItem,
  onClose,
  maxSelections
}) => {
  const canAddItem = (maxSelections === undefined || selectedItems.length < maxSelections);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>{title}</h2>
          <button className={styles.closeButton} onClick={onClose}>X</button>
        </div>
        <div className={styles.modalItemsGrid}>
          {items.map(item => {
            const isSelected = selectedItems.includes(item.id);
            const isDisabled = !isSelected && !canAddItem;

            return (
              <div
                key={item.id}
                className={`${styles.modalItem} ${isSelected ? styles.modalItemSelected : ''} ${isDisabled ? styles.modalItemDisabled : ''}`}
                onClick={() => !isDisabled && onToggleItem(item.id)}
              >
                <div className={styles.modalItemIcon}>
                  {item.icon ? (
                    <img src={item.icon} alt={item.name} className={styles.iconImage} />
                  ) : (
                    <div className={styles.circlePlaceholder}></div>
                  )}
                  {isSelected && <div className={styles.modalCheckIcon}>&#10003;</div>}
                </div>
                <div className={styles.modalItemName}>{item.name}</div>
              </div>
            );
          })}
        </div>
        {maxSelections !== undefined && (
          <p className={styles.modalLimitText}>
            {selectedItems.length} de {maxSelections} selecionados
          </p>
        )}
      </div>
    </div>
  );
};
// ====================================================================


const FavoritosPage: React.FC = () => { // Nome do componente alterado de volta para FavoritosPage
  // Estado para controlar se o modo de edição está ativo ou não
  const [isEditing, setIsEditing] = useState(false);

  const [selectedTeams, setSelectedTeams] = useState<string[]>(['palmeiras']);
  const [selectedCompetitions, setSelectedCompetitions] = useState<string[]>([]);
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>(['cristiano-ronaldo', 'lionel-messi']);

  const [showTeamModal, setShowTeamModal] = useState(false);
  const [showCompetitionModal, setShowCompetitionModal] = useState(false);
  const [showPlayerModal, setShowPlayerModal] = useState(false);

  // Dados mockados (permanecem os mesmos)
  const availableTeams: Item[] = [
    { id: 'palmeiras', name: 'Palmeiras', type: 'team', icon: '/images/palmeiras.png', isFavorite: true },
    { id: 'flamengo', name: 'Flamengo', type: 'team', icon: '/images/flamengo.png' },
    { id: 'corinthians', name: 'Corinthians', type: 'team', icon: '/images/corinthians.png' },
    { id: 'sao-paulo', name: 'São Paulo', type: 'team', icon: '/images/sao-paulo.png' },
    { id: 'gremio', name: 'Grêmio', type: 'team', icon: '/images/gremio.png' },
    { id: 'internacional', name: 'Internacional', type: 'team', icon: '/images/internacional.png' },
    { id: 'santos', name: 'Santos', type: 'team', icon: '/images/santos.png' },
  ];

  const availableCompetitions: Item[] = [
    { id: 'brasileirao', name: 'Brasileirão', type: 'competition', icon: '/images/brasileirao.png' },
    { id: 'libertadores', name: 'Libertadores', type: 'competition', icon: '/images/libertadores.png' },
    { id: 'champions-league', name: 'Champions League', type: 'competition', icon: '/images/champions-league.png' },
    { id: 'copa-do-brasil', name: 'Copa do Brasil', type: 'competition', icon: '/images/copa-do-brasil.png' },
    { id: 'premier-league', name: 'Premier League', type: 'competition', icon: '/images/premier-league.png' },
    { id: 'laliga', name: 'La Liga', type: 'competition', icon: '/images/laliga.png' },
  ];

  const availablePlayers: Item[] = [
    { id: 'cristiano-ronaldo', name: 'Cristiano Ronaldo', type: 'player', icon: '/images/cristiano-ronaldo.png' },
    { id: 'lionel-messi', name: 'Lionel Messi', type: 'player', icon: '/images/lionel-messi.png' },
    { id: 'neymar-jr', name: 'Neymar Jr.', type: 'player', icon: '/images/neymar-jr.png' },
    { id: 'kylian-mbappe', name: 'Kylian Mbappé', type: 'player', icon: '/images/kylian-mbappe.png' },
  ];

  // Função para alternar a seleção de um item dentro do MODAL
  const handleToggleSelection = (id: string, type: 'team' | 'competition' | 'player') => {
    switch (type) {
      case 'team':
        setSelectedTeams(prev =>
          prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
        break;
      case 'competition':
        setSelectedCompetitions(prev =>
          prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
        break;
      case 'player':
        setSelectedPlayers(prev =>
          prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
        break;
      default:
        break;
    }
  };

  // Função auxiliar para renderizar um item individual na tela principal
  const renderDisplayItem = (item: Item) => (
    <div key={item.id} className={styles.item}>
      <div className={styles.circleIcon}>
        {item.icon ? (
          <img src={item.icon} alt={item.name} className={styles.iconImage} />
        ) : (
          <div className={styles.circlePlaceholder}></div>
        )}
      </div>
      {item.isFavorite && <div className={styles.itemText}>Time favorito</div>}
      <div className={styles.itemName}>{item.name}</div>
    </div>
  );

  // Função auxiliar para renderizar os botões "Seguir" (Adicionar)
  const renderAddButton = (onClick: () => void) => (
    <div className={`${styles.item} ${styles.addItem}`} onClick={onClick}>
      <div className={styles.circleAddIcon}>+</div>
      <div className={styles.itemText}>Seguir</div>
    </div>
  );

  // Filtrar os itens selecionados para exibição
  const currentTeams = availableTeams.filter(team => selectedTeams.includes(team.id));
  const currentCompetitions = availableCompetitions.filter(comp => selectedCompetitions.includes(comp.id));
  const currentPlayers = availablePlayers.filter(player => selectedPlayers.includes(player.id));

  const MAX_SELECTIONS_PER_CATEGORY = 10;

  return (
    <div className={styles.container}>
      <section className={styles.welcomeSection}>
        <div className={styles.avatar}>TN</div>
        <div className={styles.welcomeText}>
          <span className={styles.bemVindo}>BEM-VINDO</span>
          <span className={styles.userName}>Tomás Nelo</span>
        </div>
      </section>

      <div className={styles.selectionLimit}>
        Máximo de {MAX_SELECTIONS_PER_CATEGORY} seleções por cada aba (Meus times, minhas competições e meus jogadores)
      </div>

      <div className={styles.separatorLine}></div>

      {/* Botão EDITAR - Agora ele alterna o modo de edição */}
      <button 
        className={`${styles.editButton} ${isEditing ? styles.editingActive : ''}`} 
        onClick={() => setIsEditing(!isEditing)}
      >
        {isEditing ? 'CONCLUIR' : 'EDITAR'} {/* Muda o texto do botão */}
      </button>

      <div className={styles.contentGrid}>
        {/* Meus Times */}
        <div className={styles.categoryColumn}>
          <h3 className={styles.categoryTitle}>MEUS TIMES <span className={styles.count}>({selectedTeams.length})</span></h3>
          <div className={styles.itemsContainer}>
            {currentTeams.map(team => renderDisplayItem(team))}
            {/* Renderiza o botão "Seguir" APENAS se isEditing for true */}
            {isEditing && selectedTeams.length < MAX_SELECTIONS_PER_CATEGORY && renderAddButton(() => setShowTeamModal(true))}
          </div>
        </div>

        <div className={styles.verticalSeparatorLine}></div>

        {/* Minhas Competições */}
        <div className={styles.categoryColumn}>
          <h3 className={styles.categoryTitle}>MINHAS COMPETIÇÕES <span className={styles.count}>({selectedCompetitions.length})</span></h3>
          <div className={styles.itemsContainer}>
            {currentCompetitions.map(comp => renderDisplayItem(comp))}
            {/* Renderiza o botão "Seguir" APENAS se isEditing for true */}
            {isEditing && selectedCompetitions.length < MAX_SELECTIONS_PER_CATEGORY && renderAddButton(() => setShowCompetitionModal(true))}
          </div>
        </div>

        <div className={styles.verticalSeparatorLine}></div>

        {/* Meus Jogadores */}
        <div className={styles.categoryColumn}>
          <h3 className={styles.categoryTitle}>MEUS JOGADORES <span className={styles.count}>({selectedPlayers.length})</span></h3>
          <div className={styles.itemsContainer}>
            {currentPlayers.map(player => renderDisplayItem(player))}
            {/* Renderiza o botão "Seguir" APENAS se isEditing for true */}
            {isEditing && selectedPlayers.length < MAX_SELECTIONS_PER_CATEGORY && renderAddButton(() => setShowPlayerModal(true))}
          </div>
        </div>
      </div>

      {/* Modais de Seleção - Agora só abrem se isEditing for true */}
      {isEditing && showTeamModal && (
        <SelectionModal
          title="Selecione seus Times"
          items={availableTeams}
          selectedItems={selectedTeams}
          onToggleItem={(id) => handleToggleSelection(id, 'team')}
          onClose={() => setShowTeamModal(false)}
          maxSelections={MAX_SELECTIONS_PER_CATEGORY}
        />
      )}
      {isEditing && showCompetitionModal && (
        <SelectionModal
          title="Selecione suas Competições"
          items={availableCompetitions}
          selectedItems={selectedCompetitions}
          onToggleItem={(id) => handleToggleSelection(id, 'competition')}
          onClose={() => setShowCompetitionModal(false)}
          maxSelections={MAX_SELECTIONS_PER_CATEGORY}
        />
      )}
      {isEditing && showPlayerModal && (
        <SelectionModal
          title="Selecione seus Jogadores"
          items={availablePlayers}
          selectedItems={selectedPlayers}
          onToggleItem={(id) => handleToggleSelection(id, 'player')}
          onClose={() => setShowPlayerModal(false)}
          maxSelections={MAX_SELECTIONS_PER_CATEGORY}
        />
      )}
    </div>
  );
};

export default FavoritosPage; // Mantenha o nome do componente exportado consistente