// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import React, { useState } from 'react';
import { Text, Image, View, StyleSheet, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Ionicons } from "@expo/vector-icons";


function Rejestracja({ navigation }) {
    const [id] = useState("");
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [name, setName] = useState("")
    const [last_name, setLast_name] = useState("")
    const [click, setClick] = useState(false);

    const registration = () => {

        if (!login || !password || !password2 || !name || !last_name) {
            alert("Uzupelnij pola");
            return false;
        }

        if (password != password2) {
            alert("Hasla sa rozne");
            return false;
        }

        axios.get('http://10.0.2.2:3000/users', {
            params: { login: login, id: id}
        }).then(response => {
            if (Object.keys(response.data).length == 0) {

                axios.post('http://10.0.2.2:3000/users', {
                    id: id,
                    login: login,
                    password: password,
                    name: name,
                    last_name: last_name,
                }).then(response => {
                    alert("Poprawnie zarejestorwano użytkownika")
                }).catch(error => {
                    console.log(error);
                })

            } else {
                alert("Podany login jest zajęty");
            }
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <SafeAreaView style={{ flex: 1 }} name="Rejestracja">
            <View style={styles.sectionStyle, {
                flex: 1, padding: 16, alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text
                    style={{
                        fontSize: 25,
                        textAlign: 'center',
                        marginBottom: 16,
                    }}>
                    Rejestracja
                </Text>
                {/*login*/}
                <View style={styles.sectionStyle}>
                <Ionicons style={styles.imageStyle}
                          name="person-outline"
                          size={24}
                          color='rgb(96, 112, 128)'
                        />
                    <TextInput secureTextInput={true} autoCorrect={false}
                        placeholder="Login"
                        onChangeText={setLogin}
                        style={styles.textInInput}
                    />
                </View>
                {/*haslo*/}
                <View style={styles.sectionStyle}>
                <Ionicons style={styles.imageStyle}
                          name="lock-open-outline"
                          size={24}
                          color='rgb(96, 112, 128)'
                        />
                    <TextInput secureTextInput={true} secureTextEntry={true} autoCorrect={false}
                        style={styles.textInInput}
                        placeholder="Hasło"
                        onChangeText={setPassword}
                    />
                </View>
                {/*powtorzone haslo*/}
                <View style={styles.sectionStyle}>
                <Ionicons style={styles.imageStyle}
                          name="lock-closed-outline"
                          size={24}
                          color='rgb(96, 112, 128)'
                        />
                    <TextInput secureTextEntry={true} autoCorrect={false}
                        
                        placeholder="Powtórz hasło"
                        onChangeText={setPassword2}
                        style={styles.textInInput}
                    />
                </View>
                {/*Imie */}
                <View style={styles.sectionStyle}>
                <Ionicons style={styles.imageStyle}
                          name="person-add-outline"
                          size={24}
                          color='rgb(96, 112, 128)'
                        />
                    <TextInput secureTextInput={true} autoCorrect={false}
                        placeholder="Imie"
                        onChangeText={setName}
                        style={styles.textInInput}
                    />
                </View>
                {/*Nazwisko */}
                <View style={styles.sectionStyle}>
                <Ionicons style={styles.imageStyle}
                          name="person-add-outline"
                          size={24}
                          color='rgb(96, 112, 128)'
                        />
                    <TextInput secureTextInput={true} autoCorrect={false}
                        placeholder="Nazwisko"
                        onChangeText={setLast_name}
                        style={styles.textInInput}
                    />
                </View>                               

                <TouchableOpacity
                    onPress={registration}
                    style={styles.butony}
                >
                    <Text style={styles.textStyle}>Zarejestruj</Text>
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

    textStyle: {
        fontSize: 15,
        color: 'rgb(167, 219, 214)',
        
    },

    textInInput: {
        fontSize: 15,
        color: 'rgb(167, 219, 214)',
        left: 17,
        
    }
});

export default Rejestracja;
