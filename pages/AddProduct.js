// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import React, { useState, useEffect } from 'react';
import { Image, View, Text,StyleSheet, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';
import axios from 'axios';
import ExploreScreen from './ExploreScreen'
import { Camera } from 'expo-camera';
import CameraModule from '../configuration/CameraModule'

export default function AddProduct() {
    const [id] = useState("")
    const [nazwa, setNazwa] = useState("")
    const [cena, setCena] = useState("")
    const [opis, setOpis] = useState("")
    const [lokalizacja, setLokalizacja] = useState("")
    const [telefon, setTelefon] = useState("")
    const [image, setImage] = useState(null);
    const [hasPermission, setHasPermission] = useState(null);
    const [camera, setShowCamera] = useState(false);

    const add = () => {

      if (!nazwa || !cena || !opis || !lokalizacja || !telefon) {
        alert("Uzupelnij pola");
        return false;
    }


        axios.post('http://10.0.2.2:3000/produkty/', {
            id: id,
            nazwa: nazwa,
            cena: cena,
            lokalizacja: lokalizacja,
            opis: opis,
            telefon: telefon,
            Photo: image,
        }).then((response) => {
            alert("Ogloszenie zostalo dodane!")
            AddProduct.getJoke();
            ExploreScreen.getData();
        });
    }

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    if (hasPermission === false) {
        return <Text>Brak uprawnień do kamery</Text>;
    }
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
            Dodaj produkt
          </Text>

    <View style={styles.sectionStyle}>
      <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/ppulut/appMobilne/3b2b9681aced2955c3e1d4823341bc9b3b4d142c/icons/name.svg',
            }}
            style={styles.imageStyle}
          />    
     <TextInput
        secureTextInput={true}
        autoCorrect={false}
        placeholder="Nazwa"
        onChangeText={setNazwa}
    />
    </View>

    <View style={styles.sectionStyle}>
      <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/ppulut/appMobilne/a99cdf037a5f16e3563edfe9b83b44df80ba5284/icons/money.svg',
            }}
            style={styles.imageStyle}
          />
      <TextInput secureTextInput={true} autoCorrect={false}
        onChangeText={setCena}
        placeholder="Cena"
    />
    </View>

    <View style={styles.sectionStyle}>
        <Image
            source={{
                uri:
                    'https://raw.githubusercontent.com/ppulut/appMobilne/26db86ea6b900aefa993be8d0eef0ac297cdbcde/icons/localisation.svg'
            }}
            style={styles.imageStyle}
        />
        <TextInput secureTextInput={true} autoCorrect={false}
            placeholder="Lokalizacja"
            onChangeText={setLokalizacja}
        />
    </View>

    <View style={styles.sectionStyle}>
      <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/ppulut/appMobilne/3b2b9681aced2955c3e1d4823341bc9b3b4d142c/icons/description.svg',
            }}
            style={styles.imageStyle}
          />
    <TextInput secureTextInput={true} autoCorrect={false}
        placeholder="Opis"
        onChangeText={setOpis}
    />
    </View>
    
    <View style={styles.sectionStyle}>
      <Image
            source={{
              uri:
              'https://raw.githubusercontent.com/ppulut/appMobilne/69f4133fa4c427223c5a3a797b33339dd07872ea/icons/phone-outline.svg',
            }}
            style={styles.imageStyle}
          />
      <TextInput secureTextInput={true} autoCorrect={false}
        placeholder="Telefon" onChangeText={setTelefon}
    />
    </View>
    <TouchableOpacity
        style={styles.butony}
        onPress={() => {setShowCamera(true);
        }}
    >
        <Text style={styles.textStyle}>Dodaj zdjecie</Text>
    </TouchableOpacity>
    <TouchableOpacity
        style={styles.butony}
        onPress={() => add()}
      >
        <Text style={styles.textStyle}>Dodaj</Text>
      </TouchableOpacity>

                {camera && (
                    <CameraModule
                        setImage={(result) => setImage(result.uri)}
                        showModal={camera}
                        setModalVisible={() => setShowCamera(false)}
                    />
                )}

        </View>
    
    </SafeAreaView>
    
  );
};


const styles = StyleSheet.create({
  /*tlo: {
      backgroundColor: 'rgb(247, 247, 247)',
      fontSize: 15,
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      navbarBackgroundColor: '#2c3e50',
      statusBarColor: '#233240'
    },*/

    sectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: 0.5,
      borderColor: '#000',
      height: 40,
      borderRadius: 5,
      margin: 10,
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