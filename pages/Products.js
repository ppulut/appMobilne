// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import * as React from 'react';
import {Button, View, StyleSheet, TextInput} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function Products({ navigation }) {
  return (
    <View style={styles.sectionStyle}>
  
        
        <TextInput style={styles.inputy} placeholder="Szukaj" />
        <Icon path={mdiShoppingSearch}
          size={1}
          color="red" />
      
      <Button
            onPress={() => navigation.navigate('Menu')}
            title="Szukaj"
          />
    </View>
  );
}

const styles = StyleSheet.create({
  
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
    flex: 1, 
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
});

export default Products;
