// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import * as React  from 'react';
import {View, StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import HomeScreen from './HomeScreen'


function Menu({ navigation }) {
  return (
    <SafeAreaView style={{flex: 1}} name="Menu">
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
            Menu Screen
          </Text>
          
          <TouchableOpacity
            style = {styles.butony}
            onPress={() => navigation.navigate('Home')}
          >
          <Text style={styles.textStyle}>Powrót</Text>
          </TouchableOpacity>
        
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
      navbarBackgroundColor: '#2c3e50',
      statusBarColor: '#233240'
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
      color: 'rgb(247, 247, 247)',
      fontSize: 20,
    }

});


export default Menu;

