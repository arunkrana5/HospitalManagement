import * as React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Screen' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;