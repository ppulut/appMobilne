// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import * as React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Animated} from 'react-native';
import { createDrawerNavigator,  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from './ExploreScreen'
import Products from './Products'
import AddProduct from './AddProduct';
import Favorite from './Favorite';
import About from './Authors';
import { mdiHeartOutline , mdiPlusCircleOutline, mdiDotsHorizontalCircleOutline, mdiHomeOutline, mdiPackageVariant, mdiHomeVariant, mdiTranslate } from '@mdi/js';
import Icon from '@mdi/react'
import Login from './Login';


function Home({ navigation }) {
  return (
    <View style={styles.tlo} >
    <Text
        style={{
            fontSize: 25,
            textAlign: 'bottom',
            marginBottom: 16,
              }}>
<<<<<<< HEAD
             Witaj
=======
             xdddd
>>>>>>> 8ac24a9614f21e9b7a6c40b8d063395fb092415c
    </Text>

      <TouchableOpacity
            style = {styles.butony}
            onPress={() => navigation.navigate('Menu')}
          >
          <Text style={styles.textStyle}>Menu</Text>
          </TouchableOpacity>
    </View>
  );
}


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Kontakt z działem wsparcia" 
      onPress={() => alert('kontakt@poczta.pl')} />
    </DrawerContentScrollView>
  );
}
function HomeStack() {
  return (
<Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Autorzy" component={About} 
        style= {{backgroundColor:'rgb(252, 107, 3)'}} />
      </Drawer.Navigator>
  )
}

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();



    const HomeScreen = () => {
      return(
    
      <Tab.Navigator>
        <Tab.Screen  name="Home" component={HomeStack} options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon path={mdiHomeOutline} 
                            color="rgb(96, 112, 128)"/>
                        ),
                        
          }}
          />
        <Tab.Screen name="Ulubione" component={Favorite} options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon path={mdiHeartOutline } 
                            color="rgb(96, 112, 128)"/>
                        ),
          }}/>
        
        <Tab.Screen name="Dodaj" component={AddProduct} options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon path={mdiPlusCircleOutline} 
                            color="rgb(96, 112, 128)"/>
                        ),
          }}/>

        <Tab.Screen name="Menu" component={Menu} options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon path={mdiDotsHorizontalCircleOutline} 
                            color="rgb(96, 112, 128)"/>
                        ),
          }}/>

        <Tab.Screen name="Produkty" component={Products} options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon path={mdiPackageVariant} 
                            color="rgb(96, 112, 128)"/>
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

export default HomeScreen;
