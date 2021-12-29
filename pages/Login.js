// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import * as React from 'react';
import {Text, TouchableOpacity, Button, View, StyleSheet, TextInput, SafeAreaView} from 'react-native';
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';


function Login({ navigation }) {

    
  return (
    <SafeAreaView style={{flex: 1}} name="Login">
      <View style={styles.sectionStyle,{flex: 1, padding: 16, alignItems: 'center',
            justifyContent: 'center',}}>
      
          <Text
            style={{
              fontSize: 25,
              textAlign: 'bottom',
              marginBottom: 16,
            }}>
            Logowanie
          </Text>

    <View style={styles.sectionStyle}>
      <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/ppulut/appMobilne/3b2b9681aced2955c3e1d4823341bc9b3b4d142c/icons/name.svg',
            }}
            style={styles.imageStyle}
          />    
      <TextInput
        placeholder="Nazwa"
    />
    </View>

    <View style={styles.sectionStyle}>
      <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/ppulut/appMobilne/a99cdf037a5f16e3563edfe9b83b44df80ba5284/icons/money.svg',
            }}
            style={styles.imageStyle}
          />
      <TextInput
        placeholder="Cena"
    />
    </View>

      <TouchableOpacity
          onPress={() => navigation.navigate('Home')}  
          style={styles.butony}
      >
        <Text style={styles.textStyle}>Zaloguj</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({

    sectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: 0.5,
      borderColor: '#000',
      height: 40,
      borderRadius: 5,
      margin: 10,
    },

    inputy: {
      fontSize: 18, 
      textAlign: 'center', 
      color: 'grey',
      mx: 6,
      borderWidth: 1,
      borderColor: 'rgb(111, 121, 247)',
      padding: 5,
      marginTop: 10,
      marginBottom: 16,
      base: "75%",
      md: "45%",
      underlineColorAndroid:"transparent",
    },

    butony: {
      marginTop: 12,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'rgb(96, 112, 128)',
      color: 'rgb(50, 168, 82)',
    },

    imageStyle: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode: 'stretch',
      alignItems: 'center',
    },

    textStyle:{
      fontSize: 25,
      color: 'rgb(167, 219, 214)',
    }

});

export default Login;
