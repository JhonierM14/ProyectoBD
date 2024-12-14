import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { createClase } from "../../api/clasesApi";
import './CreacionClase.css'; // Importa el archivo CSS

const CreacionClase = () => {
  const [formData, setFormData] = useState({
      id_clase: "", // Rol de Profesor por defecto
      id_curso: 1, //Por defecto el curso 1 (debe cambiarse para aceptar mas cursos)
      fecha_clase: "",
      hora_clase: "",
      qr_asistencia: "",
      material_clase: "" // Aquí se ingresará la URL del material principal de la clase
    });
  
  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
   
  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createClase(formData); // Llamada a la API
      alert('Clase registrada exitosamente');
    } catch (error) {
      console.error('Error al registrar la clase:', error);
      alert('Hubo un error al registrar la clase');
    }
  };

  return (
    <div className="create-class-container">
      <div className="create-class-box">
        <h1 className="create-class-title">Attenzio</h1>
        <h2 className="create-class-subtitle">Creación de clase</h2>
        <form className="create-class-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="id_clase"
            placeholder="Clase n"
            value={formData.id_clase || ""}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            id="fecha_clase"
            value={formData.fecha_clase || ""}
            onChange={handleChange}
            required
          />
          <input
            type="time"
            id="hora_clase"
            value={formData.hora_clase || ""}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            id="material_clase"
            placeholder="Materiales de clase"
            value={formData.material_clase || ""}
            onChange={handleChange}
            required
          />
          <button type="submit" className="create-class-btn">Guardar</button>
          <button type="button" className="create-class-btn">
            <Link to="/historial">Descartar</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreacionClase;

