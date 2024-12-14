import axios from 'axios';

const API_URL = "http://localhost:8000/pregunta/"

export const fetchPregunta = async () => {
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
    console.error("Error creating bus:", error);
    throw error;
  }
};
