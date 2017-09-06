import React from 'react';
import { Animated, AppRegistry, Text, View, StyleSheet, Flatlist, ScrollView, TouchableHighlight, Alert, Image} from 'react-native';
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
      needHelp: false
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
    needHelp: false
  };

  static navigationOptions = {
    header: null
  };

  value = undefined;

  help = ()=>{
      this.state.animateValue = new Animated.Value(1);
      Animated.timing(
        this.state.animateValue,
        {
          toValue: 1,
          duration: 2000,
        }
      ).start((e)=>{
        console.log(this.value);
      });
      this.value = this.state.animateValue.interpolate({
        inputRange: [0,1],
        outputRange: [60,300]
      });

  }
  needHelpFunction =()=>{
    this.theState.needHelp = !this.theState.needHelp;
    this.setState(this.theState);
  }

  render() {

    const helpContainer ={
        'position': 'relative',
        'top': '7%',
        'marginLeft': '25%',
        'marginTop': '5%',
        'backgroundColor': 'rgba(0,0,0,.5)',
        'borderRadius': 20,
        'borderColor': 'black',
        'borderWidth': 5,
        'width': '50%',
        'height': this.value || 70,
    }
    const helpWindowContainer ={
      'position': 'relative',
      'top': '5%',
      'marginLeft': '5%',
      'marginTop': '5%',
      'backgroundColor': 'rgba(0,0,0,.5)',
      'borderRadius': 20,
      'borderColor': 'black',
      'borderWidth': 5,
      'width': '90%',
      'height': 270,
    }
    const helpWindowContainerHidden ={
      'position': 'relative',
      'top': '5%',
      'marginLeft': '5%',
      'marginTop': '5%',
      'backgroundColor': 'rgba(0,0,0,.5)',
      'borderRadius': 20,
      'borderColor': 'black',
      'borderWidth': 5,
      'width': '90%',
      'height': 270,
      'opacity': 0
    }
    const helpWindow = {
      'position': 'absolute',
      'width': '94%',
      'height': 244,
      'marginLeft': '3%',
      'marginTop': 8,
      'marginBottom': 8,
      'backgroundColor': 'white',
      'borderRadius': 15,
      'borderColor': 'black',
      'borderWidth': 5,
    }
    const scroll ={
      'height': 840,
      'padding': 10
    }
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

          <View style={this.state.needHelp ? helpWindowContainer : helpWindowContainerHidden}>
            <View style={helpWindow}>
            <ScrollView contentContainerStyle={scroll}>
                <Text style={styles.textHelpWindowIntro}>
                  Chroma Crown is a controller for your beautiful LED strip. Use the app to construct magnificent color patterns to be displayed on the LED strip.
                </Text>
                <Text>

                </Text>
                <Text style={styles.textHelpWindow}>
                  How to use:
                </Text>
                <Text>

                </Text>
                <Text>
                   - Tap continue to navigate to the control panel.
                </Text>
                <Text>
                  - The dots on the left represent a timeline in which the LED's will loop when uploaded. Each dot is roughly one second apart. Drag the dots on the left up and down.
                </Text>
                <Text>
                  - Select a dot to load the color selection panel. An indicator will appear showing which dot you have selected.
                </Text>
                <Text>
                  - Drag the slider left or right on the color selection panel to choose any color in the rainbow. Tap select to apply the color to the dot you selected in the previous step.
                </Text>
                <Text>
                  - Tap the clear button at the top, to start with a blank canvas.
                </Text>
                <Text>
                  - Tap the preview button at the top, to see a preview of what you can expect the LEDs to look like if you upload your current pattern.
                </Text>
                <Text>
                  - Tap the upload button at the top, to send your current pattern to the LEDs.
                </Text>
                <Text>

                </Text>
                <Text style={styles.textHelpWindow}>
                  Extras:
                </Text>
                <Text>

                </Text>
                <Text>
                  - If you select red on the first dot, then green on the third dot, it will take two seconds to fade from red to green, then one second to fade from the end of the pattern back to the beginning.
                </Text>
                <Text>
                  - Choosing to fade between colors that are closer to each other on the spectrum can produce a more desirable transition. For example, if you fade from red to yellow, you will see a nice orange in between, but if you fade from red to blue, the colors in between might be unpredictable.
                </Text>

          </ScrollView>
        </View>
          </View>

          <TouchableHighlight style={styles.continueContainer} onPress={() => {this.props.navigation.navigate('Splash')}/*this.props.clear()*/ }>
          <View style={styles.continue}>
            <Text  style={styles.textContinue}>
              Start Creating
            </Text>
          </View>
        </TouchableHighlight>

          <TouchableHighlight style={helpContainer} onPress={() => {this.needHelpFunction()}}>
            <View style={styles.help}>
              <Text style={styles.textHelp}>
                Help
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
    'top': 25,
    'marginLeft': '5%',
    'marginTop': '5%',
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
    'marginTop': 0,
  },
  textHelpWindow: {
    'fontSize': 20
  },
  textHelpWindowIntro: {
    'fontSize': 20,
    'marginBottom': 20
  },
  textHelp: {
    'textAlign': 'center',
    'fontSize': 25,
    'marginTop': 3,
    // 'fontWeight': 'bold'
  },
  textContinue: {
    'textAlign': 'center',
    'fontSize': 30,
    'marginTop': 0,
    // 'fontWeight': 'bold'
  },
  upload: {
    'position': 'absolute',
    'width': '94%',
    'height': 70,
    'marginLeft': '3%',
    'marginTop': 10,
    'marginBottom': 5,
    'backgroundColor': 'white',
    'borderRadius': 15,
    'borderColor': 'black',
    'borderWidth': 5,
    'overflow': 'hidden'
  },
  continueContainer: {
    'position': 'relative',
    'top': '7%',
    'marginLeft': '5%',
    'marginTop': '5%',
    'backgroundColor': 'rgba(0,0,0,.5)',
    'borderRadius': 20,
    'borderColor': 'black',
    'borderWidth': 5,
    'width': '90%',
    'height': 70,
  },
  continue: {
    'position': 'absolute',
    'width': '94%',
    'height': 50,
    'marginLeft': '3%',
    'marginTop': 5,
    'marginBottom': 5,
    'backgroundColor': 'white',
    'borderRadius': 15,
    'borderColor': 'black',
    'borderWidth': 5,
    'overflow': 'hidden'
  },
  help: {
    'position': 'absolute',
    'width': '94%',
    'height': 50,
    'marginLeft': '3%',
    'marginTop': 5,
    'marginBottom': 5,
    'backgroundColor': 'white',
    'borderRadius': 15,
    'borderColor': 'black',
    'borderWidth': 5,
    'overflow': 'hidden'
  }
});
