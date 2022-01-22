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
                        tabBarIcon: ({ color, size }) => (
                          <Image
                          source={{
                            uri:
                            'https://raw.githubusercontent.com/ppulut/appMobilne/26db86ea6b900aefa993be8d0eef0ac297cdbcde/icons/localisation.svg'            }}
                          style={styles.imageStyle}
                        />
                        ),
                        
          }}
          />

        <Tab.Screen name="Menu" component={Menu} options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon path={mdiDotsHorizontalCircleOutline} 
                            color="rgb(96, 112, 128)"/>
                        ),
          }}/>
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
