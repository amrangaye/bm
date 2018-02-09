import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Font } from 'expo';
import { FormLabel, FormInput } from 'react-native-elements'

export default class AddRatingScreen extends React.Component {
    static navigationOptions = {
      title: 'Add Rating',
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
                <FormLabel>Name</FormLabel>
                <FormInput onChangeText={() => {}}/>
                <FormLabel>Comment</FormLabel>
                <FormInput onChangeText={() => {}}/>
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

