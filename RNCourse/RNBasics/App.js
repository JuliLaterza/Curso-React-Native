import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourserGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    setCourserGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() }]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>

        <TextInput 
          style={styles.textInput}
          placeholder='Ingrese su objetivo'
          onChangeText={goalInputHandler}/>
          
        <Button title='Agregar' onPress={addGoalHandler}/>
      
      </View>
      <View style= {styles.goalsContainer}>
        <FlatList 
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.textGoal}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item,index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
 
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput:{
    borderWidth: 1,
    borderColor: '#cccccc',
    width:'70%',
    marginRight: 4,
    padding: 8
  },
  goalsContainer: {
    flex:4
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  textGoal:{
    color: 'white'
  }
});
