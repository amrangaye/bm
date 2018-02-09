import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Font } from 'expo';
import { FormLabel, FormInput } from 'react-native-elements'
var t = require('tcomb-form-native');
var Form = t.form.Form;

// here we are: define your domain model
var Rating = t.enums({
    '1': '1 Star',
    '2': '2 Stars',
    '3': '3 Stars',
    '4': '4 Stars',
    '5': '5 Stars',
  });

var Review = t.struct({
    name: t.String,              // a required string
    body: t.String,  // an optional string
    rating: Rating,               // a required number
  });

  
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
            <Form
            ref="form"
            type={Review}
          />
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

