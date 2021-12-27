// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import * as React from 'react';
import {Text, TouchableOpacity, Button, View, StyleSheet, TextInput, SafeAreaView} from 'react-native';
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';


function Login({ navigation }) {

    
  return (
    <SafeAreaView style={{flex: 1}} name="Login">
    <View style={styles.tlo}>
      <TextInput style={styles.inputy}
      placeholder="Login"
      w={{
        base: "75%",
        md: "45%",
      }}
    />

      <TextInput 
      secureTextEntry={true}
      style={styles.inputy}
      placeholder="Hasło"
      w={{
        base: "75%",
        md: "45%",
        
      }}
    />

      <TouchableOpacity
          onPress={() => navigation.navigate('Home')}  
          style={styles.butony}
      >
        <Text>Zaloguj</Text>
      
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  tlo: {
      backgroundColor: 'rgb(247, 247, 247)',
      fontSize: 15,
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      navbarBackgroundColor: '#2c3e50',
      statusBarColor: '#233240'
    },

    inputy: {
      fontSize: 18, 
      textAlign: 'center', 
      color: 'grey',
      mx: 6,
      borderWidth: 1,
      borderColor: 'rgb(111, 121, 247)',
      padding: 5,
      marginTop: 10
    },

    butony: {
      marginTop: 12,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'rgb(96, 112, 128)',
      color: 'rgb(50, 168, 82)',
    }

});

export default Login;
