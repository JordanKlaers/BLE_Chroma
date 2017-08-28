import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Flatlist, ScrollView, TouchableHighlight, Alert, Slider} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';




export default class Control extends Component {


  constructor(props) {
    super(props);
    this.state = {click: "clicked"};
  }

  styles = StyleSheet.create({
    container: {
      'position': 'relative',
      'top': 30,
      'marginLeft': '5%',
      'backgroundColor': 'rgba(0,0,0,.3)',
      'borderRadius': 20,
      'borderColor': 'green',
      'borderWidth': 3,
      'width': '90%',
      'height': 150,
    },
    preview: {
      'position': 'absolute',
      'width': '35%',
      'height': 35,
      'margin': '5%',
      'borderRadius': 15,
      'borderColor': 'black',
      'borderWidth': 3,
    },
    clear: {
      'position': 'absolute',
      'width': '40%',
      'height': 50,
      'margin': '5%',
      'marginLeft': '50%',
      'borderRadius': 15,
      'borderColor': 'black',
      'borderWidth': 3
    },
    upload: {
      'position': 'absolute',
      'width': '90%',
      'height': 50,
      'margin': '5%',
      'marginTop': 80,
      'borderRadius': 15,
      'borderColor': 'black',
      'borderWidth': 3
    },
    blue: {
      'height': 30,
      'backgroundColor': "blue",
      'margin': '7%'
    },
    sliderContainer: {
      'height': 30,
      'margin': '7%',
      'borderRadius': 32,
      'borderColor': 'white',
      'borderWidth': 3
    },
    select:{
      'height': 60,
      'margin': '7%',
      'borderRadius': 15,
      'borderColor': 'white',
      'borderWidth': 3
    }
  });

  componentDidMount(){

  }


  render() {

      return (
        <View style={this.styles.container}>
          <TouchableHighlight style={this.styles.preview}>
            <View>
              <Text>
                preview
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={this.styles.clear}>
            <View>
              <Text>
                Select
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={this.styles.upload}>
            <View>
              <Text>
                Select
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      );

    }

}
