import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { Button, Tile, Card, Icon } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";

export class MenuButton extends React.Component {
  render () {
    return (
    <View style={styles.menu_button_container}>
    <Card>
        <Icon
        name='info'
        color='#00aced' />
      <Text>About Us</Text>
      </Card>
      </View>
    ); 
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <View style={styles.logo_container}>
        <Image
        source={require('./assets/barrowmeter_logo.png')}
        style={styles.logo}/>
       </View>

      <Grid>
        <Row style={styles.tab_row}>
          <Col><MenuButton /></Col>
          <Col style={{backgroundColor: 'red'}}></Col>
          <Col></Col>
        </Row>
        <Row></Row>
        <Row style={styles.tab_row}></Row>
      </Grid>
      </View>
    );
  }
}

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
    backgroundColor: 'green',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  menu_button_container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
      // flexDirection: 'column',
      // alignItems: 'stretch',
    // flexGrow: 1
  },
  menu_button: {
    margin: 0,
    padding: 0
  }
});
