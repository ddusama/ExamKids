import React from 'react';
import Navigation from "../Navigation";
import Register from "../components/diag/Register";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function AppStack() {
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
                name="Navigation" // Nombre de la pantalla
                component={Navigation} // Componente a renderizar
            />
            <Stack.Screen
                name="Register" // Nombre de la pantalla
                component={Register} // Componente a renderizar
            />
        </Stack.Navigator>
    );
}
