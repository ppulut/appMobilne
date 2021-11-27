// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import * as React from 'react';
import {Button, View, Text, TextInput} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from './ExploreScreen'
import Products from './Products'

function Home({ navigation,route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
            onPress={() => navigation.navigate('Menu')}
            title="Go to home"
          />
    </View>
  );
}


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();



    const HomeScreen = () => {
      return(
    
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Menu" component={Menu} />
        <Tab.Screen name="Produkty" component={Products}/>

      </Tab.Navigator>
  
);
}

export default HomeScreen;
