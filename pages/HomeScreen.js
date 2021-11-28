// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import * as React from 'react';
import {Button, View, StyleSheet, TextInput} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from './ExploreScreen'
import Products from './Products'
import { mdiDotsHorizontalCircleOutline, mdiHomeOutline } from '@mdi/js';
import { mdiPackageVariant } from '@mdi/js';
import Icon from '@mdi/react'

function Home({ navigation }) {
  return (
    <View style={styles.tlo} >
      

      <Button
            onPress={() => navigation.navigate('Menu')}
            title="Menu"
          />
    </View>
  );
}


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();



    const HomeScreen = () => {
      return(
    
      <Tab.Navigator>
        <Tab.Screen  name="Home" component={Home} options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon path={mdiHomeOutline} 
                            color="rgb(96, 112, 128)"/>
                        ),
                        
          }}/>
        <Tab.Screen name="Menu" component={Menu} options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon path={mdiDotsHorizontalCircleOutline} color="rgb(96, 112, 128)"/>
                        ),
          }}/>

        <Tab.Screen name="Produkty" component={Products} options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon path={mdiPackageVariant} color="rgb(96, 112, 128)"/>
                        ),
          }}/>

      </Tab.Navigator>
  
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

export default HomeScreen;
