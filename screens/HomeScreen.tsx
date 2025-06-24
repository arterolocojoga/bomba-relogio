import { StyleSheet, View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import {DATA} from './AddTask'
import CustomCard from '../CustomCard';


export default function HomeScreen({ navigation }:any) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count === 10) {
            Alert.alert('Parabéns!', 'você atingiu 10 cliques')
        }else if (count === 0){
            Alert.alert('resetado', 'o contador foi zerado')
        }
    }, [count])
    
    const renderItem = ({ item }: any) => (
        <CustomCard tile=''>
        <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Details', {item})}
        >
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
        </TouchableOpacity>
        </CustomCard>
    )

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Itens</Text>
            <View style={styles.counterContainer}>
                <Text style={styles.counterText}>contador: {count}</Text>
                <TouchableOpacity
                    style={styles.counterButton}
                    onPress={() => setCount((prev) => prev + 1)}
                >
                    <Text style={styles.buttonText}>incrementar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.counterButton}
                    onPress={() => setCount((prev) => Math.max(0, prev - 1))}
                >
                    <Text style={styles.buttonText}>decrementar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.counterButton, {backgroundColor: '#dc3545'}]}
                    onPress={() => setCount(0)}
                >
                    <Text style={styles.buttonText}>resetar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: '#28a745' }]}
                    onPress={() => navigation.navigate('Form')}
                >
                    <Text style={styles.buttonText}>addtask</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: '#28a745' }]}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <Text style={styles.buttonText}>Ir para Perfil</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.list}
            />
            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#28a745' }]}
                onPress={() => navigation.navigate('Profile')}
            >
                <Text style={styles.buttonText}>Ir para Perfil</Text>
            </TouchableOpacity>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        textAlign: 'center',
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
        alignItems: 'center',
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