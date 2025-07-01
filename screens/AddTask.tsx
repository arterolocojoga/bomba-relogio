import { StyleSheet, View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { TextInput } from 'react-native-gesture-handler';

export let DATA: {[key: string]: any}[] = [
    
]

export default function FormScreen({ navigation }:any) {
    const [titulo, setTitulo] = useState('');
    const [desc, setDesc] = useState('');
    const [ID, setId] = useState('');


    useEffect(() => {
        if (titulo.length > 0) {
        }
    }, [titulo]);

    useEffect(() => {console.log('home')}, [])

    const handleSubmit = () => {
        if (titulo.trim()) {
            const newid = setId(ID+1)
            DATA.push({id: newid, title: titulo, description: desc});
            navigation.navigate('Home');
        }else {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
        }
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Formulário</Text>
            <TextInput
                style={styles.input}
                placeholder='Digite o titulo da tarefa'
                value={titulo}
                onChangeText={setTitulo}
            />
            <TextInput
                style={styles.input}
                placeholder='Digite a descrição'
                value={desc}
                onChangeText={setDesc}
            />
            <TouchableOpacity style={[styles.button, {backgroundColor: '#28a745'}]} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Enviar</Text>
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
});