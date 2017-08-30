import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry, Text, View, StyleSheet, Flatlist, ScrollView, TouchableHighlight, Alert, Image} from 'react-native';
import Timeline from './components/timeline'
import ColorPicker from './components/colorPicker.js';
import Control from './components/control.js';
import Preview from './components/preview.js';
var tinycolor = require('./tinycolor.js');

export default class App extends React.Component {
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
      timelineSelect:{
        bool: false,
        index: 0
      },
      preview: false,
      previewData: [null,null,null,null,null,null,null,null,null,null]
    };
  }

  theState = {
    colorPicker: {
      red: 0,
      green: 0,
      blue: 0
    },
    colorPicked : "hsl(0, 100%, 50%)",
    pattern: [null,null,null,null,null,null,null,null,null,null],
    timelineSelect:{
      bool: false,
      index: -1
    },
    preview: false,
    previewData: [null,null,null,null,null,null,null,null,null,null]
  }

  componentDidMount(){
  }

  clearPattern = ()=>{
    this.theState.preview = false;
    this.theState.pattern = [null,null,null,null,null,null,null,null,null,null];
    this.setState(this.theState)
  }

  previewPattern = ()=>{
    this.theState.preview = !this.theState.preview;
    this.theState.timelineSelect.bool = false;
    this.setState(this.theState, function(){
      if(this.state.preview){
        this.uploadColorPattern(true);
      }
    })
  }

  uploadColorPattern = (fromPreview)=>{
    console.log(fromPreview);
    if(fromPreview){
      this.fillEmptySpaces();       //the order of functions is : uploadColorPattern -> fillEmptySpaces -> buildColorString + fill -> patternToString + buildThreeDigits -> send!
    }
    else{
      this.theState.preview = false;
      this.setState(this.theState, function(){
        this.fillEmptySpaces();
      })
    }
  }

  postData = (data) =>{
    fetch('https://ps.pndsn.com/publish/pub-c-e868dd6e-aea2-4b32-9f05-b21bac0e6997/sub-c-cf99383a-7714-11e7-98e2-02ee2ddab7fe/0/theled/0', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then((response)=>{
      console.log(response);
    })
  }


  fillEmptySpaces = ()=>{
    let hasValues = false;
    let prePatternFill =[];                                   //this will hold objects of the color and interval till next for filling in the pattern
    for (var i = 0; i < this.state.pattern.length; i++) {     //this loops checks to see if any colors have been selected
      if(this.state.pattern[i] != null){
        hasValues = true;                                     //if hasValues is false, let the user know there is nothing to upload
      }
    }

    hasValues? console.log('the pattern has some values') : console.log("no values!!!");
    if(hasValues){
      for (var i = 0; i < this.state.pattern.length; i++) {       //this loops runs through the array of colors choosen
        if(this.state.pattern[i] != null){                        //if  a color has been picked at the index i - then we convert the color to rgb and move to the next loop to find how many empty vaues there are untill the next choosen color
          let colorTillNextObj = {};
          var hslToRGB = tinycolor(this.state.pattern[i]);
          rgbFormat = hslToRGB.toRgb();
          delete rgbFormat.a;
          colorTillNextObj['color'] = rgbFormat;
          let findNext = true;
          for (let j = i + 1; j < 10; j++) {                    //this loop finds the number of intervals untill the next color choosen (interval used later to fill in empty colors)
            if (this.state.pattern[j] != null && findNext == true) {    //if there is a color choosen and (findnext is true when were still looknig for the next color in the array)
              let next = j - i;                                         //saves the interval
              colorTillNextObj['intervalTillNext'] = next;
              findNext = false;                                       // find next is false because we found the next color
              prePatternFill.push(colorTillNextObj);
            }
          }
          if(findNext == true){                                     //if 'i' is on the last color, than the loop above would have never found the next color - so finding next would be true, which is an indicator of the end of the pattern
            colorTillNextObj['intervalTillNext'] = "";              // intervalTillNext with an empty string as the value indicated its the last color in the pattern
            prePatternFill.push(colorTillNextObj);
          }
        }
      }
      this.buildColorString(prePatternFill);                    // send the data to this function to convert its format to string
    }
  }

  buildColorString = (pattern)=>{
    let red = [];
    let green =[];
    let blue = [];
    for (let i=0; i<pattern.length; i++){                 //loops through the array of colors
      if(pattern[i]['intervalTillNext'] != ''){           //if the intervalTillNext value contains a number, than the current color, the next color and the difference between are sent to fill() to fill in the color values inbetween
        let myRed = this.fill(pattern[i]['color']['r'], pattern[i+1]['color']['r'], pattern[i]['intervalTillNext']);
        let myGreen = this.fill(pattern[i]['color']['g'], pattern[i+1]['color']['g'], pattern[i]['intervalTillNext']);
        let myBlue = this.fill(pattern[i]['color']['b'], pattern[i+1]['color']['b'], pattern[i]['intervalTillNext']);
        let normalized = this.normailzeFillColors(myRed, myGreen, myBlue);
        red = red.concat(normalized.red);
        green = green.concat(normalized.green);
        blue = blue.concat(normalized.blue);
      }
      else {                                                //this is triggered only for the last color in the array - it loops back around to the start of the pattern
        let myRed = this.fill(pattern[i]['color']['r'], pattern[0]['color']['r'], pattern[i]['intervalTillNext']);
        let myGreen = this.fill(pattern[i]['color']['g'], pattern[0]['color']['g'], pattern[i]['intervalTillNext']);
        let myBlue = this.fill(pattern[i]['color']['b'], pattern[0]['color']['b'], pattern[i]['intervalTillNext']);
        let normalized = this.normailzeFillColors(myRed, myGreen, myBlue);
        red = red.concat(normalized.red);
        green = green.concat(normalized.green);
        blue = blue.concat(normalized.blue);

      }
    }
    if(this.state.preview){
      this.previewData(red,green,blue);
    }
    else{
      this.patternToString(red, green, blue);                //the values of the pattern have been split into red, green and blue arrays (each array should be the same length)
    }
  }

  normailzeFillColors = (red,green,blue)=>{
    var normalized = {
      red: red,
      green: green,
      blue: blue
    };
    if(red.length == 1){
      return normalized;
    }
    else{
      for (var i = 0; i < red.length-1; i++) {

        let rgbFormat = "rgb(" + red[i] + ", " + green[i] + ", " + blue[i] + ")";
        rgbFormat = tinycolor(rgbFormat);
        let hslFormat = rgbFormat.toHsl();
        delete hslFormat.a
        hslFormat.s = 1;
        hslFormat.l = 0.5;
        hslFormat = tinycolor(hslFormat);
        rgbFormat = hslFormat.toRgb()
        delete rgbFormat.a;
        normalized.red[i] = rgbFormat.r
        normalized.green[i] = rgbFormat.g
        normalized.blue[i] = rgbFormat.b
      }
    }
    return normalized;
  }


  patternToString = (red, green, blue)=>{               //this function will take the red, green and blue arrays from buildColorString() -> converting the to 3 digit strings in order of r,g then b repeating
    let patternString = '';
    let threeDigits = {};
    for (var i = 0; i < red.length; i++) {                  // TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO
      if(i <= (red.length - 2)){                             // right here I should make sure all the colors values are 3 digits long
        threeDigits = this.buildThreeDigits(red[i], green[i], blue[i]);    //convert the values to 3 digit strings
        patternString = patternString + threeDigits.red + " ";
        patternString = patternString + threeDigits.green + " ";
        patternString = patternString + threeDigits.blue + " ";
      }
      else if(i == red.length -1){                                        //if its the last color in the pattern
        threeDigits = this.buildThreeDigits(red[i], green[i], blue[i])        //convert the values to 3 digit strings
        patternString = threeDigits.blue + " " + patternString;              // because of the original structure, the last value is actually the first- according to what the user built, so it gets added to the beginning of the string
        patternString = threeDigits.green + " " + patternString;
        patternString = threeDigits.red + " " + patternString;
      }
    }
    this.postData(patternString);                           //this function sends the data to the chip!!
  }





  buildThreeDigits = (red, green, blue)=>{                  // this function takes the red, green and blue values checks their current length, and append 0's to the beginning to make its length 3 digits
  red = red.toString();
  green = green.toString();
  blue = blue.toString();
  if(red.length == 1){
    red = "00" + red;
  }
  else if(red.length == 2){
    red = "0" + red;
  }
  if(green.length == 1){
    green = "00" + green;
  }
  else if(green.length == 2){
    green = "0" + green;
  }
  if(blue.length == 1){
    blue = "00" + blue;
  }
  else if(blue.length == 2){
    blue = "0" + blue;
  }
  var obj = {
    red: red,
    green: green,
    blue: blue
  };
  return obj;
}



fill =(colorOne, colorTwo, tillNext)=>{          //this function expect the raw value of R|G|B and the intervalTillNext
    if(typeof(tillNext)=='string'){              //till next is an empty string when its the alst value in the pattern, otherwise its a number
      tillNext = 1;
    }
    var diff = Math.abs(colorOne - colorTwo);                       // get the difference between the current color and the next color
    var num = 1/tillNext;
    let newArray = [];                                              //the first value we know- so we just need to fill the middle values
    for (let i=0; i<tillNext-1; i++){                              // its tillnext - 1 because we dont need to fill the last value, we just need to fill whats between them
      if(colorOne > colorTwo){
        newArray.push(Math.floor(colorOne-(num*diff)*(i+1)));       //-(num*diff) takes the  starting color and outputs a new value based on how much it needs to change --an example: color1={r;255,g:0,b:0} secondColor={r:10,g:0,b:0} which has red decreasing
      }                                                            // the *(i+1)  increases the value that it adds to the starting color
      else if(colorOne < colorTwo){
        newArray.push(Math.floor(colorOne+(num*diff)*(i+1)));       //--an example: color1={r;10,g:0,b:0} secondColor={r:255,g:0,b:0} which has red increasing
      }
      else if(colorOne == colorTwo){
        newArray.push(colorOne);
      }
    }
    newArray.push(colorTwo);                           // now that the middle values are computed, add the end value
    return newArray;
  }

  previewData = (red, green, blue)=>{
    let result = [];
    for (var i = -1; i < red.length-1; i++) {
      if(i==-1){
        let color = "rgb("+red[red.length-1] + ", " + green[green.length-1] + ", " + blue[blue.length-1] + ")"  ;
        result.push(color);
      }
      else{
        let color = "rgb("+red[i] + ", " + green[i] + ", " + blue[i] + ")";
        result.push(color);
      }
    }
  }


  timelineSelectfunction = (index)=>{
    this.theState.preview = false;
    this.theState.timelineSelect.bool = true;
    this.theState.timelineSelect.index = index;
    this.setState(this.theState);
  }


  pickingAColor = (e, color)=>{
    this.theState.preview = false;
    this.theState.colorPicker = e;
    this.setState(this.theState);
    this.theState.colorPicked  = "hsl(" + Math.floor(this.theState.colorPicker).toString() + ", 100%, 50%)";
  }

  colorSelect = (currentColor)=>{
    // this.theState.timelineSelect.bool = !this.theState.timelineSelect.bool;
    this.theState.pattern[this.theState.timelineSelect.index] = currentColor;
    this.setState(this.theState);
  }


  render() {
    return (
      <View style={styles.position}>
        <Image source={require('./images/backgroundtwo.jpg')} style={styles.image}/>
        <Control upload={this.uploadColorPattern} clear={this.clearPattern} preview={this.previewPattern}>
        </Control>
          <Timeline timelineSelectfunction={this.timelineSelectfunction} colors={this.state.pattern}></Timeline>
        <ColorPicker pickingAColor={this.pickingAColor} currentColor={this.theState.colorPicked} colorSelect={this.colorSelect} timelineSelect={this.state.timelineSelect} pattern={this.state.pattern}></ColorPicker>
        <Preview preview={this.state.preview}>
        </Preview>
      </View>

    );
  }
}



const styles = StyleSheet.create({
  contentContainer: {
    'paddingVertical': 20,
    // 'top': 100,
    'marginTop': '10%'
  },
  position: {
    'position': 'relative',
    // 'backgroundColor': 'pink',
    // height: '100%'
  },
  image:{
    position: 'absolute',
     top: 0,
     bottom: 0,
     left: 0,
     right: 0,
     width: '100%',
     height: '120%'
  }
});
