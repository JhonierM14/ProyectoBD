import React, { useState, useEffect } from 'react';
import { Link, useParams} from 'react-router-dom';
import Header from "../../components/Header/Header";
import { obtenerClasesCurso } from '../../api/clasesApi';
import "../style.css";
import "./Reportes.css";

const ReporteClases = () => {
  const { nombreUsuario, nombreCurso } = useParams();
  const [clases, setClases] = useState([]); // Estado para las clases
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado para errores

    // Efecto para cargar las clases del profesor
    useEffect(() => {
      const fetchClases = async () => {
        try {
          setLoading(true);
          const datos = await obtenerClasesCurso(nombreUsuario, nombreCurso); // Llama a la API
          setClases(datos); // Actualiza el estado con las clases obtenidas
        } catch (err) {
          setError("No se pudieron cargar las clases. Inténtalo más tarde.");
        } finally {
          setLoading(false);
        }
      };
  
      fetchClases();
    }, [nombreUsuario]);

  return (
    <div className='container'>
      <div className="content">
      <Header/>

      <main className="main">
        <h1 className="title">Reporte Detallado de las clases</h1>

        {/** Itera sobre las clase, preguntas y las presenta */}
        <div className="list">
          {clases.map((clase, index) => (
            <div key={index} className="item">
              <span className="clase">Clase { index + 1}</span>
              <div className="buttons">
                <button className="btn btn-pregunta"> <Link to=''>Ver Pregunta(s) </Link> </button>
                <button className="btn btn-asistencia"> <Link to=''> Ver Asistencia  </Link > </button>
              </div>
            </div>
          ))}
        </div>

      </main>


      </div>
    </div>
  );
};

export default ReporteClases;