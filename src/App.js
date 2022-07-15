import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Product from './pages/Product';
import Details from './pages/Details';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductsPage" component={Product} options={{
          title:"Market",
          headerStyle:{backgroundColor:"#64b5f6"},
          headerTitleStyle:{color:"white", fontSize:20}
        }}/>
        <Stack.Screen name="DetailsPage" component={Details} options={{
          title:"Detay",
          headerStyle:{backgroundColor:"#64b5f6"},
          headerTitleStyle:{color:"white", fontSize:20},
          headerTintColor:"white"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


