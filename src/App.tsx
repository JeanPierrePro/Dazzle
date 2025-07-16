// src/App.tsx
import React from 'react';
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
          <Route path="/" element={<JogosPage />} />
          <Route path="/game-details" element={<GameDetailsPage />} /> {/* Add this route */}
          {/* Você pode adicionar uma rota para 404 Not Found aqui também */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;