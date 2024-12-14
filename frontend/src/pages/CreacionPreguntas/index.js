import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { fetchPreguntas, createPregunta } from "../../api/preguntasApi";
import Header from "../../components/Header/Header";
import "../style.css";
import "./CreacionPreguntas.css";

const PreguntaInteractiva = () => {
  const { nombreUsuario } = useParams();
  const [preguntas, setPreguntas] = useState([]);
  const [newPregunta, setNewPregunta] = useState({
    texto: "",
    opciones: [],
  });
  const [newOption, setNewOption] = useState("");

  useEffect(() => {
    const cargarPreguntas = async () => {
      try {
        const data = await fetchPreguntas();
        setPreguntas(data);
      } catch (error) {
        console.error("Error al cargar las preguntas:", error);
      }
    };
    cargarPreguntas();
  }, []);

  const handleAddOption = () => {
    if (newOption.trim()) {
      setNewPregunta({
        ...newPregunta,
        opciones: [...newPregunta.opciones, newOption.trim()],
      });
      setNewOption("");
    }
  };

  const handleSavePregunta = async () => {
    try {
      await createPregunta(newPregunta);
      alert("Pregunta creada exitosamente");
      setNewPregunta({ texto: "", opciones: [] });
    } catch (error) {
      console.error("Error al guardar la pregunta:", error);
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="content">
        <div className="question-section">
          <h2>Crea una nueva pregunta</h2>
          <input
            type="text"
            placeholder="Texto de la pregunta"
            value={newPregunta.texto}
            onChange={(e) =>
              setNewPregunta({ ...newPregunta, texto: e.target.value })
            }
          />
          <div className="question-options">
            {newPregunta.opciones.map((opcion, index) => (
              <div key={index} className="option">
                <span>{opcion}</span>
              </div>
            ))}
            <div className="add-option">
              <input
                type="text"
                placeholder="Nueva opción"
                value={newOption}
                onChange={(e) => setNewOption(e.target.value)}
              />
              <button onClick={handleAddOption}>Añadir opción</button>
            </div>
          </div>
        </div>
        <div className="action-buttons">
          <button className="save" onClick={handleSavePregunta}>
            Guardar
          </button>
          <button className="discard">
            <Link to={`/${nombreUsuario}/preguntas`}>Descartar</Link>
          </button>
        </div>
        <div className="existing-questions">
          <h2>Preguntas existentes</h2>
          {preguntas.map((pregunta, index) => (
            <div key={index} className="pregunta-item">
              <h3>{pregunta.texto}</h3>
              <ul>
                {pregunta.opciones.map((opcion, i) => (
                  <li key={i}>{opcion}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreguntaInteractiva;
