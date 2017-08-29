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
      'backgroundColor': 'rgba(0,0,0,.3)',
      'borderRadius': 20,
      'borderColor': 'green',
      'borderWidth': 3,
      'width': '90%',
      'height': 155,
    },
    preview: {
      'position': 'absolute',
      'width': '42%',
      'height': 60,
      'marginLeft': '4%',
      // 'marginRight': '5%',
      'marginTop': 10,
      'backgroundColor': 'blue',
      'borderRadius': 15,
      'borderColor': 'black',
      'borderWidth': 3
    },
    clear: {
      'position': 'absolute',
      'width': '41%',
      'height': 60,
      'marginLeft': '52%',
      // 'marginRight': '5%',
      'marginTop': 10,
      'backgroundColor': 'red',
      'borderRadius': 15,
      'borderColor': 'black',
      'borderWidth': 3,
    },
    upload: {
      'position': 'absolute',
      'width': '92%',
      'height': 60,
      'marginLeft': '4%',
      'marginTop': 80,
      'borderRadius': 15,
      'borderColor': 'black',
      'borderWidth': 3
    }
  });

  componentDidMount(){

  }


  render() {

      return (
        <View style={this.styles.container}>
          <TouchableHighlight style={this.styles.preview}>

              <Text>
                preview
              </Text>

          </TouchableHighlight>
          <TouchableHighlight style={this.styles.clear}>

              <Text>
                Select
              </Text>

          </TouchableHighlight>
          <TouchableHighlight style={this.styles.upload} onPress={() => this.props.upload() }>
            <View>
              <Text>
                Select
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      );

    }

}
