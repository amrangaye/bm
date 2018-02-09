import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Font } from 'expo';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default class ReviewsScreen extends React.Component {
    static navigationOptions = {
      title: 'Government Ratings',
      headerStyle: {
        backgroundColor: 'lightblue',
      },
    };

    state = {reviews: []}    

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
            this.setState({reviews: json.Comment});
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
            {
                this.state.reviews.map((rev, i) => {
                    return (
                        <Review author={rev.username} review={rev.body} rating={rev.rating} key={i} />
                        )
                    }
                )
            }
            </ScrollView>            
          </Row>
        </Grid>
      ); 
    }
  }

class Review extends React.Component {
    render(){
        return (
            <Card>
            <View>
              <Text style={styles.author}>{this.props.author}</Text>
              <Text style={styles.review}>{this.props.review}</Text>
              <Row style={styles.stars}>
                {
                    Array(this.props.rating).fill().map((i,idx) => {
                        return (
                            <Icon name='star' color='lightgreen' key={idx} />
                        )
                    })
                }
              </Row>
            </View>
            </Card> 
        )
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
  author: {
      fontSize: 12,
      color: 'blue',
      alignSelf: 'flex-end',
      marginRight: 10   
  },
  stars: {
    alignSelf: 'flex-end',
  },
  review: {

  }
});

