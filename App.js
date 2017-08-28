import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry, Text, View, StyleSheet, Flatlist, ScrollView, TouchableHighlight, Alert} from 'react-native';
import Timeline from './components/timeline'
import ColorPicker from './components/colorPicker.js';

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
      }
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
    }
  }

  timelineSelectfunction = (index)=>{
    this.theState.timelineSelect.bool = !this.theState.timelineSelect.bool;
    this.theState.timelineSelect.index = index;
    console.log(index);
    this.setState(this.theState, function(){
      console.log(this.state);
    })
  }


  pickingAColor = (e, color)=>{
    this.theState.colorPicker = e
    this.setState(this.theState)
    this.theState.colorPicked  = "hsl(" + Math.floor(this.theState.colorPicker).toString() + ", 100%, 50%)"
  }

  colorSelect = (currentColor)=>{
    console.log(currentColor);
    this.theState.timelineSelect.bool = !this.theState.timelineSelect.bool;
    this.theState.pattern[this.theState.timelineSelect.index] = currentColor;
    this.setState(this.theState, function(){
      console.log(this.state);
    })
  }


  render() {
    return (
      <View style={styles.position}>
        <ScrollView contentContainerStyle={styles.container}>
          <Timeline timelineSelectfunction={this.timelineSelectfunction}></Timeline>
          <ColorPicker pickingAColor={this.pickingAColor} currentColor={this.theState.colorPicked} colorSelect={this.colorSelect} timelineSelect={this.state.timelineSelect}></ColorPicker>
        </ScrollView>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    // height: '150%'
    // flex: 1,
    // backgroundColor: 'blue',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  position: {
    'position': 'relative'
  }
});
