// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import * as React  from 'react';
import { View, Text,StyleSheet, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';
import { Ionicons } from "@expo/vector-icons";

function Products({ navigation }) {
  return (
    <SafeAreaView style={{flex: 1}} name="Products">
      <View style={styles.sectionStyle,{flex: 1, padding: 16, alignItems: 'center',
            justifyContent: 'center',}}>
      
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Szukaj produktu
          </Text>

    <View style={styles.sectionStyle}>
    <Ionicons style={styles.imageStyle}
                name="search-outline"
                size={24}
                color='rgb(96, 112, 128)'

                        />
      <TextInput secureTextInput={true} autoCorrect={false}
        placeholder="Szukaj"
    />
    </View>

   

    <TouchableOpacity
          //onPress={() => navigation.navigate('Home')}  
          style={styles.butony}
      >
        <Text style={styles.textStyle}>Szukaj</Text>
      </TouchableOpacity>
        
        </View>
    
    </SafeAreaView>
    
  );
};


const styles = StyleSheet.create({

  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    width: 200,
    borderRadius: 5,
    margin: 10,
    paddingRight:30,
  },

    inputy: {
      fontSize: 18, 
      textAlign: 'center', 
      color: 'grey',
      borderWidth: 1,
      borderColor: 'rgb(111, 121, 247)',
      padding: 5,
      marginTop: 10,
      marginBottom: 16,
    
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

      imageStyle: {
        height: 25,
        width: 25,
        position: 'absolute',
        left: 10,
  
      },

    textStyle:{
      fontSize: 25,
      color: 'rgb(167, 219, 214)',
      
    }
});


export default Products;
