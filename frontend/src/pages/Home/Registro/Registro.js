import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { createUsuario } from "../../../api/usuarioApi";
import "./Registro.css";

const Registro = () => {
  const [id_rol, setRol] = useState(2);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');
  const [cedula, setCedula] = useState('');
  const [direccion, setDireccion] = useState('');
  const [esMonitor, setMonitor] = useState('');
  const [foto, setFoto] = useState('');

  
  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(contraseña!=confirmarContraseña){
      alert('Las contraseñas no coinciden');
    } else{
      if (id_rol && nombre && apellido && correo && contraseña && cedula && foto && direccion) {
        // Add the new Usuario to the list
        const newUsuario = {
          id_rol,
          nombre,
          apellido,
          correo,
          contraseña,
          cedula,
          foto,
          direccion,
          esMonitor,
        };
        try {
          await createUsuario(newUsuario); // Llamada a la API
          alert("Usuario registrado exitosamente");
        } catch (error) {
          console.error("Error al registrar usuario:", error);
          alert("Hubo un error al registrar el usuario");
        }
      
    } else {
      alert('Please fill in all fields');
    }
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
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ingrese su nombre"
              />
            </div>
            <div className="form-group">
              <label htmlFor="apellidos">Apellidos</label>
              <input
                type="text"
                id="apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
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
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="Ingrese su correo"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cedula">Cédula</label>
              <input
                type="text"
                id="cedula"
                value={cedula}
                onChange={(e) => setCedula(e.target.value)}
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
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                placeholder="Ingrese su dirección"
              />
            </div>
            <div className="form-group">
              <label htmlFor="fotografia">URL de la Fotografía</label>
              <input
                type="text"
                id="foto"
                value={foto}
                onChange={(e) => setFoto(e.target.value)}
                placeholder="Ingrese la URL de la fotografía"
              />
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="esMonitor">Monitor</label>
            <input 
            type="checkbox" 
            id="esMonitor" 
            name="esMonitor" 
            value={true}
            onClick={(e) => setMonitor(e.target.value)}
            />  
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contraseña">Contraseña</label>
              <input
                type="password"
                id="contraseña"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
                placeholder="Ingrese su contraseña"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmarContraseña">Confirmar contraseña</label>
              <input
                type="password"
                id="confirmarContraseña"
                value={confirmarContraseña}
                onChange={(e) => setConfirmarContraseña(e.target.value)}
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
};

export default Registro;