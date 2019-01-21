import React from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import styles from './Styles.js';
import HomeScreen from './HomeScreen.js';
import Screen1 from './Screen1.js';
import Screen2 from './Screen2.js';

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Screen1: Screen1,
    Screen2: Screen2
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'white',
      activeBackgroundColor: 'blue',
      inactiveBackgroundColor: 'gray'
    }
  }
);

export default createAppContainer(TabNavigator);
