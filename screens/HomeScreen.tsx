import { StyleSheet, View, Text, FlatList, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useState, useEffect, act } from 'react';
import axios, { all } from 'axios';
import TaskCard from '../components/taskCard';
import CustomButton from '../components/customButton';
import CustomModal from '../components/customModal';

type Task = {
    id: number | string;
    title: string;
    description?: string;
    completed: boolean;
};

export default function HomeScreen({ navigation }:any) {
    const [localTasks, setLocalTasks] = useState<Task[]>([]);
    const [apiTasks, setApiTasks] = useState<Task[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);


    useEffect(() => {
        setIsLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => {
                setApiTasks(response.data);
                setIsLoading(false);
            })
            .catch(err => {
                setError('Erro ao carregar tarefas da API');
                setIsLoading(false);
            })
    }, []);

    const addTask = ({title, descripition}:any) => {
        setLocalTasks((prev) => [
            ...prev,
            { id: Date.now().toString(), title, description: descripition || '', completed: false },
        ])
    };

    const toggleTaskCompletion = (id: any) => {
        setLocalTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    }

    const allTasks = [...apiTasks, ...localTasks];

    const renderItem = ({ item }:any) => {
        const isLocal = typeof item.id === 'string';
        
        return (
            <>
                <Text style={styles.sourceText}>{!item.userId ? 'Local' : 'API'}</Text>
                <TaskCard
                    title={item.title}
                    completed={item.completed}
                    onPress={isLocal ? () => navigation.navigate('Details', { task: item }) : null}
                    onToggle={isLocal ? () => toggleTaskCompletion(item.id) : null}
                    onDelete={() => {
                        if (isLocal) {
                            setTaskToDelete(item.id);
                            setModalVisible(true);
                        }
                    }}
                />
            </>
        )
    }

    const deleteTask = (id: any) => {
        setLocalTasks((prev) => prev.filter((task) => task.id !== id));
        setModalVisible(false);
        setTaskToDelete(null);
    }

    const [filter, setFilter] = useState('all');

    const filteredTasks = allTasks.filter((task) => {
        if (filter === 'pending') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true;
    });

    return (
        <View style={styles.container}>
            <View style={styles.filterContainer}>
                <CustomButton
                    title="Todas"
                    onPress={() => setFilter('all')}
                    color={filter === 'all' ? '#007bff' : '#ddd'}
                    textStyle={{ color: filter === 'all' ? '#fff' : '#333' }}
                />
                <CustomButton
                    title="Pendentes"
                    onPress={() => setFilter('pending')}
                    color={filter === 'pending' ? '#007bff' : '#ddd'}
                    textStyle={{ color: filter === 'all' ? '#fff' : '#333' }}
                />
                <CustomButton
                    title="Concluídas"
                    onPress={() => setFilter('completed')}
                    color={filter === 'completed' ? '#007bff' : '#ddd'}
                    textStyle={{ color: filter === 'all' ? '#fff' : '#333' }}
                />
            </View>
            <Text style={styles.title}>Minha Tarefas</Text>
            <Text style={styles.counterText}>
                Tarefas: {allTasks.length} | Concluídas: {allTasks.filter((task) => task.completed).length}
            </Text>
            { isLoading ? (
                <ActivityIndicator size="large" color="#007bff" />
            ) : error ? (
                <Text style={styles.errorText}>{error}</Text>
            ) : allTasks.length === 0 ? (
                <Text style={styles.emptyText}>Nenhuma tarefa adicionada</Text>
            ) : (
                <FlatList
                    data={filteredTasks}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    style={styles.list}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
            )}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('AddTask', { addTask })}
            >
                <Text style={styles.buttonText}>Adicionar Tarefa</Text>
            </TouchableOpacity>
        </View>
     );
}

const styles = StyleSheet.create({
    sourceText: {
        fontSize: 12,
        color: '#999',
        marginTop: 5,
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    filterButton: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#ddd',
    },
    activeFilterButton: {
        backgroundColor: '#007bff',
    },
    filterText: {
        color: '#fff',
        fontSize: 14,
    },
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
        textAlign: 'center',
    },
    counterText:{
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
    emptyText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginTop: 20,
    },
    errorText: {
        fontSize: 16,
        color: '#dc3545',
        textAlign: 'center',
        marginTop: 20,
    },
    list: {
        flex: 1,
    },
    separator: {
        height: 1,
        backgroundColor: '#ddd',
        marginVertical: 5,
    },
    addbutton: {
        backgroundColor: '#28a745',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
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
    counterContainer:{
        alignItems: 'center',
        marginBottom: 20,
    },
    counterButton:{
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
    },
});