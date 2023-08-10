import React from 'react'
import { Image, StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native'

const Information = () => {
    const sintomas = "https://i.postimg.cc/JzmV3y5G/c1743e96-c54b-4d72-b921-379ceb24771f.png";
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView >
                <View style={styles.container}> 
                    <View>
                        <Text style={styles.title}>INFORMACIÓN ENFERMEDADES</Text>
                        <Image source={{ uri: sintomas }} style={styles.sintomas} />
                    </View>

                    <View>
                        <Text style={styles.text}>Varicela</Text>
                        <Text style={styles.textInf}>Enfermedad viral altamente contagiosa causada por el virus varicela-zóster. Se caracteriza por la aparición de ampollas pruriginosas en todo el cuerpo. La transmisión ocurre a través del contacto directo con las lesiones de la piel o mediante el contacto con gotas respiratorias de una persona infectada. Para prevenir su propagación, es esencial mantener a los pacientes en cuarentena hasta que todas las ampollas hayan formado costras y evitar el contacto cercano con personas no inmunes.</Text>
                    </View>

                    <View>
                        <Text style={styles.text}>Moluscos Contagiosos</Text>
                        <Text style={styles.textInf}>Son una infección viral de la piel que se manifiesta como pequeñas protuberancias con una característica depresión en el centro. Estas lesiones son altamente contagiosas y se propagan a través del contacto directo con la piel infectada o mediante objetos contaminados. Es importante evitar rascarse las lesiones para evitar la propagación a otras partes del cuerpo. Lavar frecuentemente las manos y evitar compartir objetos personales puede reducir el riesgo de contagio.</Text>
                    </View>

                    <View>
                        <Text style={styles.text}>Tinea Cabeza</Text>
                        <Text style={styles.textInf}>También conocida como tiña capitis, es una infección fúngica del cuero cabelludo y los folículos pilosos. Es altamente contagiosa y se propaga a través del contacto directo con la piel o el cabello de una persona infectada. Para prevenir la propagación, es importante evitar compartir peines, cepillos y sombreros, y lavar la ropa y la ropa de cama regularmente.</Text>
                    </View>

                    <View>
                        <Text style={styles.text}>Herpes Labial</Text>
                        <Text style={styles.textInf}>Se caracteriza por la aparición de ampollas dolorosas alrededor de los labios o la boca. El herpes labial es altamente contagioso y se transmite a través del contacto directo con las ampollas o el fluido que contienen. Para reducir el riesgo de contagio, evita besar a personas con lesiones activas, no compartas objetos personales y mantén una buena higiene bucal.</Text>
                    </View>

                    <View>
                        <Text style={styles.text}>Kawasaki</Text>
                        <Text style={styles.textInf}>Afección poco común que afecta principalmente a niños pequeños. Aunque no es contagiosa en sí misma, su origen aún no está claro, y se investiga la posibilidad de que un agente infeccioso pueda estar involucrado en su desarrollo. Para cuidarse en este caso, es importante buscar atención médica temprana si se presentan síntomas como fiebre alta, enrojecimiento de ojos, labios o lengua hinchada, y erupciones en la piel.</Text>
                    </View>

                    <View>
                        <Text style={styles.text}>HFM (Enfermedad de Manos, Pies y Boca)</Text>
                        <Text style={styles.textInf}>Infección viral común en niños pequeños y se propaga principalmente a través del contacto directo con las secreciones respiratorias o las heces de una persona infectada. Los síntomas incluyen ampollas dolorosas en manos, pies y boca, así como fiebre y malestar general. Para prevenir la propagación, se deben tomar medidas de higiene, como lavarse las manos con frecuencia y evitar el contacto cercano con personas infectadas.</Text>
                    </View>

                    <View>
                        <Text style={styles.text}>Rubeola </Text>
                        <Text style={styles.textInf}>Enfermedad viral altamente contagiosa causada por el virus de la rubeola. Se transmite a través del contacto directo con las secreciones respiratorias de una persona infectada. Los síntomas incluyen fiebre, erupciones cutáneas y ganglios linfáticos inflamados. La mejor forma de cuidarse es vacunándose contra la rubeola, ya que la vacuna es altamente efectiva para prevenir la enfermedad.</Text>
                    </View>

                    <View>
                        <Text style={styles.text}>Sarampión </Text>
                        <Text style={styles.textInf}>Otra enfermedad viral altamente contagiosa causada por el virus del sarampión. Se transmite a través del contacto con gotitas respiratorias de una persona infectada. Los síntomas incluyen fiebre, tos, erupción cutánea y ojos rojos y acuosos. La mejor forma de protegerse contra el sarampión es mediante la vacunación.</Text>
                    </View>

                    <View>
                        <Text style={styles.text}>Roseola </Text>
                        <Text style={styles.textInf}>Es una enfermedad viral común en niños pequeños. Se caracteriza por fiebre alta seguida de una erupción rosada en el cuerpo. Aunque es contagiosa, su transmisión exacta aún no se comprende completamente. Para cuidarse, es importante evitar el contacto cercano con personas enfermas y mantener una buena higiene.</Text>
                    </View>

                    <View>
                        <Text style={styles.text}>Escarlatina </Text>
                        <Text style={styles.textInf}>Infección bacteriana causada por la bacteria Streptococcus pyogenes. Es altamente contagiosa y se propaga a través del contacto con secreciones respiratorias de personas infectadas. Los síntomas incluyen fiebre, erupción rojiza y dolor de garganta. La administración temprana de antibióticos y evitar el contacto cercano con personas enfermas puede ayudar a prevenir su propagación.</Text>
                    </View>

                    <View>
                        <Text style={styles.text}>Impétigo</Text>
                        <Text style={styles.textInf}>Es una infección bacteriana de la piel, generalmente causada por las bacterias Staphylococcus aureus o Streptococcus pyogenes. Es altamente contagioso y se transmite a través del contacto directo con las lesiones infectadas. Para prevenir la propagación, es importante mantener las lesiones cubiertas con vendajes limpios y evitar compartir objetos personales.</Text>
                    </View>

                    <View>
                        <Text style={styles.text}>Muguet </Text>
                        <Text style={styles.textInf}>También conocido como candidiasis oral, es una infección fúngica que afecta principalmente a bebés y personas con sistemas inmunológicos debilitados. Es contagioso y se transmite a través del contacto directo con las secreciones de la boca de una persona infectada. Para evitar la propagación, se deben tomar medidas higiénicas adecuadas y consultar a un médico para recibir tratamiento.</Text>
                        <Text style={styles.text}> </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {        
        alignItems: 'center',
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
        marginLeft:7,
        marginTop: 25,
        color: 'black',
        fontSize: 18,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    textInf: {
        marginLeft:7,
        marginRight: 7,
        marginTop: 10,
        color: 'black',
        fontSize: 15,
        textAlign: 'justify',
    },
    sintomas: {
        marginTop: 30,
        alignItems:'center',
        width: 320,
        height: 50, // Ajusta la altura deseada para la imagen
    },
    safeArea: {
        backgroundColor: 'white', // Cambia el color del fondo según el tema de tu app
    },
})

export default Information;