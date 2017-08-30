import React, { Component } from 'react';
import {Animated, AppRegistry, Text, View, StyleSheet, Flatlist, ScrollView, TouchableHighlight, Alert, Slider} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';




export default class Preview extends Component {


  constructor(props) {
    super(props);
    this.state = {animatePattern: new Animated.Value(0)}
  }

  styles = StyleSheet.create({
    box: {
      'position': 'absolute',
      'top': 230,

      'marginLeft': '45%',
      // 'marginTop': '-100%',
      'backgroundColor': 'rgba(0,0,0,.5)',
      'borderRadius': 32,
      'borderColor': 'black',
      'borderWidth': 5,
      'width': '45%',
      'height': 250,
      // 'backgroundColor': 'black'
    },
    display: {
      'width': '86%',
      'height': '30%',
      'margin': '7%',
      // 'backgroundColor': this.props.currentColor,
      'borderRadius': 32,
      'borderColor': 'black',
      'borderWidth': 5,
    }
  });

  componentDidMount(){

    // console.log(this.props.currentColor)
  }
  render() {
    const {currentColor} = this.props
    const dynamicStyle = {  'width': '86%',
      'height': '30%',
      'margin': '7%',
      'backgroundColor': currentColor,
      'borderRadius': 20,
      'borderColor': 'black',
      'borderWidth': 5}

    if(this.props.preview){
      return (
        // <View>
        <View style={this.styles.box}>
          <View style={this.styles.display, dynamicStyle}>
          </View>
        </View>
        // </View>
      );

    }
    else{
      return null;
    }
  }
}
