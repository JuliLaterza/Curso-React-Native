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
      <Drawer.Navigator screenOptions={
        {headerStyle: {backgroundColor: 'lightblue'},
      drawerActiveBackgroundColor: 'lightblue',
      drawerActiveTintColor: 'navy',
      drawerInactiveTintColor: 'blue',
      headerTintColor: 'navy',
      headerTitleAlign: 'center'}
      }>
        <Drawer.Screen name="Home" component={WelcomeScreen} options={{
          drawerIcon: config => <Ionicons name="home" size={23} color="blue" />
        }}/>
        <Drawer.Screen name="Notifications" component={UserScreen} options={{
          drawerIcon: config => <Ionicons name="person" size={23} color="blue" />
        
        }}/>
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
