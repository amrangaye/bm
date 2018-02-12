import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
// import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { Button, Tile, Card, Icon } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import { StackNavigator } from 'react-navigation';
import Communications from 'react-native-communications';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import AboutUsScreen from './AboutUsScreen'; 
import SocialMediaScreen from './SocialMediaScreen'; 
import ReviewsScreen from './ReviewsScreen'; 
import AddRatingScreen from './AddRatingScreen'; 
import EventsScreen from './EventsScreen'; 

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

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
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home' },
      { key: 'reviews', title: 'Reviews' },
      { key: 'about', title: 'About' },
      { key: 'social', title: 'Social Media' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => { 
    return (
      <TabBar {...props} style={styles.tab_header}  /> 
          )  
        }

  _renderScene = SceneMap({
    home: AddRatingScreen,
    reviews: ReviewsScreen,
    about: AboutUsScreen,
    social: SocialMediaScreen,
  });

  render() {
    return (
      <TabViewAnimated
      style={styles.container}
      navigationState={this.state}
      renderScene={this._renderScene}
      renderHeader={this._renderHeader}
      onIndexChange={this._handleIndexChange}
      initialLayout={initialLayout}
    />
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
  tab_header:{
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  menu_button: {
    margin: 0,
    padding: 0,
    flexGrow: 1,
    borderColor: 'white',
    borderRadius: 50
  }
});
