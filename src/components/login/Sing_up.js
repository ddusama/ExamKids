import React, { useState } from "react";
import {
    Image, StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView,
    Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Sing_up = () => {
    const logo = "https://i.postimg.cc/Zn9ScShf/logo.png";
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [ced, setCed] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');

    const navigation = useNavigation();
    const registrar = <Icon name='check' size={20} color="white" />;

    const handleSignIn = () => {
        navigation.navigate("Login");
    };



    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"} // Ajustar automáticamente para el teclado en iOS, desplazar en Android
        >
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.text}>REGISTRO</Text>
                        <Image source={{ uri: logo }} style={styles.logo} />
                    </View>
                    <View >
                        <TextInput style={styles.user}
                            placeholder="Usuario"
                            value={user}
                            onChangeText={(text) => setUser(text)} />

                        <TextInput style={styles.password}
                            placeholder="Cédula"
                            value={ced}
                            onChangeText={(text) => setCed(text)} />

                        <TextInput style={styles.password}
                            placeholder="Nombres y Apellidos"
                            value={name}
                            onChangeText={(text) => setName(text)} />

                        <TextInput style={styles.password}
                            placeholder="Corrreo institucional"
                            value={email}
                            onChangeText={(text) => setEmail(text)} />

                        <TextInput style={styles.password}
                            textContentType="password"
                            placeholder="Contraseña"
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true} />

                        <TextInput style={styles.password}
                            textContentType="password"
                            placeholder="Validar contraseña"
                            value={password1}
                            onChangeText={(text) => setPassword1(text)}
                            secureTextEntry={true} />

                        <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
                            <Text style={styles.loginButtonText}>{registrar} Registrarse</Text>
                        </TouchableOpacity>
                    </View>
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
        marginBottom: 5,
        padding: 5,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: "#76768e",
        backgroundColor: "white",
    },
    password: {
        fontSize: 15,
        color: "black",
        marginTop: 5,
        marginBottom: 5,
        padding: 5,
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
        marginTop: 20,
        marginBottom:-120
    },
    safeArea: {
        flex: 1, // Cambia el flex a 1 para ocupar todo el espacio
        backgroundColor: 'white',
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

export default Sing_up;