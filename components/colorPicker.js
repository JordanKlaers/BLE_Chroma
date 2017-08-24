import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Flatlist, ScrollView, TouchableHighlight, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';




export default class ColorPicker extends Component {


  constructor(props) {
    super(props);
    this.state = {click: "clicked"};
  }






  render() {
    return (
      <View>
      <View style={styles.box}>

      </View>
    </View>
    );
  }
}


var styles = StyleSheet.create({
  box: {
    'position': 'absolute',
    // 'marginLeft': '50%',
    // 'marginTop': '-100%',
    'width': 300,
    'height': 300,
    'backgroundColor': 'black'
  }
});





{/* <ScrollView contentContainerStyle={styles.container}>
  <TouchableHighlight style={styles.box1} onPress={() => this.postData() }>
    <View >
    </View>
  </TouchableHighlight>

  <View style={styles.box2} onPress={() => { Alert.alert('You tapped dot 2!')}}>
  </View>
  <View style={styles.box3} onPress={() => { Alert.alert('You tapped dot 3!')}}>
  </View>

  <View style={styles.line}>






  </View>


</ScrollView> */}
