import React from 'react'
import { Image, StyleSheet, View, Text, SafeAreaView} from 'react-native'

const Diagnostic = () => {
    const enfermedad = "https://i.postimg.cc/5yBDhnN8/afe52b2b-5ccc-423d-ae6d-b4b813e3d2db.png";
    return (
        <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>DIAGNÓSTICO</Text>
                <Image source={{ uri: enfermedad }} style={styles.enfermedad} />
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
        borderRadius:10
    },
    text:{
        marginTop: 25,
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',        
    },
    enfermedad: {
        marginTop: 30,
        width: 250,
        height: 300, // Ajusta la altura deseada para la imagen
    },
    safeArea: {
        flex: 10,
        backgroundColor: 'white', // Cambia el color del fondo según el tema de tu app
      },
})

export default Diagnostic;