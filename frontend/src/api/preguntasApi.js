import axios from 'axios';

const API_URL = "http://localhost:8000/pregunta/";

export const fetchPreguntas = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
};

export const createPregunta = async (preguntaData) => {
  try {
    const response = await axios.post(API_URL, preguntaData);
    return response.data;
  } catch (error) {
    console.error("Error creating question:", error);
    throw error;
  }
};

export const obtenerPreguntasUsuario = async (nombreUsuario) => {
  try {
    const response = await axios.get(`${API_URL}${nombreUsuario}/preguntas/`);
    return response.data; // Devuelve las preguntas obtenidas de la API
  } catch (error) {
    console.error("Error al obtener las preguntas del usuario:", error);
    throw new Error("No se pudieron cargar las preguntas.");
  }
};
