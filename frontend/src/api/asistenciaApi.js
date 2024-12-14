import axios from 'axios';

const API_URL = "http://localhost:8000/asistencia/"

export const fetchAsistencia = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching:", error);
    throw error;
  }
};

export const createAsistencia = async (asistenciaData) => {
  try {
    const response = await axios.post(API_URL, asistenciaData);
    return response.data; 
  } catch (error) {
    console.error("Error creating bus:", error);
    throw error;
  }
};
