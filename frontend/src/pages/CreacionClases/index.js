import React from 'react';
import { Link } from "react-router-dom";
import './CreacionClase.css'; // Importa el archivo CSS

const CreacionClase = () => {
  return (
    <div className="create-class-container">
      <div className="create-class-box">
        <h1 className="create-class-title">Attenzio</h1>
        <h2 className="create-class-subtitle">Creación de clase</h2>
        <form className="create-class-form">
          <input type="date" placeholder="Fecha" required />
          <input type="time" placeholder="Hora" required />
          <input type="text" placeholder="Materiales de clase" required />
          <button type="submit" className="create-class-btn"> <Link to='/historial'> Guardar</Link></button>
          <button type="button" className="create-class-btn"> <Link to='/historial'> Descartar </Link> </button>
        </form>
      </div>
    </div>
  );
};

export default CreacionClase;
