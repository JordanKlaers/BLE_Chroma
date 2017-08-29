import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Flatlist, ScrollView, TouchableHighlight, Alert, Slider} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';




export default class ColorPicker extends Component {


  constructor(props) {
    super(props);
    this.state = {click: "clicked"};
  }

  styles = StyleSheet.create({
    box: {
      'position': 'absolute',
      'top': distanceFromTop,

      'marginLeft': '45%',
      // 'marginTop': '-100%',
      'backgroundColor': 'white',
      'borderRadius': 32,
      'borderColor': 'black',
      'borderWidth': 3,
      'width': '45%',
      'height': 300,
      'backgroundColor': 'black'
    },
    display: {
      'width': '86%',
      'height': '30%',
      'margin': '7%',
      // 'backgroundColor': this.props.currentColor,
      'borderRadius': 32,
      'borderColor': 'black',
      'borderWidth': 3,
    },
    red: {
      'marginLeft': '7%',
      'marginRight': '7%',
      'marginTop': '2%'
    },
    green: {
      'height': 30,
      'backgroundColor': "green",
      'margin': '7%'
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
    },
    selectText: {
      'color': 'white',
      'textAlign': 'center'
    }

  });

  componentDidMount(){

    console.log(this.props.currentColor)
  }
  render() {
    const {currentColor} = this.props
    const dynamicStyle = {  'width': '86%',
      'height': '30%',
      'margin': '7%',
      'backgroundColor': currentColor,
      'borderRadius': 32,
      'borderColor': 'black',
      'borderWidth': 3}

    if(this.props.timelineSelect.bool){
      return (
        // <View>
        <View style={this.styles.box}>
          <View style={this.styles.display, dynamicStyle}>
          </View>
          <View style={this.styles.sliderContainer}>
            <Slider maximumValue={360} thumbTintColor={'white'} style={this.styles.red} onValueChange={(e)=>this.props.pickingAColor(e)}></Slider>
          </View>
          <TouchableHighlight onPress={() => this.props.colorSelect(currentColor) }>
            <View style={this.styles.select}>
              <Text style={this.styles.selectText}>
                Select
              </Text>
            </View>
          </TouchableHighlight>
        </View>
        // </View>
      );

    }
    else{
      return null;
    }
  }
}
var distanceFromTop = 200;
