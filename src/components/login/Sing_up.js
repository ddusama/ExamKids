import React, {useContext} from "react";
import {Formik} from "formik";
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Image, StyleSheet, View, Text,
    TextInput, TouchableOpacity,
    SafeAreaView, KeyboardAvoidingView,
    Platform
} from 'react-native';
import * as yup from "yup";
import {validateCedula} from "../../utils/validators";
import {AuthContext} from "../../context/AuthContext";
import {Input} from "@rneui/themed";

const signUpSchema = yup.object({
    email: yup.string()
        .email('Invalid Email')
        .required('Email is required'),
    password: yup.string()
        .min(8, 'Password is too short')
        .required('Password is required'),
    cedula: yup.string()
        .required('Cedula is required')
        .test("validate-cedula", "Verificar Cedula", c => validateCedula(c))
        .length(10),
    name: yup.string()
        .required()
})
const Sing_up = () => {
    const logo = "https://i.postimg.cc/Zn9ScShf/logo.png";
    const navigation = useNavigation();
    const registrar = <Icon name='check' size={20} color="white"/>;
    const {signUp} = useContext(AuthContext)

    const handleSignIn = (values) => {
        signUp(values)
    };


    return (
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === "ios" ? "padding" : "height"} // Ajustar automáticamente para el teclado en iOS, desplazar en Android
        >
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <View style={{flexDirection:'column',alignItems:'center'}}>
                        <Text style={styles.text}>REGISTRO</Text>
                        <Image source={{uri: logo}} style={styles.logo}/>
                    </View>
                    <View>
                        <Formik initialValues={{cedula: '', name: '', email: '', password: ''}}
                                onSubmit={(values, actions) => {
                                    actions.resetForm()
                                    handleSignIn(values)
                                }}
                                validationSchema={signUpSchema}>
                            {({
                                  handleChange, values,
                                  handleSubmit, handleBlur,
                                  errors, touched
                              }) => (
                                <View>


                                    <Input placeholder={'Cedula'}
                                           leftIcon={{type: 'font-awesome', name: 'address-card'}}
                                           value={values.cedula}
                                           onChangeText={handleChange('cedula')}
                                           onBlur={handleBlur('cedula')}
                                           errorMessage={touched.cedula && errors.cedula}
                                           autoCapitalize="none"
                                    />
                                    <Input placeholder={'Nombres y Apellidos'}
                                           leftIcon={{type: 'font-awesome', name: 'user'}}
                                           value={values.name}
                                           onChangeText={handleChange('name')}
                                           onBlur={handleBlur('name')}
                                           errorMessage={touched.name && errors.name}
                                           autoCapitalize="none"
                                    />
                                    <Input placeholder={'Corrreo institucional'}
                                           leftIcon={{type: 'font-awesome', name: 'envelope'}}
                                           value={values.email}
                                           onChangeText={handleChange('email')}
                                           onBlur={handleBlur('email')}
                                           errorMessage={touched.email && errors.email}
                                           autoCapitalize="none"
                                    />

                                    <Input placeholder={'Password'}
                                           leftIcon={{type: 'font-awesome', name: 'key'}}
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
                                        <Text style={styles.loginButtonText}>{registrar} Registrarse</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                            }
                        </Formik>
                        <TouchableOpacity onPress={() => {
                            navigation.goBack()
                        }}>
                            <Text style={styles.signupLink}>Regresar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
        ;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        marginBottom: -120
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

export default Sing_up;