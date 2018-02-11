import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Font } from 'expo';

export default class EventsScreen extends React.Component {
    static navigationOptions = {
      title: 'Barrow-Meter Events',
      headerStyle: {
        backgroundColor: 'lightblue',
      },
    };

    render () {
      return (
        <Grid>
          <Row size={30}>
          <Image
          source={require('../assets/banner.jpg')}
            style={styles.banner}/>
          </Row>
          <Row size={70}>
            <ScrollView>
              
            </ScrollView>
          </Row>
        </Grid>
      ); 
    }
  }

const styles = StyleSheet.create({
  banner: {
    height: 200
  },
  paragraph: {
    marginBottom: 10,
    padding: 5,
    // fontFamily: 'encode-sans'
  }
});

