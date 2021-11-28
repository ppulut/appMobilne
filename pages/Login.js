// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import * as React from 'react';
import {Button, View, StyleSheet, TextInput, SafeAreaView} from 'react-native';
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';


function Login({ navigation }) {

    
  return (
    <SafeAreaView style={{flex: 1}} name="Login">
    <View style={styles.tlo}>
      <TextInput style={{fontSize: 18, textAlign: 'center', color: 'grey'}}
      mx="3"
      placeholder="Login"
      w={{
        base: "75%",
        md: "25%",
      }}
    />

      <TextInput style={{fontSize: 18, textAlign: 'center', color: 'grey', padding:10, marginBottom:5}}
      mx="6"
      placeholder="Hasło"
      w={{
        base: "75%",
        md: "45%",
      }}
    />

      <Button
            onPress={() => navigation.navigate('Home')}
            title="Go to home"
          />
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
});

export default Login;
