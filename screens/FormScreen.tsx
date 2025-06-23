import { StyleSheet, View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { TextInput } from 'react-native-gesture-handler';

export default function FormScreen({ navigation }:any) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (nome.length > 0) {
        }
    }, [nome]);

    useEffect(() => {
        console.log('FormScreen montada!');
        return () => {
            console.log('FormScreen desmontada!')
        };
    }, [])

    const handleSubmit = () => {
        if (nome.trim()) {
            navigation.navigate('Details', { mensagem: `Nome: ${nome}, Email: ${email}`});
        }else {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
        }
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Formulário</Text>
            <TextInput
                style={styles.input}
                placeholder='Digite seu nome'
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={styles.input}
                placeholder='Digite seu email'
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#dc3545'}]}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.buttonText}>Voltar para Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#dc3545'}]}
                onPress={() => navigation.navigate('Scroll')}
            >
                <Text style={styles.buttonText}>Voltar para Scroll</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    input:{
        width: '100%',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 20,
        fontSize: 16,
    },
    list: {
        flex: 1,
    },
    card:{
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    cardDescription: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    counterContainer:{
        alignItems: 'center',
        marginBottom: 20,
    },
    counterText:{
        fontSize: 18,
        color: '#333',
        marginBottom: 10,
    },
    counterButton:{
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
    },
});