import { Text, View, } from "react-native";

function Saudacao() {
    return (
         <Text>Olá, este é meu primeiro componente!</Text>
    );
}

export default Saudacao

function Card() {
    return (
        <View style={styles.card}>
            <Text style={styles.cardText}>Este é um card!</Text>
        </View>
    );
}

export { Card }

const styles = StyleSheet.create({})