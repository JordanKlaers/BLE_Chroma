import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Flatlist, ScrollView, TouchableHighlight, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


var styles = StyleSheet.create({
  line: {
    'position': 'relative',
    'left': '10%',
    'top': '5%',
    'marginLeft': 29,
    'marginTop': '10%',
    'width': 6,
    'height': 600,
    'backgroundColor': 'black'
  },
  box1: {
    'position': 'relative',
    'top': '30%',
    'left': '10%',
    'width': 64,
    'height': 64,
    'backgroundColor': 'white',
    "borderRadius": 32,
    'borderColor': 'black',
    'borderWidth': 3,
    'zIndex': 3
  },
  box2: {
    'position': 'relative',
    'top': '40%',
    'left': '10%',
    'width': 64,
    'height': 64,
    'backgroundColor': 'white',
    "borderRadius": 32,
    'borderColor': 'black',
    'borderWidth': 3,
    'zIndex': 3
  },
  box3: {
    'position': 'relative',
    'top': '50%',
    'left': '10%',
    'width': 64,
    'height': 64,
    'backgroundColor': 'white',
    "borderRadius": 32,
    'borderColor': 'black',
    'borderWidth': 3,
    'zIndex': 3
  },
  box4: {
    'position': 'relative',
    'top': '60%',
    'left': '10%',
    'width': 64,
    'height': 64,
    'backgroundColor': 'white',
    "borderRadius": 32,
    'borderColor': 'black',
    'borderWidth': 3,
    'zIndex': 3
  },
  box5: {
    'position': 'relative',
    'top': '70%',
    'left': '10%',
    'width': 64,
    'height': 64,
    'backgroundColor': 'white',
    "borderRadius": 32,
    'borderColor': 'black',
    'borderWidth': 3,
    'zIndex': 3
  },
  box6: {
    'position': 'relative',
    'top': '80%',
    'left': '10%',
    'width': 64,
    'height': 64,
    'backgroundColor': 'white',
    "borderRadius": 32,
    'borderColor': 'black',
    'borderWidth': 3,
    'zIndex': 3
  },
  box7: {
    'position': 'relative',
    'top': '90%',
    'left': '10%',
    'width': 64,
    'height': 64,
    'backgroundColor': 'white',
    "borderRadius": 32,
    'borderColor': 'black',
    'borderWidth': 3,
    'zIndex': 3
  },
  box8: {
    'position': 'relative',
    'top': '100%',
    'left': '10%',
    'width': 64,
    'height': 64,
    'backgroundColor': 'white',
    "borderRadius": 32,
    'borderColor': 'black',
    'borderWidth': 3,
    'zIndex': 3
  },
  box9: {
    'position': 'relative',
    'top': '110%',
    'left': '10%',
    'width': 64,
    'height': 64,
    'backgroundColor': 'white',
    "borderRadius": 32,
    'borderColor': 'black',
    'borderWidth': 3,
    'zIndex': 3
  },
  box10: {
    'position': 'relative',
    'top': '120%',
    'left': '10%',
    'width': 64,
    'height': 64,
    'backgroundColor': 'white',
    "borderRadius": 32,
    'borderColor': 'black',
    'borderWidth': 3,
    'zIndex': 3
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  container:{
    'top': '20%',
    'left': '10%',
    'height': 1000,
    'backgroundColor': 'yellow',
    'width': 100  
    // 'flex': 1,
    // 'justifyContent': 'center',
    // 'backgroundColor': 'blue'
  }
});

export default class Timeline extends Component {


  constructor(props) {
    super(props);
    this.state = {click: "clicked"};
  }

  postData = () =>{
    console.log("hitting the beginning");
    fetch('https://ps.pndsn.com/publish/pub-c-e868dd6e-aea2-4b32-9f05-b21bac0e6997/sub-c-cf99383a-7714-11e7-98e2-02ee2ddab7fe/0/theled/0', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify("0,0,0,255,255,255 ")
    }).then((response)=>{
      console.log(response);
    })
    console.log("hitting the end");
  }




  render() {
    return (
      <View>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.line}>
          </View>
          <TouchableHighlight style={styles.box1} onPress={() => this.postData() }>
            <View >
            </View>
          </TouchableHighlight>

          <View style={styles.box2} onPress={() => { Alert.alert('You tapped dot 2!')}}>
          </View>
          <View style={styles.box3} onPress={() => { Alert.alert('You tapped dot 3!')}}>
          </View>
          <View style={styles.box4} onPress={() => { Alert.alert('You tapped dot 4!')}}>
          </View>
          <View style={styles.box5} onPress={() => { Alert.alert('You tapped dot 5!')}}>
          </View>
          <View style={styles.box6} onPress={() => { Alert.alert('You tapped dot 6!')}}>
          </View>
          <View style={styles.box7} onPress={() => { Alert.alert('You tapped dot 7!')}}>
          </View>
          <View style={styles.box8} onPress={() => { Alert.alert('You tapped dot 8!')}}>
          </View>
          <View style={styles.box9} onPress={() => { Alert.alert('You tapped dot 9!')}}>
          </View>
          <View style={styles.box10} onPress={() => { Alert.alert('You tapped dot 10!')}}>
          </View>



        </ScrollView>
      </View>
    );
  }
}

// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);
{/* <View style={styles.box4}>
</View>
<View style={styles.box5}>
</View>
<View style={styles.box6}>
</View>
<View style={styles.box7}>
</View>
<View style={styles.box8}>
</View>
<View style={styles.box9}>
</View>
<View style={styles.box10}>
</View>
<View style={styles.box11}>
</View>
<View style={styles.box12}>
</View>
<View style={styles.box13}>
</View>
<View style={styles.box14}>
</View>
<View style={styles.box15}>
</View>
<View style={styles.box16}>
</View>
<View style={styles.box17}>
</View>
<View style={styles.box18}>
</View>
<View style={styles.box19}>
</View>
<View style={styles.box20}>
</View>
<View style={styles.box21}>
</View>
<View style={styles.box22}>
</View>
<View style={styles.box23}>
</View>
<View style={styles.box24}>
</View>
<View style={styles.box25}>
</View>
<View style={styles.box26}>
</View>
<View style={styles.box27}>
</View>
<View style={styles.box28}>
</View>
<View style={styles.box29}>
</View>
<View style={styles.box30}>
</View> */}
