import React from "react";
import "./SideBar.css";
import { Link, useParams } from "react-router-dom";

const SideBar = ({ menuOpen, toggleMenu }) => {
  const { nombreUsuario, nombreCurso } = useParams(); // Captura los parámetros desde la URL

  return (
    <div className="sidebar-container">
      {/* Menú lateral */}
      <aside className={`menu ${menuOpen ? "menu-open" : ""}`}>
        {/* Botón para cerrar el menú dentro del menú */}
        <div className="menu-close" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Contenido del menú lateral */}
        <div className="menu-header">
          <div className="menu-logo">
            Attenz<span className="highlight">io</span>
          </div>
        </div>
        <nav className="menu-nav">
          <ul>
          <li><Link to={`/${nombreUsuario}/cursos/${nombreCurso}/historial`}>Inicio</Link></li> 
          <li><Link to={`/${nombreUsuario}/cursos/${nombreCurso}/creacionclase`}>Crear clase</Link></li> 
          <li><Link to={`/${nombreUsuario}/cursos/${nombreCurso}/reportes`}>Reportes de las clases</Link></li>
          <li><Link to={`/${nombreUsuario}/cursos/${nombreCurso}/gestionclases`}>Crear preguntas</Link></li> 
          <li><Link to="/">Cerrar sesión</Link></li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;
