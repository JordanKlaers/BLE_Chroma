import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Flatlist, ScrollView, TouchableHighlight, Alert, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ColorPicker from './colorPicker.js';


var styles = StyleSheet.create({
  line: {
    'position': 'relative',
    // 'left': '10%',
    'top': 10,
    'marginLeft': '47%',
    'marginTop': '30%',
    // 'marginBottom': '15%',
    'width': 0,
    "height": '92%',
    // 'height': 1200,
    // 'backgroundColor': 'black',
    'borderRadius': 3,
    'borderColor': 'black',
    'borderWidth': 3
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  container:{
    'position': 'relative',
    'top': 70,
    'left': '7%',
    'borderRadius': 15,
    'borderColor': 'black',
    'borderWidth': 5,
    'height': 400,
    'backgroundColor': 'rgba(0, 0, 0, .5)',
    'width': 100
  }
});

export default class Timeline extends Component {


  constructor(props) {
    super(props);
    this.state = {click: "clicked"};
  }


  render() {
    var selectorTopArray = [29,157,285,413,541,669,797,925,1053,1181,-100];

    var selectorTop = selectorTopArray[this.props.index] || -100;
    var dynamicStyle = {
      signal: {
        'position': 'absolute',
        'top': selectorTop,              //dot 1 is 29 +64 i think [29,157,285,413,541,669,797,925,1053,1181]
        'left': '8%',
        'width': 140,
        'height': 140,
        'zIndex': 2,

      },
      one: {'position': 'relative',
      'marginBottom': 64,
      // 'marginTop': '-315%',
      'top': -1200,
      'left': '15%',
      'width': 64,
      'height': 64,
      'backgroundColor': this.props.colors[0] || "white",
      "borderRadius": 32,
      'borderColor': 'black',
      'borderWidth': 3,
      'zIndex': 3},
      two: {
        'position': 'relative',
        'marginBottom': 64,
        // 'top': '-50%',
        'top': -1200,
        'left': '15%',
        'width': 64,
        'height': 64,
        'backgroundColor': this.props.colors[1] || "white",
        "borderRadius": 32,
        'borderColor': 'black',
        'borderWidth': 3,
        'zIndex': 3
      },
      three: {
        'position': 'relative',
        'marginBottom': 64,
        // 'top': '-40%',
        'top': -1200,
        'left': '15%',
        'width': 64,
        'height': 64,
        'backgroundColor': this.props.colors[2] || "white",
        "borderRadius": 32,
        'borderColor': 'black',
        'borderWidth': 3,
        'zIndex': 3
      },
      four: {
        'position': 'relative',
        'marginBottom': 64,
        // 'top': '-30%',
        'top': -1200,
        'left': '15%',
        'width': 64,
        'height': 64,
        'backgroundColor': this.props.colors[3] || 'white',
        "borderRadius": 32,
        'borderColor': 'black',
        'borderWidth': 3,
        'zIndex': 3
      },
      five: {
        'position': 'relative',
        'marginBottom': 64,
        // 'top': '-20%',
        'top': -1200,
        'left': '15%',
        'width': 64,
        'height': 64,
        'backgroundColor': this.props.colors[4] ||'white',
        "borderRadius": 32,
        'borderColor': 'black',
        'borderWidth': 3,
        'zIndex': 3
      },
      six: {
        'position': 'relative',
        'marginBottom': 64,
        // 'top': '-10%',
        'top': -1200,
        'left': '15%',
        'width': 64,
        'height': 64,
        'backgroundColor': this.props.colors[5] ||'white',
        "borderRadius": 32,
        'borderColor': 'black',
        'borderWidth': 3,
        'zIndex': 3
      },
      seven: {
        'position': 'relative',
        'marginBottom': 64,
        // 'top': '0%',
        'top': -1200,
        'left': '15%',
        'width': 64,
        'height': 64,
        'backgroundColor': this.props.colors[6]||'white',
        "borderRadius": 32,
        'borderColor': 'black',
        'borderWidth': 3,
        'zIndex': 3
      },
      eight: {
        'position': 'relative',
        'marginBottom': 64,
        // 'top': '10%',
        'top': -1200,
        'left': '15%',
        'width': 64,
        'height': 64,
        'backgroundColor': this.props.colors[7] ||'white',
        "borderRadius": 32,
        'borderColor': 'black',
        'borderWidth': 3,
        'zIndex': 3
      },
      nine: {
        'position': 'relative',
        'marginBottom': 64,
        // 'top': '20%',
        'top': -1200,
        'left': '15%',
        'width': 64,
        'height': 64,
        'backgroundColor': this.props.colors[8] || 'white',
        "borderRadius": 32,
        'borderColor': 'black',
        'borderWidth': 3,
        'zIndex': 3
      },
      ten: {
        'position': 'relative',
        'marginBottom': 64,
        // 'top': '30%',
        'top': -1200,
        'left': '15%',
        'width': 64,
        'height': 64,
        'backgroundColor':  this.props.colors[9] || 'white',
        "borderRadius": 32,
        'borderColor': 'black',
        'borderWidth': 3,
        'zIndex': 3
      }
    }

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.line}>
          </View>
          <Image source={require('../images/circle.png')} style={dynamicStyle.signal}/>
          <TouchableHighlight style={dynamicStyle.one} onPress={() => this.props.timelineSelectfunction(0) }>
            <View >
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={dynamicStyle.two} onPress={() => this.props.timelineSelectfunction(1) }>
            <View >
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={dynamicStyle.three} onPress={() => this.props.timelineSelectfunction(2) }>
            <View >
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={dynamicStyle.four} onPress={() => this.props.timelineSelectfunction(3) }>
            <View >
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={dynamicStyle.five} onPress={() => this.props.timelineSelectfunction(4) }>
            <View >
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={dynamicStyle.six} onPress={() => this.props.timelineSelectfunction(5) }>
            <View >
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={dynamicStyle.seven} onPress={() => this.props.timelineSelectfunction(6) }>
            <View >
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={dynamicStyle.eight} onPress={() => this.props.timelineSelectfunction(7) }>
            <View >
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={dynamicStyle.nine} onPress={() => this.props.timelineSelectfunction(8) }>
            <View >
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={dynamicStyle.ten} onPress={() => this.props.timelineSelectfunction(9) }>
            <View >
            </View>
          </TouchableHighlight>
        </ScrollView>
      </View>
    );
  }
}
