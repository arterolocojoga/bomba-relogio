import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function CustomCard(props:{Children:any}) {
    return (
        <View>
            {props.Children}
        </View>
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
    header:{
    backgroundColor:'blue',
    height: 40,
    },
    textinho:{
    color: "lightgreen",
    fontSize: 20,
    }
})