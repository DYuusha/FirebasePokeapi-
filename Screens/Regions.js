import React, { Component } from 'react';
import {Alert, View, FlatList ,ImageBackground, Button, StyleSheet,TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
//import Header from './Header';

export default class Regiones extends Component {
    static navigationOptions = {
        title: 'Regions'
      };
   
    render() {
      
      return (  
        <View style={{width: '100%', height: '100%',justifyContent: 'center'}}>   
            <ImageBackground source={require('../drawable/backgrounds/regiones.jpg')} style={{width: '100%', height: '100%',justifyContent: 'center'}}>
            
              <View style={{flex:1}}>
                  <TouchableOpacity >
                        <View style={styles.buttonContainer}>
                          <Button style={styles.button}
                            onPress={() => this.props.navigation.navigate('Teams')}
                            title="Teams"
                            color="#FF0000"
                          />
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity >
                  <View style={styles.buttonContainer}>
                    <Button style={styles.button}
                      onPress={() => this.props.navigation.navigate('Third',{region:'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151', title:'Region 1',})}
                      title="Region 1"
                      color="#222222"
                    />
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity >
                  <View style={styles.buttonContainer}>
                    <Button style={styles.button}
                      onPress={() => this.props.navigation.navigate('Third',{region:'https://pokeapi.co/api/v2/pokemon?offset=152&limit=251', title:'Region 2',})}
                      title="Region 2"
                      color="#222222"
                    />
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity >
                  <View style={styles.buttonContainer}>
                    <Button style={styles.button}
                      onPress={() => this.props.navigation.navigate('Third',{region:'https://pokeapi.co/api/v2/pokemon?offset=252&limit=386', title:'Region 3',})}
                      title="Region 3"
                      color="#222222"
                    />
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity >
                  <View style={styles.buttonContainer}>
                    <Button style={styles.button}
                      onPress={() => this.props.navigation.navigate('Third',{region:'https://pokeapi.co/api/v2/pokemon?offset=387&limit=493', title:'Region 4',})}
                      title="Region 4"
                      color="#222222"
                    />
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity >
                  <View style={styles.buttonContainer}>
                    <Button style={styles.button}
                      onPress={() => this.props.navigation.navigate('Third',{region:'https://pokeapi.co/api/v2/pokemon?offset=494&limit=649', title:'Region 5',})}
                      title="Region 5"
                      color="#222222"
                    />
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity >
                  <View style={styles.buttonContainer}>
                    <Button style={styles.button}
                      onPress={() => this.props.navigation.navigate('Third',{region:'https://pokeapi.co/api/v2/pokemon?offset=650&limit=721', title:'Region 6',})}
                      title="Region 6"
                      color="#222222"
                    />
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity >
                  <View style={styles.buttonContainer}>
                    <Button style={styles.button}
                      onPress={() => this.props.navigation.navigate('Third',{region:'https://pokeapi.co/api/v2/pokemon?offset=722&limit=807', title:'Region 7',})}
                      title="Region 7"
                      color="#222222"
                    />
                  </View>
                  </TouchableOpacity>
              </View> 
            </ImageBackground>   
        </View>
        );     
  }
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
  }
  const styles = StyleSheet.create({
    container: {
     flex: 1,
    },
     buttonContainer: {
       margin: 12,
     }
  });