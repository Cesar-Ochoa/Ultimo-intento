import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonDetails {
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  // Agrega aquí otros campos según sea necesario
}

interface PokemonAbility {
  effect_changes: {
    effect_entries: {
      effect: string;
      language: {
        name: string;
        url: string;
      };
    }[];
    // Otros campos según sea necesario
  }[];
  // Agrega aquí otros campos según sea necesario
}

export const getPokemons = async (): Promise<Pokemon[]> => {
  try {
    const response = await axios.get(`${BASE_URL}pokemon?limit=151`);
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPokemonDetails = async (name: string): Promise<PokemonDetails> => {
  try {
    const response = await axios.get(`${BASE_URL}pokemon/${name}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPokemonAbilities = async (name: string): Promise<PokemonAbility[]> => {
  try {
    const response = await axios.get(`${BASE_URL}pokemon/${name}`);
    return response.data.abilities;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
