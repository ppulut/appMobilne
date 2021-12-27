// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import * as React from 'react';
import {Button, View, StyleSheet, TextInput} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from './ExploreScreen'
import Home from './HomeScreen'
import Icon from '@mdi/react'
import { mdiShoppingSearch } from '@mdi/js';

function Products({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  
        
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

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 130,
  },
  reward: {
    marginVertical: 20,
    width: 200,
  },
  business: {
    marginVertical: 20,
    width: 200,
  },
  govt: {
    marginVertical: 20,
    width: 200,
  },
  name: {
    fontSize: 30,
    justifyContent: 'center',
  },
});

export default Products;
