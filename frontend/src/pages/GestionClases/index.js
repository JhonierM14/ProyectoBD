import React from 'react';
import "../style.css";
import "./GestionClases.css";
import { Link, useParams } from "react-router-dom";
import Header from '../../components/Header/Header';

const Pregunta = () => {
  const { nombreUsuario, nombreCurso } = useParams();
  const clases = [
    { id: 1, nombre: 'CLASE 1' },
    { id: 2, nombre: 'CLASE 2' },
    { id: 3, nombre: 'CLASE 3' },
    { id: 4, nombre: 'CLASE 4' },
  ];

  return (

    <div className='container'>
        <div className="content">
            <Header/>

            <main className="main">
                <div className="list">
                {clases.map((clase) => (
                    <div key={clase.id} className="item">
                    <h3>{clase.nombre}</h3>
                    <div className="buttons">
                        <button className="btn"> <Link to=''> Crear Pregunta </Link></button>
                    </div>
                    </div>
                ))}
                </div>
            </main>


        </div>
    </div>
  );
};

export default Pregunta;