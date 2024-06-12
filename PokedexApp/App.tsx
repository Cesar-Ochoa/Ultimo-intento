import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

const App: React.FC = () => {
  return <AppNavigator />;
};

AppRegistry.registerComponent(appName, () => App);

export default App;
