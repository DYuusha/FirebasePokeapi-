import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

_signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  }; 
  const AppStack = createStackNavigator({ Home: Regiones }
    ,{
      defaultNavigationOptions: {
        title: 'Application Name',
        headerLeft: <Icon 
        name="bars"
        color="white"
        size={25}
    />,
        headerStyle: {
          backgroundColor: '#e3e3e3',
        },
        headerTintColor: '#606070',
      },}
    ); 
    const AuthStack = createStackNavigator({ SignIn: Appe });

    export default createAppContainer(createSwitchNavigator(
      {
        App: AppStack,
        Auth: AuthStack,
      },
      {
        initialRouteName: 'Auth',
      }
    ));
  