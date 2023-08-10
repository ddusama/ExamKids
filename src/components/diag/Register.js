import React, { useState } from "react";
import { TextInput, StyleSheet, View, Text, SafeAreaView,ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
    const [ced, setCed] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [temp, setTemp] = useState('');
    const analizar = <Icon name='check' size={20} color="white" />;
    
    const navigation = useNavigation();
    const handleSignIn = () => {
        navigation.navigate("Diagnostic");
    };

    return (
        <SafeAreaView style={styles.safeArea}>
             <ScrollView >
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>REGISTRO SÍNTOMAS</Text>
                </View>

                <View>
                    <Text style={styles.text}>Datos paciente:</Text>
                    <TextInput style={styles.password}
                        placeholder="Cédula"
                        value={ced}
                        onChangeText={(text) => setCed(text)} />
                    <TextInput style={styles.password}
                        placeholder="Nombres y Apellidos"
                        value={name}
                        onChangeText={(text) => setName(text)} />
                    <TextInput style={styles.password}
                        placeholder="Edad"
                        value={age}
                        onChangeText={(text) => setAge(text)} />

                    <Text style={styles.text}>Seleccinar imagen:</Text>

                    <Text style={styles.text}>Síntomas:</Text>
                    <TextInput style={styles.password}
                        placeholder="Temperatura"
                        value={temp}
                        onChangeText={(text) => setTemp(text)} />
                    <Text style={styles.textInf}>Dolor cabeza</Text>
                    <Text style={styles.textInf}>Conjuntivitis</Text>
                    <Text style={styles.textInf}>Malestar general</Text>
                    <Text style={styles.textInf}>Glángleos hinchados</Text>
                    <Text style={styles.textInf}>Tos</Text>
                    <Text style={styles.textInf}>Moqueo</Text>
                    <Text style={styles.textInf}>Dolor garganta</Text>
                    <Text style={styles.textInf}>Diarrea</Text>
                    <Text style={styles.textInf}>Vómito</Text>
                    <Text style={styles.textInf}>Náuseas</Text>
                    <Text style={styles.textInf}>Comezón</Text>
                    <Text style={styles.textInf}>Pérdida de apetito</Text>
                    <Text style={styles.textInf}>Dolor al tragar</Text>
                    <Text style={styles.textInf}>Hinchazón/Text</Text>
                    <Text style={styles.textInf}>Hinchazón boca</Text>
                    <Text style={styles.textInf}>Dolor abdomen</Text>
                    <Text style={styles.textInf}>Escalofrío</Text>
                    <Text style={styles.textInf}>Pérdida del gusto</Text>
                    <Text style={styles.textInf}>Dolor dentadura</Text>

                    <Text style={styles.text}>Ubicación lesión:</Text>
                    <Text style={styles.textInf}>Cara</Text>
                    <Text style={styles.textInf}>Torso</Text>
                    <Text style={styles.textInf}>Cabeza</Text>
                    <Text style={styles.textInf}>Extremidades inferiores</Text>
                    <Text style={styles.textInf}>Extremidades superiores</Text>
                    <Text style={styles.textInf}>Genitales</Text>
                    <Text style={styles.textInf}>Manos</Text>
                    <Text style={styles.textInf}>Boca</Text>
                    <Text style={styles.textInf}>Pies</Text>
                </View>
                <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
                            <Text style={styles.loginButtonText}>{analizar} Analizar</Text>
                        </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        backgroundColor: '#DEE1E6',
        marginTop: 35,
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 35,
        borderRadius: 10
    },
    title: {
        marginTop: 25,
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    text: {
        marginLeft: 7,
        marginTop: 25,
        color: 'black',
        fontSize: 18,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    textInf: {
        marginLeft: 7,
        marginRight: 7,
        marginTop: 10,
        color: 'black',
        fontSize: 15,
        textAlign: 'justify',
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
    },
    safeArea: {
        flex: 10,
        backgroundColor: 'white', // Cambia el color del fondo según el tema de tu app
    },
})

export default Register;