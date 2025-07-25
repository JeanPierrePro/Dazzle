// src/components/pages/SobreNosPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/SobreNosPage.module.css';

const SobreNosPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/profiles'); // Navega para o perfil, como nas outras páginas
  };

  const handleTabClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className={styles.sobreNosPage}>
      <main className={styles.mainContent}>
        <div className={styles.navigationHeader}>
            <button className={styles.arrowBack} onClick={handleGoBack}>&larr;</button>
            <div className={styles.breadcrumb}>
                A minha conta {'>'} mais sobre a DAZZLE
            </div>
        </div>

        <h1 className={styles.pageTitle}>Sobre nós</h1>

        <nav className={styles.tabsContainer}>
          <button className={styles.tabButton} onClick={() => handleTabClick('/subscricao')}>SUBSCRICÃO DAZZLE</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/dispositivos-suportados')}>DISPOSITIVOS SUPORTADOS</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/ofertas')}>AS TUAS OFERTAS</button>
          <button className={`${styles.tabButton} ${styles.active}`} onClick={() => handleTabClick('/sobre-nos')}>SOBRE NÓS</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/qualidade-streaming')}>QUALIDADE DO STREAMING</button>
          <button className={styles.tabButton} onClick={() => handleTabClick('/protecao-pin')}>PROT</button>
        </nav>

        {/* O .aboutCard foi removido, o conteúdo agora está direto na contentSection */}
        <div className={styles.contentSection}>
            <h2 className={styles.aboutTitle}>Sobre a DAZZLE</h2>

            <p className={styles.aboutParagraph}>
              O que é a DAZZLE?
            </p>
            <p className={styles.aboutText}>
              A DAZZLE é uma IPTV desportiva de excelência que veio redefinir o conceito de entretenimento desportivo. Fundada no Brasil em
              2023, nasceu com a missão clara de transformar a experiência tradicional das IPTV – muitas vezes marcadas por excesso de
              canais irrelevantes, baixa qualidade e pouca praticidade – num serviço moderno, elegante e totalmente dedicado ao que
              realmente importa: o desporto.
            </p>
            <p className={styles.aboutText}>
              Ao focar exclusivamente nas principais modalidades e competições do mundo, a DAZZLE oferece uma plataforma premium, com
              transmissão em alta qualidade, navegação intuitiva e funcionalidades criadas a pensar nos verdadeiros fãs. Reduzimos o ruído,
              melhoramos a performance e entregamos o essencial: o teu desporto, do teu jeito.
            </p>
            <p className={styles.aboutText}>
              Com milhares de assinantes mensais, a DAZZLE destaca-se não só pela tecnologia de ponta, mas também por funcionalidades
              únicas como o sistema "O Meu Clube", que permite acompanhar ao vivo todas as atualizações do teu clube do coração. Adiciona
              equipas, jogadores e torneios aos teus favoritos e recebe notificações personalizadas, notícias em tempo real e alertas sempre
              que entram em campo.
            </p>
            <p className={styles.aboutText}>
              Disponibilizamos um catálogo rico e cuidadosamente selecionado com futebol, basquetebol, ténis, desportos motorizados,
              combates, hóquei, futebol americano e muito mais – sempre com a possibilidade de escolher entre 3 tipos de passes, para que
              cada utilizador encontre a solução perfeita para as suas necessidades.
            </p>
            <p className={styles.aboutText}>
              Acreditamos no poder da comunidade e na proximidade com os nossos utilizadores. É com essa união – aliada a parcerias
              estratégicas com marcas e profissionais talentosos – que construímos algo mais do que uma plataforma: criamos uma rede de
              valor com conteúdos originais, colaborações em podcasts, e campanhas com ofertas únicas.
            </p>
            <p className={styles.aboutText}>
              No fim, a DAZZLE é mais do que apenas streaming desportivo.
              É uma experiência premium, personalizada, e feita para quem vive o desporto intensamente.
            </p>
        </div>
      </main>
    </div>
  );
};

export default SobreNosPage;