// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import * as React from 'react';
import {Button, View, Text, TextInput} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from './ExploreScreen'
import Home from './HomeScreen'

function Products({ navigation,route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput style={{fontSize: 18, textAlign: 'center', color: 'grey'}}
      mx="3"
      placeholder="Szukaj"
      w={{
        base: "75%",
        md: "25%",
      }}
    />

      <Button
            onPress={() => navigation.navigate('Menu')}
            title="Szukaj"
          />
    </View>
  );
}

export default Products;
