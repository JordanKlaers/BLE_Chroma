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
    },
    red: {
      'marginLeft': '7%',
      'marginRight': '7%',
      'marginTop': '2%'
    },
    sliderContainer: {
      'backgroundColor': 'white',
      'height': 30,
      'margin': '7%',
      'borderRadius': 32,
      'borderColor': 'black',
      'borderWidth': 5
    },
    select:{
      'height': 60,
      'margin': '7%',
      'borderRadius': 15,
      'borderColor': 'black',
      'borderWidth': 5,
      'backgroundColor': 'white'
    },
    selectText: {
      'color': 'black',
      'textAlign': 'center',
      'fontSize': 30,
      'marginTop': 5
    }

  });

  componentDidMount(){

    // console.log(this.props.currentColor)
  }
  render() {
    const {currentColor, timelineSelect, pattern} = this.props
    const dynamicStyle = {  'width': '86%',
      'height': '30%',
      'margin': '7%',
      'backgroundColor': pattern[timelineSelect.index] || currentColor,
      'borderRadius': 20,
      'borderColor': 'black',
      'borderWidth': 5}

    if(this.props.timelineSelect.bool){
      return (
        // <View>
        <View style={this.styles.box}>
          <View style={this.styles.display, dynamicStyle}>
          </View>
          <View style={this.styles.sliderContainer}>
            <Slider maximumValue={360} thumbTintColor={'black'} style={this.styles.red} onValueChange={(e)=>this.props.pickingAColor(e)}></Slider>
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
