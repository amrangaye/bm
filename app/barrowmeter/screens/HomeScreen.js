import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { Button, Tile, Card, Icon } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import { StackNavigator } from 'react-navigation';
import Communications from 'react-native-communications';

export class MenuButton extends React.Component {
  render () {
    return (
    <TouchableOpacity style={styles.menu_button_container} onPress={() => this.props.navigation.navigate(this.props.menu_page)}>
        <Icon
        name={this.props.icon}
        color='#00aced' />
      <Text style={styles.menu_text}>{this.props.title}</Text>
      </TouchableOpacity>
    ); 
  }
}

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <View style={styles.logo_container}>
        <Image
        source={require('../assets/barrowmeter_logo.png')}
        style={styles.logo}/>
       </View> 
      <Grid>
        <Row style={styles.tab_row}>
          <Col><MenuButton title='About Us' icon='info' navigation={this.props.navigation} menu_page='About' /></Col>
          <Col><MenuButton title='Location' icon='location-on' navigation={this.props.navigation} /></Col>
          <Col><MenuButton title='Events' icon='event-note' navigation={this.props.navigation} menu_page='Events' /></Col>
        </Row>
        <Row>
          <Col><MenuButton title='Reviews' icon='rate-review' navigation={this.props.navigation} menu_page='Reviews' /></Col>
          <Col><MenuButton title='Social Media' icon='chat-bubble' navigation={this.props.navigation} menu_page='Social' /></Col>
         
          <TouchableOpacity style={styles.menu_button_container} onPress={() => Communications.email(['info@barrow-meter.org'],null,null,'Subject:','')}>
                <Icon
                name='email'
                color='#00aced' />
                <Text style={styles.menu_text}>Email Us</Text>
          </TouchableOpacity>
        </Row>
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
