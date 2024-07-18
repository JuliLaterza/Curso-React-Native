//Librerias
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

//Archivos JS
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/style';
import IconButton from './components/UI/IconButton';

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();


function ExpenseOverview() { //Este es el componente principal de la BottomTab. Cada screen es un cosito.
  return (
  <BottomTabs.Navigator 
    screenOptions={ ({ navigation }) => ( {
    headerStyle: {backgroundColor: GlobalStyles.colors.celes_claro},
    headerTintColor: 'black',
    tabBarStyle: {backgroundColor: GlobalStyles.colors.celes_claro},
    tabBarActiveTintColor: GlobalStyles.colors.celes_oscu,
    headerRight: ({tintColor}) => (
      <IconButton icon="add" size = {24} color={tintColor} onPress={() => {
          navigation.navigate('ManageExpense');
      }}  />),
  })}
  >
    <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses} 
      options={{
      title: 'Recent Expenses',
      tabBarLabel: 'Recent',
      tabBarIcon: ({color, size}) => 
      (<Ionicons name="hourglass" color={color} size={size}/>) 
      }}
    />
    <BottomTabs.Screen name="AllExpenses" component={AllExpenses}
    options={{
      title: 'All Expenses',
      tabBarLabel: 'All Expenses',
      tabBarIcon: ({color, size}) => 
      (<Ionicons name="calendar" color={color} size={size} />)
      }} />
  </BottomTabs.Navigator>
  )
}


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: GlobalStyles.colors.celes_claro},
          headerTintColor: GlobalStyles.colors.azul
        }} >
          <Stack.Screen 
            name="ExpenseOverview" 
            component={ExpenseOverview} 
            options={{ headerShown: false }} /> 

          <Stack.Screen name="ManageExpense" component={ManageExpense} options={{headerShown: true}} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


