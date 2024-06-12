import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type PokemonDetailScreenRouteProp = RouteProp<RootStackParamList, 'PokemonDetail'>;
type PokemonDetailScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'PokemonDetail'>;

type Props = {
  route: PokemonDetailScreenRouteProp;
  navigation: PokemonDetailScreenNavigationProp;
};

const PokemonDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { pokemonName } = route.params;

  return (
    <View>
      <Text>Pokemon Detail Screen</Text>
      <Text>{pokemonName}</Text>
    </View>
  );
};

export default PokemonDetailScreen;
