// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import * as React  from 'react';
import {Button, View, Text,StyleSheet, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';


function About() {
  return (
    <SafeAreaView style={{flex: 1}} name="Autorzy">
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Autorzy:
            P.P
          </Text>
        
        
        </View>
      </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  tlo: {
      backgroundColor: 'rgb(247, 247, 247)',
      fontSize: 15,
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
    },

    inputy: {
      fontSize: 18, 
      textAlign: 'center', 
      color: 'grey',
      borderWidth: 1,
      borderColor: 'rgb(111, 121, 247)',
      padding: 5,
      marginTop: 10,
      marginBottom: 16,
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

    textStyle:{
      fontSize: 25,
      color: 'rgb(167, 219, 214)',
      
    }

});

export default About;