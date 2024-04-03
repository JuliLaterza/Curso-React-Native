import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import FavoriteContextProvider from './store/context/favorite-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store'; //store del redux en la raiz de la aplicacion


const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#223843',
        },
        headerTintColor: 'white',
        drawerActiveBackgroundColor: '#223843',
        drawerActiveTintColor: 'white',
        sceneContainerStyle: {
          backgroundColor: '#f2f2f2',
        },
      }}
    >
      <Drawer.Screen name="MealsCategories" component={CategoriesScreen} options={{
        title: 'Categorias',
        drawerIcon: ({ focused, size }) => ( <Ionicons name="list" size={size} color={focused ? 'white' : 'black'} />)
      }} />
      <Drawer.Screen name="Favoritos" component={FavoritesScreen} options={{
        drawerIcon: ({ focused, size }) => ( <Ionicons name="star" size={size} color={focused ? 'white' : 'black'} />)
      }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/*<FavoriteContextProvider>*/}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator options={{
            statusbar: {
              backgroundColor: 'white',
            }
          }}>
            <Stack.Screen 
            name="Home" 
            component={DrawerNavigator} 
            options={{
              headerShown: false
            }} />
            <Stack.Screen name="MealsOverview" component={MealsOverViewScreen} />
            <Stack.Screen name="MealDetails" component={MealDetailScreen} />

          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/*</FavoriteContextProvider>*/}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
