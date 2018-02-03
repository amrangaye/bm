import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { Button } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
  <Image
  source={require('./assets/barrowmeter_logo.png')}
  style={styles.logo}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200
  }, 
  button: {
    backgroundColor: "#9E9E9E"
  }
});
