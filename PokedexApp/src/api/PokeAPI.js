import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/';

export const getPokemons = async () => {
  try {
    const response = await axios.get(`${BASE_URL}pokemon?limit=151`);
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPokemonDetails = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}pokemon/${name}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPokemonAbilities = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}pokemon/${name}`);
    return response.data.abilities;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
