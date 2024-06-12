import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

interface Props {
  pokemon: { name: string };
  onPress: () => void;
}

const PokemonCard: React.FC<Props> = ({ pokemon, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{pokemon.name}</Text>
      <Image style={styles.image} source={{ uri: `https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png` }} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8f8f8',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default PokemonCard;
