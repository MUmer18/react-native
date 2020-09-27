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


class App extends React.Component {
  constructor() {
    super();
    this.state={
      data : "Some App State" 
    }
  }
  render() {
  return (
    <View>

      <Text style={{fontSize:30}}>
      {this.state.data}     
      </Text>    
      <Button title="Updste State" onPress={()=>{this.setState({data: "Some App Data Updated"})}}/>

    </View>
  );
  }
};



export default App;
