import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Statistics from "./components/stat/Statistics";
import Register from "./components/diag/Register";
import Information from "./components/inf/Information"
import Configuration from "./components/conf/Configuration";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#fd7858', // Color del ícono y etiqueta de la pestaña activa
                tabBarInactiveTintColor: '#76768e', // Color del ícono y etiqueta de la pestaña inactiva
                tabBarStyle: { backgroundColor: "#DEE1E6" }, 
                headerShown: false,                   
            }}
        >
            <Tab.Screen
                name="register"
                component={Register}
                options={{
                    tabBarLabel: 'Diagnóstico',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="hospital-box-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="information"
                component={Information}
                options={{
                    tabBarLabel: 'Información',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="information" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="statistics"
                component={Statistics}
                options={{
                    tabBarLabel: 'Estadísticas',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="chart-bar" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="configuration"
                component={Configuration}
                options={{
                    tabBarLabel: 'Configuración',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-cog" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>

    );
}

