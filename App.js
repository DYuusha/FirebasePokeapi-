import React, { Component } from 'react';
import {Alert, View ,ImageBackground, Button, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { createStackNavigator, createSwitchNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';

 
import Regions from './Screens/Regions';
import RegionsApi from './Components/RegionsApi';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyTeam from './Screens/Teams';
class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };
  
  render() {
    const textColor = this.props.selected ? 'red' : 'black';
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Text style={{color: textColor}}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class Appe extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  
  render() {
    
    return (
      <View style={styles.container}>
        
          <ImageBackground source={require('./drawable/backgrounds/loginwall.jpg')} style={{width: '100%', height: '100%',justifyContent: 'center'}}>
              <View style={styles.buttonContainer}>
                <Button style={styles.button}
                 onPress={this._signInAsync}
                  title="Login for free"
                  color="#222222"
                />
              </View>
              <View style={styles.buttonContainer}>
                <Button style={styles.button}
                  onPress={() => {
                    Alert.alert('This function will be added!');
                  }}
                  title="Login with Google"
                  color="#FF3D00"
                />
              </View>
          </ImageBackground>
          
      </View>
      ); 
}
_signInAsync = async () => {
  await AsyncStorage.setItem('userToken', 'abc');
  this.props.navigation.navigate('App');
};  

}
const RegionStack = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Regions,
    navigationOptions: ({ navigation }) => ({
      title: 'Regions',
     
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
    }),
  },
    Third: {screen: RegionsApi,
      navigationOptions:({navigation}) =>({
      
      }),
    }
}); 
  const TeamsStack = createStackNavigator(
    { Second: MyTeam },{
      defaultNavigationOptions: ({navigation}) =>{
        return {
          headerLeft:
          (<Icon 
            style={{paddingLeft:10}}
            name='bars' 
            color='black'  
            size={30}
            onPress={()=> navigation.openDrawer()}
          />)
            
        }
      },}
    );

const AuthStack = createStackNavigator(
  { SignIn: Appe}
  ,{
    defaultNavigationOptions: {
      header: null
    },}
  );


const MyDrawerNavigator = createDrawerNavigator({
  Regions: {
    screen: RegionStack,
  },
  Teams:{
    screen: TeamsStack,
  },
  
  SignOut: {
    screen: AuthStack,
  },
});

export default createAppContainer(createSwitchNavigator(
  {
    App: MyDrawerNavigator,
    Auth: AuthStack,
  },
  
  {
    initialRouteName: 'Auth',
  }
));

const styles = StyleSheet.create({
  container: {
   flex: 1
  },
   buttonContainer: {
     margin: 20
   },
   button:{height:200}
});



