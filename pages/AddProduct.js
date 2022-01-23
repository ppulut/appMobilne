// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import React, { useState } from 'react';
import { View, Text,StyleSheet, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';
import axios from 'axios';
import { Ionicons } from "@expo/vector-icons";

function AddProduct({}) {

  const [id] = useState("");
  const [nazwa, setNazwa] = useState("")
  const [cena, setCena] = useState("")
  const [opis, setOpis] = useState("")
  const [lokalizacja, setLokalizacja] = useState("")
  const [telefon, setTelefon] = useState("")

  const add = () => {

    if (!nazwa || !cena || !opis || !lokalizacja || !telefon) {
        alert("Uzupelnij pola");
        return false;
    }

    axios.get('http://10.0.2.2:3000/produkty', {
    }).then(response => {
      
            axios.post('http://10.0.2.2:3000/produkty', {
                id: id,
                nazwa: nazwa,
                cena: cena,
                opis: opis,
                lokalizacja: lokalizacja,
                telefon: telefon,
            }).then(response => {
                alert("Dodano produkt")
            }).catch(error => {
                console.log(error);
            })
        
    }).catch(error => {
        console.log(error);
    });
};



  return (
    <SafeAreaView style={{flex: 1}} name="AddProduct">
      <View style={styles.sectionStyle,{flex: 1, padding: 16, alignItems: 'center',
            justifyContent: 'center',}}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Dodaj produkt
          </Text>

    <View style={styles.sectionStyle}>
    <Ionicons style={styles.imageStyle}
              name="pencil-outline"
              size={24}
              color='rgb(96, 112, 128)'
                        />
      <TextInput secureTextInput={true} autoCorrect={false} 
        placeholder="Nazwa" onChangeText={setNazwa}
    />
    </View>

    <View style={styles.sectionStyle}>
    <Ionicons style={styles.imageStyle}
              name="cash-outline"
              size={24}
              color='rgb(96, 112, 128)'
                        />
      <TextInput secureTextInput={true} autoCorrect={false}
        placeholder="Cena"  onChangeText={setCena}
    />
    </View>


    <View style={styles.sectionStyle}>
    <Ionicons style={styles.imageStyle}
              name="reader-outline"
              size={24}
              color='rgb(96, 112, 128)'
                        />
    <TextInput secureTextInput={true} autoCorrect={false}
        placeholder="Opis" onChangeText={setOpis}
    />
    </View>

    <View style={styles.sectionStyle}>
    <Ionicons style={styles.imageStyle}
              name="location-outline"
              size={24}
              color='rgb(96, 112, 128)'
                        />
      <TextInput secureTextInput={true} autoCorrect={false}
        placeholder="Lokalizacja" onChangeText={setLokalizacja}
    />
    </View>

    <View style={styles.sectionStyle}>
    <Ionicons style={styles.imageStyle}
              name="call-outline"
              size={24}
              color='rgb(96, 112, 128)'
                        />
      <TextInput secureTextInput={true} autoCorrect={false}
        placeholder="Telefon" onChangeText={setTelefon}
    />
    </View>

    <TouchableOpacity
          onPress={add}
          style={styles.butony}
      >
        <Text style={styles.textStyle}>Dodaj</Text>
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
      flexDirection: 'row',
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
      textAlign: 'center',

    }
});

export default AddProduct;