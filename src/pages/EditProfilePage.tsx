// src/components/pages/EditProfilePage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/EditProfilePage.module.css';

const EditProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('Tomás Nelo');
  const [email, setEmail] = useState('tomasnelo2025@gmail.com');
  const [password, setPassword] = useState('**********');
  const [gender, setGender] = useState('Homem');

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados salvos:', { name, email, password, gender });
    alert('Perfil atualizado com sucesso!');
  };

  return (
    <div className={styles.editProfilePage}>
      {/* O <header> foi removido daqui */}

      <main className={styles.mainContent}>
        {/* NOVO: Container para a seta e o breadcrumb */}
        <div className={styles.navigationHeader}>
          <button className={styles.arrowBack} onClick={handleGoBack}>&larr;</button>
          <div className={styles.breadcrumb}>
            A minha conta {'>'} Perfil
          </div>
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
                type="text"
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className={styles.inputField}
              />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default EditProfilePage;