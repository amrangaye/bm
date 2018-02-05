import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { Button, Tile, Card, Icon } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import { StackNavigator } from 'react-navigation';

import AboutUsScreen from './screens/AboutUsScreen'; 
import HomeScreen from './screens/HomeScreen'; 

class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'encode-sans': require('./assets/fonts/EncodeSans-Regular.ttf'),
    });
  }

  render() {
    return <RootStack />;
  }
}

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  About: {
    screen: AboutUsScreen,
  }
},
{
  // temp to test out routes - change back to Home
  // initialRouteName: 'Home', 
  initialRouteName: 'Home', 
}
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  }, 
  logo_container: {
    flex: 1,
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabs_container: {
    backgroundColor: 'red',
    flex: 1
  },
  tab_row: {
    // flex: 1,
    // flexDirection: 'row',
    // backgroundColor: 'green',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  menu_button_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    margin: 5
      // flexDirection: 'column',
      // alignItems: 'stretch',
    // flexGrow: 1
  },
  menu_text: {
    fontSize: 12, 
  },
  menu_button: {
    margin: 0,
    padding: 0,
    flexGrow: 1,
    borderColor: 'white',
    borderRadius: 50
  }
});
