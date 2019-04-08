import React, { Component } from 'react';
import {  View, Dimensions, Text, StyleSheet,Image,ScrollView,ImageBackground,Alert } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {db} from '../services/db';
import { Button } from 'react-native-elements';
const styles = StyleSheet.create({
    itemsList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor:'rgba(255, 255, 255, 0.6)',
    },
    trio:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop:20,
        marginBottom:10,
        
    },
    itemtext: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'#000'
    },
    container: {
        flex: 1,
        marginVertical: 0,
        flexDirection: 'column',
      },
      img: {
        resizeMode: 'contain',
        width: 100,
        height: 120,
      },
      containter: {
        width: Dimensions.get("window").width, 
        height: Dimensions.get("window").height 
      },
      fixed: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
     scrollview: {
       backgroundColor: 'transparent'
     }
});

 deleteTeam =(nombreTeam) =>{
  db.ref('/Teams/'+nombreTeam).remove()
  .then(()=>{Alert.alert('Success');}).catch((error)=>{
      console.log(error);
  });
}
export default class ItemComponent extends Component {

  static propTypes = {
      items: PropTypes.array.isRequired
  };

  render() {
    
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../drawable/backgrounds/teams.jpg')} style={[styles.fixed, styles.containter, {zIndex: -1}]}>
          </ImageBackground>
        <ScrollView style={styles.scrollview} >
        {this.props.items.map((item, index) => {
            return (
                <View style={styles.itemsList} key={index}>
                
                <Text style={styles.itemtext}>{item.name}</Text>
                <View style={styles.trio}>
                <TouchableOpacity>
                <Image
               
                    style={styles.img}
                    source={{uri: 'http://pokestadium.com/sprites/xy/'+item.pokemon1+'.gif'}}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                <Image
                    style={styles.img}
                    source={{uri: 'http://pokestadium.com/sprites/xy/'+item.pokemon2+'.gif'}}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                    style={styles.img}
                    source={{uri: 'http://pokestadium.com/sprites/xy/'+item.pokemon3+'.gif'}}
                    />
                </TouchableOpacity>  
                </View>
                <View style={styles.trio}>
                <TouchableOpacity>
                <Image
                    style={styles.img}
                    source={{uri: 'http://pokestadium.com/sprites/xy/'+item.pokemon4+'.gif'}}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                <Image
                    style={styles.img}
                    source={{uri: 'http://pokestadium.com/sprites/xy/'+item.pokemon5+'.gif'}}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                    style={styles.img}
                    source={{uri: 'http://pokestadium.com/sprites/xy/'+item.pokemon6+'.gif'}}
                    />
                </TouchableOpacity>  
                </View>
                 <Button
                 color="#222222"
                onPress={()=>deleteTeam(item.name)}
                 title="Delete Team"
                 />          
                </View>
                 
            )
        })}
     
      </ScrollView>
        </View>
          
    );
  }
}
