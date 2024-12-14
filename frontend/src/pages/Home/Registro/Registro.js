import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { createUsuario } from "../../../api/usuarioApi";
import "./Registro.css";

const Registro = () => {
  const [formData, setFormData] = useState({
    id_rol: 2, // Rol de Profesor por defecto
    nombre: "",
    apellido: "",
    correo: "",
    cedula: "",
    direccion: "",
    contraseña: "",
    confirmarContraseña: "",
    foto: "", // Aquí se ingresará la URL de la fotografía
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
        <form onSubmit={handleSubmit}>
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
                id="apellidos"
                value={formData.apellidos}
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
              <label htmlFor="cedula">Cédula</label>
              <input
                type="text"
                id="cedula"
                value={formData.cedula}
                onChange={handleChange}
                placeholder="Ingrese su cédula"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="direccion">Dirección</label>
              <input
                type="text"
                id="direccion"
                value={formData.direccion}
                onChange={handleChange}
                placeholder="Ingrese su dirección"
              />
            </div>
            <div className="form-group">
              <label htmlFor="fotografia">URL de la Fotografía</label>
              <input
                type="text"
                id="fotografia"
                value={formData.fotografia}
                onChange={handleChange}
                placeholder="Ingrese la URL de la fotografía"
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
          <button type="submit" className="register-button">
            <Link to='/'> Registrarse </Link>
          </button>
        </form>
        {/* <Link to="/">Volver al inicio</Link> */}
      </div>
    </div>
  );
};

export default Registro;
