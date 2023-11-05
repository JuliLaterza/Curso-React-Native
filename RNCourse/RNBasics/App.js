import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [ModalVisible, setModalVisible] = useState(false);
  const [courseGoals, setCourserGoals] = useState([]);

  function startModalHandler() {
    setModalVisible(true);
  }

  function endModalHandler() {
    setModalVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourserGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() }]);
    setModalVisible(false); // Cuando toquemos el boton de agregar, se cierra el modal.
  };

  function deleteGoalHandler(id) {
    setCourserGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" onPress={startModalHandler} />
      <GoalInput onAddGoal={addGoalHandler} visible = {ModalVisible} onCancel = {endModalHandler}/>

      <View style= {styles.goalsContainer}>
        <FlatList 
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem 
              text={itemData.item.text}
              onDeleteItem={(deleteGoalHandler)} 
              id = {itemData.item.id} />
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
  goalsContainer: {
    flex:4
  }
});
