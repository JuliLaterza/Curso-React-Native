import { TextInput, Button ,View, StyleSheet } from "react-native";
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Your course Goal"
                style={styles.textInput}
                onChangeText={goalInputHandler}
            />
            <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
    );
}

export default GoalInput;


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        botderBottomColor: '#ccc'
      },
      textInput: {
        width: '70%',
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 8,
        marginRight:8
      }
});