/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { red } from 'color-name';
// import console = require('console');
// import console = require('console');


class App extends React.Component {
constructor(){
  super();
  this.state={
    name: "",
    password: " ",
    address: " ",
  }
}
submit(){
  console.warn("all values", this.state)
}
  render() {
  return (
    <View>
      <TextInput placeholder="name" style={styles.textBox}
      onChangeText = {(text) => {this.setState=({name: text})}}
      >
      
      </TextInput>
      <TextInput placeholder="password" style={styles.textBox} 
      secureTextEntry = {true}
      onChangeText={(text)=> {this.setState =({password:text})}}
      >
      </TextInput>

      <TextInput placeholder="addresss" style={styles.textBox}
      onChangeText={(text)=> {this.setState =({address : text})}}
      >
      </TextInput>
     
      <Button onPress={()=>{this.submit()}} title="Submit"/>     
    </View>
  );
  }
};

const styles = StyleSheet.create({
  textBox:{
    borderColor: "skyblue",
    borderWidth:1,
    padding: 10,
    marginHorizontal:20,
    marginVertical:25
  }
})

export default App;
