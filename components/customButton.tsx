import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function CustomButton({ title, onPress, color = '#007bff', style, textStyle }: any) {
    return (
        <TouchableOpacity 
         style={[styles.button, {backgroundColor: color}, style]}
         onPress={onPress}
        >
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});