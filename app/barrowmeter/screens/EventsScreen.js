import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Font } from 'expo';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';


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
          <Row>
            <ScrollView>
            <Agenda
            // the list of items that have to be displayed in agenda. If you want to render item as empty date
            // the value of date key kas to be an empty array []. If there exists no value for date key it is
            // considered that the date in question is not yet loaded
            items={
              {'2018-02-11': [{text: 'item 1 - any js object'}],
               '2018-02-23': [{text: 'item 2 - any js object'}],
               '2018-02-24': [],
               '2018-02-25': [{text: 'item 3 - any js object'},{text: 'any js object'}],
              }} 
                            // agenda theme
            theme={{
                agendaDayTextColor: 'blue',
                agendaDayNumColor: 'green',
                agendaTodayColor: 'red',
                agendaKnobColor: 'blue'
            }}
            renderItem={this.renderItem.bind(this)}
            renderEmptyDate={this.renderEmptyDate.bind(this)}
            rowHasChanged={this.rowHasChanged.bind(this)}
            />
            </ScrollView>
          </Row>
        </Grid>
      ); 
    }

    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }

    renderEmptyDate() {
        return (
          <View style={styles.emptyDate}><Text></Text></View>
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

