// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import * as React  from 'react';
import {Image, View, Text,StyleSheet, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';


function Products({ navigation }) {
  return (

<SafeAreaView style={{flex: 1}} name="AddProduct">
      <View style={styles.sectionStyle,{flex: 1, padding: 16, alignItems: 'center',
            justifyContent: 'center',}}>
      
          <Text
            style={{
              fontSize: 25,
              textAlign: 'bottom',
              marginBottom: 16,
            }}>
            Szukaj produktu
          </Text>

    <View style={styles.sectionStyle}>
      <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/ppulut/appMobilne/42dde19828377f0d5b4a781b4d654201b61702dd/icons/shopping-search.svg',
            }}
            style={styles.imageStyle}
          />    
      <TextInput
        placeholder="Szukaj"
    />
    </View>

        <TouchableOpacity
            //onPress={() => navigation.navigate('Menu')}
            title="Szukaj"
            style={styles.butony}
            >
            <Text style={styles.textStyle}>Szukaj</Text>
            </TouchableOpacity>
        
        </View>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
 

  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 5,
    borderRadius: 5,
    margin: 10,
    flex: 1, 
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
    underlineColorAndroid:"transparent",
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

  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },

  textStyle:{
    fontSize: 25,
    color: 'rgb(167, 219, 214)',
  }
});

export default Products;
