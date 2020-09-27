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
// import Home from './Home';
// import { wrap } from 'module';

const App: () => React$Node = () => {
  
  return (
    
    <View style={{flex:1, flexWrap:"wrap", alignItems:"flex-start",flexDirection:"column", justifyContent: "space-between"}}>  
      <View style={{flex:1, width:120, height:120, backgroundColor: "blue",}}></View>
      <View style={{flex:1, width:120, height:120, backgroundColor: "green"}}></View>
      <View style={{flex:1, width:120, height:120, backgroundColor: "red"}}></View>
      

    </View>
  );
};


 export default App;

