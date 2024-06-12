// PokemonDetailScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getPokemonDetails } from '../api/PokeAPI';

const PokemonDetailScreen = ({ route }) => {
  const { pokemon } = route.params;
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getPokemonDetails(pokemon.name);
      setDetails(data);
    };
    fetchDetails();
  }, [pokemon]);

  if (!details) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{details.name}</Text>
      <Image source={{ uri: details.sprites.front_default }} style={styles.image} />
      <Text style={styles.detail}>Height: {details.height}</Text>
      <Text style={styles.detail}>Weight: {details.weight}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
  detail: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default PokemonDetailScreen;
