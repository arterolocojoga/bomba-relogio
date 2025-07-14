import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";

export default function AddTaskScreen({ navigation, route }: any) {
    const { addTask } = route.params;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleAddTask = () => {
        if (!title.trim()) {
            Alert.alert('Erro', 'O título da tarefa é obrigatório.');
            return;
        }
        addTask({ title, description });
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Titulo da Tarefa</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o Título"
                value={title}
                onChangeText={setTitle}
            />

            <Text style={styles.label}>Descrição</Text>
            <TextInput
                style={[styles.input, styles.multiline]}
                placeholder="Digite a Descrição (opcional)"
                value={description}
                onChangeText={setDescription}
                multiline
                numberOfLines={4}
            />
            <TouchableOpacity style={styles.button} onPress={handleAddTask}>
                <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#333',
    },
    input: {
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginTop: 5,
    },
    multiline: {
        height: 100,
        textAlignVertical: 'top',
    },
    button: {
        backgroundColor: '#28a745',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});