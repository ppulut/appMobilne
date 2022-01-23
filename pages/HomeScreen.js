// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { createDrawerNavigator,  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from './ExploreScreen'
import Products from './Products'
import AddProduct from './AddProduct';
import Favorite from './Favorite';
import About from './Authors';




function Home({ navigation }) {
  return (
    <View style={styles.tlo} >
    <Text
        style={{
            fontSize: 25,
            textAlign: 'center',
            marginBottom: 16,
              }}>
             Witaj !
    </Text>

      <TouchableOpacity
            style = {styles.butony}
            onPress={() => navigation.navigate('Menu')}
          >
          <Text style={styles.textStyle}>Pokaż oferty</Text>
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
                        tabBarIcon: () => (
                          <Image 
                          source={{
                            uri:
                            'https://raw.githubusercontent.com/ppulut/appMobilne/80bb1791886b43a625c9f2656c520ee30fe1a7ea/icons/home-variant.svg' 
                          }}
                          
                          style={styles.imageStyle}
                        />
                        ),
                        
          }}
          />

        <Tab.Screen name="Menu" component={Menu} options={{
                        tabBarIcon: ({ color, size }) => (
                          <Image
                          source={{
                            uri:
                            'https://raw.githubusercontent.com/ppulut/appMobilne/96a4fe027f15970e9ef1de9332e109d0f2616054/icons/produkty.svg' 
                          }}
                          style={styles.imageStyle}
                        />
                        ),
          }}/>
      
        
        <Tab.Screen name="Dodaj" component={AddProduct} options={{
                        tabBarIcon: () => (
                          <Image
                          source={{
                            uri:
                            'https://raw.githubusercontent.com/ppulut/appMobilne/96a4fe027f15970e9ef1de9332e109d0f2616054/icons/plus-circle-outline.svg' 
                          }}
                          style={styles.imageStyle}
                        />
                        ),
          }}/>


        <Tab.Screen name="Ulubione" component={Favorite} options={{
                        tabBarIcon: ({ color, size }) => (
                          <Image
                          source={{
                            uri:
                            'https://raw.githubusercontent.com/ppulut/appMobilne/96a4fe027f15970e9ef1de9332e109d0f2616054/icons/heart-outline.svg' 
                          }}
                          style={styles.imageStyle}
                        />
                        ),
          }}/>

        <Tab.Screen name="Szukaj" component={Products} options={{
                        tabBarIcon: ({ color, size }) => (
                          <Image
                          source={{
                            uri:
                            'https://raw.githubusercontent.com/ppulut/appMobilne/96a4fe027f15970e9ef1de9332e109d0f2616054/icons/searchin.svg' 
                          }}
                          style={styles.imageStyle}
                        />
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
      borderRadius: 40
      },

    textStyle:{
      fontSize: 25,
      color: 'rgb(167, 219, 214)',
      
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

export default HomeScreen;
