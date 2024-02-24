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


const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MealsCategories" component={CategoriesScreen} options={{
        title: 'All Categories'
      }} />
      <Drawer.Screen name="MealsOverview" component={MealsOverViewScreen} />
      <Drawer.Screen name="MealDetails" component={MealDetailScreen} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="MealsCategories" 
          component={DrawerNavigator} 
          options={{
            headerShown: false
          }} />
          <Stack.Screen name="MealsOverview" component={MealsOverViewScreen} />
          <Stack.Screen name="MealDetails" component={MealDetailScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
