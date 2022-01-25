import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, FlatList, Image} from 'react-native';
import axios from 'axios';
import { Ionicons } from "@expo/vector-icons";

function Products() {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [id] = useState("")
    const [nazwa] = useState("")
    const [cena] = useState("")
    const [opis] = useState("")
    const [lokalizacja] = useState("")
    const [telefon] = useState("")
    const [Photo] = useState("");

    useEffect(() => {
        fetch('http://10.0.2.2:3000/produkty/')
            .then((response) => response.json())
            .then((responseJson) => {
                setFilteredDataSource(responseJson);
                setMasterDataSource(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            const newData = masterDataSource.filter(
                function (item) {
                    const itemData = item.nazwa
                        ? item.nazwa.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };

    const favo = (item) => {
      axios.get('http://10.0.2.2:3000/produkty', {
      params: {id: item.id, nazwa: item.nazwa, cena: item.cena, opis:opis, lokalizacja: lokalizacja,
              telefon: telefon, Photo: item.Photo
              }
}).then(response => {
    if (Object.keys(response.data).length == 0) {

        axios.post('http://10.0.2.2:3000/ulubione', {
          id: id,
          nazwa: item.nazwa,
          cena: item.cena,
          lokalizacja: item.lokalizacja,
          opis: item.opis,
          tel: item.telefon,
          Photo: item.Photo,
        }).then(response => {
            alert("Dodano do ulubionych")
        })
    } 
});
};


    const ItemView = ({ item }) => {
        return (
            <View key={item.id} style={styles.boxy}>     
             <TouchableOpacity
                     onPress={() => favo(item)}
                    style={styles.butony}
                >
                   <Ionicons
                          name="heart-outline"
                          size={24}
                          color='rgb(96, 112, 128)'
                        />
                  </TouchableOpacity>               
                <Text fontSize="18" color="rgb(111,111,111)"
                    fontWeight="bold">
                    {item.nazwa}
                </Text>

                <Text
                    fontSize="16"
                    color="rgb(111,111,111)">
                    Cena: {item.cena }
                </Text>

                <Text
                    fontSize="16"
                    color="rgb(111,111,111)"
                >
                    Lokalizacja: {item.lokalizacja}

                </Text>

                <Text
                    fontSize="16"
                    color="rgb(111,111,111)"
                >
                    Telefon: {item.telefon}
                </Text>

                <Text fontWeight="400" color="rgb(111,111,111)"
                    fontSize="16"
                >
                    Opis: {item.opis}
                </Text>

                <Image
                    source={{
                        uri: item.Photo,
                    }}
                    alt="Photo"
                    style={styles.responsiveImage}
                    />
            </View>
        );
    };

    
  return (
    <SafeAreaView style={{flex: 1}} name="Products">
      <View style={styles.sectionStyle,{padding: 16, alignItems: 'center',
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
    <TextInput
        secureTextInput={true} autoCorrect={false}
                      placeholder="Szukaj"
                      value={search}
                      onChangeText={(text) => searchFilterFunction(text)}
    />
    </View>

              <FlatList
                  data={filteredDataSource}
                  renderItem={ItemView}
                  style={styles.flist}
              />
        </View>
    
    </SafeAreaView>
    
  );
};


const styles = StyleSheet.create({

    responsiveImage: {
        width: '95%',
        alignSelf: 'center',
        aspectRatio: 20 / 10,
        paddingLeft: 10,
    },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    width: '80%',
    borderRadius: 5,
    margin: 10,
    paddingRight:30,
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
    },

    boxy: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 10,
        borderWidth: 1,
        height: 'auto',
        borderColor: '#68a0cf',
        backgroundColor: 'rgb(247,247,247)',
    },

    flist: {
        height: '85%',
        width: '100%',
        marginTop: 10,
    }
});


export default Products;
