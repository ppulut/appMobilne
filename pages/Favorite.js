// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import * as React  from 'react';
import {Button, View, Text,StyleSheet, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';
import HomeScreen from './HomeScreen'


function AddProduct({ navigation }) {
  return (
    <SafeAreaView style={{flex: 1}} name="AddProduct">
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'bottom',
              marginBottom: 16,
            }}>
            Dodaj produkt
          </Text>
        
      <TextInput style={styles.inputy}
        placeholder="Nazwa"
    />
      <TextInput style={styles.inputy}
        placeholder="Cena"
    />
      <TextInput style={styles.inputy}
        placeholder="Opis"
    />
      <TextInput style={styles.inputy}
        placeholder="Lokalizacja"
    />
          <TextInput style={styles.inputy}
        placeholder="Nr telefonu do kontaktu"
    />



          <Button
            //onPress={() => navigation.navigate('Home')}
            title="Dodaj"
            style={styles.butony}
          />
        
        </View>
      </View>
    </SafeAreaView>
    
  );
};

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
    },

    butony: {
      marginTop: 12,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'rgb(96, 112, 128)',
      color: 'rgb(50, 168, 82)',
    }

});

export default AddProduct;