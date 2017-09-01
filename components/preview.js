import React, { Component } from 'react';
import {Animated, AppRegistry, Text, View, StyleSheet, Flatlist, ScrollView, TouchableHighlight, Alert, Slider} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';




export default class Preview extends Component {

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
    this.setState(nextProps, function(){
      this.loop();
    })
  }



  inputArrayFunction = (data)=>{
    let result = [];
    for (var i = 1; i <= data.length; i++) {
      result.push(i);
    }
    return result;
  }

  removeNull=(pattern)=>{
    var result = [];
    for (var i = 0; i < pattern.length; i++) {
      if(pattern[i] != null){
        result.push(pattern[i])
      }
    }
    return result;
  }

  loop = ()=>{
    var data = this.removeNull(this.state.preview.previewPattern);
    if(data[0]){
      data.push(data[0])
    }
    // console.log(data, "data");
    let length = data.length;
    // console.log(length);
    let inputArray = this.inputArrayFunction(data);
    let time = 1+(length * 1000) -1000;
    setTimeout(()=>{this.theActualLoop(data, length, inputArray, time)}, 500);
  }

  theActualLoop = (data, length, inputArray, time)=>{
    this.state.animateValue = new Animated.Value(1);
    if(data[0] != null && data.length > 0){
      Animated.loop(Animated.timing(                  // Animate over time
        this.state.animateValue,            // The animated value to drive
        {
          toValue: length,                   // Animate to opacity: 1 (opaque)
          duration: time,              // Make it take a while
        }
      )).start();
      if(length ==1){
        this.value = data[0];
      }
      else{
        this.value = this.state.animateValue.interpolate({
          inputRange: inputArray,
          outputRange: data
        });
      }
    }
    else {
      this.value = "white";
    }
  }


  styles = StyleSheet.create({
    box: {
      'position': 'absolute',
      'top': 230,
      'marginLeft': '45%',
      'backgroundColor': 'rgba(0,0,0,.5)',
      'borderRadius': 32,
      'borderColor': 'black',
      'borderWidth': 5,
      'width': '45%',
      'height': 250,
    },
    display: {
      'width': '86%',
      'height': '30%',
      'margin': '7%',
      'borderRadius': 32,
      'borderColor': 'black',
      'borderWidth': 5,
    }
  });



  render() {
    const {currentColor, preview, previewData} = this.props.preview;
    const {fadeAnim} = this.state;
    const dynamicStyle = {  'width': '86%',
      'height': '90%',
      'margin': '7%',
      'backgroundColor': currentColor || 'white',
      'borderRadius': 20,
      'borderColor': 'black',
      'borderWidth': 5};
    const AnimateStyle = {
        'width': '86%',
        'height': '90%',
        'margin': '7%',
        'backgroundColor': this.value || "white",
        'borderRadius': 20,
        'borderColor': 'black',
        'borderWidth': 5,
    }

    if(preview){
      return (
        <View style={this.styles.box}>
            <Animated.View style={AnimateStyle}>
            </Animated.View>
        </View>
        // </View>
      );

    }
    else{
      return null;
    }
  }
}
