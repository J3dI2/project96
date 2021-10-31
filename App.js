import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from './screens/Homescreen';
import Main from './screens/Main';
import SettingScreen from './screens/SettingScreen';
import {createAppContainer} from 'react-navigation';


export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
/*
const TabNavigator = createBottomTabNavigator({
  Home: {screen: Homescreen},
  Main: {screen: Main},
  Setting: {screen: SettingScreen}
});

const AppContainer = createAppContainer(TabNavigator);
*/

const switchNavigator = createSwitchNavigator({
  Home: {screen: Homescreen},
  Main: {screen: Main},
  Setting: {screen: SettingScreen}
})

const AppContainer =  createAppContainer(switchNavigator);
