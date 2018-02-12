import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Font } from 'expo';
import { List, ListItem } from 'react-native-elements';

export default class EventsScreen extends React.Component {
    static navigationOptions = {
      title: 'Barrow-Meter Events',
      headerStyle: {
        backgroundColor: 'lightblue',
      },
    };
    
    render () {
        const list = [
            {
              event: 'Launching of Barrow-Meter App and Website',
              date: '13th February 2018',
            },
            {
              event: 'Community Outreach in North Bank Region',
              date: '13th - 15th April 2018',
            },
            {
              event: 'Community Outreach in Lower River Region',
              date: '15th - 17th June 2018',
            },
            {
              event: 'Community Outreach in Central River Region',
              date: '17th - 19th August 2018',
            },
            {
              event: 'Community Outreach in West Coast Region',
              date: '19th - 20th October 2018',
            },
            {
              event: 'Community Outreach in Upper River Region',
              date: '14th - 16th December 2018',
            },
          ]; 
      return (
        <Grid>
          <Row>
          <List containerStyle={{marginBottom: 20, flex: 1}}>
          {
            list.map((l, i) => (
              <ListItem
                roundAvatar
                key={i}
                title={l.event}
                subtitle={l.date}
                titleNumberOfLines={2}
                subtitleStyle={{color:'blue'}}
                hideChevron
              />
            ))
          }
        </List>
          </Row>
        </Grid>
      ); 
    }

    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }

    renderEmptyDate() {
        return (
          <View style={styles.emptyDate}><Text>Empty</Text></View>
        );
      }

    renderItem(item) {
        return (
          <View><Text>{item.text}</Text></View>
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

