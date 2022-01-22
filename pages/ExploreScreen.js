import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, FlatList } from 'react-native';
import {Box,Image,Text,NativeBaseProvider,View} from "native-base"



function Menu() {
  const [data, setData] = useState('');

  const getData = async () => {
      axios.get("http://10.0.2.2:3000/produkty")
      .then((response) => {
        setData(response.data);
      })
 };

 useEffect(async () => getData(),[]);



const displayDatas = ({item}) => {

  return(
    <View style={styles.boxy}>
      
     <Box>
      <Text
            fontSize = "16"
            color = "rgb(111,111,111)"
            fontWeight="bold"
          > 
          {item.nazwa}
         </Text>

          <Text
            fontSize = "14"
            color = "rgb(111,111,111)"
          >Cena: {item.cena}zł
          </Text>

          <Text
            fontSize = "14"
            color = "rgb(111,111,111)"
            
          > 
          Lokalizacja: {item.lokalizacja}
         </Text>

        <Text fontWeight="400" color = "rgb(111,111,111)" >
          {item.opis}
        </Text>
       </Box>

       <Box>
          <Image
            source={{
              uri: item.Photo,
            }}
            alt="Photo"
            style={styles.responsiveImage}
          />
      </Box>
      </View>
   
  )
}

return (
  <NativeBaseProvider>
        <View style={styles.container}>
          <FlatList
              data={data}
              renderItem={displayDatas}
          />
          </View>
  </NativeBaseProvider>
)
}

const styles = StyleSheet.create({

  responsiveImage: {
    width: '100%',
    height: 'auto',
    aspectRatio: 20/10,    
    paddingLeft:10,
  },
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingHorizontal: 15,
    alignItems: 'center', 
    justifyContent: 'center',
    flexDirection: 'column',
    
  },

  boxy: {
  marginRight: 40,
  marginLeft: 40,
  marginTop: 10,
  paddingTop: 20,
  paddingBottom: 20,
  borderRadius: 10,
  borderWidth: 1,
  height:'auto',
  borderColor: '#68a0cf',
  backgroundColor: 'rgb(247,247,247)',


  }

});
export default Menu;