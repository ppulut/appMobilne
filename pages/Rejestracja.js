// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import * as React from 'react';
import { Text, Image, View, StyleSheet, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';



function Rejestracja({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }} name="Rejestracja">
            <View style={styles.sectionStyle, {
                flex: 1, padding: 16, alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text
                    style={{
                        fontSize: 25,
                        textAlign: 'bottom',
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
                    <TextInput
                        placeholder="Login"
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
                    <TextInput
                        secureTextEntry="true"
                        placeholder="Hasło"
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
                    <TextInput
                        secureTextEntry="true"
                        placeholder="Powtórz hasło"

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
                    <TextInput
                        placeholder="Imie"
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
                    <TextInput
                        placeholder="Nazwisko"
                    />
                </View>                               

                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
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
        mx: 6,
        borderWidth: 1,
        borderColor: 'rgb(111, 121, 247)',
        padding: 5,
        marginTop: 10,
        marginBottom: 16,
        base: "75%",
        md: "45%",
        underlineColorAndroid: "transparent",
    },

    butony: {
        marginTop: 12,
        paddingVertical: 12,
        minWidth: '26%',
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
