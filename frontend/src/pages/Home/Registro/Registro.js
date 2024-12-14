<<<<<<< HEAD
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
=======
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
  
>>>>>>> 024d2a78575af5775bfcc56d9a8835f72e5b45c4

  return (
    <div className="registro-container">
      <div className="form-container">
        <h1 className="logo">Attenzio</h1>
<<<<<<< HEAD
        <form onSubmit={handleSubmit} className="usuario-form">
          <div className="form-row">
          <div className="form-group">
=======
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
>>>>>>> 024d2a78575af5775bfcc56d9a8835f72e5b45c4
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
<<<<<<< HEAD
                value={formData.nombre}
                onChange={handleChange}
=======
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
>>>>>>> 024d2a78575af5775bfcc56d9a8835f72e5b45c4
                placeholder="Ingrese su nombre"
              />
            </div>
            <div className="form-group">
              <label htmlFor="apellidos">Apellidos</label>
              <input
                type="text"
                id="apellido"
<<<<<<< HEAD
                value={formData.apellido}
                onChange={handleChange}
=======
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
>>>>>>> 024d2a78575af5775bfcc56d9a8835f72e5b45c4
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
<<<<<<< HEAD
                value={formData.correo}
                onChange={handleChange}
=======
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
>>>>>>> 024d2a78575af5775bfcc56d9a8835f72e5b45c4
                placeholder="Ingrese su correo"
              />
            </div>
            <div className="form-group">
<<<<<<< HEAD
              <label htmlFor="telefono">Telefono</label>
              <input 
              type="text" 
              id="telefono" 
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Ingrese su teléfono" 
=======
              <label htmlFor="cedula">Cédula</label>
              <input
                type="text"
                id="cedula"
                value={cedula}
                onChange={(e) => setCedula(e.target.value)}
                placeholder="Ingrese su cédula"
>>>>>>> 024d2a78575af5775bfcc56d9a8835f72e5b45c4
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
<<<<<<< HEAD
              <label htmlFor="foto_registro">Foto matricula</label>
              <input 
              type="text" 
              id="foto_registro"
              value={formData.foto_registro}
              onChange={handleChange}
              placeholder="Ingrese el link de drive"             
=======
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
>>>>>>> 024d2a78575af5775bfcc56d9a8835f72e5b45c4
              />
            </div>
          </div>
          <div className="form-row">
<<<<<<< HEAD
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
=======
            <label htmlFor="esMonitor">Monitor</label>
            <input 
            type="checkbox" 
            id="esMonitor" 
            name="esMonitor" 
            value={true}
            onClick={(e) => setMonitor(e.target.value)}
            />  
>>>>>>> 024d2a78575af5775bfcc56d9a8835f72e5b45c4
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contraseña">Contraseña</label>
              <input
                type="password"
                id="contraseña"
<<<<<<< HEAD
                value={formData.contraseña}
                onChange={handleChange}
=======
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
>>>>>>> 024d2a78575af5775bfcc56d9a8835f72e5b45c4
                placeholder="Ingrese su contraseña"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmarContraseña">Confirmar contraseña</label>
              <input
                type="password"
                id="confirmarContraseña"
<<<<<<< HEAD
                value={formData.confirmarContraseña}
                onChange={handleChange}
=======
                value={confirmarContraseña}
                onChange={(e) => setConfirmarContraseña(e.target.value)}
>>>>>>> 024d2a78575af5775bfcc56d9a8835f72e5b45c4
                placeholder="Confirme su contraseña"
              />
            </div>
          </div>
<<<<<<< HEAD
          <div className="form-group">
            <button type="submit" className="register-button">Registrarse</button>
            <button className="home-button"><Link to="/">Inicio</Link></button>
          </div>
=======
          
            <div className="form-group">
              <button type="submit" className="register-button">Registrarse</button>
              <button className="home-button"><Link to="/">Inicio</Link></button>
            </div>
>>>>>>> 024d2a78575af5775bfcc56d9a8835f72e5b45c4
          
        </form>
      </div>
    </div>
  );
<<<<<<< HEAD
}



export default RegistroEst;
=======
};

export default Registro;
>>>>>>> 024d2a78575af5775bfcc56d9a8835f72e5b45c4
