import React, { Component } from 'react';
import {Animated, AppRegistry, Text, View, StyleSheet, Flatlist, ScrollView, TouchableHighlight, Alert, Slider} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';




export default class Preview extends Component {

  state = {
    animateValue: new Animated.Value(0),  // Initial value for opacity: 0
  }
  value = undefined;
  // state = {fadeAnim: new Animated.Value('rgb(255,255,255)')}

  constructor(props) {
    super(props);
    this.state = {
      colorPicker: {
        red: 0,
        green: 0,
        blue: 0
      },
      colorPicked : "hsl(0, 100%, 50%)",
      pattern: [null,null,null,null,null,null,null,null,null,null],
      sliderArray: [null,null,null,null,null,null,null,null,null,null],
      liveSliderValue: 0,
      timelineSelect:{
        bool: false,
        index: -1
      },
      preview: false,
      opacity: 0,
      previewData: [null,null,null,null,null,null,null,null,null,null]
    };
  }
  componentWillReceiveProps(nextProps){
    this.setState(nextProps, function(){
      console.log("does this get triggered when i hit clear????");
      this.loop();
    })
  }



    inputArrayFunction = (data)=>{
      let result = [];
      for (var i = 1; i <= data.length; i++) {
        result.push(i)
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
    // var data = this.state.preview.pattern
    var data = this.removeNull(this.state.preview.pattern)
    console.log(data.length, "data");
    let length = data.length
    let inputArray = this.inputArrayFunction(data);
    setTimeout(()=>{this.theActualyLoop(data, length, inputArray)}, 500);
  }

  theActualyLoop = (data, length, inputArray)=>{
    console.log("animation created");
    this.state.animateValue = new Animated.Value(1);
    if(data[0] != null && data.length > 0){
      Animated.loop(Animated.timing(                  // Animate over time
        this.state.animateValue,            // The animated value to drive
        {
          toValue: length,                   // Animate to opacity: 1 (opaque)
          duration: 8000,              // Make it take a while
        }
      )).start()
      if(length ==1){
        this.value = data[0]
      }
      else{
        this.value = this.state.animateValue.interpolate({
          inputRange: inputArray,
          outputRange: data
        })
      }
    }
    else {
      this.value = "white"
    }
  }

  // stop = ()=>{this.state.animateValue.stopAnimation()
    // setTimeout(()=>{this.state.animateValue = new Animated.Value(0)}, 4000)
  // }


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



  render() {

    const {currentColor, preview, previewData} = this.props.preview
    const {fadeAnim} = this.state
    const dynamicStyle = {  'width': '86%',
      'height': '90%',
      'margin': '7%',
      'backgroundColor': currentColor || 'white',
      'borderRadius': 20,
      'borderColor': 'black',
      'borderWidth': 5}
    const AnimateStyle = {
        'width': '86%',
        'height': '90%',
        'margin': '7%',
        'backgroundColor': this.value || "white",
        // 'opacity': 0,
        'borderRadius': 20,
        'borderColor': 'black',
        'borderWidth': 5,
        // 'visibility':'hidden'
    }

    if(preview){
      // console.log(this.props.preview.previewData, "PREVIEW DATA RENDER");
      console.log("visiable");
      // this.loop();

      return (
        // <View>
        <View style={this.styles.box}>
          {/* <View style={this.styles.display, dynamicStyle}> */}
            <Animated.View style={AnimateStyle}>
            </Animated.View>
          {/* </View> */}
        </View>
        // </View>
      );

    }
    else{
      console.log("NOT visiable");
      return null;
    }
  }
}
