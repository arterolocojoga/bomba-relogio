import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CustomCard(props:{titulo:string, corFundo:string, onPress:()=>void}) {
    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.card, { backgroundColor: props.corFundo}]}>
            <Text style={styles.cardText}>{props.titulo}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
    backgroundColor: '#fff', 
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 10, 
    borderWidth: 1, 
    borderColor: '#ddd', 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2}, 
    shadowOpacity: 0.1, 
    shadowRadius: 5, 
    elevation: 3, 
    },
    cardText: {
    fontSize: 16, 
    color: '#333', 
    },
    header:{
    backgroundColor:'blue',
    height: 40,
    },
    textinho:{
    color: "lightgreen",
    fontSize: 20,
    }
})