import React, { Component } from 'react';
import {Animated, AppRegistry, Text, View, StyleSheet, Flatlist, ScrollView, TouchableHighlight, Alert, Slider} from 'react-native';


export default class Brightness extends Component {

  constructor(props) {
    super(props);
    this.state = {
      colorPicked : "hsl(0, 100%, 50%)",
      pattern: [null,null,null,null,null,null,null,null,null,null],
      sliderArray: [null,null,null,null,null,null,null,null,null,null],
      liveSliderValue: 0,
      timelineSelect:{
        bool: false,
        index: -1
      },
      preview: false,
    };
  };

  value = undefined;

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
  }


  styles = StyleSheet.create({
    container: {
      'position': 'absolute',
      'top': 230,
      'marginLeft': '45%',
      'backgroundColor': 'rgba(0,0,0,.4)',
      'borderRadius': 32,
      'borderColor': 'black',
      'borderWidth': 5,
      'width': '45%',
      'height': 260,
    },
    display: {
      'width': '86%',
      'height': '30%',
      'margin': '7%',
      'borderRadius': 32,
      'borderColor': 'black',
      'borderWidth': 5,
    },
    sliderContainer: {
      'backgroundColor': 'white',
      'height': 30,
      'marginLeft': '7%',
      'marginRight': '7%',
      'top': 5,
      'borderRadius': 32,
      'borderColor': 'black',
      'borderWidth': 5
    },
    sliderLeft: {
      'backgroundColor': 'white',
      'height': 40,
      'width': 60,
      'marginLeft': '7%',
      'marginRight': '7%',
      'top': 15,
      'borderRadius': 32,
      'borderColor': 'black',
      'borderWidth': 5
    },
    sliderRight: {
      'top': -23,
      'left': 81,
      'backgroundColor': 'white',
      'height': 40,
      'width': 60,
      'marginLeft': '7%',
      'marginRight': '7%',
      'borderRadius': 32,
      'borderColor': 'black',
      'borderWidth': 5
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
    select:{
      'top': -26,
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
    percentage:{
      'top': 5,
      'height': 60,
      'margin': '7%',
      'borderRadius': 15,
      'borderColor': 'black',
      'borderWidth': 5,
      'backgroundColor': 'white'
    },
  });



  render() {
    const {brightnessView} = this.props;


    if(brightnessView){
      return (
        <View style={this.styles.container}>
          <View style={this.styles.percentage}>
            <Text style={this.styles.selectText}>
              {Math.floor(this.props.value) +'%'}
            </Text>
          </View>
          <View style={this.styles.sliderContainer}>
            <Slider maximumValue={100} thumbTintColor={'black'} onValueChange={(e)=>{this.props.brightnessSliderChange(e)}} value={this.props.value}></Slider>
          </View>
          <TouchableHighlight style={this.styles.sliderLeft} onPress={() => {this.props.brightnessButtons("left")} }>
            <View >
              <Text style={this.styles.minusText}>
                -
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={this.styles.sliderRight} onPress={() => {this.props.brightnessButtons("right")}}>
            <View >
              <Text style={this.styles.plusText}>
                +
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={this.styles.select} onPress={() => {this.props.uploadBrightness(this.props.value)} }>
            <View >
              <Text style={this.styles.selectText}>
                Load
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      )
    }
    else{
      return null;
    }
  }
}
