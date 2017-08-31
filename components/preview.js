import React, { Component } from 'react';
import {Animated, AppRegistry, Text, View, StyleSheet, Flatlist, ScrollView, TouchableHighlight, Alert, Slider} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';




export default class Preview extends Component {

  state = {
    animateValue: new Animated.Value(0),  // Initial value for opacity: 0
  }
  // state = {fadeAnim: new Animated.Value('rgb(255,255,255)')}

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("preview mounted");
      this.loop();                        // Starts the animation
    }

    inputArrayFunction = (data)=>{
      let result = [];
      for (var i = 1; i <= data.length; i++) {
        result.push(i)
      }
      return result;
    }

  loop = ()=>{
    // console.log(this.props.preview.previewData, "props");
    let data =this.props.getPatternForPreview()
    let length = data.length
    let inputArray = this.inputArrayFunction(data);
    console.log(data);
    console.log(inputArray);
    console.log(data.length);
    console.log(inputArray.length);

    this.state.animateValue = new Animated.Value(1);
    console.log(this.state.animateValue);
    if(data[0] != null){
      Animated.loop(Animated.timing(                  // Animate over time
        this.state.animateValue,            // The animated value to drive
        {
          toValue: length,                   // Animate to opacity: 1 (opaque)
          duration: 8000,              // Make it take a while
        }
      )).start()
      this.value = this.state.animateValue.interpolate({
        inputRange: inputArray,
        outputRange: data
      })
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

  // componentDidMount(){
  //
  //   console.log("loaded")
  // }
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
        // 'opacity': animateValue,
        'borderRadius': 20,
        'borderColor': 'black',
        'borderWidth': 5
    }

    if(preview){
      console.log("something - preview");
      this.loop();
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
      return null;
    }
  }
}
