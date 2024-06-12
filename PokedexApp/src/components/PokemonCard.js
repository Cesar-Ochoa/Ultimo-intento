import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const PokemonCard = ({ pokemon, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('PokemonDetail', { pokemon })}>
      <View style={styles.card}>
        <Text style={styles.name}>{pokemon.name}</Text>
        <Image source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png` }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    margin: 10,
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    elevation: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default PokemonCard;
