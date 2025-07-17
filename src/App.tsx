// src/App.tsx
import { Routes, Route } from 'react-router-dom'; // IMPORTANTE: Importe Routes e Route
import Navbar from './components/Navbar/Navbar';
// Importe todas as suas páginas
import HomePage from './pages/HomePage';
import MeuTimePage from './pages/MeuTimePage';
import JogosPage from './pages/JogosPage';
import NoticiasPage from './pages/NoticiasPage';
import GameDetailsPage from './pages/GameDetailsPage';
import FavoritosPage from './pages/FavoritosPage';
import ProfilePage from './pages/ProfilePage';
import LojaPage from './pages/LojaPage';
import QuizesPage from './pages/QuizesPage';
import AlertasPage from './pages/AlertasPage';
import CatalogoPage from './pages/CatalogoPage';
import EditProfilePage from './pages/EditProfilePage';
import SubscricaoPage from './pages/SubscricaoPage';
import DispositivosPage from './pages/DispositivosPage';
import OfertasPage from './pages/OfertasPage';
import SobreNosPage from './pages/SobreNosPage';
import QualidadeStreamingPage from './pages/QualidadeStreamingPage';
import PinPage from './pages/PinPage';

import './App.css'; // Estilos específicos do App

function App() {
  return (
    <div className="app-container">
      <Navbar /> {/* O Navbar estará presente em todas as páginas */}
      <main> {/* O conteúdo das páginas será renderizado aqui */}
        <Routes> {/* Define as rotas do seu aplicativo */}
          <Route path="/" element={<HomePage />} /> {/* Rota para a página inicial */}
          <Route path="/meu-time" element={<MeuTimePage />} />
          <Route path="/jogos" element={<JogosPage />} />
          <Route path="/noticias" element={<NoticiasPage />} />
          <Route path="/favoritos" element={<FavoritosPage />} />
          <Route path="/profiles" element={<ProfilePage/>} />
          <Route path="/game-details" element={<GameDetailsPage />} /> {/* Add this route */}
          <Route path="/loja" element={<LojaPage />} />
          <Route path="/quizes" element={<QuizesPage />} />
          <Route path="/alertas" element={<AlertasPage />} />
          <Route path="/catalogo" element={<CatalogoPage />} />
          <Route path="/editar-perfil" element={<EditProfilePage />} />
          <Route path="/subscricao" element={<SubscricaoPage />} />
          <Route path="/dispositivos-suportados" element={<DispositivosPage />} />
          <Route path="/ofertas" element={<OfertasPage />} />
         <Route path="/sobre-nos" element={<SobreNosPage />} />
          <Route path="/qualidade-streaming" element={<QualidadeStreamingPage />} />
          <Route path="/protecao-pin" element={<PinPage />} />
          {/* Você pode adicionar uma rota para 404 Not Found aqui também */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;