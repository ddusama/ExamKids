import React from 'react';
import Login from '../components/login/Login.js';
import Sing_up from '../components/login/Sing_up.js';
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#ffb7a1',
                },
                headerTintColor: 'black', // Color del texto del header
                headerTitle: "ExamKids",
                headerLeft: null,

            }}
            initialRouteName={'Login'}
        >
            <Stack.Screen
                name="Login" // Nombre de la pantalla
                component={Login} // Componente a renderizar
            />
            <Stack.Screen
                name="Sing_up" // Nombre de la pantalla
                component={Sing_up} // Componente a renderizar
            />
        </Stack.Navigator>
    );
}
