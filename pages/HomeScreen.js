import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { createDrawerNavigator,  DrawerContentScrollView,DrawerItemList,DrawerItem, } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from './ExploreScreen'
import Products from './Products'
import AddProduct from './AddProduct';
import Favorite from './Favorite';
import About from './Authors';
import { Ionicons } from "@expo/vector-icons";




function Home({ navigation }) {
  return (
    <View style={styles.tlo} >
    <Text
        style={{
            fontSize: 25,
            textAlign: 'center',
            marginBottom: 16,
              }}>
             Witaj, możesz teraz przeglądać ogłoszenia !
    </Text>

      <TouchableOpacity
            style = {styles.butony}
            onPress={() => navigation.navigate('Przeglądaj')}
          >
          <Text style={styles.textStyle}>Pokaż oferty</Text>
          </TouchableOpacity>
    </View>
  );
}


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView>
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
        style= {{backgroundColor:'rgb(96, 112, 128)'}} />
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
                          <Ionicons
                          name="home-outline"
                          size={24}
                          color='rgb(96, 112, 128)'
                        />
                        ),
                        
          }}
          />

        <Tab.Screen name="Przeglądaj" component={Menu} options={{
                        tabBarIcon: () => (
                          <Ionicons
                          name="list-outline"
                          size={24}
                          color='rgb(96, 112, 128)'
                        />
                        ),
          }}/>
      
        
        <Tab.Screen name="Dodaj" component={AddProduct} options={{
                        tabBarIcon: () => (
                          <Ionicons
                          name="add-circle-outline"
                          size={24}
                          color='rgb(96, 112, 128)'
                        />
                        ),
          }}/>


        <Tab.Screen name="Ulubione" component={Favorite} options={{
                        tabBarIcon: () => (
                          <Ionicons
                          name="heart-outline"
                          size={24}
                          color='rgb(96, 112, 128)'
                        />
                        ),
          }}/>

        <Tab.Screen name="Szukaj" component={Products} options={{
                        tabBarIcon: ({ color, size }) => (
                          <Ionicons
                          name="search-outline"
                          size={24}
                          color='rgb(96, 112, 128)'
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
