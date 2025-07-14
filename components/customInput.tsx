import { StyleSheet, TextInput } from 'react-native';
export default function CustomInput({
    value,
    onChangeText,
    placeholder,
    multiline = false,
    style,
    ...props
}: any) {
    return (
        <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={[styles.input, multiline && styles.multiline, style]}
            multiline={multiline}
            {...props}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#fff',
        fontSize: 16,
        color: '#333',
        marginVertical: 10,
    },
    multiline: {
        height: 100,
        textAlignVertical: 'top',
    },
});