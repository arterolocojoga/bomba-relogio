import { Text, View, StyleSheet } from "react-native";

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

export { Card, Header }

const styles = StyleSheet.create({
    card: {
    backgroundColor: '#fff', 
    padding: 15, 
    borderRadius: 10, 
    marginTop: 20, 
    borderWidth: 1, 
    borderColor: '#ccc', 
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