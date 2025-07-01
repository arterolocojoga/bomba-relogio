import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import FormScreen from './screens/AddTask';

const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
         name="Home"
         component={HomeScreen}
         options={{ title: 'Tela Principal', headerStyle: { backgroundColor: '#007bff'},
         headerTintColor: '#fff', headerLeft: () => null}}
        />
        <Stack.Screen 
         name="Details"
         component={DetailsScreen}
         options={{ title: 'Detalhes', headerStyle: { backgroundColor: '#ffd700'},
         headerTintColor: '#fff', headerLeft: () => null}} 
        />
        <Stack.Screen 
         name="Form"
         component={FormScreen}
         options={{ title: 'Formulario', headerStyle: { backgroundColor: '#28a745'},
         headerTintColor: '#fff', headerLeft: () => null}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}