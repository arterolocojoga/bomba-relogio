import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

function Saudacao() {
    return (
         <Text>Olá, este é meu primeiro componente!</Text>
    );
}

export default Saudacao

function Card(props:{texto:string}) {
    return (
        <View style={styles.card}>
            <Text style={styles.cardText}>{props.texto}</Text>
        </View>
    );
}

export { Card, Header, TaskCard }

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

function Header(props:{texto:string}){
    return (
        <View style={styles.header}>
            <Text style={styles.textinho}>{props.texto}</Text>
        </View>
    )
}

function TaskCard(props:{title:String,completed:any,onPress:any, onToggle:any, id: String | Number,}) {
    

    return (
        <TouchableOpacity style={styles.card} onPress={props.onPress}>
            <Text style={styles.cardText}>{props.title}</Text>
            
        </TouchableOpacity>
    );
}