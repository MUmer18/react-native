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
import Home from './Home';

const App: () => React$Node = () => {
  const data = "Login"
  return (
    

    <View style={{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
    }}>
      <Home data={data} />
      <Text style={{fontSize:15}}>Please signin to continue</Text>
      <View style={{width:"80%",margin:20,}}></View>
     <TextInput placeholder="Email" style={{
        backgroundColor:"#eaeaea",
        borderWidth: 0,
        padding: 5,
        width: 300,
    
      }} />
      <TextInput placeholder="password" placeholderTextColor="000" style={{
        backgroundColor:"#eaeaea",
        borderWidth: 0,
        padding: 5,
        width: 300,
        marginTop:20}}/>

        <View style={{
          marginTop:20,        
  
            width: 300,
            marginTop:20
          }}> 
        <Button title="Login" color="#ff0000" onPress={() =>{
          alert("Button Passed")
        }}
        
        
        />
        </View>


    </View>
  );
};



// export default App;

