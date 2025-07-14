import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from "./customButton";
import { act } from "react";

export default function TaskCard(props: {onDelete: any, title: any, completed: any, onPress: any, onToggle: any}) {
    return (
        <View style={[styles.cardContainer, props.completed && styles.completedComtainer]}>
            <TouchableOpacity style={styles.card} onPress={props.onPress} disabled={!props.onPress}>
                <Text style={[styles.cardTitle, props.completed && styles.completedComtainer]}>
                    {props.title}
                </Text>
            </TouchableOpacity>
            <View style={styles.actions}>
                {props.onToggle && (
                    <TouchableOpacity onPress={props.onToggle} style={styles.toggleButton}>
                        <Text style={styles.toggleText}>
                            {props.completed ? <Icon name="check" size={20} color="green" /> : <Icon name="close" size={20} color="red" />}
                        </Text>
                    </TouchableOpacity>
                )}
                {isLocal && (
                    <CustomButton
                        title="Excluir"
                        onPress={props.onDelete}
                        color="#dc3545"
                        style={styles.toggleButton}
                        textStyle={styles.deleteButtonText}
                    />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    deleteButton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    deleteButtonText: {
        fontSize: 14,
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    card: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    completedComtainer: {
        backgroundColor: '#e6f3ff',
    },
    toggleButton: {
        padding: 10,
    },
    toggleText: {
        fontSize: 20,
        color: '#007bff',
    },
    completed:{
        textDecorationLine: 'line-through',
        color: '#666',
    }
});