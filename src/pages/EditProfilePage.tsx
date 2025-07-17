// src/components/pages/EditProfilePage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/EditProfilePage.module.css';

const EditProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('Tomás Nelo'); //
  const [email, setEmail] = useState('tomasnelo2025@gmail.com'); //
  const [password, setPassword] = useState('**********'); // (hidden for display)
  const [gender, setGender] = useState('Híbrido'); //

  const handleGoBack = () => {
    navigate(-1); // Volta para a página anterior
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para salvar as alterações
    console.log('Dados salvos:', { name, email, password, gender });
    alert('Perfil atualizado com sucesso!');
    // Opcional: Navegar de volta ou mostrar uma mensagem de sucesso
  };

  return (
    <div className={styles.editProfilePage}>
      <header className={styles.header}>
        <div className={styles.arrowBack} onClick={handleGoBack}>&larr;</div>
      </header>
      <main className={styles.mainContent}>
        <div className={styles.breadcrumb}>
          A minha conta {'>'} Perfil
        </div>
        <h1 className={styles.pageTitle}>Perfil</h1>

        <div className={styles.formContainer}>
          <form onSubmit={handleSave}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.inputField}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Endereço de email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.inputField}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">Palavra passe</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.inputField}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="gender">Género</label>
              <input
                type="text" // Poderia ser um <select> para opções fixas
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className={styles.inputField}
              />
            </div>

            {/* Você pode adicionar um botão de salvar se quiser que o usuário explicitamente salve */}
            {/* <button type="submit" className={styles.saveButton}>Salvar Alterações</button> */}
          </form>
        </div>
      </main>
    </div>
  );
};

export default EditProfilePage;