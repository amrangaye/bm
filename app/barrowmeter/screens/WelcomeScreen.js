import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
// import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { Button, Tile, Card, Icon } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import { StackNavigator } from 'react-navigation';
import Communications from 'react-native-communications';

export default class WelcomeScreen extends React.Component {
    state = {reviews: [], avg_rating: 0}    

    getRatings(){
        var ratingsUrl = 'http://barrow-meter.org/api/comments/';

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
        var ratingsUrl = 'http://barrow-meter.org/api/comments/';

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

            var avg_rating = 0; 
            this.state.reviews.forEach((rev) => {
                avg_rating += rev.rating;
            });

            avg_rating /= this.state.reviews.length;
            avg_rating = parseInt(avg_rating);
            console.log("Average: "+avg_rating);
            this.setState({avg_rating: avg_rating});
        });
    }
  render() {
    return (
      <View style={styles.container}>
       <View style={styles.logo_container}>
        <Image
        source={require('../assets/barrowmeter_logo.png')}
        style={styles.logo}/>
       </View> 
       <Grid>
       <Row size={10}  style={styles.overall_rating}>
          <Text  style={styles.overall_rating_title}>Average Satisfaction Level</Text> 
       </Row>
         <Row size={20} style={styles.overall_rating}>
           {
               Array(this.state.avg_rating).fill().map((i,idx) => {
                   return (
                       <Icon name='star' color='lightgreen' size={30} key={idx} />
                   )
               })
           }
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
      </View>
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
                            <Icon name='star' color='lightgreen' size={12} key={idx} />
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  }, 
  logo_container: {
    flex: 1,
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabs_container: {
    backgroundColor: 'red',
    flex: 1
  },
  tab_row: {
    // flex: 1,
    // flexDirection: 'row',
    // backgroundColor: 'green',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  menu_button_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    margin: 5
      // flexDirection: 'column',
      // alignItems: 'stretch',
    // flexGrow: 1
  },
  menu_text: {
    fontSize: 12, 
  },
  menu_button: {
    margin: 0,
    padding: 0,
    flexGrow: 1,
    borderColor: 'white',
    borderRadius: 50
  },
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
  overall_rating: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  overall_rating_title: {
    fontSize: 20,
    fontWeight: 'bold'
  }, 
});
