import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Button from 'react-native-button'

export default class CounterComponent extends Component {
  render() {
    return (
      <View style = { styles.firstViewStyle }>
        <Text style = { styles.textStyle }> Redux Saga Tutorials</Text>
        <View style = { styles.secondViewStyle }>
            <Button 
                style = { styles.buttonStyle}
                containerStyle = { {padding: 10, height: 45, borderRadius: 10, backgroundColor: 'darkviolet'}}
                onPress = {()=>{
                    this.props.onDecrement(1);
                }}>
                Decrement -
            </Button>
            <Button 
                style = { styles.buttonStyle}
                containerStyle = { {padding: 10, height: 45, borderRadius: 10, backgroundColor: 'darkviolet', marginLeft: 30}}
                onPress = {()=>{
                    this.props.onIncrement(1);
                }}>
                Increment +
            </Button>
        </View>
        <Text style = {styles.textSecondStyle}>
            Counts: { this.props.times}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    firstViewStyle: {
        flex: 1,
        marginTop: 20
    },
    textStyle: {
        margin: 20,
        fontWeight: 'bold',
        color: 'forestgreen',
        fontSize: 20
    },
    secondViewStyle: {
        height: 50,
        margin: 10,
        flexDirection: 'row'
    },
    buttonStyle: {
        fontSize: 18,
        color: 'white'
    },
    textSecondStyle: {
        margin: 10,
        fontWeight: 'bold',
        color: 'darkblue',
        fontSize: 17
    }
})