import React, { useState} from 'react';
import { Link } from "react-router-dom";
import "./RegistroEst.css";
import {createUsuario } from '../../../api/usuarioApi';


const RegistroEst = () => {
  const [formData, setFormData] = useState({
    id_rol: 3, // Rol de Estudiante por defecto
    nombre: "",
    apellido: "",
    correo: "",
    contraseña: "",
    confirmarContraseña: "",
    telefono: "",
    foto_registro: "",// Aquí se ingresará la URL de la fotografía
    codigo: "", 
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
    const { confirmarContraseña, ...dataToSend } = formData;

    if (formData.contraseña !== confirmarContraseña) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      await createUsuario(dataToSend); // Llamada a la API
      alert("Usuario registrado exitosamente");
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      alert("Hubo un error al registrar el usuario");
    }
  };

  return (
    <div className="registro-container">
      <div className="form-container">
        <h1 className="logo">Attenzio</h1>
        <form onSubmit={handleSubmit} className="usuario-form">
          <div className="form-row">
          <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ingrese su nombre"
              />
            </div>
            <div className="form-group">
              <label htmlFor="apellidos">Apellidos</label>
              <input
                type="text"
                id="apellido"
                value={formData.apellido}
                onChange={handleChange}
                placeholder="Ingrese sus apellidos"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="correo">Correo</label>
              <input
                type="email"
                id="correo"
                value={formData.correo}
                onChange={handleChange}
                placeholder="Ingrese su correo"
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Telefono</label>
              <input 
              type="text" 
              id="telefono" 
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Ingrese su teléfono" 
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="foto_registro">Foto matricula</label>
              <input 
              type="text" 
              id="foto_registro"
              value={formData.foto_registro}
              onChange={handleChange}
              placeholder="Ingrese el link de drive"             
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="codigo">Código</label>
              <input 
              type="text" 
              id="codigo"
              value={formData.codigo}
              onChange={handleChange}
              placeholder="Ingrese su código de estudiante" 
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contraseña">Contraseña</label>
              <input
                type="password"
                id="contraseña"
                value={formData.contraseña}
                onChange={handleChange}
                placeholder="Ingrese su contraseña"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmarContraseña">Confirmar contraseña</label>
              <input
                type="password"
                id="confirmarContraseña"
                value={formData.confirmarContraseña}
                onChange={handleChange}
                placeholder="Confirme su contraseña"
              />
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="register-button">Registrarse</button>
            <button className="home-button"><Link to="/">Inicio</Link></button>
          </div>
          
        </form>
      </div>
    </div>
  );
}



export default RegistroEst;