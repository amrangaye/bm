import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { SocialIcon } from 'react-native-elements';

export default class SocialMediaScreen extends React.Component {
    static navigationOptions = {
      title: 'Our Social Media Accounts',
      headerStyle: {
        backgroundColor: 'lightblue',
      },
    };

    render () {
      return (
        <Grid>
          <Row size={30}>
          <Image
          source={require('../assets/gambia.png')}
            style={styles.banner}/>
          </Row>
          <Row size={70}>
          <View style={styles.social_icons_container}>
          <SocialIcon
            button
            type='facebook'
            title='Barrow-Meter on Facebook'
            style={{padding: 15}}
            onPress={() => Linking.openURL('https://facebook.com')}
            />
          <SocialIcon
            button
            type='twitter'
            title='Barrow-Meter on Twitter'
            style={{padding: 15}}
            onPress={() => Linking.openURL('https://twitter.com')}
            />
          <SocialIcon
            button
            type='youtube'
            title='Barrow-Meter on YouTube'
            style={{padding: 15}}
            onPress={() => Linking.openURL('https://youtube.com')}
            />
          <SocialIcon
            button
            type='wordpress'
            title='Barrow-Meter Blog'
            style={{padding: 15}}
            onPress={() => Linking.openURL('https://wordpress.com')}
            />
            </View>
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
  },
  social_icons_container: {
      alignItems: 'center',
      flex: 1
  }
});
