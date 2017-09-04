import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Flatlist, ScrollView, TouchableHighlight, Alert, Slider} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';




export default class Control extends Component {


  constructor(props) {
    super(props);
    this.state = {click: "clicked"};
  }

  styles = StyleSheet.create({
    container: {
      'position': 'relative',
      'top': 30,
      'marginLeft': '5%',
      'backgroundColor': 'rgba(0,0,0,.5)',
      'borderRadius': 20,
      'borderColor': 'black',
      'borderWidth': 5,
      'width': '90%',
      'height': 160,
    },
    preview: {
      'position': 'absolute',
      'width': '47%',
      'height': 56,
      'marginLeft': '2%',
      // 'marginRight': '5%',
      'marginTop': 12,
      'backgroundColor': "white",
      'borderRadius': 15,
      'borderColor': 'black',
      'borderWidth': 5
    },
    clear: {
      'position': 'absolute',
      'width': '44%',
      'height': 56,
      'marginLeft': '52%',
      // 'marginRight': '5%',
      'marginTop': 12,
      'backgroundColor': 'white',
      'borderRadius': 15,
      'borderColor': 'black',
      'borderWidth': 5,
    },
    upload: {
      'position': 'absolute',
      'width': '96%',
      'height': 56,
      'marginLeft': '2%',
      'marginTop': 80,
      'backgroundColor': 'white',
      'borderRadius': 15,
      'borderColor': 'black',
      'borderWidth': 5,
      'overflow': 'hidden'
    },
    text: {
      'textAlign': 'center',
      'fontSize': 30,
      'marginTop': 0
    }
  });

  componentDidMount(){

  }


  render() {

      return (
        <View style={this.styles.container}>
          <TouchableHighlight style={this.styles.preview} onPress={() => this.props.preview() }>
              <Text style={this.styles.text}>
                Preview
              </Text>
          </TouchableHighlight>
          <TouchableHighlight style={this.styles.clear} onPress={() => this.props.navigate('Control')/*this.props.clear()*/ }>
              <Text style={this.styles.text}>
                Clear
              </Text>
          </TouchableHighlight>
          <TouchableHighlight style={this.styles.upload}  onPress={() => this.props.upload(false) }>
              <Text style={this.styles.text}>
                Upload
              </Text>
          </TouchableHighlight>
        </View>
      );

    }

}
