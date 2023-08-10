import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigation.js';
import Login from './src/components/login/Login.js';
import Sing_up from './src/components/login/Sing_up.js';
import Register from './src/components/diag/Register.js';
import Diagnostic from './src/components/diag/Diagnostic.js';
const Stack = createStackNavigator(); // Crear un stack de navegación

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ffb7a1',
          },
          headerTintColor: 'black', // Color del texto del header
          headerTitle: "ExamKids",
          headerLeft: null,

        }}
      >
        <Stack.Screen
          name="Login" // Nombre de la pantalla
          component={Login} // Componente a renderizar
        />
        <Stack.Screen
          name="Sing_up" // Nombre de la pantalla
          component={Sing_up} // Componente a renderizar
        />
        <Stack.Screen
          name="Navigation" // Nombre de la pantalla
          component={Navigation} // Componente a renderizar
        />
         <Stack.Screen
          name="Register" // Nombre de la pantalla
          component={Register} // Componente a renderizar
        />
         <Stack.Screen
          name="Diagnostic" // Nombre de la pantalla
          component={Diagnostic} // Componente a renderizar
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
