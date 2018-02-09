import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Font } from 'expo';

export default class ReviewsScreen extends React.Component {
    static navigationOptions = {
      title: 'Government Ratings',
      headerStyle: {
        backgroundColor: 'lightblue',
      },
    };

    state = {}    

    getRatings(){
        var ratingsUrl = 'http://192.168.1.105:3000/api/comments/';

        var myHeaders = new Headers();
        var myInit = {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        };

        fetch(ratingsUrl, myInit).then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json.Comment);
            this.setState({reviews_text: json.Comment});
        });
    }
 
    componentDidMount(){
        var ratingsUrl = 'http://192.168.1.105:3000/api/comments/';

        var myHeaders = new Headers();
        var myInit = {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        };

        fetch(ratingsUrl, myInit).then( (response) => {
            return response.json();
        }).then( (json) => {
            console.log(json.Comment);
            this.setState({reviews_text: json.Comment[0].body});
        });
    }

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
              <Text>{this.state.reviews_text}</Text>
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

