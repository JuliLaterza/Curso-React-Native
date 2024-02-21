import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import { Ionicons } from '@expo/vector-icons';



const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='User' screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerActiveTintColor: 'red',
        drawerInactiveTintColor: 'blue',
        drawerActiveBackgroundColor: 'yellow',
        drawerInactiveBackgroundColor: 'green',
        drawerLabelStyle: {
          fontSize: 24,
          fontWeight: 'bold',
        },
        drawerStyle: {
          backgroundColor: 'lightgrey',
          width: 200,
        }
      }} >
        <Drawer.Screen name="Welcome" component={WelcomeScreen}/>
        <Drawer.Screen name="User" component={UserScreen} />
      </Drawer.Navigator>


    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
