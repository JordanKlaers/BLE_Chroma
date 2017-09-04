import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry, Text, View, StyleSheet, Flatlist, ScrollView, TouchableHighlight, Alert, Image} from 'react-native';
import Timeline from './timeline'
import ColorPicker from './colorPicker.js';
import Control from './control.js';
import Preview from './preview.js';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorPicked : "hsl(0, 100%, 50%)",
      pattern: [null,null,null,null,null,null,null,null,null,null],
      previewPattern: [null,null,null,null,null,null,null,null,null,null],
      sliderArray: [null,null,null,null,null,null,null,null,null,null],
      liveSliderValue: 0,
      timelineSelect:{
        bool: false,
        index: -1
      },
      preview: false,
    };
  }

  theState = {
    colorPicked : "hsl(0, 100%, 50%)",
    pattern: [null,null,null,null,null,null,null,null,null,null],
    previewPattern: [null,null,null,null,null,null,null,null,null,null],
    sliderArray: [null,null,null,null,null,null,null,null,null,null],
    liveSliderValue: 0,
    timelineSelect:{
      bool: false,
      index: -1
    },
    preview: false,
    opacity: 0,
  };

  static navigationOptions = {
    header: null
  };


  render() {
    console.log(this.props.navigation, "something");
      return (
        <View style={styles.position}>
          <Image source={require('../images/splash.jpg')} style={styles.image}/>
          <TouchableHighlight style={styles.title} onPress={() => {this.props.navigation.navigate('Splash')}/*this.props.clear()*/ }>

            <View style={styles.upload}>
              <Text style={styles.text}>
                Chroma Crown
              </Text>
            </View>

          </TouchableHighlight>
        </View>
      );
    }
}



const styles = StyleSheet.create({
  position: {
    'position': 'relative',
    'height': '100%',
    'width':  '100%'
  },
  image:{
    position: 'absolute',
     top: 0,
     bottom: 0,
     left: 0,
     right: 0,
     width: '100%',
     height: '120%'
  },
  title: {
    'position': 'relative',
    'top': 30,
    'marginLeft': '5%',
    'backgroundColor': 'rgba(0,0,0,.5)',
    'borderRadius': 20,
    'borderColor': 'black',
    'borderWidth': 5,
    'width': '90%',
    'height': 100,
  },
  text: {
    'textAlign': 'center',
    'fontSize': 40,
    'marginTop': 0
  },
  upload: {
    'position': 'absolute',
    'width': '96%',
    'height': 56,
    'marginLeft': '2%',
    'marginTop': 12,
    'backgroundColor': 'white',
    'borderRadius': 15,
    'borderColor': 'black',
    'borderWidth': 5,
    'overflow': 'hidden'
  }
});
