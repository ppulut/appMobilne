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
       <Icon path={mdiShoppingSearch}
        size={1}
        color="red" />
        
        <TextInput style={{fontSize: 18, textAlign: 'center', color: 'grey'}} placeholder="Szukaj"

      
    />

      <Button
            onPress={() => navigation.navigate('Menu')}
            title="Szukaj"
          />
    </View>
  );
}

const styles = StyleSheet.create({
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
