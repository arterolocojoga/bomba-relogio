import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert } from 'react-native';
import Saudacao from './treco';
import { Card } from './treco';

export default function App() {
  const handleButtonPress = () => {
    Alert.alert('Botão Pressionado', 'Você clicou no botão');
  }
  const handleTouchablePress = () => {
    Alert.alert('Touchable Pressionado', 'Você clicou no botão personalizado');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha Primeira Tela Interativa</Text>
      <Image
       source={{ uri: 'https://reactnative.dev/img/logo-og.png'}}
       style={styles.image}
      />
      <Button title='Clique Aqui' onPress={handleButtonPress} />
      <TouchableOpacity style={styles.customButton} onPress={handleTouchablePress}>
        <Text style={styles.buttonText}>Botão Personalizado</Text>
      </TouchableOpacity>
      <Card/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#e6f3ff',  
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 20,
    }, 
    title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    }, 
    image: { 
    width: 100, 
    height: 100, 
    marginBottom: 20, 
    }, 
    customButton: { 
    backgroundColor: '#007bff', 
    padding: 10, 
    borderRadius: 5, 
    marginTop: 10, 
    }, 
    buttonText: { 
    color: '#fff', 
    fontSize: 16,
    },
    card: {
      color: 'white',
    },
    cardText: {
      color: 'black',
    }
}
);
