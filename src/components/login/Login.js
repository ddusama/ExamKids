import React, {useContext, useState} from "react";
import {
    Image, StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView,
    Platform
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from "../../context/AuthContext";
import {Formik, validateYupSchema} from "formik";
import * as yup from "yup"
import {Input} from "@rneui/themed";


const loginSchema = yup.object({
    email: yup.string()
        .email('Invalid Email')
        .required('Email is required'),
    password: yup.string()
        .min(8, 'Password is too short')
        .required('Password is required')
})

const Login = () => {
    const logo = "https://i.postimg.cc/Zn9ScShf/logo.png";
    const navigation = useNavigation();
    const ingresar = <Icon name='arrow-right' size={20} color="white"/>;
    const {login} = useContext(AuthContext)

    const handleSignIn = (values) => {
        login(values)
    };

    const handleSignUp = () => {
        navigation.navigate("Sing_up");
    };

    return (
        
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <View style={{flexDirection:'column',alignItems:'center'}}>
                        <Text style={styles.text}>BIENVENIDOS</Text>
                        <Image source={{uri: logo}} style={styles.logo}/>
                    </View>
                    <Formik initialValues={{email: '', password: ''}} onSubmit={(values, actions) => {
                        actions.resetForm()
                        handleSignIn(values)
                    }} validationSchema={loginSchema}>

                        {({
                              handleChange, values,
                              handleSubmit, handleBlur,
                              errors, touched
                          }) => (
                            <View style={styles.container1}>

                                <Input placeholder={'Email'}
                                       leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                                       value={values.email}
                                       onChangeText={handleChange('email')}
                                       onBlur={handleBlur('email')}
                                       errorMessage={touched.email && errors.email}
                                       autoCapitalize="none"
                                />
                                <Input placeholder={'Password'}
                                       leftIcon={{ type: 'font-awesome', name: 'key' }}
                                       value={values.password}
                                       onChangeText={handleChange('password')}
                                       onBlur={handleBlur('password')}
                                       errorMessage={touched.password && errors.password}
                                       secureTextEntry={true}
                                       textContentType="password"
                                       styles={{width: '100%'}}
                                       autoCapitalize="none"
                                />

                                <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
                                    <Text style={styles.loginButtonText}>{ingresar} Ingresar</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </Formik>
                    <TouchableOpacity onPress={handleSignUp}>
                        <Text style={styles.signupLink}>Crear una cuenta</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
     
    )
        ;
}

const styles = StyleSheet.create({
    container: {      
        // backgroundColor: '#DEE1E6',
        marginTop: 35,
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 35,
        borderRadius: 10
    },

    container1: {      
       marginTop: -55,
        
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
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'
    }

})

export default Login;