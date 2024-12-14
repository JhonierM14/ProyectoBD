import React from 'react';
import { Link } from 'react-router-dom'; 
import './UserType.css'; // Importa el archivo CSS

const UserType = () => {
  return (
    <div className="user-type-container">
      <div className="user-type-box">
        <h1 className="user-type-title">Attenzio</h1>
        <h2 className="user-type-subtitle">
          Bienvenido a Attenzio, ¿Cuál de los siguientes roles te identifica?
        </h2>
        <div className="user-type-buttons">
          <button className="user-type-button profesor"> <Link to='/registro'> Profesorado </Link></button>
          <button className="user-type-button estudiante"> <Link to='/registroEst'> Estudiante </Link></button>
        </div>
      </div>
    </div>
  );
};

export default UserType;
