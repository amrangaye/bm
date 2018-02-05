import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class AboutUsScreen extends React.Component {
    render () {
      return (
         <TouchableOpacity onPress={() => console.log('1st')}>
        <Text>About Us</Text>
        </TouchableOpacity>
      ); 
    }
  }

