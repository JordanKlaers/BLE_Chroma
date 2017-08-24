import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry, Text, View, StyleSheet, Flatlist, ScrollView, TouchableHighlight, Alert} from 'react-native';
import Timeline from './components/timeline'
import ColorPicker from './components/colorPicker.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.position}>
        <ScrollView contentContainerStyle={styles.container}>
          <Timeline style={styles.time}></Timeline>

        </ScrollView>
      </View>
    );
  }
}

{/* <ColorPicker style={styles.box}>
  <Text>yo</Text>
</ColorPicker> */}

const styles = StyleSheet.create({
  container: {
    // height: '150%'
    // flex: 1,
    // backgroundColor: 'blue',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  time: {
    'top': 600,

    // 'position': 'absolute',
    // 'marginLeft': '50%',
    'width': 300,
    'height': 300,
    'backgroundColor': 'black'
  },
  position: {
    'position': 'relative'
  }
});
