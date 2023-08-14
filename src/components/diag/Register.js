import * as yup from "yup";
import {Formik} from "formik";
import {Dialog, Input, Switch} from '@rneui/themed';
import React, {useState} from "react";
import * as ImagePicker from 'expo-image-picker';
import axiosClient from "../../config/axiosConfig";
import {validateCedula} from "../../utils/validators";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Buffer} from "buffer";
import * as FileSystem from 'expo-file-system';

import {
    Button,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'

const Register = () => {
    const analizar = <Icon name='check' size={20} color="white"/>;
    const [image, setImage] = useState(null)
    const [visible, setVisible] = useState(false)
    const [diagnostic, setDiagnostic] = useState(null)
    const [loading, setLoading] = useState(false)
    const cerrarIcon = <Icon name='image' size={100} color="#fd7858"/>;
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync();
        if (!result.canceled) {
            setImage(result.assets[0]);
        }
    }

    const handleSignIn = async (values) => {
        if (image === null) {
            return
        }
        setDiagnostic(null)
        const data = new FormData();
        try {
            const imageFile = await FileSystem.readAsStringAsync(image.uri, {
                encoding: FileSystem.EncodingType.Base64,
            });

            data.append('image', {
                uri: image.uri,
                type: 'image/jpeg',
                name: 'image.jpg',
                data: imageFile,
            });

            // const pop = image.uri.split('data:image/jpeg;base64,').pop();
            // console.log(pop)
            // const buffer = Buffer.from(pop, "base64");
            // const blob = new Blob([buffer], {type: 'image/jpeg'})
            // data.append('image', blob, `image.jpeg`)
            for (const key in values) {
                data.append(key, values[key])
            }
            console.log(data)
            setLoading(true)
            setVisible(true)
            const response = await axiosClient.post('/api/predict', data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },

            })
            setDiagnostic(response.data)
            setLoading(false)
        } catch (e) {
            setLoading(false)
            setVisible(false)
            console.error(e)
        }
        setImage(null)
    };

    const registerSchema = yup.object({
        cedula: yup.string()
            .required('Cedula is required')
            .test("validate-cedula", "Verificar Cedula", c => validateCedula(c))
            .length(10),
        nombre: yup.string()
            .required(),
        edad: yup.number()
            .moreThan(0)
            .lessThan(120)
            .required(),
        temperatura: yup.number()
            .required()
            .test('decimal', 'Must be 2 decimal places',
                value => (value + "").match(/^\d+(\.\d{2})?$/),
            )
    })
    const registerInitialValues = {
        cedula: '',
        nombre: '',
        edad: '',
        temperatura: '',
        dolor_cabeza: false,
        conjuntivitis: false,
        malestar_general: false,
        ganglios_hinchados: false,
        tos: false,
        moqueo: false,
        dolor_garganta: false,
        diarrea: false,
        vomito: false,
        nauseas: false,
        comenzon: false,
        perdida_apetito: false,
        dolor_tragar: false,
        hinchazon: false,
        hinchazon_boca: false,
        dolor_abdominal: false,
        escalofrio: false,
        perdida_gusto: false,
        dolor_dentadura: false,
        cara: false,
        torso: false,
        cabeza: false,
        extremidades_superiores: false,
        extremidades_inferiores: false,
        genitales: false,
        manos: false,
        boca: false,
        pies: false
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.title}>REGISTRO SÍNTOMAS</Text>
                    </View>

                    <View>
                        <Text style={styles.text}>Datos paciente:</Text>

                        <Formik initialValues={registerInitialValues} onSubmit={(values, actions) => {
                            actions.resetForm()
                            handleSignIn(values)
                        }}
                                validationSchema={registerSchema}
                        >
                            {({
                                  handleChange, values,
                                  handleSubmit, handleBlur,
                                  errors, touched, setFieldValue
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
                                           value={values.nombre}
                                           onChangeText={handleChange('nombre')}
                                           onBlur={handleBlur('nombre')}
                                           errorMessage={touched.nombre && errors.nombre}
                                           autoCapitalize="none"
                                    />

                                    <Input placeholder={'Edad'}
                                           leftIcon={{type: 'font-awesome', name: 'hashtag'}}
                                           value={values.edad}
                                           onChangeText={handleChange('edad')}
                                           onBlur={handleBlur('edad')}
                                           errorMessage={touched.edad && errors.edad}
                                           autoCapitalize="none"
                                           keyboardType={'numeric'}
                                    />


                                    <Text style={styles.text}>Seleccinar imagen:</Text>
                                    <View style={{flexDirection: 'column', alignItems: "center"}}>
                                        <TouchableOpacity onPress={pickImage}>
                                            {!image && cerrarIcon}
                                            {image &&
                                                <Image source={{uri: image.uri}} style={{
                                                    width: 150,
                                                    height: 150,
                                                    borderWidth: 4,
                                                    borderColor: '#fd7858'
                                                }}/>}
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={styles.text}>Síntomas:</Text>
                                    <Input placeholder={'Temperatura'}
                                           leftIcon={{type: 'font-awesome', name: 'arrow-up'}}
                                           value={values.temperatura}
                                           onChangeText={handleChange('temperatura')}
                                           onBlur={handleBlur('temperatura')}
                                           errorMessage={touched.temperatura && errors.temperatura}
                                           autoCapitalize="none"
                                           keyboardType={'numeric'}
                                    />

                                    <View style={styles.switch}>
                                        <Text style={styles.textInf}>Dolor cabeza</Text>
                                        <Switch value={values.dolor_cabeza}
                                                onValueChange={(v) => setFieldValue('dolor_cabeza', v)}
                                                color={'#fd7858'}
                                        />
                                    </View>
                                    <View style={styles.switch}>
                                        <Text style={styles.textInf}>Conjuntivitis</Text>
                                        <Switch value={values.conjuntivitis} color={'#fd7858'}
                                                onValueChange={(v) => setFieldValue('conjuntivitis', v)}
                                        />
                                    </View>
                                    <View style={styles.switch}>
                                        <Text style={styles.textInf}>Malestar general</Text>
                                        <Switch value={values.malestar_general} color={'#fd7858'}
                                                onValueChange={(v) => setFieldValue('malestar_general', v)}
                                        />
                                    </View>
                                    <View style={styles.switch}>
                                        <Text style={styles.textInf}>Glángleos hinchados</Text>
                                        <Switch value={values.ganglios_hinchados} color={'#fd7858'}
                                                onValueChange={(v) => setFieldValue('ganglios_hinchados', v)}
                                        />
                                    </View>
                                    <View style={styles.switch}>
                                        <Text style={styles.textInf}>Tos</Text>
                                        <Switch value={values.tos} color={'#fd7858'}
                                                onValueChange={(v) => setFieldValue('tos', v)}
                                        />
                                    </View>
                                    <View style={styles.switch}>
                                        <Text style={styles.textInf}>Moqueo</Text>
                                        <Switch value={values.moqueo} color={'#fd7858'}
                                                onValueChange={(v) => setFieldValue('moqueo', v)}
                                        />
                                    </View>
                                    <View style={styles.switch}>
                                        <Text style={styles.textInf}>Dolor garganta</Text>
                                        <Switch value={values.dolor_garganta} color={'#fd7858'}
                                                onValueChange={(v) => setFieldValue('dolor_garganta', v)}
                                        />
                                    </View>
                                    <View style={styles.switch}>
                                        <Text style={styles.textInf}>Diarrea</Text>
                                        <Switch value={values.diarrea} color={'#fd7858'}
                                                onValueChange={(v) => setFieldValue('diarrea', v)}
                                        />
                                    </View>
                                    <View style={styles.switch}>
                                        <Text style={styles.textInf}>Vómito</Text>
                                        <Switch value={values.vomito} color={'#fd7858'}
                                                onValueChange={(v) => setFieldValue('vomito', v)}
                                        />
                                    </View>
                                    <View style={styles.switch}>
                                        <Text style={styles.textInf}>Náuseas</Text>
                                        <Switch value={values.nauseas} color={'#fd7858'}
                                                onValueChange={(v) => setFieldValue('nauseas', v)}
                                        />
                                    </View>
                                    <View style={styles.switch}>
                                        <Text style={styles.textInf}>Comezón</Text>
                                        <Switch value={values.comenzon} color={'#fd7858'}
                                                onValueChange={(v) => setFieldValue('comenzon', v)}

                                        />
                                    </View>
                                    <View style={styles.switch}>
                                        <Text style={styles.textInf}>Pérdida de apetito</Text>
                                        <Switch value={values.perdida_apetito} color={'#fd7858'}
                                                onValueChange={(v) => setFieldValue('perdida_apetito', v)}
                                        />
                                    </View>
                                    <View style={styles.switch}>
                                        <Text style={styles.textInf}>Dolor al tragar</Text>
                                        <Switch value={values.dolor_tragar} color={'#fd7858'}
                                                onValueChange={(v) => setFieldValue('dolor_tragar', v)}
                                        />
                                    </View>
                                    <View style={styles.switch}>
                                        <Text style={styles.textInf}>Hinchazón</Text>
                                        <Switch value={values.hinchazon} color={'#fd7858'}
                                                onValueChange={(v) => setFieldValue('hinchazon', v)}
                                        />
                                    </View>
                                    <View style={styles.switch}>
                                        <Text style={styles.textInf}>Hinchazón boca</Text>
                                        <Switch value={values.hinchazon_boca} color={'#fd7858'}
                                                onValueChange={(v) => setFieldValue('hinchazon_boca', v)}
                                        />
                                    </View>
                                    <View style={styles.switch}>
                                        <Text style={styles.textInf}>Dolor abdomen</Text>
                                        <Switch value={values.dolor_abdominal} color={'#fd7858'}
                                                onValueChange={(v) => setFieldValue('dolor_abdominal', v)}
                                        />
                                    </View>
                                    <View style={styles.switch}>
                                        <Text style={styles.textInf}>Escalofrío</Text>
                                        <Switch value={values.escalofrio} color={'#fd7858'}
                                                onValueChange={(v) => setFieldValue('escalofrio', v)}
                                        />
                                    </View>
                                    <View style={styles.switch}>
                                        <Text style={styles.textInf}>Pérdida del gusto</Text>
                                        <Switch value={values.perdida_gusto} color={'#fd7858'}
                                                onValueChange={(v) => setFieldValue('perdida_gusto', v)}
                                        />
                                    </View>
                                    <View style={styles.switch}>
                                        <Text style={styles.textInf}>Dolor dentadura</Text>
                                        <Switch value={values.dolor_dentadura} color={'#fd7858'}
                                                onValueChange={(v) => setFieldValue('dolor_dentadura', v)}
                                        />
                                    </View>

                                    <Text style={styles.text}>Ubicación lesión:</Text>
                                    <View style={styles.switch}>
                                        <Text style={styles.textInf}>Cara</Text>
                                        <Switch value={values.cara} color={'#fd7858'}
                                                onValueChange={(v) => setFieldValue('cara', v)}
                                        />
                                    </View>
                                    <View style={styles.switch}>
                                        <Text style={styles.textInf}>Torso</Text>
                                        <Switch value={values.torso} color={'#fd7858'}
                                                onValueChange={(v) => setFieldValue('torso', v)}
                                        />
                                    </View>
                                    <View style={styles.switch}>
                                        <Text style={styles.textInf}>Cabeza</Text>
                                        <Switch value={values.cabeza} color={'#fd7858'}
                                                onValueChange={(v) => setFieldValue('cabeza', v)}
                                        />
                                    </View>
                                    <View style={styles.switch}>
                                        <Text style={styles.textInf}>Extremidades superiores</Text>
                                        <Switch value={values.extremidades_superiores} color={'#fd7858'}
                                                onValueChange={(v) => setFieldValue('extremidades_superiores', v)}
                                        />
                                    </View>
                                    <View style={styles.switch}>
                                        <Text style={styles.textInf}>Extremidades inferiores</Text>
                                        <Switch value={values.extremidades_inferiores} color={'#fd7858'}
                                                onValueChange={(v) => setFieldValue('extremidades_inferiores', v)}
                                        />
                                    </View>
                                    <View style={styles.switch}>
                                        <Text style={styles.textInf}>Genitales</Text>
                                        <Switch value={values.genitales} color={'#fd7858'}
                                                onValueChange={(v) => setFieldValue('genitales', v)}
                                        />
                                    </View>
                                    <View style={styles.switch}>
                                        <Text style={styles.textInf}>Manos</Text>
                                        <Switch value={values.manos} color={'#fd7858'}
                                                onValueChange={(v) => setFieldValue('manos', v)}
                                        />
                                    </View>
                                    <View style={styles.switch}>
                                        <Text style={styles.textInf}>Boca</Text>
                                        <Switch value={values.boca} color={'#fd7858'}
                                                onValueChange={(v) => setFieldValue('boca', v)}
                                        />
                                    </View>
                                    <View style={styles.switch}>
                                        <Text style={styles.textInf}>Pies</Text>
                                        <Switch value={values.pies} color={'#fd7858'}
                                                onValueChange={(v) => setFieldValue('pies', v)}
                                        />
                                    </View>
                                    <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
                                        <Text style={styles.loginButtonText}>{analizar} Analizar</Text>
                                    </TouchableOpacity>
                                </View>)}
                        </Formik>
                    </View>
                </View>
            </ScrollView>
            <Dialog isVisible={visible}
                    onBackdropPress={() => {
                        if (loading) return
                        setVisible(!visible)
                    }}>
                <Dialog.Title title={'Diagnostico'}/>
                {loading && <Dialog.Loading/>}
                {diagnostic && (
                    <View>
                        <Text>Cedula: {diagnostic.cedula}</Text>
                        <Text>Nombre: {diagnostic.nombre}</Text>
                        <Text>Edad: {diagnostic.edad}</Text>
                        <Text>lesion: {diagnostic.lesion}</Text>
                        <Text>enfermedad: {diagnostic.enfermedad}</Text>
                        <Text>tratamiento: {diagnostic.tratamiento}</Text>
                    </View>
                )}
            </Dialog>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
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
    switch: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 10
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'
    }
})

export default Register;