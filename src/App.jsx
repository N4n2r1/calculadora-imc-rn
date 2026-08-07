import { View, Text, StyleSheet, TextInput } from 'react-native'

const styleApp = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'salmon'
    },
    title: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        width: '80%',
        height: 50,
        backgroundColor: 'white',
        fontSize: 16,
        marginTop: 20,
        paddingLeft: 10
    }
})

export default function App() {
    return (
        <View style={styleApp.container}>
            <Text style={styleApp.title}>Aplicativo para calcular {"\n"} IMC</Text>
            <TextInput 
                style={styleApp.input}
                placeholder='Peso'
                keyboardType='numeric'
            />
            <TextInput 
                style={styleApp.input}
                placeholder='Altura' 
                keyboardType='numeric'
            />
        </View>
    )
}