import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Font } from 'expo';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import Modal from "react-native-modal";

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
    username: t.String,              // a required string
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

    state = {
      isModalVisible: false
    }; 

    submit_rating(){
      var data = this.refs.form.getValue();

      if (data) {
        console.log(data);
        var ratingsUrl = 'http://192.168.1.105:3000/api/comments/'
        
        var myInit = {
					method: 'POST',
					body: JSON.stringify(data),
					mode: 'cors',
					cache: 'default',
					headers: new Headers({
						'Content-Type': 'application/json'
					})
        };
        
        fetch(ratingsUrl, myInit).then( (response) => {
          return response.json();
        }).then( (json) => {
          console.log(json); 
          this.setState({ isModalVisible: true });
        });

      }    
    }

    back_to_reviews(){
      this.setState({ isModalVisible: false });
      this.props.navigation.navigate("Reviews");   
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
            <Form
            ref="form"
            type={Review}
          />
          <Button
          title='Add Review'
          textStyle={{ fontWeight: "700"}}
          buttonStyle={{
            backgroundColor: "blue",
            width: 300,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
            alignSelf: 'center'
          }}
          onPress = {() => this.submit_rating()}
        />
          <Modal isVisible={this.state.isModalVisible}>
            <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightblue', borderRadius: 20 }}>
              <Text style={{fontSize: 30, color: 'white', padding: 15}}>Thank you for your review! It will appear shortly under Reviews after it has been moderated.</Text>
              <Button
              title='Back to Reviews'
              textStyle={{ fontWeight: "700"}}
              buttonStyle={{
                backgroundColor: "blue",
                width: 300,
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5,
                alignSelf: 'center',
                marginBottom: 20
              }}
              onPress = {() => this.back_to_reviews()}
            />
            </View>
          </Modal>
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

