import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Font } from 'expo';

export default class AboutUsScreen extends React.Component {
    static navigationOptions = {
      title: 'About Barrow-Meter',
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
              <Text style={styles.paragraph}>The Barrow-meter is an online platform that allows citizens to be informed on yearly budget allocation, and how the allocated budget is spent and what is done with the remainder. 
              </Text>
              <Text style={styles.paragraph}>
              It shall question the measures in place to disallow misuse of public funds, and ensure that funds allocated are used for  what they’re meant. It shall also highlight all the promises made by the Coalition Government and shall outline all targets met so as to also serve as a performance monitor that will give statistical and graphical detail on government execution.
              </Text>
              <Text style={styles.paragraph}>
              Ensuring that the ruling government upholds promises made during the campaign period(s) and in reform packages is the principal aim of the “Barrow-meter” platform. This will layout government focuses in order to better describe to the general populace government’s stance and point(s) of interest. Whilst confirming the guileless transparency of all government activities.
              </Text>
              <Text style={styles.paragraph}>
              The “Barrow-meter” shall bridge the trust gap between government and civilians, and shall allow space for public opinion through a comment box and “letter to the webmaster”. This shall provide government with public opinion on ongoing and expected projects and give the general populace detailed and accurate information concerning project progress, constraints encountered, funds allocated for project and total funds used upon project completion. 
              </Text>
              <Text style={styles.paragraph}>
              Audit reports from government institutions are to be made accessible for public viewing through the “Mba I Jubee Kaŋ Ne (meaning “We’re Watching” in Mandinka)” page on the “Barrow-meter” platform.
              </Text>
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

