import React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import Puzzle from './components/Puzzle';
import HurufdanAngka from './components/HurufdanAngka';
import MengenalBentuk from './components/MengenalBentuk';
import { name as appName } from './app.json';
AppRegistry.registerComponent(appName, () => App);





const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='HomeScreen' component={HomeScreen}/>
      <Stack.Screen name='MengenalBentuk' component={MengenalBentuk}/>
      <Stack.Screen name='HurufdanAngka' component={HurufdanAngka}/>
      <Stack.Screen name='Puzzle' component={Puzzle}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;