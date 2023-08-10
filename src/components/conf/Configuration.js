import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Configuration = () => {
    const user =
        'https://i.postimg.cc/KYbfVx3p/png-transparent-computer-icons-user-encapsulated-postscript-others-miscellaneous-orange-user-profile.png';
    const cerrarIcon = <Icon name='arrow-left' size={20} color="white" />;

    const navigation = useNavigation();
    const handleOut = () => {
        // Redireccionar a la pantalla de navegación usando la función de navegación proporcionada por useNavigation
        navigation.navigate("Login");
    };

    return (
        <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>PERFIL</Text>
                <Image source={{ uri: user }} style={styles.user} />
                <Text style={styles.textInf}>Cédula:</Text>
                <Text style={styles.textInf}>Nombres y Apellidos:</Text>
                <Text style={styles.textInf}>Usuario:</Text>
                <Text style={styles.textInf}>Correo:</Text>
                <TouchableOpacity style={styles.button} onPress={handleOut}>
                    <Text style={styles.textButton}>
                        {cerrarIcon} Cerrar sesión
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        alignItems: 'center',
        backgroundColor: '#DEE1E6',
        marginTop: 35,
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 35,
        borderRadius: 10
    },
    text: {
        marginTop: 25,
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textInf: {
        marginTop: 20,
        marginLeft: -45,
        color: 'black',
        fontSize: 15,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    user: {
        marginTop: 30,
        width: 180,
        height: 150, // Ajusta la altura deseada para la imagen
    },
    button: {
        marginTop: 50,
        borderWidth: 1,
        borderColor: '#fd7858',
        backgroundColor: '#fd7858',
        padding: 10,
        borderRadius: 7,
    },
    textButton: {
        icon: 'account-cog',
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
    },
    safeArea: {
        flex: 1,
        backgroundColor: 'white', // Cambia el color del fondo según el tema de tu app
      },
})

export default Configuration;