import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert } from 'react-native';
import Saudacao from './treco';
import { CustomCard } from './treco';

function Card(props:{texto:string}) {
    return (
        <View style={styles.card}>
            <Text style={styles.cardText}>{props.texto}</Text>
        </View>
    );
}
function Header(props:{texto:string}){
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{props.texto}</Text>
        </View>
    )
}

export default function App() {
  const handleCardPress = () => {
    Alert.alert('Card clicado', 'Você tocou no card');
  };

  return (
    <View style={styles.container}>
      <Header texto="uma distribuição brasileira"/>

      <View style={styles.content}>
        
        <Image
        source={{ uri: 'https://reactnative.dev/img/logo-og.png'}}
        style={styles.image}
        />
        <Text style={styles.cardText}>explorando estilos no react native</Text>
      </View>

      <View>
      <TouchableOpacity onPress={handleCardPress}>
        <Card texto='card 1: estilizado com flex'/>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCardPress}>
        <Card texto='card 2: layouts responsivos'/>
      </TouchableOpacity>
      </View>
      <View style={styles.cardSection}>
      <CustomCard titulo='Card 1: Estilização' corFundo='#ffebcd' onPress={()=> Alert.alert('Custom Card', 'Card 1 clicado!')}/>
      <CustomCard titulo='Card 2: layout' corFundo='#e6e6fa' onPress={()=> Alert.alert('Custom Card', 'Card 2 clicado!')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
container: { 
flex: 1, 
backgroundColor: '#f5f5f5', 
}, 
header: { 
backgroundColor: '#007bff', 
padding: 20, 
alignItems: 'center', 
}, 
headerText: { 
fontSize: 24, 
fontWeight: 'bold', 
color: '#fff',
},
content: { 
flex: 1, 
alignItems: 'center', 
justifyContent: 'center', 
padding: 20, 
}, 
image: { 
width: 120, 
height: 120, 
marginBottom: 20, 
},
subtitle: { 
fontSize: 18, 
color: '#333', 
textAlign: 'center', 
}, 
cardSection: { 
padding: 20,
flexDirection: 'column'
}, 
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
}
);
