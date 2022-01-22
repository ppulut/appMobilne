
import React, { component } from 'react';
import Login from './pages/Login';
import HomeScreen from './pages/HomeScreen';
import Rejestracja from './pages/Rejestracja';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{
                    headerTintColor: "white",
                    headerStyle: { backgroundColor: "rgb(96, 112, 128)" },
                }} />
                <Stack.Screen name="Home" component={HomeScreen} options={{
                    headerStyle: { backgroundColor: "rgb(96, 112, 128)" },
                    headerTintColor: "white",
                }} />
                <Stack.Screen name="Rejestracja" component={Rejestracja} options={{
                    headerStyle: { backgroundColor: "rgb(96, 112, 128)" },
                    headerTintColor: "white",
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

