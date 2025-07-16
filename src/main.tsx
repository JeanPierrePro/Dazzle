// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css'; // Importa os estilos globais
import { BrowserRouter } from 'react-router-dom'; // IMPORTANTE: Importe BrowserRouter

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/* ENVOLVA O APP COM BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);