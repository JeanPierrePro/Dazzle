import React from 'react';
import styles from '../styles/MeuTimePage.module.css';

// Interface for a transfer item
interface Transfer {
  id: string; // Unique ID for Firebase
  status: string; // e.g., "NEGÓCIO FECHADO"
  date: string; // e.g., "30/05/2025"
  playerName: string; // e.g., "Ángel Di Maria"
  playerRole: string; // e.g., "Meia-armador" or "Meia-campista"
  fromClub: string; // e.g., "Benfica"
  toClub: string; // e.g., "Palmeiras"
  transferFee: string; // e.g., "10 000 000 €"
  playerImageUrl: string; // URL for player image
  clubLogoUrl: string; // URL for Palmeiras logo (or other club if needed)
}

// Dummy data (replace with data fetched from Firebase later)
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
    playerImageUrl: 'https://via.placeholder.com/60', // Placeholder for player image
    clubLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sociedade_Esportiva_Palmeiras_logo.svg/1200px-Sociedade_Esportiva_Palmeiras_logo.svg.png', // Placeholder for Palmeiras logo
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
    playerImageUrl: 'https://via.placeholder.com/60',
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
    playerImageUrl: 'https://via.placeholder.com/60',
    clubLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sociedade_Esportiva_Palmeiras_logo.svg/1200px-Sociedade_Esportiva_Palmeiras_logo.svg.png',
  },
  {
    id: 'transfer-4',
    status: 'NEGÓCIO FECHADO',
    date: '30/05/2025',
    playerName: 'Ángel Di Maria',
    playerRole: 'Meia-campista',
    fromClub: 'Benfica',
    toClub: 'Palmeiras',
    transferFee: '10 000 000 €',
    playerImageUrl: 'https://via.placeholder.com/60',
    clubLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sociedade_Esportiva_Palmeiras_logo.svg/1200px-Sociedade_Esportiva_Palmeiras_logo.svg.png',
  },
  {
    id: 'transfer-5',
    status: 'NEGÓCIO FECHADO',
    date: '30/05/2025',
    playerName: 'Ángel Di Maria',
    playerRole: 'Meia-campista',
    fromClub: 'Benfica',
    toClub: 'Palmeiras',
    transferFee: '10 000 000 €',
    playerImageUrl: 'https://via.placeholder.com/60',
    clubLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sociedade_Esportiva_Palmeiras_logo.svg/1200px-Sociedade_Esportiva_Palmeiras_logo.svg.png',
  },
  {
    id: 'transfer-6',
    status: 'NEGÓCIO FECHADO',
    date: '30/05/2025',
    playerName: 'Ángel Di Maria',
    playerRole: 'Meia-campista',
    fromClub: 'Benfica',
    toClub: 'Palmeiras',
    transferFee: '10 000 000 €',
    playerImageUrl: 'https://via.placeholder.com/60',
    clubLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sociedade_Esportiva_Palmeiras_logo.svg/1200px-Sociedade_Esportiva_Palmeiras_logo.svg.png',
  },
];

const MeuTimePage: React.FC = () => {
  // In a real application, you'd use useState and useEffect to fetch data from Firebase
  // const [transfers, setTransfers] = useState<Transfer[]>([]);

  // useEffect(() => {
  //   // Firebase fetch logic here
  //   const fetchTransfers = async () => {
  //     // Example using a hypothetical Firebase utility:
  //     // const data = await getTransfersFromFirestore();
  //     // setTransfers(data);
  //   };
  //   fetchTransfers();
  // }, []);

  // For now, we'll use dummy data
  const transfers = dummyTransfers;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.arrowBack}>&larr;</div> {/* Left arrow */}
        <div className={styles.palmeirasLogoContainer}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sociedade_Esportiva_Palmeiras_logo.svg/1200px-Sociedade_Esportiva_Palmeiras_logo.svg.png"
            alt="Palmeiras Logo"
            className={styles.palmeirasLogo}
          />
          <h1 className={styles.palmeirasTitle}>SE PALMEIRAS</h1>
        </div>
        <nav className={styles.mainNav}>
          <button className={styles.navButton}>LOJA</button>
          <button className={styles.navButton}>QUIZES</button>
        </nav>
      </header>

      <nav className={styles.subMenu}>
        <button className={styles.subMenuItem}>GERAL</button>
        <button className={styles.subMenuItem}>PLANTEL</button>
        <button className={styles.subMenuItem}>PALMARÉS</button>
        <button className={styles.subMenuItem}>CLASSIFICAÇÕES</button>
        <button className={`${styles.subMenuItem} ${styles.activeSubMenuItem}`}>TRANSFERÊNCIAS</button>
      </nav>

      <section className={styles.transfersSection}>
        <h2 className={styles.sectionTitle}>Últimas trasferências</h2>
        <div className={styles.transfersGrid}>
          {transfers.map((transfer) => (
            <div key={transfer.id} className={styles.transferCard}>
              <div className={styles.cardHeader}>
                <span className={styles.transferStatus}>{transfer.status}</span>
                <span className={styles.transferDate}>{transfer.date}</span>
              </div>
              <div className={styles.playerInfo}>
                <img src={transfer.playerImageUrl} alt={transfer.playerName} className={styles.playerImage} />
                <div className={styles.playerDetails}>
                  <p className={styles.playerName}>{transfer.playerName}</p>
                  <p className={styles.playerRole}>{transfer.playerRole}</p>
                </div>
                <img src={transfer.clubLogoUrl} alt="Palmeiras Club Logo" className={styles.clubLogoSmall} />
              </div>
              <div className={styles.transferDetails}>
                <p className={styles.clubTransferText}>
                  {transfer.fromClub} <span className={styles.arrow}>&rarr;</span> {transfer.toClub}
                </p>
                <p className={styles.transferFee}>{transfer.transferFee}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MeuTimePage;