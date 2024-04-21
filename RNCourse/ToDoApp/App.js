//Librerias
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Archivos JS
import ManageExpense from './screens/ManageExpense';
import RecentManage from './screens/RecentManage';
import AllExpenses from './screens/AllExpenses';


const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();


function ExpenseOverview() {
  return <BottomTabs.Navigator>
    <BottomTabs.Screen name="RecentManage" component={RecentManage} />
    <BottomTabs.Screen name="AllExpenses" component={AllExpenses} />
  </BottomTabs.Navigator>
}


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ExpenseOverview" component={ExpenseOverview} /> 
          <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


