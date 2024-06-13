import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { enableScreens } from 'react-native-screens';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

enableScreens();

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => App);

export default App;
