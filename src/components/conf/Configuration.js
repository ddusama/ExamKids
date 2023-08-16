import React, { useContext } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from "../../context/AuthContext";

const Configuration = () => {
    const user =
        'https://i.postimg.cc/KYbfVx3p/png-transparent-computer-icons-user-encapsulated-postscript-others-miscellaneous-orange-user-profile.png';
    const cerrarIcon = <Icon name='arrow-left' size={20} color="white" />;

    const navigation = useNavigation();
    const { logout, userInfo } = useContext(AuthContext)

    const handleOut = () => {
        logout()
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View>
                <View style={styles.container}>
                    <View >
                        <Text style={styles.text}>PERFIL</Text>
                    </View>
                    <View style={styles.container1}>
                        <Image source={{ uri: user }} style={styles.user} />
                    </View>
                    <View style={{ flexDirection: "column", alignItems: "center" }}>
                        <Pressable style={styles.RectangleShapeView}>
                            <Text style={styles.headtText}>Cédula</Text>
                            <Text style={styles.SubjectText}>{userInfo.cedula}</Text>
                        </Pressable>
                        <Pressable style={styles.RectangleShapeView}>
                            <Text style={styles.headtText}>Nombres y Apellidos</Text>
                            <Text style={styles.SubjectText}>{userInfo.name}</Text>
                        </Pressable>
                        <Pressable style={styles.RectangleShapeView}>
                            <Text style={styles.headtText}>Email</Text>
                            <Text style={styles.SubjectText}>{userInfo.sub}</Text>
                        </Pressable>
                        <TouchableOpacity style={styles.button} onPress={handleOut}>
                            <Text style={styles.textButton}>
                                Cerrar sesión
                            </Text>
                            
                        </TouchableOpacity>
                        <Text></Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DEE1E6',
        marginTop: 35,
        marginLeft: 25,
        marginRight: 25,
        marginBottom:35,
        borderRadius: 10
    },
    container1: {
        alignItems:'center'
        
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
        alignItems: 'center',
        marginTop: 20,
        width: 180,
        height: 150, // Ajusta la altura deseada para la imagen
    },
    button: {
        marginTop: 20,
        borderColor: '=',
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
        backgroundColor: 'white', // Cambia el color del fondo según el tema de tu app
    },
    RectangleShapeView: {
        marginTop: 20,
        width: "80%",
        height: 80,
        backgroundColor: "white",
        color: "black",
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 1,
        elevation: 3
    },
    headtText: {
        fontFamily: "Helvetica",
        color: "grey",
        fontWeight: "600",
        float: "left",
        marginLeft: 20,
        marginTop: 10
    },
    SubjectText: {
        color: "black",
        fontWeight: "550",
        fontSize: 16,
        fontFamily: "Helvetica",
        float: "left",
        marginLeft: 20,
        marginTop: 10
    }
})

export default Configuration;