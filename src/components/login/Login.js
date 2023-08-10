import React, { useState } from "react";
import {
    Image, StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView,
    Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
    const logo = "https://i.postimg.cc/Zn9ScShf/logo.png";
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const ingresar = <Icon name='arrow-right' size={20} color="white" />;

    const handleSignIn = () => {
        navigation.navigate("Navigation");
    };

    const handleSignUp = () => {
        navigation.navigate("Sing_up");
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"} // ajustar automáticamente para el teclado en iOS, desplazar en Android
        >
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.text}>BIENVENIDOS</Text>
                        <Image source={{ uri: logo }} style={styles.logo} />
                    </View>
                    <View >
                        <TextInput style={styles.user}
                            placeholder="Usuario"
                            value={user}
                            onChangeText={(text) => setUser(text)} />
                        <TextInput style={styles.password}
                            textContentType="password"
                            placeholder="Contraseña"
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true} />
                        <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
                            <Text style={styles.loginButtonText}>{ingresar} Ingresar</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={handleSignUp}>
                        <Text style={styles.signupLink}>Crear una cuenta</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#DEE1E6',
        marginTop: 35,
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 35,
        borderRadius: 10
    },
    user: {
        color: "black",
        fontSize: 15,
        marginTop: -90,
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: "#76768e",
        backgroundColor: "white",
    },
    password: {
        color: "black",
        fontSize: 15,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: "#76768e",
        backgroundColor: "white",
    },
    text: {
        marginTop: 25,
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    logo: {
        width: 200,
        height: "50%",
    },
    safeArea: {
        flex: 1, // Cambia el flex a 1 para ocupar todo el espacio
        backgroundColor: 'white',
    },
    signupLink: {
        color: 'black',
        textDecorationLine: 'underline',
        textAlign: 'center',
        fontSize: 19,
        marginTop: 40,
        marginBottom: 20,
    },
    loginButton: {
        backgroundColor: "#fd7858",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    }
})

export default Login;