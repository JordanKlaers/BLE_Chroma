import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Flatlist, ScrollView, TouchableHighlight, Alert, Slider, Image} from 'react-native';




export default class ColorPicker extends Component {


  constructor(props) {
    super(props);
  }

  styles = StyleSheet.create({
    box: {
      'position': 'relative',
      'top': -330,
      'marginLeft': '45%',
      'backgroundColor': 'rgba(0,0,0,.5)',
      'borderRadius': 32,
      'borderColor': 'black',
      'borderWidth': 5,
      'width': '45%',
      'height': 318,
    },
    display: {
      'width': '86%',
      'height': '30%',
      'margin': '7%',
      'borderRadius': 32,
      'borderColor': 'black',
      'borderWidth': 5,
    },
    red: {
      'top': -18
    },
    sliderContainer: {
      'backgroundColor': 'rgba(255, 255, 255, 0)',
      'height': 30,
      'margin': '7%',
      'borderRadius': 32,
      'borderColor': 'black',
      'borderWidth': 5
    },
    sliderLeft: {
      'backgroundColor': 'white',
      'height': 40,
      'width': 60,
      'margin': '7%',
      'borderRadius': 32,
      'borderColor': 'black',
      'borderWidth': 5
    },
    sliderRight: {
      'top': -61,
      'left': 70,
      'backgroundColor': 'white',
      'height': 40,
      'width': 60,
      'margin': '7%',
      'borderRadius': 32,
      'borderColor': 'black',
      'borderWidth': 5
    },
    select:{
      'top': -66,
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
    },
    minusText: {
      'color': 'black',
      'textAlign': 'center',
      'fontSize': 45,
      'top': -18
    },
    plusText: {
      'color': 'black',
      'textAlign': 'center',
      'fontSize': 30,
      'top': -6
    },
    image:{
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      'borderRadius': 15,
      'borderColor': 'black',
      'borderWidth': 1
    }
  });

  render() {
    const {timelineSelect, colorPicked, liveSliderValue} = this.props.fullState
    const dynamicStyle = {  'width': '86%',
      'height': '30%',
      'margin': '7%',
      'backgroundColor': colorPicked,
      'borderRadius': 20,
      'borderColor': 'black',
      'borderWidth': 5}

    if(timelineSelect.bool){
      return (
        <View style={this.styles.box}>
          <View style={this.styles.display, dynamicStyle}>
          </View>
          <View style={this.styles.sliderContainer}>
            <Image source={require('../images/YOBFy.png')} style={this.styles.image}>
            </Image>
            <Slider maximumValue={360} thumbTintColor={'black'} style={this.styles.red} onValueChange={(e)=>this.props.pickingAColor(e)} value={liveSliderValue}></Slider>
          </View>
          <TouchableHighlight style={this.styles.sliderLeft} onPress={() => this.props.sliderButtons("left") }>
            <View >
              <Text style={this.styles.minusText}>
                -
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={this.styles.sliderRight} onPress={() => this.props.sliderButtons("right") }>
            <View >
              <Text style={this.styles.plusText}>
                +
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={this.styles.select} onPress={() => this.props.colorSelect(colorPicked) }>
            <View >
              <Text style={this.styles.selectText}>
                Select
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      );
    }
    else{
      return null;
    }
  }
}
var distanceFromTop = 200;
