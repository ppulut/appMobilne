// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import React, { useState } from 'react';
import { Text, Image, View, StyleSheet, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import axios from 'axios';



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

        axios.get('http://localhost:3000/users', {
            params: { login: login, id: id}
        }).then(response => {
            if (Object.keys(response.data).length == 0) {

                axios.post('http://localhost:3000/users', {
                    id: id,
                    login: login,
                    password: password,
                    name: name,
                    last_name: last_name,
                    avatarUrl: "data:image/png;base64,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"
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
                    <Image
                        source={{
                            uri:
                                'https://raw.githubusercontent.com/ppulut/appMobilne/750404e5f9b569d4008cd5694a89c3ebc0c407d1/icons/login.svg',
                        }}
                        style={styles.imageStyle}
                    />
                    <TextInput secureTextInput={true} autoCorrect={false}
                        placeholder="Login"
                        onChangeText={setLogin}
                    />
                </View>
                {/*haslo*/}
                <View style={styles.sectionStyle}>
                    <Image
                        source={{
                            uri:
                                'https://raw.githubusercontent.com/ppulut/appMobilne/750404e5f9b569d4008cd5694a89c3ebc0c407d1/icons/password.svg',
                        }}
                        style={styles.imageStyle}
                    />
                    <TextInput secureTextInput={true} autoCorrect={false}
                
                        placeholder="Hasło"
                        onChangeText={setPassword}
                    />
                </View>
                {/*powtorzone haslo*/}
                <View style={styles.sectionStyle}>
                    <Image
                        source={{
                            uri:
                                'https://raw.githubusercontent.com/ppulut/appMobilne/750404e5f9b569d4008cd5694a89c3ebc0c407d1/icons/password.svg',
                        }}
                        style={styles.imageStyle}
                    />
                    <TextInput secureTextInput={true} autoCorrect={false}
                        
                        placeholder="Powtórz hasło"
                        onChangeText={setPassword2}

                    />
                </View>
                {/*Imie */}
                <View style={styles.sectionStyle}>
                    <Image
                        source={{
                            uri:
                                'https://raw.githubusercontent.com/ppulut/appMobilne/750404e5f9b569d4008cd5694a89c3ebc0c407d1/icons/login.svg',
                        }}
                        style={styles.imageStyle}
                    />
                    <TextInput secureTextInput={true} autoCorrect={false}
                        placeholder="Imie"
                        onChangeText={setName}
                    />
                </View>
                {/*Nazwisko */}
                <View style={styles.sectionStyle}>
                    <Image
                        source={{
                            uri:
                                'https://raw.githubusercontent.com/ppulut/appMobilne/750404e5f9b569d4008cd5694a89c3ebc0c407d1/icons/login.svg',
                        }}
                        style={styles.imageStyle}
                    />
                    <TextInput secureTextInput={true} autoCorrect={false}
                        placeholder="Nazwisko"
                        onChangeText={setLast_name}
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
        borderRadius: 5,
        margin: 10,
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
    },

    imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },

    textStyle: {
        fontSize: 25,
        color: 'rgb(167, 219, 214)',
        
    }
});

export default Rejestracja;
