// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import React, { useState } from 'react';
import {Text, Image, View, StyleSheet, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';
import HomeScreen from './HomeScreen';
import Rejestracja from './Rejestracja';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';

function Login({ navigation }) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [click, setClick] = useState(false);

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
    {/*login*/ }
    <View style={styles.sectionStyle}>
      <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/ppulut/appMobilne/750404e5f9b569d4008cd5694a89c3ebc0c407d1/icons/login.svg',
            }}
            style={styles.imageStyle}
          />    
        <TextInput
            placeholder="Login"
            onChangeText={setLogin}  
    />
    </View>
    {/*haslo*/}
    <View style={styles.sectionStyle}>
      <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/ppulut/appMobilne/750404e5f9b569d4008cd5694a89c3ebc0c407d1/icons/password.svg',
            }}
            style={styles.imageStyle}
          />
      <TextInput
      secureTextEntry="true"
      placeholder="Hasło"
      onChangeText={setPassword}
    />
    </View>

      <TouchableOpacity
          disabled={click}          
          style={styles.butony}
          onPress={
                () => {
                    axios.get('http://localhost:3000/users', {
                    params: { username: login, password: password }
                    }).then(response => {
                        setClick(true)
                        if (Object.keys(response.data).length == 0) {
                            alert("Blędne haslo lub login");
                            console.log(response.data);
                        } else {
                            console.log(response.data[0].id);
                            console.log(login);
                            navigation.navigate('Home', {
                                userId: response.data[0].id,
                                userlogin: response.data[0].login,
                                userpassword: response.data[0].password,                                
                                username: response.data[0].name,
                                userlast_name: response.data[0].last_name,
                                userurl: response.data[0].avatarUrl,                                
                            });
                        }
                        setClick(false)
                    }).catch(error => {
                        console.log(error);
                    });
                }}
      >
        <Text style={styles.textStyle}>Zaloguj</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => navigation.navigate('Rejestracja')}
            style={styles.butony}
        >
            <Text style={styles.textStyle}>Rejestracja</Text>
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
      //mx: 6,
      borderWidth: 1,
      borderColor: 'rgb(111, 121, 247)',
      padding: 5,
      marginTop: 10,
      marginBottom: 16,
      //base: "75%",
      //md: "45%",
      //underlineColorAndroid:"transparent",
    },

    butony: {
    marginTop: 12,
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'rgb(96, 112, 128)',
    color: 'rgb(50, 168, 82)',
    textAlign: 'center',
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
