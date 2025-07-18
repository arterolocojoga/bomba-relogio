import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import ScrollScreen from './screens/ScrollView';
import FormScreen from './screens/FormScreen';
import AddTaskScreen from './screens/AddTaskScreen';

const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
         name="Home"
         component={HomeScreen}
         options={{ title: 'Tela Principal', headerStyle: { backgroundColor: '#007bff'},
         headerTintColor: '#fff' }}
        />
        <Stack.Screen 
         name="AddTask"
         component={AddTaskScreen}
         options={{ title: 'Adicionar Tarefa', headerStyle: { backgroundColor: '#28a745'},
         headerTintColor: '#fff' }} 
        />
        <Stack.Screen 
         name="Details"
         component={DetailsScreen}
         options={{ title: 'Detalhes', headerStyle: { backgroundColor: '#dc3545'},
         headerTintColor: '#fff' }} 
        />
        <Stack.Screen 
         name="Profile"
         component={ProfileScreen}
         options={{ title: 'Meu Perfil', headerStyle: { backgroundColor: '#17a2b8'},
         headerTintColor: '#fff' }} 
        />
        <Stack.Screen 
         name="Scroll"
         component={ScrollScreen}
         options={{ title: 'ScrollView', headerStyle: { backgroundColor: '#28a745'},
         headerTintColor: '#fff' }} 
        />
        <Stack.Screen 
         name="Form"
         component={FormScreen}
         options={{ title: 'Formulario', headerStyle: { backgroundColor: '#007bff'},
         headerTintColor: '#fff' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}