import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ItemComponent from '../Components/ItemComponent';
import { db } from '../services/db';

let itemsRef = db.ref('/Teams/');
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent',
    }
  })
export default class ListItem extends Component {
    static navigationOptions = {
        title: 'Teams'
      };
    state = {
        items: []
    }
    componentDidMount() {
        itemsRef.on('value', (snapshot) => {
            let data = snapshot.val();
            if(data!==null){
                let items = Object.values(data);
                this.setState({items});   
            } 
         }); 
    }
    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.items.length > 0
                    ? <ItemComponent items={this.state.items}  />
                    : <Text>No items</Text>
                }
            </View>
        )
    }
}